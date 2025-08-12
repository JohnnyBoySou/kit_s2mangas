import React, { useEffect, useRef } from "react";
import { Animated, Pressable, ViewStyle } from "react-native";
import { theme } from '@s2mangas/core';
import { Check } from "lucide-react-native";

// Wrapper temporário para contornar incompatibilidade de tipos com React 19
const CheckIcon: React.FC<{ color: string; size: number }> = (props) => {
  return React.createElement(Check as any, props);
};

// Interface para os props do componente Check
interface CheckProps {
  status: boolean;
  setStatus: (value: boolean) => typeof value;
  label?: string;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityRole?: "checkbox" | "switch";
  accessibilityState?: {
    checked?: boolean;
    disabled?: boolean;
  };
  disabled?: boolean;
}

const CheckBox: React.FC<CheckProps> = ({
  status,
  setStatus,
  label,
  testID,
  accessibilityLabel,
  accessibilityRole,
  disabled
}) => {
  // Animações nativas
  const backgroundColorAnim = useRef(new Animated.Value(status ? 1 : 0)).current;
  const iconScaleAnim = useRef(new Animated.Value(status ? 1 : 0)).current;
  const textColorAnim = useRef(new Animated.Value(status ? 1 : 0)).current;

  useEffect(() => {
    // Animar cor de fundo
    Animated.timing(backgroundColorAnim, {
      toValue: status ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();

    // Animar ícone
    Animated.spring(iconScaleAnim, {
      toValue: status ? 1 : 0,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();

    // Animar texto
    Animated.timing(textColorAnim, {
      toValue: status ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [status, backgroundColorAnim, iconScaleAnim, textColorAnim]);

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#202020", theme.color.primary],
  });

  const textColor = textColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d1d1d1", "#ffffff"],
  });

  return (
    <Pressable
      onPress={() => {
        setStatus(!status);
      }}
      disabled={disabled}
      style={
        {
          flexDirection: "row",
          alignItems: "center",
          opacity: disabled ? 0.5 : 1,
          gap: 12,
        } as ViewStyle
      }
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={{ checked: status, disabled }}
    >
      <Animated.View
        style={[
          {
            width: 32,
            height: 32,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          } as ViewStyle,
          {
            backgroundColor,
          },
        ]}
      >
        <Animated.View
          style={{
            transform: [{ scale: iconScaleAnim }],
            opacity: iconScaleAnim,
          }}
        >
          <CheckIcon color="#fff" size={20} />
        </Animated.View>
      </Animated.View>
      {label && (
        <Animated.Text
          style={[
            {
              fontFamily: status ? "Font_Medium" : "Font_Book",
              fontSize: 16,
            },
            {
              color: textColor,
            },
          ]}
        >
          {label}
        </Animated.Text>
      )}
    </Pressable>
  );
};

export default CheckBox;
