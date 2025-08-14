import React, { createContext, useContext, useState, ReactNode } from 'react';
import { theme as defaultTheme } from '@s2mangas/core';

// Tipos para o tema
export interface ThemeColors {
  background: string;
  primary: string;
  secondary: string;
  destructive: string;
  ghost: string;
  link: string;
  blue: string;
  red: string;
  green: string;
  yellow: string;
  orange: string;
  alert: string;
  warning: string;
  title: string;
  label: string;
  textPrimary: string;
  textSecondary: string;
  textGhost: string;
  textLink: string;
  borderPrimary: string;
  borderSecondary: string;
  borderDestructive: string;
  borderGhost: string;
  true: string;
  false: string;
  muted: string;
  activeText: string;
  text: string;
}

export interface ThemeSizes {
  headtitle: number;
  title: number;
  label: number;
  sublabel: number;
  small: number;
}

export interface ThemeFonts {
  black: string;
  bold: string;
  medium: string;
  book: string;
}

export interface Theme {
  color: ThemeColors;
  size: ThemeSizes;
  font: ThemeFonts;
}

// Tipos para o contexto
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleTheme: () => void;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

// Temas predefinidos
export const lightTheme: Theme = {
  color: {
    background: "#FFFFFF",
    primary: "#ED274A",
    secondary: "#FF620A",
    destructive: "#e74c3c",
    ghost: "#F5F5F5",
    link: "#3498db",
    blue: "#0092FF",
    red: "#EB5757",
    green: "#27AE60",
    yellow: "#ebd557",
    orange: "#FF620A",
    alert: "#FF620A",
    warning: "#ebd557",
    title: "#1a1a1a",
    label: "#666666",
    textPrimary: "#ED274A",
    textSecondary: "#FF620A",
    textGhost: "#1a1a1a",
    textLink: "#3498db",
    borderPrimary: "#ED274A",
    borderSecondary: "#FF620A",
    borderDestructive: "#e74c3c",
    borderGhost: "#E0E0E0",
    true: "#ED274A",
    false: "#CCCCCC",
    muted: "#999999",
    activeText: "#1a1a1a",
    text: "#333333"
  },
  size: {
    headtitle: 32,
    title: 24,
    label: 18,
    sublabel: 16,
    small: 12
  },
  font: {
    black: "Font_Black",
    bold: "Font_Bold",
    medium: "Font_Medium",
    book: "Font_Book"
  }
};

export const darkTheme: Theme = {
  color: {
    background: "#000000",
    primary: "#ED274A",
    secondary: "#FF620A",
    destructive: "#e74c3c",
    ghost: "#303030",
    link: "#3498db",
    blue: "#0092FF",
    red: "#EB5757",
    green: "#27AE60",
    yellow: "#ebd557",
    orange: "#FF620A",
    alert: "#FF620A",
    warning: "#ebd557",
    title: "#f1f1f1",
    label: "#B2B2B2",
    textPrimary: "#ED274A",
    textSecondary: "#FF620A",
    textGhost: "#ffffff",
    textLink: "#303030",
    borderPrimary: "#ED274A",
    borderSecondary: "#FF620A",
    borderDestructive: "#e74c3c",
    borderGhost: "#303030",
    true: "#ED274A",
    false: "#505050",
    muted: "#d1d1d1",
    activeText: "#f1f1f1",
    text: "#d1d1d1"
  },
  size: {
    headtitle: 32,
    title: 24,
    label: 18,
    sublabel: 16,
    small: 12
  },
  font: {
    black: "Font_Black",
    bold: "Font_Bold",
    medium: "Font_Medium",
    book: "Font_Book"
  }
};

// Contexto do tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personalizado para usar o tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

// Hook para acessar apenas o tema atual
export const useThemeColors = (): ThemeColors => {
  const { theme } = useTheme();
  return theme.color;
};

export const useThemeSizes = (): ThemeSizes => {
  const { theme } = useTheme();
  return theme.size;
};

export const useThemeFonts = (): ThemeFonts => {
  const { theme } = useTheme();
  return theme.font;
};

// Props do provider
export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
  initialIsDark?: boolean;
}

// Componente provider
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = defaultTheme,
  initialIsDark = true
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme as Theme);
  const [isDark, setIsDark] = useState<boolean>(initialIsDark);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    setTheme(newIsDark ? darkTheme : lightTheme);
  };

  const setDarkTheme = () => {
    setIsDark(true);
    setTheme(darkTheme);
  };

  const setLightTheme = () => {
    setIsDark(false);
    setTheme(lightTheme);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    isDark,
    toggleTheme,
    setDarkTheme,
    setLightTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
