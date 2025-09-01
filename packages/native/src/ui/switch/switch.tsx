import React, { useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";
import type { ViewStyle } from "react-native";
import { theme } from "@s2mangas/core";

// Interface para os props do componente Switch
export interface SwitchProps {
  value: boolean;
  setValue: (value: boolean) => void;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityRole?: "checkbox" | "switch";
  accessibilityState?: {
    checked: boolean;
  };
  disabled?: boolean;
}

// Componente Switch tipado
const Switch: React.FC<SwitchProps> = ({
  value,
  setValue,
  testID,
  accessibilityLabel,
  accessibilityRole,
  disabled = false,
}) => {
  // Usar apenas um valor de animação para evitar conflitos
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Efeito para atualizar a animação com base no status
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // Usar apenas driver JavaScript para evitar conflitos
    }).start();
  }, [value, animatedValue]);

  // Interpolações para cores e posição
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#505050", theme.color.primary],
  });

  const thumbColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#909090", "#ffffff90"],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 18],
  });

  return (
    <Animated.View
      style={[
        {
          width: 46,
          height: 28,
          borderRadius: 100,
          opacity: disabled ? 0.5 : 1,
          flexDirection: "row",
        } as ViewStyle,
        {
          backgroundColor,
        },
      ]}
    >
      <Pressable
        onPress={() => {
          setValue(!value);
        }}
        disabled={disabled}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 100,
          flexDirection: "row",
        }}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole}
        accessibilityState={{ checked: value }}
      >
        <Animated.View
          style={[
            {
              width: 16,
              height: 16,
              margin: 6,
              borderRadius: 100,
            } as ViewStyle,
            {
              backgroundColor: thumbColor,
              transform: [{ translateX }],
            },
          ]}
        />
      </Pressable>
    </Animated.View>
  );
};

export default Switch;
