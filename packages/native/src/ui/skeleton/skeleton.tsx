import React, { useEffect, useRef, useState } from 'react';
import { View, useWindowDimensions } from 'react-native';

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
  const [isAnimating, setIsAnimating] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Inicia a animação
    intervalRef.current = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 1000);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: SECONDARY_BACKGROUND_COLOR,
          borderRadius: props.r,
          opacity: isAnimating ? 1 : 0,
        }}
      />
    </View>
  );
}

export default Skeleton;