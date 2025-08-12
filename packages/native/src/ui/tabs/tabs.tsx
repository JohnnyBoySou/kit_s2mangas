import React, { useRef, useEffect } from "react";
import { ScrollHorizontal } from "../layout/layout";
import { Title } from "../text/text";
import { Pressable, ViewStyle, Animated } from "react-native";

interface TabsProps {
  value?: string;
  setValue: (value: string) => typeof value;
  values: string[];
  testID?: string;
  accessibilityRole?: "button" | "text";
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

interface TabItemProps {
  tab: string;
  isSelected: boolean;
  setValue: (value: string) => typeof value;
  testID?: string;
  accessibilityRole?: "button" | "text";
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const TabItem: React.FC<TabItemProps> = ({
  tab,
  isSelected,
  setValue,
  testID,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const scaleAnim = useRef(new Animated.Value(isSelected ? 1 : 0.95)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isSelected ? 1 : 0.95,
      useNativeDriver: true,
      damping: 15,
      stiffness: 100,
    }).start();
  }, [isSelected, scaleAnim]);

  return (
    <Animated.View 
      style={{
        transform: [{ scale: scaleAnim }],
      }}
    >
      <Pressable
        testID={testID}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        onPress={() => {
          setValue(isSelected ? "" : tab);
        }}
        style={
          {
            backgroundColor: isSelected ? "#fff" : "#202020",
            borderRadius: 100,
            paddingVertical: 12,
            paddingHorizontal: 12,
          } as ViewStyle
        }
      >
        <Title
          size={16}
          fontFamily={isSelected ? "Font_Medium" : "Font_Book"}
          spacing={-1}
          color={isSelected ? "#202020" : "#D1D1D1"}
        >
          {tab}
        </Title>
      </Pressable>
    </Animated.View>
  );
};

const Tabs: React.FC<TabsProps> = ({
  value,
  setValue,
  values,
  testID,
  accessibilityHint,
  accessibilityRole,
  accessibilityLabel,
}) => {
  return (
    <ScrollHorizontal
      style={{
        backgroundColor: "#252525",
        padding: 4,
        borderRadius: 100,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopColor: "#303030",
        borderLeftColor: "#303030",
        borderRightColor: "#252525",
      }}
      contentContainerStyle={{ columnGap: 8 }}
    >
      {values.map((tab: string) => {
        const isSelected = value === tab;
        return (
          <TabItem
            key={String(tab)}
            tab={tab}
            isSelected={isSelected}
            setValue={setValue}
            testID={testID}
            accessibilityRole={accessibilityRole}
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}
          />
        );
      })}
    </ScrollHorizontal>
  );
};

export default Tabs;
