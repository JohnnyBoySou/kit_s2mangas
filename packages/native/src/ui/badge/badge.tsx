import React from "react";
import { View, Text, Pressable, ViewStyle, TextStyle } from "react-native";
import { theme } from "../../../../core/src/theme"

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  size?: "default" | "sm" | "md" | "lg";
  onPress?: () => void;
  onRemove?: () => void;
  testID?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "default",
  onPress,
  onRemove,
  testID,
}) => {
  const getBadgeStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      flexDirection: "row",
    };

         const variantStyles: Record<string, ViewStyle> = {
       default: { backgroundColor: theme.color.primary },
       secondary: { backgroundColor: theme.color.secondary },
       destructive: { backgroundColor: theme.color.destructive },
       outline: { 
         backgroundColor: "transparent",
         borderWidth: 1,
         borderColor: theme.color.title
       },
     };

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
      fontWeight: "600",
      textAlign: "center",
    };

         const variantTextStyles: Record<string, TextStyle> = {
       default: { color: theme.color.title },
       secondary: { color: theme.color.title },
       destructive: { color: theme.color.title },
       outline: { color: theme.color.title },
     };

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
    };
  };

  const badgeStyle = getBadgeStyle();
  const textStyle = getTextStyle();

  if (onRemove) {
    return (
      <View 
        style={[
          badgeStyle, 
          { paddingRight: 4 }
        ]} 
        testID={testID}
      >
        <Text style={textStyle}>{children}</Text>
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
        >
                     <Text style={{
             color: theme.color.text,
             fontSize: 14,
             fontWeight: "bold",
             lineHeight: 16,
           }}>×</Text>
        </Pressable>
      </View>
    );
  }

  if (onPress) {
    return (
      <Pressable
        style={badgeStyle}
        onPress={onPress}
        testID={testID}
        accessibilityRole="button"
      >
        <Text style={textStyle}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <View style={badgeStyle} testID={testID}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

export default Badge;
