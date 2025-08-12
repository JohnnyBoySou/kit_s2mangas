import React, { useEffect, useRef } from "react";
import { Check } from "lucide-react-native";
import { Animated, Pressable, ActivityIndicator, ViewStyle, View } from "react-native";

// Interface para os props do Toggle
interface ToggleProps {
  value: boolean;
  setValue: (newValue: boolean) => void;
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
            borderWidth: 3,
            borderColor: value ? "transparent" : "#FFFFFF60",
            width: 38,
            height: 38,
            borderRadius: 100,
            justifyContent: "center",
            alignItems: "center",
          } as ViewStyle
        }
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size={24} />
        ) : (
          value && <Shape />
        )}
      </View>
    </Pressable>
  );
};

// Componente Shape tipado com animação nativa
const Shape: React.FC = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 8,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [scaleAnim, opacityAnim]);

  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
        } as ViewStyle,
        {
          transform: [{ scale: scaleAnim }],
          opacity: opacityAnim,
        },
      ]}
    >
      <Check size={24} color="#000" style={{ alignSelf: "center" }} />
    </Animated.View>
  );
};

export default Toggle;
