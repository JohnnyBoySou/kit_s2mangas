import * as React from "react";

const theme = {
  color: {
    primary: "#007bff",
    muted: "#6c757d",
  },
};

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  testID?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  style,
  className,
  testID,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  const baseStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
    width: "44px",
    height: "24px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  const backgroundStyle: React.CSSProperties = {
    position: "absolute",
    cursor: disabled ? "not-allowed" : "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: checked ? theme.color.primary : theme.color.muted,
    transition: "0.4s",
    borderRadius: "24px",
  };

  const thumbStyle: React.CSSProperties = {
    position: "absolute",
    height: "18px",
    width: "18px",
    left: checked ? "23px" : "3px",
    top: "3px",
    backgroundColor: "white",
    transition: "0.4s",
    borderRadius: "50%",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  };

  const inputStyle: React.CSSProperties = {
    opacity: 0,
    width: 0,
    height: 0,
  };

  return (
    <label
      style={{ ...baseStyle, ...style }}
      className={className}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        data-testID={testID}
        style={inputStyle}
      />
      <div style={backgroundStyle} />
      <div style={thumbStyle} />
    </label>
  );
};

export default Switch;
