import React from "react";
import * as Icons from "lucide-react";
import { theme } from "@s2mangas/core";

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  testID?: string;
  className?: string;
  title?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: "button" | "img" | "presentation";
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = theme.color.text,
  strokeWidth = 1.5,
  style,
  onClick,
  disabled = false,
  testID,
  className,
  title,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  role = onClick ? "button" : "img",
}) => {
  // Obter o componente do ícone dinamicamente
  const IconComponent = Icons[name] as React.ComponentType<{
    size: number;
    color: string;
    strokeWidth: number;
    className?: string;
  }>;

  // Se o ícone não existir, retornar null
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: onClick ? (disabled ? "not-allowed" : "pointer") : "default",
    opacity: disabled ? 0.5 : 1,
    transition: "opacity 0.2s ease-in-out",
    ...style,
  };

  const iconElement = (
    <IconComponent 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth}
      className={className}
    />
  );

  // Se tem onClick, envolver em button
  if (onClick) {
    return (
      <button
        type="button"
        onClick={!disabled ? onClick : undefined}
        style={{
          ...baseStyles,
          border: "none",
          background: "transparent",
          padding: 0,
        }}
        data-testid={testID}
        title={title || ariaLabel || `${name} button`}
        aria-label={ariaLabel || `${name} button`}
        aria-describedby={ariaDescribedBy}
        role={role}
        disabled={disabled}
      >
        {iconElement}
      </button>
    );
  }

  // Se não tem onClick, retornar apenas o ícone
  return (
    <span
      style={baseStyles}
      data-testid={testID}
      title={title || ariaLabel || `${name} icon`}
      aria-label={ariaLabel || `${name} icon`}
      aria-describedby={ariaDescribedBy}
      role={role}
    >
      {iconElement}
    </span>
  );
};

export default Icon;
