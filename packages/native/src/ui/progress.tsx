import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

interface MultiStepProps {
  steps: number;
  current: number;
  animate?: boolean;
  theme?: string;
  testID?: string;
}

interface StepProps {
  active: boolean;
  animated: boolean;
  width: number;
  theme?: string | undefined;
}

const STEP_HEIGHT = 8;
const STEP_RADIUS = STEP_HEIGHT / 2;
const STEP_GAP = 16;
const CONTAINER_PADDING = 42;

const MultiStepProgress: React.FC<MultiStepProps> = ({ steps, current, animate = true, theme, testID }) => {
  const screenWidth = Dimensions.get('window').width;
  const availableWidth = screenWidth - (CONTAINER_PADDING * 2);
  const stepWidth = (availableWidth - (STEP_GAP * (steps - 1))) / steps;

  if (steps <= 0) {
    return null;
  }

  return (
    <View style={styles.container} testID={testID}>
      {Array.from({ length: steps }).map((_, index) => {
        const isPast = index < current - 1;
        const isCurrent = index === current - 1;

        return (
          <Step
            key={index}
            active={isPast}
            animated={isCurrent && animate}
            width={stepWidth}
            theme={theme}
          />
        );
      })}
    </View>
  );
};

const Step: React.FC<StepProps> = ({ active, animated, width, theme}) => {
  const [progress, setProgress] = React.useState(0);
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 1) {
            setOpacity(0);
            setTimeout(() => {
              setProgress(0);
              setOpacity(1);
            }, 1000);
            return 0;
          }
          return prev + 0.02;
        });
      }, 80);

      return () => clearInterval(interval);
    } else {
      setProgress(active ? 1 : 0);
      setOpacity(1);
      return undefined;
    }
  }, [active, animated]);

  return (
    <View style={[styles.stepContainer, { width }]}>
      <View style={[styles.stepBackground, { backgroundColor: theme === "white" ? "#ffffff70" : "#202020"}]} />
      <View 
        style={[
          styles.stepForeground, 
          { 
            width: `${progress * 100}%`,
            opacity: opacity
          }
        ]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: STEP_GAP,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: CONTAINER_PADDING,
  },
  stepContainer: {
    height: STEP_HEIGHT,
    borderRadius: STEP_RADIUS,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  stepBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: STEP_RADIUS,
  },
  stepForeground: {
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: STEP_RADIUS,
  },
});

export default MultiStepProgress;
