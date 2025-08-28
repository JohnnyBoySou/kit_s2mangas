<div align="center">

# @s2mangas/native

<p align="center">
  <strong>📱 React Native UI Components Library for S2Mangas Design System</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@s2mangas/native?label=version&color=%2310B981" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@s2mangas/native?color=%2310B981" alt="NPM Downloads" />
  <img src="https://img.shields.io/bundlephobia/minzip/@s2mangas/native?label=bundle%20size&color=%2310B981" alt="Bundle Size" />
  <img src="https://img.shields.io/npm/l/@s2mangas/native?color=%2310B981" alt="License" />
</p>

<p align="center">
  Production-ready React Native components built with TypeScript and S2Mangas design tokens
</p>

</div>

---

## ✨ Features

- 📱 **20+ Components**: Buttons, Inputs, Modals, Sheets, Toasts and more
- 🎨 **Design System**: Built on @s2mangas/core design tokens
- 🌙 **Theme Support**: Light/dark themes with customizable colors
- ♿ **Accessible**: WCAG compliant with screen reader support
- 🚀 **Performance**: Optimized with React Native Reanimated
- 🧪 **TypeScript**: Fully typed with excellent IntelliSense
- 📦 **Tree Shakeable**: Import only what you need
- 🔧 **Customizable**: Extensive styling and theming options

## 📦 Installation

```bash
npm install @s2mangas/native @s2mangas/core
# or
yarn add @s2mangas/native @s2mangas/core  
# or
pnpm add @s2mangas/native @s2mangas/core
```

### Required Peer Dependencies

```bash
# Core React Native dependencies
npm install react-native-reanimated expo-image @gorhom/bottom-sheet

# For React Native CLI projects, also run:
cd ios && pod install
```

### Expo Projects

Add to your `app.json`:

```json
{
  "expo": {
    "plugins": [
      "react-native-reanimated/plugin"
    ]
  }
}
```

## 🚀 Quick Start

### Setup Provider

Wrap your app with the S2MangasProvider:

```tsx
import React from 'react';
import { S2MangasProvider } from '@s2mangas/native';
import App from './App';

export default function Root() {
  return (
    <S2MangasProvider>
      <App />
    </S2MangasProvider>
  );
}
```

### Basic Usage

```tsx
import React from 'react';
import { 
  Button, 
  Card, 
  Title, 
  Description,
  Column 
} from '@s2mangas/native';

export default function WelcomeScreen() {
  return (
    <Column padding={20} gap={16}>
      <Card padding={24}>
        <Title>Welcome to S2Mangas UI!</Title>
        <Description>
          Beautiful React Native components ready to use.
        </Description>
        <Button 
          variant="primary" 
          onPress={() => console.log('Hello!')}
        >
          Get Started
        </Button>
      </Card>
    </Column>
  );
}
```

## 🧩 Components

### Layout & Structure
- **Column** / **Row** - Flexible layout containers
- **Main** - Main content wrapper
- **ScrollHorizontal** / **ScrollVertical** - Scrollable containers  
- **Card** - Elevated content containers
- **Divider** - Visual content separators

### Inputs & Forms
- **Button** - Primary, secondary and ghost button variants
- **Input** - Text input with validation and masking
- **InputOTP** - One-time password input fields
- **CheckBox** - Checkboxes with custom styling
- **Switch** - Toggle switches
- **Radio** - Radio button selections
- **Toggle** - Advanced toggle controls
- **Select** - Dropdown selection menus

### Feedback & Status  
- **Toast** - Temporary notification messages
- **Loader** - Loading indicators and spinners
- **Badge** - Status and count indicators
- **Skeleton** - Content loading placeholders
- **MultiStepProgress** - Step-by-step progress indicators

### Overlays & Navigation
- **Modal** - Full-screen and popup modals
- **Sheet** - Bottom sheet panels (powered by @gorhom/bottom-sheet)
- **Tabs** - Tab navigation components

### Media & Content
- **Avatar** - User profile images with fallbacks
- **Image** - Optimized image component (powered by expo-image)
- **Icon** - Icon system with Lucide React Native
- **FlatList** - Performant lists with built-in styling

### Typography
- **Title** - Main headings
- **HeadTitle** - Large section headers
- **Label** - Form labels and medium text
- **SubLabel** - Secondary labels  
- **Description** - Body text and descriptions
- **U** - Underlined text elements

### Utilities
- **Selectable** - Selectable list items
- **SearchIssues** - Search interface components

## 📱 Component Examples

### Buttons

```tsx
import { Button } from '@s2mangas/native';

// Variants
<Button variant="primary" onPress={handlePress}>Primary</Button>
<Button variant="secondary" onPress={handlePress}>Secondary</Button>
<Button variant="destructive" onPress={handlePress}>Destructive</Button>
<Button variant="ghost" onPress={handlePress}>Ghost</Button>

// Sizes  
<Button size="sm" onPress={handlePress}>Small</Button>
<Button size="md" onPress={handlePress}>Medium</Button>
<Button size="lg" onPress={handlePress}>Large</Button>

// States
<Button disabled onPress={handlePress}>Disabled</Button>
<Button loading onPress={handlePress}>Loading</Button>
```

