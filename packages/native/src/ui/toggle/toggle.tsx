import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react-native";
import { Animated, Pressable, ActivityIndicator, ViewStyle, View } from "react-native";

// Wrapper temporário para contornar incompatibilidade de tipos com React 19
const CheckIcon: React.FC<{ size: number; color: string; style?: any }> = (props) => {
  return React.createElement(Check as any, props);
};

// Interface para os props do Toggle
interface ToggleProps {
  value: boolean;
  setValue: (value: boolean) => void;
  isLoading?: boolean;
  testID?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: "button" | "switch" | "checkbox" | "radio";
  accessibilityHint?: string;
  accessibilityValue?: boolean;
  accessibilityStates?: (
    | "checked"
    | "unchecked"
    | "selected"
    | "unselected"
    | "disabled"
    | "enabled"
    | "busy"
    | "readyForInput"
    | "grabbed"
    | "focused"
    | "defunct"
    | "valid"
    | "invalid"
  )[];
}

// Componente Toggle tipado
const Toggle: React.FC<ToggleProps> = ({
  value,
  setValue,
  isLoading,
  testID,
  disabled,
  accessibilityLabel,
  accessibilityRole,
  accessibilityHint,
  accessibilityValue,
  accessibilityStates,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={() => setValue(!value)}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityHint={accessibilityHint}
      accessibilityValue={{ text: accessibilityValue ? 'checked' : 'unchecked' }}
      accessibilityState={{
        disabled: accessibilityStates?.includes('disabled'),
        selected: accessibilityStates?.includes('selected'),
        checked: accessibilityStates?.includes('checked'),
        busy: accessibilityStates?.includes('busy')
      }}
    >
      <View
        style={
          {
            backgroundColor: value ? "#FFF" : "transparent",
            borderWidth: 2,
            borderColor: value ? "transparent" : "#FFFFFF60",
            width: 30,
            height: 30,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          } as ViewStyle
        }
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size={20} />
        ) : (
          value && <Shape />
        )}
      </View>
    </Pressable>
  );
};

// Componente Shape tipado com animação simplificada
const Shape: React.FC = () => {
  // Usar apenas um valor de animação para evitar conflitos
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: false, // Usar apenas driver JavaScript para evitar conflitos
      tension: 100,
      friction: 8,
    }).start();
  }, [animatedValue]);

  // Interpolações para scale e opacity
  const scale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
        } as ViewStyle,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
    >
      <CheckIcon size={24} color="#000" style={{ alignSelf: "center" }} />
    </Animated.View>
  );
};

export default Toggle;
