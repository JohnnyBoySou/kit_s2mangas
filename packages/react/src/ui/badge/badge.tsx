import React from "react";
import { theme } from '@s2mangas/core';

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = "default", 
  size = "md",
  style,
  className,
  "data-testid": dataTestId
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: theme.color.muted,
          color: theme.color.text,
        };
      case "destructive":
        return {
          backgroundColor: theme.color.destructive,
          color: theme.color.textGhost,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          border: `1px solid ${theme.color.borderPrimary}`,
          color: theme.color.text,
        };
      default:
        return {
          backgroundColor: theme.color.primary,
          color: theme.color.textGhost,
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case "sm":
        return {
          padding: "4px 8px",
          fontSize: `${theme.size.small}px`,
          borderRadius: "6px",
        };
      case "lg":
        return {
          padding: "8px 16px",
          fontSize: `${theme.size.label}px`,
          borderRadius: "12px",
        };
      default:
        return {
          padding: "6px 12px",
          fontSize: `${theme.size.small}px`,
          borderRadius: "8px",
        };
    }
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: theme.font.medium,
        fontWeight: 500,
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...getVariantStyles(),
        ...getSizeStyles(),
        ...style,
      }}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </span>
  );
};

export default Badge;