### Inputs

```tsx
import { Input } from '@s2mangas/native';

<Input 
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>

<Input 
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
  rightIcon="eye"
/>
```

### Modals & Sheets

```tsx
import { Modal, Sheet, Button } from '@s2mangas/native';

// Modal
<Modal visible={isModalVisible} onClose={() => setModalVisible(false)}>
  <Title>Modal Content</Title>
  <Description>This is a modal dialog.</Description>
</Modal>

// Bottom Sheet
<Sheet 
  ref={sheetRef}
  snapPoints={['25%', '50%', '90%']}
>
  <Title>Bottom Sheet</Title>
  <Description>Swipe up for more content.</Description>
</Sheet>
```

### Toast Notifications

```tsx
import { Toast } from '@s2mangas/native';

// Show different toast types
Toast.show({
  type: 'success',
  title: 'Success!',
  message: 'Your action was completed.'
});

Toast.show({
  type: 'error', 
  title: 'Error',
  message: 'Something went wrong.'
});
```

### Layout Components

```tsx
import { Column, Row, Card } from '@s2mangas/native';

<Column gap={16} padding={20}>
  <Card>
    <Row justify="space-between" align="center">
      <Title>Card Title</Title>
      <Badge>New</Badge>
    </Row>
    <Description>Card content goes here.</Description>
  </Card>
</Column>
```

## 🎨 Theming

### Using Theme Provider

```tsx
import { ThemeProvider, lightTheme, darkTheme } from '@s2mangas/native';

<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
  <App />
</ThemeProvider>
```

### Custom Themes

```tsx
import { createTheme } from '@s2mangas/native';

const customTheme = createTheme({
  colors: {
    primary: '#your-brand-color',
    secondary: '#your-secondary-color',
  }
});
```

### Using Theme Hooks

```tsx
import { useTheme, useThemeColors } from '@s2mangas/native';

function MyComponent() {
  const theme = useTheme();
  const colors = useThemeColors();
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.primary }}>Themed Text</Text>
    </View>
  );
}
```

## 🔧 Advanced Usage

### Custom Styling

All components accept style props for customization:

```tsx
<Button 
  style={{ borderRadius: 12 }}
  textStyle={{ fontWeight: '600' }}
>
  Custom Button
</Button>
```

### Accessibility

Components include built-in accessibility support:

```tsx
<Button 
  accessibilityLabel="Save document"
  accessibilityHint="Saves the current document to your device"
>
  Save
</Button>
```

### Animation Support

Components use React Native Reanimated for smooth animations:

```tsx
import { useSharedValue, withSpring } from 'react-native-reanimated';

// Animations are handled internally by components
<Sheet 
  animatedPosition={animatedPosition}
  animationDuration={300}
>
  Content
</Sheet>
```

## 📋 TypeScript Support

Full TypeScript definitions included:

```tsx
import type { 
  ButtonProps, 
  InputProps, 
  ModalProps,
  ThemeColors 
} from '@s2mangas/native';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};
```

## 🧪 Testing

Components are designed to be easily testable:

```tsx
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@s2mangas/native';

test('button calls onPress when pressed', () => {
  const mockPress = jest.fn();
  const { getByText } = render(
    <Button onPress={mockPress}>Test Button</Button>
  );
  
  fireEvent.press(getByText('Test Button'));
  expect(mockPress).toHaveBeenCalled();
});
```

## 📚 Examples

Check out the example app in the repository:

```bash
git clone https://github.com/JohnnyBoySou/kit_s2mangas.git
cd kit_s2mangas/packages/native/example
npm install
npm start
```

## 🔗 Related Packages

- **[@s2mangas/core](https://www.npmjs.com/package/@s2mangas/core)** - Design tokens and theme system
- **[@s2mangas/react](https://www.npmjs.com/package/@s2mangas/react)** - React Web components

## 🤝 Contributing

This package is part of the [S2Mangas UI Kit](https://github.com/JohnnyBoySou/kit_s2mangas) monorepo.

1. Clone the repository: `git clone https://github.com/JohnnyBoySou/kit_s2mangas.git`
2. Install dependencies: `pnpm install`
3. Navigate to native package: `cd packages/native`
4. Start the example app: `pnpm example`
5. Make your changes and test thoroughly
6. Submit a pull request

### Development Scripts

```bash
# Build the package
pnpm build

# Run tests  
pnpm test

# Run example app
pnpm example

# Lint code
pnpm lint

# Type checking
pnpm typecheck
```

## 📄 License

MIT © [JohnnyBoySou](https://github.com/JohnnyBoySou)

---

<div align="center">
  <p>
    <strong>Part of the S2Mangas Design System</strong>
  </p>
  <p>
    <a href="https://github.com/JohnnyBoySou/kit_s2mangas">GitHub</a> •
    <a href="https://www.npmjs.com/org/s2mangas">NPM</a> •
    <a href="https://s2mangas-storybook.vercel.app">Documentation</a>
  </p>
</div>
