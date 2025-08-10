import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  size?: "default" | "sm" | "lg";
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
  const badgeStyle = [
    styles.base,
    styles[variant],
    styles[size],
  ];

  const textStyle = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
  ];

  if (onRemove) {
    return (
      <View style={[badgeStyle, styles.removable]} testID={testID}>
        <Text style={textStyle}>{children}</Text>
        <Pressable
          style={styles.removeButton}
          onPress={onRemove}
          accessibilityRole="button"
          accessibilityLabel="Remove badge"
        >
          <Text style={styles.removeIcon}>×</Text>
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

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    flexDirection: "row",
  },
  default: {
    backgroundColor: "#007bff",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  destructive: {
    backgroundColor: "#dc3545",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007bff",
  },
  sm: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    height: 20,
  },
  defaultSize: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 24,
    height: 24,
  },
  lg: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 32,
    height: 32,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  defaultText: {
    color: "#ffffff",
  },
  secondaryText: {
    color: "#ffffff",
  },
  destructiveText: {
    color: "#ffffff",
  },
  outlineText: {
    color: "#007bff",
  },
  smText: {
    fontSize: 10,
  },
  defaultSizeText: {
    fontSize: 12,
  },
  lgText: {
    fontSize: 14,
  },
  removable: {
    paddingRight: 4,
  },
  removeButton: {
    marginLeft: 4,
    padding: 2,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  removeIcon: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 16,
  },
});

export default Badge;
