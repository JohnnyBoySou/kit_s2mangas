import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface AvatarProps {
  w?: number;
  h?: number;
  r?: number;
  backgroundColor?: string;
  src?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
  shape?: 'circle' | 'square';
  initials?: string;
  testID?: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  accessibilityLabel?: string;
  accessibilityRole?: 'text' | 'button' | 'image' | 'link' | 'none' | 'search';
  loading?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  w = 40,
  h = 40,
  r,
  backgroundColor = '#d3d3d3',
  src,
  style,
  textStyle,
  shape,
  initials,
  imageStyle,
  testID,
  onPress,
  icon,
  disabled = false,
  accessibilityLabel,
  accessibilityRole,
  loading,
}) => {
  const [hasError, setHasError] = useState(false);

  const containerStyle: ViewStyle = {
    width: w,
    height: h,
    borderRadius: r ? r : shape === 'square' ? 12 : Math.min(w, h) / 2,
    overflow: 'hidden',
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: disabled ? 0.5 : 1,
  };

  const fallbackTextStyle: TextStyle = {
    fontSize: w / 2.5,
    color: '#555',
    ...textStyle,
  };

  const avatarImageStyle: ImageStyle = {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    ...imageStyle,
  };

  return (
    <Pressable onPress={onPress} disabled={disabled}>
      {loading && (
        <ActivityIndicator
          size="small"
          color={backgroundColor}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <View
        style={[containerStyle, style]}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole={accessibilityRole ?? 'image'}
      >
        {!hasError && src ? (
          <Image
            source={{ uri: src }}
            style={avatarImageStyle}
            onError={() => setHasError(true)}
          />
        ) : initials ? (
          <Text style={fallbackTextStyle}>{initials}</Text>
        ) : (
          icon
        )}
      </View>
    </Pressable>
  );
};

export default Avatar;
