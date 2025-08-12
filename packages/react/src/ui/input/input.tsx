import React, { useState, forwardRef } from "react";
import { theme } from "@s2mangas/core";

// Interface para os props do Input
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  onChange?: (text: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  mask?: "CPF" | "PHONE" | "CEP" | "NASCIMENTO" | "CURRENCY";
  isPassword?: boolean;
  disabled?: boolean;
  focused?: boolean;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  errorStyle?: React.CSSProperties;
  helperStyle?: React.CSSProperties;
  testID?: string;
}

interface MaskConfig {
  maskFunction: (text: string) => string;
  maxLength?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value = "",
      onChange,
      label,
      error,
      helperText,
      mask,
      type = "text",
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
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(focused);
    const [isSecure, setIsSecure] = useState<boolean>(isPassword);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;

      const { maskFunction, maxLength } = getMaskFunction(mask);
      let maskedText = maskFunction(e.target.value);

      if (maxLength && maskedText.length > maxLength) {
        maskedText = maskedText.slice(0, maxLength);
      }

      onChange(maskedText);
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
      return theme.color.textGhost;
    };

    const inputType = isPassword ? (isSecure ? "password" : "text") : type;

    return (
      <div style={{ width: "100%", ...containerStyle }}>
        {label && (
          <label
            style={{
              fontFamily: theme.font.medium,
              fontSize: theme.size.label,
              color: theme.color.text,
              marginBottom: "8px",
              display: "block",
              ...labelStyle,
            }}
          >
            {label}
          </label>
        )}

        <div style={{ position: "relative" }}>
          <input
            ref={ref}
            data-testid={testID}
            type={inputType}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            style={{
              width: "100%",
              height: "48px",
              paddingLeft: "16px",
              paddingRight: isPassword ? "48px" : "16px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: getBorderColor(),
              borderRadius: "12px",
              backgroundColor: disabled
                ? theme.color.muted
                : theme.color.background,
              color: getTextColor(),
              fontFamily: theme.font.book,
              fontSize: theme.size.label,
              outline: "none",
              transition: "all 0.2s ease",
              ...inputStyle,
            }}
            placeholder={props.placeholder}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                color: theme.color.textGhost,
              }}
            >
              {isSecure ? "👁️" : "👁️‍🗨️"}
            </button>
          )}
        </div>

        {error && (
          <div
            style={{
              fontFamily: theme.font.book,
              fontSize: theme.size.small,
              color: theme.color.destructive,
              marginTop: "4px",
              ...errorStyle,
            }}
          >
            {error}
          </div>
        )}

        {helperText && !error && (
          <div
            style={{
              fontFamily: theme.font.book,
              fontSize: theme.size.small,
              color: theme.color.textGhost,
              marginTop: "4px",
              ...helperStyle,
            }}
          >
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

// Funções de máscara
const getMaskFunction = (mask?: string): MaskConfig => {
  switch (mask) {
    case "CPF":
      return { maskFunction: applyCpfMask, maxLength: 14 };
    case "CEP":
      return { maskFunction: applyCepMask, maxLength: 9 };
    case "PHONE":
      return { maskFunction: applyPhoneMask, maxLength: 15 };
    case "NASCIMENTO":
      return { maskFunction: applyBirthdateMask, maxLength: 10 };
    case "CURRENCY":
      return { maskFunction: applyCurrencyMask };
    default:
      return { maskFunction: (text: string) => text };
  }
};

function applyCpfMask(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function applyCepMask(value: string): string {
  return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
}

function applyPhoneMask(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function applyBirthdateMask(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2");
}

function applyCurrencyMask(value: string): string {
  const numericValue = value.replace(/\D/g, "");
  const floatValue = parseFloat(numericValue) / 100;
  return floatValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default Input;
