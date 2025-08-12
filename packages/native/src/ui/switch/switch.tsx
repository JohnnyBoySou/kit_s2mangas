import React, { useEffect, useRef } from "react";
import { Animated, Pressable, ViewStyle } from "react-native";
import { theme } from "@s2mangas/core";

// Interface para os props do componente Switch
interface SwitchProps {
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
  // Animações nativas
  const backgroundColorAnim = useRef(new Animated.Value(value ? 1 : 0)).current;
  const translateXAnim = useRef(new Animated.Value(value ? 18 : 0)).current;
  const thumbColorAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

  // Efeito para atualizar a animação com base no status
  useEffect(() => {
    Animated.parallel([
      Animated.timing(backgroundColorAnim, {
        toValue: value ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(translateXAnim, {
        toValue: value ? 18 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(thumbColorAnim, {
        toValue: value ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  }, [value, backgroundColorAnim, translateXAnim, thumbColorAnim]);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#505050", theme.color.primary],
  });

  const thumbColor = thumbColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#909090", "#ffffff90"],
  });

  return (
    <Animated.View
      style={[
        {
          width: 46,
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
              transform: [{ translateX: translateXAnim }],
            },
          ]}
        />
      </Pressable>
    </Animated.View>
  );
};

export default Switch;
