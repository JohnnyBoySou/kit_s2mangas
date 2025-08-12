import React, { useState, forwardRef } from "react";
import { Column } from "../layout/layout"; 
import { Pressable, TextInput, TextInputProps, KeyboardTypeOptions, View, Text, ViewStyle, TextStyle } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { theme } from '@s2mangas/core';

// Wrappers temporários para contornar incompatibilidade de tipos com React 19
const EyeIcon: React.FC<{ size: number; color: string }> = (props) => {
  return React.createElement(Eye as any, props);
};

const EyeOffIcon: React.FC<{ size: number; color: string }> = (props) => {
  return React.createElement(EyeOff as any, props);
};

// Interface para os props do Input
interface InputProps extends Omit<TextInputProps, 'onChangeText'> {
  value?: string;
  onChangeText?: (text: string) => typeof text;
  label?: string;
  error?: string;
  helperText?: string;
  mask?: "CPF" | "PHONE" | "CEP" | "NASCIMENTO" | "CURRENCY";
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: () => void;
  isPassword?: boolean;
  disabled?: boolean;
  focused?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
  testID?: string;
}

interface MaskConfig {
  maskFunction: (text: string) => typeof text;
  maxLength?: number;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      value = "",
      onChangeText,
      label,
      error,
      helperText,
      mask,
      keyboardType = "default",
      onSubmitEditing,
      isPassword = false,
      disabled = false,
      focused = false,
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      helperStyle,
      testID,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(focused);
    const [isSecure, setIsSecure] = useState<boolean>(isPassword);

    const handleFocus = (e: any) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: any) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const handleChangeText = (text: string) => {
      if (!onChangeText) return;
      
      const { maskFunction, maxLength } = getMaskFunction(mask);
      let maskedText = maskFunction(text);

      if (maxLength && maskedText.length > maxLength) {
        maskedText = maskedText.slice(0, maxLength);
      }

      onChangeText(maskedText);
    };

    const togglePasswordVisibility = () => {
      setIsSecure(!isSecure);
    };

    const getBorderColor = () => {
      if (disabled) return theme.color.muted;
      if (error) return theme.color.destructive;
      if (isFocused) return theme.color.primary;
      return theme.color.borderPrimary;
    };

    const getTextColor = () => {
      if (disabled) return theme.color.muted;
      return theme.color.text;
    };

    const getPlaceholderColor = () => {
      if (disabled) return theme.color.muted;
      return theme.color.text + "60";
    };

    return (
      <Column style={containerStyle}>
        {/* Label */}
        {label && (
          <Text
            style={[
              {
                fontSize: theme.size.sublabel,
                fontFamily: theme.font.medium,
                color: error ? theme.color.destructive : theme.color.label,
                marginBottom: 8,
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        )}

        {/* Input Container */}
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            {...props}
            ref={ref}
            testID={testID}
            accessible={true}
            accessibilityLabel={label || 'Input field'}
            accessibilityRole="text"
            style={[
              {
                flex: 1,
                fontSize: theme.size.label,
                fontFamily: theme.font.book,
                color: getTextColor(),
                height: 48,
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: getBorderColor(),
                backgroundColor: disabled ? theme.color.ghost : theme.color.background,
              },
              inputStyle,
            ]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus={focused}
            editable={!disabled}
            onChangeText={handleChangeText}
            value={value}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={isSecure}
            keyboardType={keyboardType}
            placeholder={props.placeholder}
            placeholderTextColor={getPlaceholderColor()}
            selectionColor={theme.color.primary}
          />

          {/* Password Toggle */}
          {isPassword && (
            <Pressable
              testID="password-toggle-button"
              accessibilityRole="button"
              accessibilityLabel={isSecure ? "Show password" : "Hide password"}
              onPress={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: 12,
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isSecure ? (
                <EyeIcon size={20} color={theme.color.text} />
              ) : (
                <EyeOffIcon size={20} color={theme.color.text} />
              )}
            </Pressable>
          )}
        </View>

        {/* Error Message */}
        {error && (
          <Text
            style={[
              {
                fontSize: theme.size.small,
                fontFamily: theme.font.book,
                color: theme.color.destructive,
                marginTop: 4,
              },
              errorStyle,
            ]}
          >
            {error}
          </Text>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <Text
            style={[
              {
                fontSize: theme.size.small,
                fontFamily: theme.font.book,
                color: theme.color.label,
                marginTop: 4,
              },
              helperStyle,
            ]}
          >
            {helperText}
          </Text>
        )}
      </Column>
    );
  }
);

Input.displayName = 'Input';

export default Input;

// Função para obter a configuração de máscara
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
    case "CURRENCY":
      return { maskFunction: applyCurrencyMask, maxLength: 20 };
    default:
      return { maskFunction: (text: string) => text, maxLength: 0 };
  }
};

// Funções de máscara
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
    .slice(0, 8) // Limita a 8 dígitos
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

function applyCurrencyMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .replace(/^0+/, "") // Remove zeros à esquerda
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") // Adiciona pontos para milhares
    .replace(/^/, "R$ "); // Adiciona prefixo R$
}