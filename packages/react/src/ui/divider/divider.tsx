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
  color = theme.color.borderPrimary,
  thickness = 1,
  style,
  className,
  "data-testid": dataTestId
}) => (
  <div
    style={{
      backgroundColor: color,
      ...(orientation === "horizontal" && {
        width: "100%",
        height: `${thickness}px`,
      }),
      ...(orientation === "vertical" && {
        width: `${thickness}px`,
        height: "100%",
      }),
      ...style,
    }}
    className={className}
    data-testid={dataTestId}
  />
);

export default Divider;
