import { useRef, useEffect, forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Column } from "./layout/layout";

interface InputOTPProps extends TextInputProps {
  value: string;
  setValue: (value: string) => typeof value;
  disabled?: boolean;
  onSubmitEditing?: () => void;
}

const InputOTP = forwardRef<TextInput, InputOTPProps>(
  ({ value, setValue, disabled = false, onSubmitEditing = () => {}, ...props }) => {
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
      // Foca no primeiro campo vazio automaticamente
      const nextIndex = value.length < 4 ? value.length : 3;
      inputRefs.current[nextIndex]?.focus();
    }, [value]);

    const handleChangeText = (text: string, index: number) => {
      const clean = text.replace(/\D/g, ""); // Apenas dígitos

      if (!clean) return;

      const chars = clean.split("");

      const otpArray = value.split("");
      otpArray[index] = chars[0] || ""; // Atualiza o campo atual

      // Se o usuário colar vários caracteres
      for (let i = 1; i < chars.length && index + i < 4; i++) {
        otpArray[index + i] = chars[i] || "";
      }

      const newOtp = otpArray.join("").slice(0, 4);
      setValue(newOtp);

      // Avança para o próximo campo se possível
      const nextIndex = index + chars.length;
      if (nextIndex < 4) {
        inputRefs.current[nextIndex]?.focus();
      } else {
        inputRefs.current[3]?.blur();
        onSubmitEditing();
      }
    };

    const handleKeyPress = (e: any, index: number) => {
      if (e.nativeEvent.key === "Backspace" && !value[index]) {
        const newIndex = index - 1;
        if (newIndex >= 0) {
          const otpArray = value.split("");
          otpArray[newIndex] = "";
          setValue(otpArray.join(""));
          inputRefs.current[newIndex]?.focus();
        }
      }
    };

    return (
      <Column style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {[0, 1, 2, 3].map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            style={{
              fontSize: 32,
              fontFamily: "Font_Bold",
              color: disabled ? "#ffffff90" : "#fff",
              height: 72,
              width: 72,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: "#fff",
              textAlign: "center",
              backgroundColor: "#101010",
            }}
            value={value[index] || ""}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            editable={!disabled}
            returnKeyType={index === 3 ? "done" : "next"}
            onSubmitEditing={index === 3 ? onSubmitEditing : undefined}
            {...props}
          />
        ))}
      </Column>
    );
  }
);

export default InputOTP;
