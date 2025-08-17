import React from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { theme } from '@s2mangas/core';

interface DividerProps {
  style?: ViewStyle;
  color?: string;
  thickness?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  testID?: string;
}

const Divider: React.FC<DividerProps> = ({
  style,
  color = theme.color.muted,
  thickness = 2,
  marginVertical = 8,
  marginHorizontal = 0,
  testID,
}) => {
  return (
    <View
      testID={testID}
      style={[
        {
          height: thickness,
          backgroundColor: color,
          marginVertical,
          marginHorizontal,
          width: "100%",
        },
        style,
      ]}
    />
  );
};

export default Divider;
