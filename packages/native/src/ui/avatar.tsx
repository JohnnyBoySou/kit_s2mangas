import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Pressable,
  ActivityIndicator,
} from "react-native";

interface AvatarProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  url?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  imageStyle?: ImageStyle;
  shape?: "circle" | "square";
  initials?: string;
  testID?: string;
  onPress?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  accessibilityLabel?: string;
  accessibilityRole?: "text"|"button"|"image"|"link"|"none"|"search";
  loading?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  width = 40,
  height = 40,
  backgroundColor = "#d3d3d3",
  url,
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
    width,
    height,
    borderRadius: shape === "square" ? 12 : Math.min(width, height) / 2,
    overflow: "hidden",
    backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    opacity: disabled ? 0.5 : 1,
  };

  const fallbackTextStyle: TextStyle = {
    fontSize: width / 2.5,
    color: "#555",
    ...textStyle,
  };

  const avatarImageStyle: ImageStyle = {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
      <View style={[containerStyle, style]} testID={testID} accessibilityLabel={accessibilityLabel} accessibilityRole={accessibilityRole ?? "image"}>
        {!hasError && url ? (
          <Image
            source={{ uri: url }}
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
