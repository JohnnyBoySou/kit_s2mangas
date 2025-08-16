import React from "react";
import {
  StyleProp,
  ImageStyle,
  View,
  ViewStyle,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image as ExpoImage } from "expo-image";

interface CustomImageProps {
  src?: string | number;
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
  cachePolicy?: "memory" | "disk" | "memory-disk" | "none";
  priority?: "low" | "normal" | "high";
  source?: ImageSourcePropType;
}

const Image: React.FC<CustomImageProps> = ({
  src,
  w = 0,
  h = 0,
  r = 0,
  align = "center",
  bg,
  style,
  fallback,
  contentFit = "cover",
  onPress,
  onLoad,
  onError,
  testID,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  source,
  cachePolicy = "memory-disk",
  priority = "normal",
  ...rest
}) => {
  // Determina o source da imagem
  const getImageSource = (): ImageSourcePropType | undefined => {
    // Se source foi passado explicitamente, usa ele
    if (source) {
      return source;
    }
    
    // Se src foi passado
    if (src !== undefined) {
      // Se src é um número (require), usa diretamente
      if (typeof src === 'number') {
        return src;
      }
      // Se src é uma string (URL), cria objeto com uri
      if (typeof src === 'string' && src.trim() !== '') {
        return { uri: src };
      }
    }
    
    return undefined;
  };

  const imageSource = getImageSource();
  
  const imageStyle = {
    borderRadius: r,
    width: w,
    height: h,
    alignSelf: align,
    backgroundColor: bg,
  } as ImageStyle;

  const expoImageProps = {
    source: imageSource,
    testID,
    accessibilityLabel,
    accessibilityHint,
    accessibilityRole,
    style: [imageStyle, style],
    contentFit,
    cachePolicy,
    priority,
    onLoad,
    onError,
    ...rest,
  };

  const renderExpoImage = () => {
    return React.createElement(ExpoImage as any, expoImageProps);
  };

  if (fallback) {
    return (
      <Pressable onPress={onPress}>
        <View
          style={{ position: "relative", width: w, height: h, backgroundColor: bg || "#202020", borderRadius: r, overflow: "hidden" } as ViewStyle}
        >
          {renderExpoImage()}
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
        {renderExpoImage()}
      </Pressable>
    );
  }

  return renderExpoImage();
};

export default Image;
