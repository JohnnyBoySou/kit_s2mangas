import React from "react";
import { View, Text, Pressable } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";
import { theme } from '@s2mangas/core';
import { X } from "lucide-react-native";

interface BadgeProps {
  // Props básicos
  children?: React.ReactNode;
  label?: string;
  
  // Variantes de estilo
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  
  // Tamanhos
  size?: "sm" | "default" | "md" | "lg";
  
  // Cores personalizadas
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  
  // Estilos
  style?: ViewStyle;
  textStyle?: TextStyle;
  
  // Interações
  onPress?: () => void;
  onRemove?: () => void;
  
  // Acessibilidade
  testID?: string;
  accessibilityLabel?: string;
  accessibilityRole?: "button" | "text";
  
  // Extras
  icon?: React.ReactNode;
  selected?: boolean;
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
  onPress,
  onRemove,
  testID,
  accessibilityLabel,
  accessibilityRole,
  icon,
  selected = false,
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
      fontWeight: selected ? "600" : "500",
      textAlign: "center",
      fontFamily: "Font_Book",
    };

    // Cores por variante
    const variantTextStyles: Record<string, TextStyle> = {
      default: { 
        color: color || (selected ? "#000" : theme.color.title),
      },
      secondary: { 
        color: color || (selected ? "#000" : theme.color.title),
      },
      destructive: { 
        color: color || (selected ? "#000" : theme.color.title),
      },
      outline: { 
        color: color || (selected ? "#000" : theme.color.title),
      },
      ghost: { 
        color: color || (selected ? "#000" : theme.color.primary),
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

  // Componente com botão de remoção
  if (onRemove) {
    return (
      <View 
        style={[
          badgeStyle, 
          { paddingRight: 4 }
        ]} 
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole || "text"}
      >
        {icon && <View style={{ marginRight: 4 }} testID="custom-icon">{icon}</View>}
        <Text style={computedTextStyle}>{displayText}</Text>
        <Pressable
          style={{
            marginLeft: 4,
            padding: 2,
            borderRadius: 100,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            width: 16,
            height: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={onRemove}
          accessibilityRole="button"
          accessibilityLabel="Remove badge"
          testID="remove-button"
        >
          <X 
            size={14} 
            color={computedTextStyle.color} 
          />
        </Pressable>
      </View>
    );
  }

  // Componente clicável
  if (onPress) {
    return (
      <Pressable
        style={badgeStyle}
        onPress={onPress}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole || "button"}
      >
        {icon && <View style={{ marginRight: 4 }} testID="custom-icon">{icon}</View>}
        <Text style={computedTextStyle}>{displayText}</Text>
      </Pressable>
    );
  }

  // Componente estático
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
