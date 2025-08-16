import React, { useState, forwardRef, useRef, useEffect } from "react";
import { Column } from "../layout/layout"; 
import { Pressable, TextInput, TextInputProps, KeyboardTypeOptions, View, Text, ViewStyle, TextStyle, Animated } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { theme } from '../../../../core/src/theme';
import { getMaskFunction, MaskType } from '../../../../core/src';

const EyeIcon: React.FC<{ size: number; color: string }> = (props) => {
  return React.createElement(Eye as any, props);
};

const EyeOffIcon: React.FC<{ size: number; color: string }> = (props) => {
  return React.createElement(EyeOff as any, props);
};

interface InputProps extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  mask?: MaskType;
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: () => void;
  isPassword?: boolean;
  disabled?: boolean;
  focused?: boolean;
  required?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
  testID?: string;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      value = "",
      onChangeText,
      label,
      error,
      helperText,
      required = false,
      mask,
      keyboardType = "default",
      onSubmitEditing,
      isPassword = false,
      disabled = false,
      focused = false,
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      helperStyle,
      testID,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(focused);
    const [isSecure, setIsSecure] = useState<boolean>(isPassword);
    const borderColorAnim = useRef(new Animated.Value(0)).current;

    const handleFocus = (e: any) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: any) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const handleChangeText = (text: string) => {
      if (!onChangeText) return;
      
      const { maskFunction, maxLength } = getMaskFunction(mask);
      let maskedText = maskFunction(text);

      if (maxLength && maskedText.length > maxLength) {
        maskedText = maskedText.slice(0, maxLength);
      }

      onChangeText(maskedText);
    };

    const togglePasswordVisibility = () => {
      setIsSecure(!isSecure);
    };

    const getBorderColor = () => {
      if (disabled) return theme.color.muted;
      if (error) return theme.color.destructive;
      if (isFocused) return theme.color.title;
      return theme.color.borderGhost;
    };

    const getTextColor = () => {
      if (disabled) return theme.color.muted;
      return theme.color.text;
    };

    const getPlaceholderColor = () => {
      if (disabled) return theme.color.muted;
      return theme.color.text + "60";
    };

    // Animação da borda
    useEffect(() => {
      let targetValue: number;
      
      if (disabled) {
        targetValue = 0; // theme.color.muted
      } else if (error) {
        targetValue = 1; // theme.color.destructive
      } else if (isFocused) {
        targetValue = 2; // theme.color.title
      } else {
        targetValue = 3; // theme.color.borderGhost
      }
      
      Animated.timing(borderColorAnim, {
        toValue: targetValue,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [isFocused, error, disabled, borderColorAnim]);

    const animatedBorderColor = borderColorAnim.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [
        theme.color.muted,      // disabled
        theme.color.destructive, // error
        theme.color.title,       // focused
        theme.color.borderGhost, // normal
      ],
    });

    return (
      <Column style={containerStyle}>
        {/* Label */}
        {label && (
          <Text
            style={[
              {
                fontSize: theme.size.sublabel,
                fontFamily: theme.font.medium,
                color: error ? theme.color.destructive : theme.color.label,
                marginBottom: 8,
              },
              labelStyle,
            ]}
          >
            {label}
          </Text>
        )}

        {/* Input Container */}
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Animated.View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderColor: animatedBorderColor,
              backgroundColor: disabled ? theme.color.ghost : theme.color.background,
            }}
          >
            <TextInput
              {...props}
              ref={ref}
              testID={testID}
              accessible={true}
              accessibilityLabel={label || 'Input field'}
              accessibilityRole="text"
              style={[
                {
                  flex: 1,
                  fontSize: theme.size.label,
                  fontFamily: theme.font.book,
                  color: getTextColor(),
                  height: 48,
                  paddingHorizontal: 16,
                  paddingVertical: 12,
                  backgroundColor: 'transparent',
                },
                inputStyle,
              ]}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoFocus={focused}
              editable={!disabled}
              onChangeText={handleChangeText}
              value={value}
              onSubmitEditing={onSubmitEditing}
              secureTextEntry={isSecure}
              keyboardType={keyboardType}
              placeholder={props.placeholder}
              placeholderTextColor={getPlaceholderColor()}
              selectionColor={theme.color.primary}
            />
          </Animated.View>

          {/* Password Toggle */}
          {isPassword && (
            <Pressable
              testID="password-toggle-button"
              accessibilityRole="button"
              accessibilityLabel={isSecure ? "Show password" : "Hide password"}
              onPress={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: 12,
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isSecure ? (
                <EyeIcon size={20} color={theme.color.text} />
              ) : (
                <EyeOffIcon size={20} color={theme.color.text} />
              )}
            </Pressable>
          )}
        </View>

        {/* Error Message */}
        {error && (
          <Text
            style={[
              {
                fontSize: theme.size.small,
                fontFamily: theme.font.book,
                color: theme.color.destructive,
                marginTop: 4,
              },
              errorStyle,
            ]}
          >
            {error}
          </Text>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <Text
            style={[
              {
                fontSize: theme.size.small,
                fontFamily: theme.font.book,
                color: theme.color.label,
                marginTop: 4,
              },
              helperStyle,
            ]}
          >
            {helperText}
          </Text>
        )}
      </Column>
    );
  }
);

Input.displayName = 'Input';

export default Input;