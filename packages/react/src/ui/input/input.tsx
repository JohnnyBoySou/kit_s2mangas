import React, { useState, forwardRef } from "react";
import { getMaskFunction, MaskType } from "../../../../core/src/utils";
import { theme } from "../../../../core/src/theme";

// Interface para os props do Input
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  onChange?: (text: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  mask?: MaskType;
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

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          ...containerStyle,
        }}
      >
        {label && (
          <label
            style={{
              fontFamily: theme.font.medium,
              fontSize: theme.size.sublabel,
              color: error ? theme.color.destructive : theme.color.label,
              marginBottom: "8px",
              ...labelStyle,
            }}
          >
            {label}
          </label>
        )}

        <div style={{ position: "relative" }}>
          <input
            {...props}
            ref={ref}
            data-testid={testID}
            type={isSecure ? "password" : type}
            style={{
              width: "100%",
              fontSize: theme.size.label,
              fontFamily: theme.font.book,
              color: getTextColor(),
              padding: "12px 16px",
              borderRadius: "8px",
              border: `1px solid ${getBorderColor()}`,
              backgroundColor: disabled ? theme.color.ghost : theme.color.background,
              outline: "none",
              transition: "border-color 0.2s ease",
              ...inputStyle,
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoFocus={focused}
            disabled={disabled}
            onChange={handleChange}
            value={value}
            placeholder={props.placeholder}
            placeholder-color={getPlaceholderColor()}
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

export default Input;
