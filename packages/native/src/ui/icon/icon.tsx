import React from "react";
import { View, Pressable } from "react-native";
import type { ViewStyle } from "react-native";
import * as Icons from "lucide-react-native";
import { theme } from "@s2mangas/core";

// Tipo para os nomes dos ícones do lucide-react-native
export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: "button" | "image" | "none";
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = theme.color.text,
  strokeWidth = 1.5,
  style,
  onPress,
  disabled = false,
  testID,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = onPress ? "button" : "image",
}) => {
  // Obter o componente do ícone dinamicamente
  const IconComponent = Icons[name] as React.ComponentType<{
    size: number;
    color: string;
    strokeWidth: number;
  }>;

  // Se o ícone não existir, retornar null
  if (!IconComponent) {
    return null;
  }

  const iconElement = (
    <IconComponent 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
    />
  );

  // Se tem onPress, envolver em Pressable
  if (onPress) {
    return (
      <Pressable
        onPress={!disabled ? onPress : undefined}
        style={[
          {
            opacity: disabled ? 0.5 : 1,
            alignItems: "center",
            justifyContent: "center",
          },
          style,
        ]}
        testID={testID}
        accessibilityLabel={accessibilityLabel || `${name} button`}
        accessibilityHint={accessibilityHint}
        accessibilityRole={accessibilityRole}
        disabled={disabled}
      >
        {iconElement}
      </Pressable>
    );
  }

  // Se não tem onPress, retornar apenas o ícone
  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      testID={testID}
      accessibilityLabel={accessibilityLabel || `${name} icon`}
      accessibilityRole={accessibilityRole}
    >
      {iconElement}
    </View>
  );
};

export default Icon;
