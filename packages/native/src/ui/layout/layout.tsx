import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import type { ViewStyle } from "react-native";
import { theme } from '@s2mangas/core';

interface LayoutProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  mh?: number;
  mv?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  ph?: number;
  pv?: number;
  gv?: number; // Gap vertical
  gh?: number; // Gap horizontal
  testID?: string;
}

export const Column = ({
  children,
  style,
  justify = 'flex-start',
  align = 'stretch',
  mh = 0,
  mv = 0,
  ph = 0,
  pv = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  gv = 0,
  gh = 0,
  testID,
}: LayoutProps) => {
  const marginStyle = mh || mv ? {
    marginHorizontal: mh,
    marginVertical: mv
  } : {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr
  };

  const paddingStyle = ph || pv ? {
    paddingHorizontal: ph,
    paddingVertical: pv
  } : {
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr
  };

  const combinedStyle = {
    justifyContent: justify,
    alignItems: align,
    ...marginStyle,
    ...paddingStyle
  };

  const gapStyle = {
    rowGap: gv,
    columnGap: gh,
  };

  return (
    <View testID={testID} style={[styles.column, combinedStyle, gapStyle, style]}>
      {children}
    </View>
  );
};

const Row = ({
  children,
  style,
  justify = 'flex-start',
  align = 'center',
  mh = 0,
  mv = 0,
  ph = 0,
  pv = 0,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
  pt = 0,
  pb = 0,
  pl = 0,
  pr = 0,
  gv = 0,
  gh = 0,
  testID,
}: LayoutProps) => {
  const marginStyle = mh || mv ? {
    marginHorizontal: mh,
    marginVertical: mv
  } : {
    marginTop: mt,
    marginBottom: mb,
    marginLeft: ml,
    marginRight: mr
  };

  const paddingStyle = ph || pv ? {
    paddingHorizontal: ph,
    paddingVertical: pv
  } : {
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr
  };

  const combinedStyle = {
    justifyContent: justify,
    alignItems: align,
    ...marginStyle,
    ...paddingStyle
  };
  const gapStyle = {
    rowGap: gv,
    columnGap: gh,
  };

  return (
    <View testID={testID} style={[styles.row, combinedStyle, gapStyle, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

const Main = ({children, style = {}, testID}: {children?: React.ReactNode, style?: ViewStyle, testID?: string}) => {
  return (
    <View testID={testID} style={[{ flex: 1, backgroundColor: theme.color.background, paddingTop: 0 }, style]}>
      {children ?? <Text>Hello World</Text>}
    </View>
  );
};

const ScrollHorizontal = ({children, style = {}, contentContainerStyle = {}, testID, pagingEnabled = false}: {children?: React.ReactNode, style?: ViewStyle, contentContainerStyle?: ViewStyle, testID?: string, pagingEnabled?: boolean}) => {
  return (
    <ScrollView testID={testID} pagingEnabled={pagingEnabled || false} style={style} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={contentContainerStyle}>
      {children}
    </ScrollView>
  );
};

const ScrollVertical = ({children, style = {}, contentContainerStyle = {}, testID}: {children?: React.ReactNode, style?: ViewStyle, contentContainerStyle?: ViewStyle, testID?: string}) => {
  return (
    <ScrollView testID={testID} style={style} showsVerticalScrollIndicator={false} contentContainerStyle={contentContainerStyle}>
      {children}
    </ScrollView>
  );
};

export { Row, Main, ScrollHorizontal, ScrollVertical };
