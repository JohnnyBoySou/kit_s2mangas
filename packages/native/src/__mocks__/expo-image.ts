import React from 'react';
import { View } from 'react-native';

// Mock do componente Image do expo-image
export const Image = React.forwardRef<any, any>((props, ref) => {
  return React.createElement(View, {
    ...props,
    ref,
    testID: props.testID || 'expo-image-mock',
  });
});

Image.displayName = 'ExpoImage';

// Mock das props do expo-image
export interface ImageProps {
  source?: any;
  style?: any;
  contentFit?: string;
  cachePolicy?: string;
  priority?: string;
  onLoad?: () => void;
  onError?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: string;
}
