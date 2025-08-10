import React from "react";
import { View, Pressable, ViewStyle } from "react-native";
import { theme } from '@s2mangas/core';

// Interface para os props do componente Check
interface CheckProps {
  status: boolean;
  setStatus: (value: boolean) => void;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityRole?: "checkbox" | "switch";
  accessibilityState?: {
    checked: boolean;
  };
  disabled?: boolean;
}

// Componente Check tipado
const Check: React.FC<CheckProps> = ({
  status,
  setStatus,
  testID,
  accessibilityLabel,
  accessibilityRole,
  disabled = false,
}) => {
  // Usar Animated.Value para animação nativa
  // const translateX = useRef(new Animated.Value(status ? 24 : 0)).current;

  // Efeito para atualizar a animação com base no status
  // useEffect(() => {
  //   Animated.spring(translateX, {
  //     toValue: status ? 24 : 0,
  //     useNativeDriver: true,
  //     tension: 100,
  //     friction: 8,
  //   }).start();
  // }, [status, translateX]);

  return (
    <Pressable
      onPress={() => {
        setStatus(!status);
      }}
      disabled={disabled}
      style={
        {
          backgroundColor: status ? theme.color.primary : "#505050",
          width: 64,
          borderRadius: 100,
          opacity: disabled ? 0.5 : 1,
          flexDirection: "row",
        } as ViewStyle
      }
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={{ checked: status }}
    >
      <View
        style={[
          {
            width: 28,
            height: 28,
            margin: 6,
            borderRadius: 100,
            backgroundColor: status ? "#ffffff90" : "#909090",
          } as ViewStyle,
          // {
          //   transform: [{ translateX }],
          // },
        ]}
      />
    </Pressable>
  );
};

export default Check;
