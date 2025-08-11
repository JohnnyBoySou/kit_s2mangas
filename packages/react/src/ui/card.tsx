import React from "react";
import { theme } from '@s2mangas/core';

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  backgroundColor?: string;
  shadow?: boolean;
  onClick?: () => void;
  "data-testid"?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  style, 
  className,
  padding = 16,
  margin = 0,
  borderRadius = 12,
  backgroundColor = theme.color.background,
  shadow = true,
  onClick,
  "data-testid": dataTestId
}) => (
  <div
    style={{
      backgroundColor,
      borderRadius: `${borderRadius}px`,
      padding: `${padding}px`,
      margin: `${margin}px`,
      boxShadow: shadow ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      cursor: onClick ? "pointer" : "default",
      transition: "all 0.2s ease",
      ...style,
    }}
    className={className}
    onClick={onClick}
    tabIndex={onClick ? 0 : undefined}
    data-testid={dataTestId}
  >
    {children}
  </div>
);

export default Card;
