import React from "react";
import { theme } from '@s2mangas/core';

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = "md", 
  color = theme.color.primary,
  style,
  className,
  "data-testid": dataTestId
}) => {
  const getSize = (): number => {
    switch (size) {
      case "sm":
        return 16;
      case "lg":
        return 32;
      default:
        return 24;
    }
  };

  const sizeValue = getSize();

  return (
    <div
      style={{
        width: `${sizeValue}px`,
        height: `${sizeValue}px`,
        border: `2px solid ${color}20`,
        borderTop: `2px solid ${color}`,
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        ...style,
      }}
      className={className}
      data-testid={dataTestId}
    />
  );
};

export default Loader;
