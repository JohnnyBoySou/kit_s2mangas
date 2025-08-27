<div align="center">

# @s2mangas/core

<p align="center">
  <strong>🎨 Design System Core Package for S2Mangas UI Kit</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@s2mangas/core?label=version&color=%234F46E5" alt="NPM Version" />
  <img src="https://img.shields.io/npm/dm/@s2mangas/core?color=%234F46E5" alt="NPM Downloads" />
  <img src="https://img.shields.io/bundlephobia/minzip/@s2mangas/core?label=bundle%20size&color=%234F46E5" alt="Bundle Size" />
  <img src="https://img.shields.io/npm/l/@s2mangas/core?color=%234F46E5" alt="License" />
</p>

<p align="center">
  Design tokens, themes, constants and utilities shared across S2Mangas UI components
</p>

</div>

---

## ✨ Features

- 🎯 **Design Tokens**: Consistent color palettes, typography and spacing system
- 🌙 **Theme System**: Complete light/dark theme support with customizable colors
- 📐 **Layout Constants**: Breakpoints, z-index layers, animation durations
- 🛠️ **Utilities**: Helper functions for colors, accessibility and responsive design
- 🔤 **Typography**: Curated font families and size scales
- 📱 **Cross-Platform**: Works with both React Web and React Native
- 🧪 **TypeScript**: Full type definitions for better developer experience

## 📦 Installation

```bash
npm install @s2mangas/core
# or
yarn add @s2mangas/core
# or
pnpm add @s2mangas/core
```

## 🚀 Quick Start

### Theme System

```typescript
import { theme } from '@s2mangas/core';

// Colors
const primaryColor = theme.color.primary;     // "#ED274A" 
const backgroundColor = theme.color.background; // "#000000"
const textColor = theme.color.title;         // "#f1f1f1"

// Typography
const titleSize = theme.size.title;          // 24
const boldFont = theme.font.bold;            // "Font_Bold"

// Spacing
const spacing = theme.spacing.md;            // 16
```

### Constants and Breakpoints

```typescript
import { BREAKPOINTS, Z_INDEX, ANIMATION } from '@s2mangas/core';

// Responsive breakpoints
const mobile = BREAKPOINTS.mobile;           // 480
const tablet = BREAKPOINTS.tablet;           // 768
const desktop = BREAKPOINTS.desktop;         // 1024

// Z-index layers
const modalLayer = Z_INDEX.modal;            // 1050
const tooltipLayer = Z_INDEX.tooltip;        // 1060

// Animation durations
const fastTransition = ANIMATION.fast;       // 150ms
const normalTransition = ANIMATION.normal;   // 300ms
```

### TypeScript Support

```typescript
import type { 
  Theme, 
  ColorVariant, 
  SizeVariant, 
  A11yState 
} from '@s2mangas/core';

// Use theme type for custom themes
const customTheme: Theme = {
  color: { primary: '#custom-color' },
  // ... other theme properties
};

// Component props with design system types
interface ButtonProps {
  variant?: ColorVariant;    // 'primary' | 'secondary' | 'destructive'
  size?: SizeVariant;        // 'sm' | 'md' | 'lg'
  accessibility?: A11yState; // { disabled?: boolean; ... }
}
```

### Utility Functions

```typescript
import { hexToRgba, getContrastColor, SIZES } from '@s2mangas/core';

// Color utilities
const transparentColor = hexToRgba('#ED274A', 0.5); // rgba(237, 39, 74, 0.5)
const contrastColor = getContrastColor('#000000');   // '#FFFFFF'

// Size utilities
const mediumSize = SIZES.md;  // 16
const largeSize = SIZES.lg;   // 20
```

## 🎨 Theme Structure

The core package provides a comprehensive theme system:

### Colors
```typescript
theme.color = {
  // Brand colors
  primary: "#ED274A",      // Main brand red
  secondary: "#FF620A",    // Secondary orange
  
  // Semantic colors  
  blue: "#0092FF",
  red: "#EB5757", 
  green: "#27AE60",
  yellow: "#ebd557",
  
  // Neutral scales
  white: "#FFFFFF",
  black: "#000000", 
  off10: "#101010",        // Dark grays
  off20: "#202020",
  off30: "#303030",
  // ... up to off50
  
  // Text colors
  title: "#f1f1f1",
  label: "#B2B2B2",
  
  // Status colors
  destructive: "#e74c3c",
  ghost: "#303030",
  alert: "#FF620A",
  warning: "#ebd557",
}
```

### Typography
```typescript
theme.font = {
  bold: "Font_Bold",
  medium: "Font_Medium", 
  regular: "Font_Regular",
  // Additional font families included
}

theme.size = {
  title: 24,
  subtitle: 20,
  label: 18,
  body: 16,
  caption: 14,
}
```

## 📁 Package Structure

```
@s2mangas/core/
├── theme.ts       # Complete theme system with colors, fonts, sizes
├── constants.ts   # Breakpoints, z-index, animation constants  
├── types.ts       # TypeScript definitions and interfaces
├── utils.ts       # Utility functions for colors and layout
├── fonts/         # Font files and declarations
└── index.ts       # Main exports
```

## 🔧 Custom Themes

Create your own theme extending the base theme:

```typescript
import { theme } from '@s2mangas/core';

const customTheme = {
  ...theme,
  color: {
    ...theme.color,
    primary: '#your-brand-color',
    secondary: '#your-secondary-color',
  }
};
```

## 🌐 Cross-Platform Usage

### React Web
```typescript
import { theme, BREAKPOINTS } from '@s2mangas/core';

const styles = {
  container: {
    backgroundColor: theme.color.background,
    [`@media (min-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: theme.spacing.lg,
    }
  }
};
```

### React Native  
```typescript
import { theme, SCREEN_WIDTH } from '@s2mangas/core';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.background,
    padding: theme.spacing.md,
    width: SCREEN_WIDTH,
  }
});
```

## 📚 Related Packages

- **[@s2mangas/react](https://www.npmjs.com/package/@s2mangas/react)** - React Web UI components
- **[@s2mangas/native](https://www.npmjs.com/package/@s2mangas/native)** - React Native UI components

## 🤝 Contributing

This package is part of the [S2Mangas UI Kit](https://github.com/JohnnyBoySou/kit_s2mangas) monorepo.

1. Clone the repository: `git clone https://github.com/JohnnyBoySou/kit_s2mangas.git`
2. Install dependencies: `pnpm install`
3. Make your changes in `packages/core/`
4. Run tests: `pnpm test`
5. Submit a pull request

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
