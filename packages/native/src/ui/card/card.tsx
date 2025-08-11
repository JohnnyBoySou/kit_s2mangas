import React from 'react';
import { View, ViewStyle } from 'react-native';
import { theme } from '@s2mangas/core';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  margin?: number;
  elevation?: number;
  borderRadius?: number;
  backgroundColor?: string;
  testID?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = 16,
  margin = 0,
  elevation = 2,
  borderRadius = 8,
  backgroundColor = theme.color.background,
  testID,
}) => {
  return (
    <View
      testID={testID}
      style={[
        {
          backgroundColor,
          padding,
          margin,
          borderRadius,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: elevation },
          shadowOpacity: 0.1,
          shadowRadius: elevation,
          elevation,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
