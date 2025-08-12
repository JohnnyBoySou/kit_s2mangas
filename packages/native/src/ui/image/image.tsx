import React from "react";
import {
  StyleProp,
  ImageStyle,
  View,
  ViewStyle,
  Pressable,
  Image as RNImage,
  ImageProps as RNImageProps,
} from "react-native";

interface CustomImageProps extends RNImageProps {
  src?: string;
  w?: number | string;
  h?: number | string;
  r?: number | string;
  bg?: string;
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  style?: StyleProp<ImageStyle>;
  fallback?: React.ReactNode;
  contentFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  onPress?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?:
    | "button"
    | "image"
    | "none"
    | "adjustable"
    | "header"
    | "search"
    | "imagebutton";
}

const Image: React.FC<CustomImageProps> = ({
  src = "",
  w = 0,
  h = 0,
  r = 0,
  align = "center",
  bg,
  style,
  fallback,
  contentFit,
  onPress,
  testID,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  source,
  ...rest
}) => {
  const imageSource = source || (src ? { uri: src } : undefined);
  
  if (fallback) {
    return (
      <Pressable onPress={onPress}>
        <View
          style={{ position: "relative", width: w, height: h } as ViewStyle}
        >
          <RNImage
            source={imageSource}
            testID={testID}
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}
            accessibilityRole={accessibilityRole}
            style={[
              {
                borderRadius: r,
                width: w,
                height: h,
                alignSelf: align,
                backgroundColor: bg,
                resizeMode: contentFit === "cover" ? "cover" : 
                           contentFit === "contain" ? "contain" : 
                           contentFit === "fill" ? "stretch" : "center",
              } as ImageStyle,
              style,
            ]}
            {...rest}
          />
          {fallback && !imageSource && (
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {fallback}
            </View>
          )}
        </View>
      </Pressable>
    );
  }
  
  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <RNImage
          source={imageSource}
          testID={testID}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole={accessibilityRole}
          style={[
            {
              borderRadius: r,
              width: w,
              height: h,
              alignSelf: align,
              backgroundColor: bg,
              resizeMode: contentFit === "cover" ? "cover" : 
                         contentFit === "contain" ? "contain" : 
                         contentFit === "fill" ? "stretch" : "center",
            } as ImageStyle,
            style,
          ]}
          {...rest}
        />
      </Pressable>
    );
  }

  return (
    <RNImage
      source={imageSource}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      style={[
        {
          borderRadius: r,
          width: w,
          height: h,
          alignSelf: align,
          backgroundColor: bg,
          resizeMode: contentFit === "cover" ? "cover" : 
                     contentFit === "contain" ? "contain" : 
                     contentFit === "fill" ? "stretch" : "center",
        } as ImageStyle,
        style,
      ]}
      {...rest}
    />
  );
};

export default Image;
