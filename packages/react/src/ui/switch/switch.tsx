import * as React from "react";
import { theme } from "@s2mangas/core";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  style,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  return (
    <label
      style={{
        position: "relative",
        display: "inline-block",
        width: "44px",
        height: "24px",
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
          opacity: 0,
          width: 0,
          height: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          cursor: disabled ? "not-allowed" : "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: checked ? theme.color.primary : theme.color.muted,
          transition: "0.4s",
          borderRadius: "24px",
        }}
      />
      <div
        style={{
          position: "absolute",
          height: "18px",
          width: "18px",
          left: checked ? "23px" : "3px",
          top: "3px",
          backgroundColor: "white",
          transition: "0.4s",
          borderRadius: "50%",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      />
    </label>
  );
};

export default Switch;
