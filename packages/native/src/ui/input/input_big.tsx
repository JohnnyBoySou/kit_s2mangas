import { useState, forwardRef } from "react";
import { Column } from "../layout/layout"; 
import { TextInput, TextInputProps, KeyboardTypeOptions, Platform } from "react-native";
import { Label } from "../text/text";

interface InputProps extends TextInputProps {
  focused?: boolean;
  value: string;
  setValue: (value: string) => typeof value;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  mask?: "CPF" | "PHONE" | "CEP" | "NASCIMENTO";
  keyboard?: KeyboardTypeOptions;
  onSubmitEditing?: () => void;
}

interface MaskConfig {
  maskFunction: (text: string) => typeof text;
  maxLength?: number;
}

const InputBig = forwardRef<TextInput, InputProps>(
  (
    {
      focused = false,
      value,
      setValue,
      disabled,
      label,
      mask,
      placeholder,
      keyboard = "default",
      onSubmitEditing = () => {},
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState<boolean>(false);
    const handleFocus = () => {
      setFocus(true);
    };
    const handleBlur = () => {
      setFocus(false);
    };
    const handleChangeText = (text: string) => {
      const { maskFunction, maxLength } = getMaskFunction(mask);
      let maskedText = maskFunction(text);

      if (maxLength && maskedText.length > maxLength) {
        maskedText = maskedText.slice(0, maxLength);
      }

      setValue(maskedText);
    };

    return (
      <Column style={{ backgroundColor: "#101010", borderRadius: 8, borderWidth: 2, borderColor: disabled ? "#101010" : focus ? "#505050" : "#151515",}}  ph={12} pv={12} justify="center" >
        <Label size={12} spacing={-0.5}>{label}</Label>
        <TextInput
          {...props}
          style={{
            fontSize: 18,
            letterSpacing: -1,
            marginBottom: Platform.OS === "android" ? -12 : 0,
            marginTop: Platform.OS === "android" ? -2 : 2,
            fontFamily: "Font_Book",
            color: disabled ? "#ffffff90" : "#fff",
          }}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={focused}
          editable={!disabled}
          onChangeText={handleChangeText}
          value={value}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboard}
          placeholder={placeholder ?? label}
          placeholderTextColor={focus ? "#ffffff90" : "#ffffff60"}
        />
      </Column>
    );
  }
);

export default InputBig;

const getMaskFunction = (mask?: string): MaskConfig => {
  switch (mask) {
    case "CPF":
      return { maskFunction: applyCpfMask, maxLength: 14 };
    case "PHONE":
      return { maskFunction: applyPhoneMask, maxLength: 16 };
    case "CEP":
      return { maskFunction: applyCepMask, maxLength: 9 };
    case "NASCIMENTO":
      return { maskFunction: applyBirthdateMask, maxLength: 10 };
    default:
      return { maskFunction: (text: string) => text, maxLength: 0 };
  }
};

function applyCpfMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 11) // Limita a 11 dígitos
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o sexto e o sétimo dígito
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca um hífen entre o nono e o décimo dígito
}

function applyCepMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 9) // Limita a 8 dígitos
    .replace(/(\d{5})(\d)/, "$1-$2"); // Coloca um hífen entre o quinto e o sexto dígito
}

function applyPhoneMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 11) // Limita a 11 dígitos
    .replace(/(\d{2})(\d)/, "($1) $2") // Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d{5})(\d)/, "$1-$2"); // Coloca um hífen entre o quinto e o sexto dígito
}

function applyBirthdateMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 8) // Limita a 8 dígitos (DDMMYYYY)
    .replace(/(\d{2})(\d)/, "$1/$2") // Coloca uma barra entre o dia e o mês
    .replace(/(\d{2})(\d)/, "$1/$2"); // Coloca uma barra entre o mês e o ano
}