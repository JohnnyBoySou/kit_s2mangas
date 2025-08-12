import React, { useEffect, useRef } from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';

const DEFAULT_BACKGROUND_COLOR = "#303030";
const SECONDARY_BACKGROUND_COLOR = "#404040";

interface SkeletonProps extends React.ComponentPropsWithoutRef<typeof View> {
  w?: number | string;
  h?: number | string;
  r?: number;
  c?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ style, c = DEFAULT_BACKGROUND_COLOR, ...props }) => {
  const colorAnim = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorAnim]);

  const calculateDimension = (value: string | number): number => {
    if (typeof value === 'string' && value.endsWith('%')) {
      const percentage = parseFloat(value);
      return (percentage / 100) * windowWidth;
    }
    return Number(value);
  };

  const animatedStyle = {
    width: calculateDimension(props.w || 0),
    height: calculateDimension(props.h || 0),
    borderRadius: props.r,
  };

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          backgroundColor: colorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [c, SECONDARY_BACKGROUND_COLOR]
          })
        },
        style
      ]}
      {...props}
    />
  );
}
