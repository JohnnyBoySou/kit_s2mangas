import React, { useEffect, useRef } from "react";
import { Text, Animated, PanResponder } from "react-native";
import { Column } from "./layout";
import { Check, X } from "lucide-react-native";

interface MessageProps {
  success?: string;
  error?: string;
}

const Message: React.FC<MessageProps> = ({ success = "", error = "" }) => {
  const selectColor = success ? "#00c48c" : "#ff3d71";

  // Animações nativas
  const opacity = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(72)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (success || error) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(height, {
          toValue: 72,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(height, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [success, error, opacity, height]);

  // PanResponder para gestos de swipe
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        translateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 200) {
          // Swipe para direita - esconder mensagem
          Animated.parallel([
            Animated.timing(opacity, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }),
            Animated.timing(height, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }),
          ]).start();
        } else {
          // Voltar para posição original
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            tension: 100,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  if (!success && !error) return null;

  return (
    <Animated.View
      style={[
        {
          height: 100,
          backgroundColor: selectColor,
          borderRadius: 12,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingHorizontal: 4,
          marginLeft: 0,
          marginRight: 0,
        },
        {
          opacity,
          height,
          transform: [{ translateX }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Column 
        justify="center" 
        align="center" 
        style={{ 
          width: 32, 
          height: 32, 
          borderRadius: 100, 
          backgroundColor: "#ffffff40", 
          alignSelf: "center" 
        }} 
        mh={12}
      >
        {success && <Check size={24} color="#fff" />}
        {error && <X size={24} color="#fff" />}
      </Column>
      <Text 
        style={{ 
          fontSize: 14, 
          width: 220, 
          marginVertical: 12, 
          color: "#fff", 
          lineHeight: 16, 
          fontFamily: "Font_Medium", 
          marginRight: 12 
        }}
      >
        {success || error}
      </Text>
    </Animated.View>
  );
};

export default Message;
