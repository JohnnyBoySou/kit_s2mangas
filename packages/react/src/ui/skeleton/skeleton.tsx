import React, { useEffect, useState } from "react";
import { theme } from "@s2mangas/core";

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  style?: React.CSSProperties;
  testID?: string;
  className?: string;
  variant?: "rectangular" | "circular" | "text";
  lines?: number;
  spacing?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  style,
  testID,
  className,
  variant = "rectangular",
  lines = 1,
  spacing = 8,
}) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Função para formatar valores de estilo
  const formatStyleValue = (
    value: number | string | undefined,
    unit: string = "px",
  ): string => {
    if (value === undefined) return "";
    if (typeof value === "string") return value;
    return `${value}${unit}`;
  };

  // Estilos base do skeleton
  const baseStyles: React.CSSProperties = {
    backgroundColor: isAnimating ? theme.color.ghost : theme.color.muted,
    transition: "background-color 0.5s ease-in-out",
    ...style,
  };

  // Estilos para diferentes variantes
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "circular":
        return {
          ...baseStyles,
          width: formatStyleValue(width, "px") || "40px",
          height: formatStyleValue(height, "px") || "40px",
          borderRadius: "50%",
        };
      case "text":
        return {
          ...baseStyles,
          width: formatStyleValue(width) || "100%",
          height: formatStyleValue(height, "px") || "16px",
          borderRadius: formatStyleValue(borderRadius, "px") || "4px",
        };
      default: // rectangular
        return {
          ...baseStyles,
          width: formatStyleValue(width) || "100%",
          height: formatStyleValue(height, "px") || "48px",
          borderRadius: formatStyleValue(borderRadius, "px") || "8px",
        };
    }
  };

  // Se for múltiplas linhas de texto
  if (variant === "text" && lines > 1) {
    return (
      <div
        data-testid={testID || "skeleton-container"}
        className={className}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: `${spacing}px`,
        }}
      >
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            data-testid={`skeleton-line-${index}`}
            style={{
              ...getVariantStyles(),
              width: index === lines - 1 ? "60%" : "100%", // Última linha mais curta
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      data-testid={testID || "skeleton-default"}
      style={getVariantStyles()}
      className={className}
    />
  );
};

export default Skeleton;
