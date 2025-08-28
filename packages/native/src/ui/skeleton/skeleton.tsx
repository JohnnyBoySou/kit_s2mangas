import React, { useEffect } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  cancelAnimation,
  Easing,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

const DEFAULT_BACKGROUND_COLOR = "#303030";
const SHINE_COLOR = "rgba(255, 255, 255, 0.15)";

interface SkeletonProps {
  w?: number | string;
  h?: number | string;
  r?: number;
  c?: string;
  testID?: string;
  style?: any;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  style, 
  c = DEFAULT_BACKGROUND_COLOR, 
  testID,
  ...props 
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const shineProgress = useSharedValue(0);

  useEffect(() => {
    shineProgress.value = withRepeat(
      withTiming(1, {
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      false
    );

    return () => {
      cancelAnimation(shineProgress);
    };
  }, [shineProgress]);

  const calculateDimension = (value: string | number): number => {
    if (typeof value === 'string' && value.endsWith('%')) {
      const percentage = parseFloat(value);
      return (percentage / 100) * windowWidth;
    }
    return Number(value);
  };

  const shineAnimatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      shineProgress.value,
      [0, 1],
      [-200, 200],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX }],
    };
  });

  const containerStyle = {
    width: calculateDimension(props.w || 0),
    height: calculateDimension(props.h || 0),
    borderRadius: props.r,
    overflow: 'hidden',
  };

  return (
    <View style={[containerStyle, style]} testID={testID} {...props}>
      {/* Cor base */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: c,
          borderRadius: props.r,
        }}
      />
      
      {/* Efeito de shine */}
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: props.r,
          },
          shineAnimatedStyle,
        ]}
      >
        {/* Gradiente simulado com Views */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 60,
            height: '100%',
            backgroundColor: SHINE_COLOR,
            borderRadius: props.r,
            opacity: 0.3,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 20,
            width: 20,
            height: '100%',
            backgroundColor: SHINE_COLOR,
            borderRadius: props.r,
            opacity: 0.6,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 40,
            width: 60,
            height: '100%',
            backgroundColor: SHINE_COLOR,
            borderRadius: props.r,
            opacity: 0.3,
          }}
        />
      </Animated.View>
    </View>
  );
}

export default Skeleton;