import React from "react";
import { theme } from '@s2mangas/core';

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  color?: string;
  thickness?: number;
  style?: React.CSSProperties;
  className?: string;
  "data-testid"?: string;
}

const Divider: React.FC<DividerProps> = ({ 
  orientation = "horizontal", 
  color,
  thickness = 1,
  style,
  className,
  "data-testid": dataTestId
}) => {
  const defaultStyles: React.CSSProperties = {
    backgroundColor: color || theme.color.borderPrimary,
    ...(orientation === "horizontal" && {
      width: "100%",
      height: `${thickness}px`,
    }),
    ...(orientation === "vertical" && {
      width: `${thickness}px`,
      height: "100%",
    }),
  };

  return (
    <div
      style={{
        ...defaultStyles,
        ...style,
      }}
      className={className}
      data-testid={dataTestId}
    />
  );
};

export default Divider;
