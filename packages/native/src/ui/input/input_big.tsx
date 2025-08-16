import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import { Column, Row } from '../layout/layout';
import {
  TextInput,
  KeyboardTypeOptions,
  Platform,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Pressable,
  Animated, // <=
  Easing,
} from 'react-native';
import { Label } from '../text/text';
import { getMaskFunction, MaskType, theme } from '../../../../core/src';
import Icon, { IconName } from '../icon/icon';

export type InputBigRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getNode: () => TextInput | null; 
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
  secure?: boolean;
  disabled?: boolean;
  focused?: boolean;
  required?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
  testID?: string;
  iconLeft?: string;
  iconRight?: string;
}

const DUR = 140; // animação rápida
const EASE = Easing.out(Easing.quad);

const InputBig = forwardRef<InputBigRef, InputProps>((props, ref) => {
  const {
    value = '',
    onChangeText,
    label,
    error,
    helperText,
    mask,
    keyboardType = 'default',
    onSubmitEditing,
    secure = false,
    disabled = false,
    focused = false,
    required = false,
    containerStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    helperStyle,
    testID,
    iconLeft,
    iconRight,
    ...restProps
  } = props;

  const [focus, setFocus] = useState<boolean>(!!focused);
  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    clear: () => inputRef.current?.clear(),
    getNode: () => inputRef.current,
  }), []);

  // animação: 0 = blur/idle, 1 = focus/hover
  const anim = useRef(new Animated.Value(focus && !disabled ? 1 : 0)).current;

  useEffect(() => {
    const toValue = disabled ? 0 : (focus ? 1 : 0);
    Animated.timing(anim, {
      toValue,
      duration: DUR,
      easing: EASE,
      useNativeDriver: false, // cores/tamanho não suportam driver nativo
    }).start();
  }, [focus, disabled]);

  // estilos animados
  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#151515", theme.color.borderGhost],
  });


  const labelColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.color.label, theme.color.title],
  });

  const scale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.02],
  });

  const shadowOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.25],
  });

  const borderColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.color.off10, theme.color.off40],
  });

  const handlePress = () => {
    if (!disabled) inputRef.current?.focus();
  };

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setFocus(false);

  const handleChangeText = (text: string) => {
    const { maskFunction, maxLength } = getMaskFunction(mask);
    let maskedText = maskFunction(text);
    if (maxLength && maskedText.length > maxLength) maskedText = maskedText.slice(0, maxLength);
    onChangeText?.(maskedText);
  };

  const placeholderColor = disabled ? theme.color.muted : theme.color.text;

  return (
    <Pressable onPress={handlePress} disabled={disabled}>
      <Animated.View // container animado (substitui Column direto)
        style={{
          transform: [{ scale }],
          backgroundColor: disabled ? '#101010' : bgColor as any,
          borderRadius: 8,
          borderTopWidth: .6,
          borderBottomWidth: .6,
          borderLeftWidth: .8,
          borderRightWidth: .8,
          borderColor: disabled ? '#101010' : borderColor as any,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 12,
          shadowOpacity: shadowOpacity as any,
          elevation: focus ? 6 : 0,
          ...(containerStyle || {}),
        }}
      >
        <Column ph={12} pv={12} justify="center">
          <Animated.Text 
            style={[
              { fontSize: 12, letterSpacing: -0.5, color: disabled ? theme.color.title : theme.color.text, fontFamily: theme.font.book },
              labelStyle,

              !disabled && { color: labelColor as any },
            ]}
          >
            {label}
            {required && (
              <Label style={{ color: theme.color.destructive, fontFamily: theme.font.book }}> *</Label>
            )}
          </Animated.Text>

          <Row gh={6} align="center" justify="space-between">
            <Row gh={6} align='center' justify='center'>
              {iconLeft && (
                <Column style={{ marginTop: 10, }}>
                  <Animated.View>
                    <Icon
                      name={iconLeft as IconName}
                      size={16}
                      color={disabled ? theme.color.label : theme.color.title}
                    />
                  </Animated.View>
                </Column>
              )}

              <TextInput
                {...restProps}
                ref={inputRef}
                style={{
                  fontSize: 18,
                  letterSpacing: -1,
                  marginBottom: Platform.OS === 'android' ? -12 : 0,
                  marginTop: Platform.OS === 'android' ? -2 : 2,
                  fontFamily: 'Font_Book',
                  color: disabled ? '#ffffff90' : '#fff',
                  ...(inputStyle || {}),
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoFocus={focused}
                editable={!disabled}
                onChangeText={handleChangeText}
                value={value}
                onSubmitEditing={onSubmitEditing}
                keyboardType={keyboardType}
                placeholder={restProps.placeholder}
                secureTextEntry={secure}
                placeholderTextColor={placeholderColor}
              />
            </Row>

            {iconRight && (
              <Column style={{ alignSelf: 'flex-end', marginTop: 10, }}>
                <Animated.View>
                  <Icon
                    name={iconRight as IconName}
                    size={16}
                    color={disabled ? theme.color.label : theme.color.title}
                  />
                </Animated.View>
              </Column>
            )}
          </Row>

          {/* helper / erro (opcional com fade) */}
          {(helperText || error) && (
            <Animated.Text
              style={{
                marginTop: 8,
                fontSize: 12,
                color: error ? theme.color.destructive : theme.color.muted,
                opacity: anim.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }) as any,
              }}
            >
              {error ?? helperText}
            </Animated.Text>
          )}
        </Column>
      </Animated.View>
    </Pressable>
  );
});

InputBig.displayName = 'InputBig';
export default InputBig;
