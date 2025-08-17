import React from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { theme } from '@s2mangas/core';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  pv?: number; // paddingVertical
  ph?: number; // paddingHorizontal
  pt?: number; // paddingTop
  pb?: number; // paddingBottom
  pl?: number; // paddingLeft
  pr?: number; // paddingRight
  margin?: number;
  mv?: number; // marginVertical
  mh?: number; // marginHorizontal
  mt?: number; // marginTop
  mb?: number; // marginBottom
  ml?: number; // marginLeft
  mr?: number; // marginRight
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  elevation?: number;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: number;
  selected?: boolean;
  
  w?: number,
  h?: number,
  r?: number,

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
  
  w,
  h,
  r = 8,
  // Layout
  align,
  justify,
  
  // Style
  elevation = 2,
  bgColor,
  borderColor,
  borderWidth,
  selected = false,
  
  testID,
}) => {
  const shouldUseBorder = !bgColor;
  const defaultBorderColor = theme.color.muted;
  const finalBorderColor = shouldUseBorder ? (borderColor || defaultBorderColor) : borderColor;
  const finalBorderWidth = shouldUseBorder ? (borderWidth || 1) : (borderWidth || 0);
  
  // Se selected for true e houver borda, usa a cor da borda como fundo
  const finalBgColor = selected && finalBorderWidth > 0 
    ? finalBorderColor 
    : (bgColor || 'transparent');
  
  return (
    <View
      testID={testID}
      style={[
        {
          // Background
          backgroundColor: finalBgColor,
          
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
          
          width: w,
          height: h,
          // Border
          borderRadius: r,
          borderWidth: finalBorderWidth,
          borderColor: finalBorderColor,
          
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
