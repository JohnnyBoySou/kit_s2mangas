import React from "react";
import { theme } from "@s2mangas/core";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  name?: string;
  style?: React.CSSProperties;
  testID?: string;
  className?: string;
  onError?: () => void;
  onLoad?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  name,
  style,
  testID,
  className,
  onError,
  onLoad,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96,
  };

  const avatarSize = sizeMap[size];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getBackgroundColor = (name: string) => {
    const colors = [
      theme.color.primary,
      theme.color.secondary,
      theme.color.blue,
      theme.color.muted,
      theme.color.destructive,
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const containerStyles: React.CSSProperties = {
    width: `${avatarSize}px`,
    height: `${avatarSize}px`,
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: name ? getBackgroundColor(name) : theme.color.muted,
    border: `2px solid ${theme.color.ghost}`,
    ...style,
  };

  // Estilos da imagem
  const imageStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: imageLoaded && !imageError ? "block" : "none",
  };

  // Estilos do fallback (iniciais)
  const fallbackStyles: React.CSSProperties = {
    fontFamily: theme.font.bold,
    fontSize: `${Math.max(12, avatarSize * 0.4)}px`,
    color: theme.color.textGhost,
    textAlign: "center",
    lineHeight: 1,
    display: !src || imageError || !imageLoaded ? "block" : "none",
  };

  const handleImageError = () => {
    setImageError(true);
    onError?.();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  return (
    <div data-testid={testID} style={containerStyles} className={className}>
      {src && !imageError && (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          style={imageStyles}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
      <div style={fallbackStyles}>{name ? getInitials(name) : "?"}</div>
    </div>
  );
};

export default Avatar;
