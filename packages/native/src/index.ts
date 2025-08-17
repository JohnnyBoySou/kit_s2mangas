// Export all UI components
export * from './ui';

// Export specific components for direct access
export { default as Button } from './ui/button/button';
export { default as Avatar } from './ui/avatar/avatar';
export { default as Input } from './ui/input/input';
export { default as InputOTP } from './ui/otp/otp';
export { default as Toast } from './ui/toast/toast';
export { default as Sheet } from './ui/sheet/sheet';
export { default as Select } from './ui/select/select';
export { default as Loader } from './ui/loader/loader';
export { default as Toggle } from './ui/toggle/toggle';
export { default as Badge } from './ui/badge/badge';
export { default as CheckBox } from './ui/checkbox/checkbox';
export { default as Tabs } from './ui/tabs/tabs';
export { default as Image } from './ui/image/image';
export { default as FlatList } from './ui/flatlist/flatlist';
export { default as Switch } from './ui/switch/switch';
export { default as Icon } from './ui/icon/icon';
export { default as Card } from './ui/card/card';
export { default as Modal } from './ui/modal/modal';
export { default as Divider } from './ui/divider/divider';
export { default as Radio } from './ui/radio/radio';

// Export layout components
export { Column, Row, Main, ScrollHorizontal, ScrollVertical, } from './ui/layout/layout';

// Export text components
export { Title, HeadTitle, Label, SubLabel, U, Description } from './ui/text/text';

// Export utility components
export { default as Skeleton } from './ui/skeleton/skeleton';
export { default as MultiStepProgress } from './ui/progress/progress';

// Export theme and utilities from core
export { theme, BREAKPOINTS, Z_INDEX, ANIMATION, BORDER_RADIUS, SHADOWS } from '@s2mangas/core';

// Export providers
export {
  S2MangasProvider,
  ThemeProvider,
  ColorProvider,
  useS2Mangas,
  useTheme,
  useThemeColors,
  useThemeSizes,
  useThemeFonts,
  useColors,
  useColorPalette,
  lightTheme as lightTheme,
  darkTheme as darkTheme,
  defaultColorPalette as defaultColorPalette,
  darkColorPalette as darkColorPalette
} from './providers';

export type {
  Theme,
  ThemeColors,
  ThemeSizes,
  ThemeFonts,
  ColorPalette
} from './providers';

// Export constants
export { SCREEN_WIDTH, SCREEN_HEIGHT } from './ui';

// Export React Native components for convenience
export { View, Pressable } from 'react-native';
