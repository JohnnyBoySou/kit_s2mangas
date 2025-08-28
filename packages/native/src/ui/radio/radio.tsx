import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const Radio = ({ selected }: { selected: boolean }) => {
  const animationValue = useSharedValue(selected ? 1 : 0);

  useEffect(() => {
    animationValue.value = selected
      ? withSpring(1, { stiffness: 100, damping: 8 })
      : withTiming(0, { duration: 200 });
  }, [selected]);

  const outerAnimatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      animationValue.value,
      [0, 1],
      ['#303030', '#fff']
    );

    return {
      borderColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.2,
      width: 28,
      height: 28,
      borderRadius: 100,
    };
  });

  const innerAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [0, 1],
      ['#000', '#fff']
    );

    const scale = animationValue.value * 0.7 + 0.3; // Scale from 0.3 to 1

    return {
      backgroundColor,
      transform: [{ scale }],
      width: 12,
      height: 12,
      borderRadius: 100,
    };
  });

  return (
    <Animated.View style={outerAnimatedStyle}>
      <Animated.View style={innerAnimatedStyle} />
    </Animated.View>
  );
};

export default Radio;
