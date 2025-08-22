import React, { useEffect, useRef } from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

const DEFAULT_BACKGROUND_COLOR = "#303030";
const SECONDARY_BACKGROUND_COLOR = "#404040";

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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => startAnimation());
    };

    startAnimation();

    return () => {
      fadeAnim.stopAnimation();
    };
  }, [fadeAnim]);

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
    <View style={[animatedStyle, style]} testID={testID} {...props}>
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
      {/* Cor secundária animada */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: SECONDARY_BACKGROUND_COLOR,
          borderRadius: props.r,
          opacity: fadeAnim,
        }}
      />
    </View>
  );
}

export default Skeleton;