import React from "react";
import { View, Text } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";
import { theme } from '@s2mangas/core';

export interface BadgeProps {
  children?: React.ReactNode;
  label?: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  size?: "sm" | "default" | "md" | "lg";
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  textStyle?: TextStyle;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityRole?: "text";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  label,
  variant = "default",
  size = "default",
  color,
  backgroundColor,
  borderColor,
  textStyle,
  testID,
  accessibilityLabel,
  accessibilityRole = "text",
  icon,
}) => {
  // Determina o texto a ser exibido
  const displayText = label || children;

  const getBadgeStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      flexDirection: "row",
      alignSelf: "flex-start",
    };

    // Variantes de estilo
    const variantStyles: Record<string, ViewStyle> = {
      default: {
        backgroundColor: backgroundColor || theme.color.primary,
        borderColor: borderColor || theme.color.primary,
        borderWidth: 1,
      },
      secondary: {
        backgroundColor: backgroundColor || theme.color.secondary,
        borderColor: borderColor || theme.color.secondary,
        borderWidth: 1,
      },
      destructive: {
        backgroundColor: backgroundColor || theme.color.destructive,
        borderColor: borderColor || theme.color.destructive,
        borderWidth: 1,
      },
      outline: {
        backgroundColor: backgroundColor || "transparent",
        borderColor: borderColor || theme.color.title,
        borderWidth: 1,
      },
      ghost: {
        backgroundColor: backgroundColor || `${color || theme.color.primary}20`,
        borderColor: borderColor || "transparent",
        borderWidth: 1,
      },
    };

    // Tamanhos
    const sizeStyles: Record<string, ViewStyle> = {
      sm: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        minWidth: 20,
        height: 20,
      },
      default: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        minWidth: 24,
        height: 24,
      },
      md: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        minWidth: 28,
        height: 28,
      },
      lg: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        minWidth: 32,
        height: 32,
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      ...sizeStyles[size],
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseTextStyle: TextStyle = {
      fontWeight: "500",
      textAlign: "center",
      fontFamily: "Font_Book",
    };

    // Cores por variante
    const variantTextStyles: Record<string, TextStyle> = {
      default: {
        color: color || theme.color.title,
      },
      secondary: {
        color: color || theme.color.title,
      },
      destructive: {
        color: color || theme.color.title,
      },
      outline: {
        color: color || theme.color.title,
      },
      ghost: {
        color: color || theme.color.primary,
      },
    };

    // Tamanhos de fonte
    const sizeTextStyles: Record<string, TextStyle> = {
      sm: { fontSize: 10 },
      default: { fontSize: 12 },
      md: { fontSize: 13 },
      lg: { fontSize: 14 },
    };

    return {
      ...baseTextStyle,
      ...variantTextStyles[variant],
      ...sizeTextStyles[size],
      ...textStyle,
    };
  };

  const badgeStyle = getBadgeStyle();
  const computedTextStyle = getTextStyle();

  return (
    <View
      style={badgeStyle}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole || "text"}
    >
      {icon && <View style={{ marginRight: 4 }} testID="custom-icon">{icon}</View>}
      <Text style={computedTextStyle}>{displayText}</Text>
    </View>
  );
};

export default Badge;
