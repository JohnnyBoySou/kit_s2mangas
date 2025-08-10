import React from "react";
import { View } from "react-native";
// Interface para os props do Loader
interface LineProps {
  color?: string;
  testID?: string;
  visible?: boolean;
  accessibilityLabel?: string;
  accessibilityElementsHidden?: boolean;
  accessibilityRole?: "list" | "none";
  height?: number;
  width?: number;
  mv?: number;
  mh?: number;
  opacity?: number;
}

const Line: React.FC<LineProps> = ({ color, accessibilityRole, height = 2, width = 100, mv = 0, mh = 0, opacity, testID, accessibilityElementsHidden = false, accessibilityLabel }) => {
  return (
    <View
      style={{
        width: width,
        flexDirection: "row",
        display: "flex",
        height: height,
        backgroundColor: color || "#fff",
        marginVertical: mv,
        marginHorizontal: mh,
        opacity: opacity || 1,

      }}
      accessibilityLabel={accessibilityLabel}
      accessibilityElementsHidden={accessibilityElementsHidden}
      testID={testID}
      accessibilityRole={accessibilityRole ?? "list"}
    />
  );
};

export default Line;
