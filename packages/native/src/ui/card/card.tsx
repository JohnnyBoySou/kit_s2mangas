import React from 'react';
import { View, ViewStyle } from 'react-native';
import { theme } from '../../../../core/src/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  
  // Padding props
  padding?: number;
  pv?: number; // paddingVertical
  ph?: number; // paddingHorizontal
  pt?: number; // paddingTop
  pb?: number; // paddingBottom
  pl?: number; // paddingLeft
  pr?: number; // paddingRight
  
  // Margin props
  margin?: number;
  mv?: number; // marginVertical
  mh?: number; // marginHorizontal
  mt?: number; // marginTop
  mb?: number; // marginBottom
  ml?: number; // marginLeft
  mr?: number; // marginRight
  
  // Layout props
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  
  // Style props
  elevation?: number;
  borderRadius?: number;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  
  testID?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  style,
  
  // Padding
  padding,
  pv,
  ph,
  pt,
  pb,
  pl,
  pr,
  
  // Margin
  margin,
  mv,
  mh,
  mt,
  mb,
  ml,
  mr,
  
  // Layout
  align,
  justify,
  
  // Style
  elevation = 2,
  borderRadius = 8,
  bgColor,
  borderColor,
  borderWidth,
  
  testID,
}) => {
  // Determina se deve usar borda (quando não há background definido)
  const shouldUseBorder = !bgColor;
  const defaultBorderColor = theme.color.muted; // Cor branca clarinha do core
  
  return (
    <View
      testID={testID}
      style={[
        {
          // Background
          backgroundColor: bgColor || 'transparent',
          
          // Padding
          padding: padding,
          paddingVertical: pv,
          paddingHorizontal: ph,
          paddingTop: pt,
          paddingBottom: pb,
          paddingLeft: pl,
          paddingRight: pr,
          
          // Margin
          margin: margin,
          marginVertical: mv,
          marginHorizontal: mh,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          
          // Layout
          alignItems: align,
          justifyContent: justify,
          
          // Border
          borderRadius,
          borderWidth: shouldUseBorder ? (borderWidth || 1) : (borderWidth || 0),
          borderColor: shouldUseBorder ? (borderColor || defaultBorderColor) : borderColor,
          
          // Shadow
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
