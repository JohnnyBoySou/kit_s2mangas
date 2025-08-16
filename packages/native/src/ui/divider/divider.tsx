import React from 'react';
import { View, ViewStyle } from 'react-native';
import { theme } from '../../../../core/src/theme';

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
