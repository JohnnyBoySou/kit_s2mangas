import React, {
  useState,
  useImperativeHandle,
  useRef,
  useCallback,
  forwardRef,
  useMemo,
  useEffect,
} from "react";
import {
  TextInput,
  Platform,
  Pressable,

} from "react-native";
import type {
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  interpolateColor,
  Easing,
} from "react-native-reanimated";

import { Label, Icon, Column, Row } from "../index";
import { theme } from "@s2mangas/core";

export type InputBigRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getNode: () => TextInput | null;
};

interface InputProps extends TextInputProps {
  value?: string; // prop "value" do pai (opcional). Se fornecido, será sincronizado.
  onChangeText?: (text: string) => void;
  label?: string;
  error?: string;
  helperText?: string;
  keyboardType?: TextInputProps["keyboardType"];
  onSubmitEditing?: () => void;
  secure?: boolean;
  disabled?: boolean;
  required?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;
  testID?: string;
  iconLeft?: string;
  iconRight?: string;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
}

const DUR = 140;
const EASE = Easing.out(Easing.quad);


const Input = forwardRef<InputBigRef, InputProps>((props, ref) => {
  const {
    value, // não aplicamos direto ao TextInput
    onChangeText,
    label,
    error,
    helperText,
    keyboardType = "default",
    onSubmitEditing,
    secure = false,
    disabled = false,
    required = false,
    containerStyle,
    labelStyle,
    testID,
    iconLeft,
    iconRight,
    returnKeyType = "next",
    ...restProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<TextInput | null>(null);

  // armazenar valor atual sem causar rerender do componente
  const textRef = useRef<string>(value ?? "");

  // expõe métodos imperativos
  useImperativeHandle(
    ref,
    () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        // limpa native e o textRef e notifica pai
        inputRef.current?.clear();
        textRef.current = "";
        onChangeText?.("");
      },
      getNode: () => inputRef.current,
    }),
    [onChangeText]
  );

  // animação (reanimated)
  const focus = useSharedValue(0);

  const handleFocus = useCallback(() => {
    focus.value = withTiming(1, { duration: DUR, easing: EASE });
  }, [focus]);

  const handleBlur = useCallback(() => {
    focus.value = withTiming(0, { duration: DUR, easing: EASE });
  }, [focus]);

  // handler que NÃO faz setState local (evita re-render).
  // TextInput já atualiza o texto nativo. Mantemos textRef em sincronia
  const handleChangeText = useCallback(
    (t: string) => {
      textRef.current = t;
      onChangeText?.(t); // notifica o pai
    },
    [onChangeText]
  );

  const handleSubmitEditing = useCallback(() => {
    onSubmitEditing?.();
    inputRef.current?.blur();
  }, [onSubmitEditing]);

  const handleTogglePassword = useCallback(() => {
    setShowPassword((p) => !p);
  }, []);

  const getRightIcon = useCallback(() => {
    if (secure) return showPassword ? "EyeOff" : "Eye";
    return iconRight;
  }, [secure, showPassword, iconRight]);

  // Se o pai modificar `value` (ex.: carregar dados), sincronizamos sem re-render.
  useEffect(() => {
    if (typeof value === "undefined") return;
    if (value === textRef.current) return;
    textRef.current = value;
    // atualiza texto no input nativo sem re-render
    if (inputRef.current && typeof inputRef.current.setNativeProps === "function") {
      inputRef.current.setNativeProps({ text: value });
    }
  }, [value]);

  // estilos animados - reanimated (executa na UI thread)
  const animatedContainer = useAnimatedStyle(() => {
    return {
      transform: [{ scale: interpolate(focus.value, [0, 1], [1, 1.02]) }],
      backgroundColor: disabled
        ? "#101010"
        : interpolateColor(focus.value, [0, 1], ["#151515", theme.color.borderGhost]),
      borderRadius: 8,
      borderTopWidth: 0.6,
      borderBottomWidth: 0.6,
      borderLeftWidth: 0.8,
      borderRightWidth: 0.8,
      borderColor: disabled
        ? "#101010"
        : interpolateColor(focus.value, [0, 1], [theme.color.off10, theme.color.off40]),
      shadowColor: "#000",
      shadowOpacity: interpolate(focus.value, [0, 1], [0, 0.25]),
      shadowRadius: 12,
      elevation: focus.value ? 6 : 0,
    };
  });

  const animatedLabel = useAnimatedStyle(() => ({
    color: disabled
      ? theme.color.title
      : interpolateColor(focus.value, [0, 1], [theme.color.label, theme.color.title]),
  }));

  const animatedHelper = useAnimatedStyle(() => ({
    opacity: interpolate(focus.value, [0, 1], [0.8, 1]),
  }));

  const placeholderColor = disabled ? theme.color.muted : theme.color.text;

  const inputTextStyle = useMemo(
    () => ({
      fontSize: 18,
      marginBottom: Platform.OS === "android" ? -12 : 0,
      marginTop: Platform.OS === "android" ? -2 : 2,
      height: 42,
      fontFamily: "Font_Book",
      color: disabled ? "#ffffff90" : "#fff",
      flexGrow: 1,
      minWidth: 0,
      marginLeft: -4,
      alignSelf: "flex-start",
      textAlign: "left",
    }),
    [disabled]
  );

  return (
    <Pressable
      onPress={() => !disabled && inputRef.current?.focus()}
      disabled={disabled}
    >
      <Animated.View style={[animatedContainer, containerStyle as any, { shadowOffset: { width: 0, height: 6 } }]}>
        <Column justify="center" style={{ paddingTop: 12, paddingLeft: 12, paddingBottom: 12, }}>
          <Animated.Text
            style={[
              {
                fontSize: 12,
                letterSpacing: -0.5,
                fontFamily: theme.font.book,
              },
              labelStyle,
              animatedLabel,
            ]}
          >
            {label}
            {required && (
              <Label
                style={{
                  color: theme.color.destructive,
                  fontFamily: theme.font.book,
                }}
              >
                {" "}
                *
              </Label>
            )}
          </Animated.Text>

          <Row>
            {iconLeft && (
              <Column>
                <Icon
                  style={{
                    width: 42,
                    height: 42,
                  }}
                  name={iconLeft as any}
                  size={18}
                  strokeWidth={2}
                  color={disabled ? theme.color.label : theme.color.title}
                />
              </Column>
            )}

            <TextInput
              {...restProps}
              ref={(node) => {
                inputRef.current = node;
              }}
              defaultValue={textRef.current}
              style={[inputTextStyle, props.inputStyle as any, {}]}
              onFocus={handleFocus}
              onBlur={handleBlur}
              editable={!disabled}
              value={value ?? textRef.current}
              onChangeText={handleChangeText}
              onSubmitEditing={handleSubmitEditing}
              returnKeyType={returnKeyType}
              keyboardType={keyboardType}
              placeholder={restProps.placeholder}
              secureTextEntry={secure && !showPassword}
              placeholderTextColor={placeholderColor}
            />

            {(secure || iconRight) && (
              <Pressable
                onPress={handleTogglePassword}
                disabled={disabled}
                style={{ height: 42, width: 42, marginBottom: -12, justifyContent: "center", alignContent: "center", }}
              >
                <Icon
                  name={getRightIcon() as any}
                  size={18}
                  strokeWidth={2}
                  color={disabled ? theme.color.label : theme.color.title}
                />
              </Pressable>
            )}
          </Row>

          {(helperText || error) && (
            <Animated.Text
              style={[
                {
                  marginTop: 8,
                  fontSize: 12,
                  color: error ? theme.color.destructive : theme.color.muted,
                },
                animatedHelper,
              ]}
            >
              {error ?? helperText}
            </Animated.Text>
          )}
        </Column>
      </Animated.View>
    </Pressable>
  );
});

Input.displayName = "Input";
export default React.memo(Input);
