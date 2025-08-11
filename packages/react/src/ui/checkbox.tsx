import React from "react";
import { theme } from '@s2mangas/core';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ 
  checked = false, 
  onChange, 
  disabled = false,
  label,
  style,
  className
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      className={className}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        style={{
          width: "18px",
          height: "18px",
          marginRight: label ? "8px" : "0",
          accentColor: theme.color.primary,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
      {label && (
        <span
          style={{
            fontFamily: theme.font.book,
            fontSize: theme.size.label,
            color: theme.color.text,
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
