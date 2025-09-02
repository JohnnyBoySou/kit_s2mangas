import React from 'react';
import { Pressable, Text, View } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { theme } from '@s2mangas/core';
import { X } from 'lucide-react-native';

export interface ChipProps {
  children?: React.ReactNode;
  label?: string;
  variant?:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | 'custom';
  size?: 'sm' | 'default' | 'md' | 'lg' | 'custom';
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
  accessibilityLabel?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  onRemove?: () => void;
}
const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'default',
  size = 'default',
  color,
  backgroundColor,
  borderColor,
  textStyle,
  testID,
  accessibilityLabel,
  icon,
  onPress,
  onRemove,
  style,
}) => {
  const getChipStyle = (): ViewStyle => {
    const isCustomVariant = backgroundColor || borderColor;
    const effectiveVariant = isCustomVariant ? 'custom' : variant;

    const isCustomSize =
      style &&
      (style.paddingVertical !== undefined ||
        style.paddingHorizontal !== undefined ||
        style.borderRadius !== undefined);
    const effectiveSize = isCustomSize ? 'custom' : size;

    const baseStyle: ViewStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 100,
    };

    const variantStyles: Record<string, ViewStyle> = {
      default: {
        backgroundColor: theme.color.white,
        borderColor: '#ffffff20',
        borderWidth: 1,
      },
      secondary: {
        backgroundColor: '#1f1f1f',
        borderColor: '#ffffff15',
        borderWidth: 1,
      },
      destructive: {
        backgroundColor: theme.color.red,
        borderColor: theme.color.red,
        borderWidth: 0,
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: '#ffffff40',
        borderWidth: 2,
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      custom: {
        backgroundColor: backgroundColor || 'transparent',
        borderColor: borderColor || 'transparent',
        borderWidth: borderColor ? 1 : 0,
      },
    };

    // Tamanhos
    const sizeStyles: Record<string, ViewStyle> = {
      sm: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
      },
      default: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 16,
      },
      md: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 18,
      },
      lg: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
      },
      custom: {
        // Para size custom, não aplica padding/borderRadius padrão
        // deixa o style prop ter precedência total
      },
    };

    return {
      ...baseStyle,
      ...variantStyles[effectiveVariant],
      ...sizeStyles[effectiveSize],
    };
  };

  const getTextStyle = (): TextStyle => {
    // Detecta se deve usar size custom baseado no textStyle
    const isCustomTextSize =
      textStyle &&
      (textStyle.fontSize !== undefined || textStyle.lineHeight !== undefined);
    const effectiveSize = isCustomTextSize ? 'custom' : size;

    // Detecta variant efetiva (incluindo custom)
    const isCustomVariant = backgroundColor || borderColor;
    const effectiveVariant = isCustomVariant ? 'custom' : variant;

    // Cores por variante
    const variantTextColors: Record<string, string> = {
      default: theme.color.black || '#000000',
      secondary: '#ffffff',
      destructive: '#ffffff',
      outline: '#ffffff',
      ghost: '#ffffff',
      custom: color || '#ffffff',
    };

    const baseTextStyle: TextStyle = {
      fontWeight: '500',
      color: color || variantTextColors[effectiveVariant],
    };

    const sizeTextStyles: Record<string, TextStyle> = {
      sm: {
        fontSize: 12,
        lineHeight: 16,
      },
      default: {
        fontSize: 14,
        lineHeight: 18,
      },
      md: {
        fontSize: 15,
        lineHeight: 20,
      },
      lg: {
        fontSize: 16,
        lineHeight: 22,
      },
      custom: {
        // Para size custom, não aplica fontSize/lineHeight padrão
        // deixa o textStyle prop ter precedência total
      },
    };

    return {
      ...baseTextStyle,
      ...sizeTextStyles[effectiveSize],
      ...textStyle,
    };
  };

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
    >
      <Pressable
        onPress={onPress}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
      >
        <View style={[getChipStyle(), { borderRadius: 100 }]}>
          {icon && (
            <View style={{ marginRight: 6, justifyContent: 'space-between' }}>
              {icon}
            </View>
          )}
          <Text style={getTextStyle()}>{label}</Text>
          {onRemove && (
            <Pressable
              onPress={onRemove}
              accessibilityLabel="Remover chip"
              style={{
                width: 24,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 8,
                marginRight: -6,
              }}
            >
              <X size={16} color={getTextStyle().color || '#ffffff'} />
            </Pressable>
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Chip;
