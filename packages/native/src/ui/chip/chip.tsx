
import React from "react";
import { Pressable } from "react-native";
import type { ViewStyle, TextStyle } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated"
import { X } from "lucide-react-native";
import { Badge } from '../badge/badge';

export interface ChipProps {
  children?: React.ReactNode;
  label?: string;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
  size?: "sm" | "default" | "md" | "lg";
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
  accessibilityLabel?: string;
  icon?: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
  onRemove?: () => void;
  removable?: boolean;
}
const Chip: React.FC<ChipProps> = ({
  children,
  label,
  variant = "default",
  size = "default",
  color,
  backgroundColor,
  borderColor,
  textStyle,
  testID,
  accessibilityLabel,
  icon,
  selected = false,
  onPress,
  onRemove,
  removable = false,
  style,
}) => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <Pressable
        onPress={onPress}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        style={{ opacity: selected ? 0.7 : 1 }}
      >
        <Badge
          label={label}
          variant={variant}
          size={size}
          color={color}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          textStyle={textStyle}
          icon={icon}
        >
          {children}
        </Badge>
      </Pressable>
      {removable && (
        <Pressable onPress={onRemove} accessibilityLabel="Remover chip" style={{ marginLeft: 4 }}>
          <X size={16} />
        </Pressable>
      )}
    </Animated.View>
  );
};

export default Chip;