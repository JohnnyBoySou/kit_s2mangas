import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

// Interface para os props do Loader
interface LoaderProps {
  size?: ActivityIndicatorProps["size"]; // Pode ser "small", "large" ou número
  color?: string;
  testID?: string;
  visible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: "progressbar" | "alert";
}

// Componente Loader tipado
const Loader: React.FC<LoaderProps> = ({
  size = 24,
  color = "#fff",
  testID,
  visible = true,
  accessibilityLabel,
  accessibilityRole,
}) => {
  if(visible === false) return null;
  return <ActivityIndicator testID={testID} size={size} color={color} accessibilityLabel={accessibilityLabel ?? "loader"} accessibilityRole={accessibilityRole ?? "progressbar"}/>;
};

export default Loader;
