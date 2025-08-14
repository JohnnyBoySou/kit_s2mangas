import React, { createContext, useContext, useState, ReactNode } from 'react';

// Tipos para cores
export interface ColorPalette {
  // Cores primárias
  primary: string;
  secondary: string;
  accent: string;
  
  // Cores semânticas
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Cores neutras
  white: string;
  black: string;
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  
  // Cores de fundo
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  
  // Cores de texto
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
  
  // Cores de borda
  border: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

// Paleta de cores padrão
export const defaultColorPalette: ColorPalette = {
  primary: '#ED274A',
  secondary: '#FF620A',
  accent: '#3498db',
  
  success: '#27AE60',
  warning: '#ebd557',
  error: '#e74c3c',
  info: '#0092FF',
  
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
  },
  
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    tertiary: '#9CA3AF',
    inverse: '#FFFFFF',
  },
  
  border: {
    primary: '#E5E7EB',
    secondary: '#F3F4F6',
    tertiary: '#F9FAFB',
  },
};

// Paleta de cores escura
export const darkColorPalette: ColorPalette = {
  primary: '#ED274A',
  secondary: '#FF620A',
  accent: '#3498db',
  
  success: '#27AE60',
  warning: '#ebd557',
  error: '#e74c3c',
  info: '#0092FF',
  
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#111827',
    100: '#1F2937',
    200: '#374151',
    300: '#4B5563',
    400: '#6B7280',
    500: '#9CA3AF',
    600: '#D1D5DB',
    700: '#E5E7EB',
    800: '#F3F4F6',
    900: '#F9FAFB',
  },
  
  background: {
    primary: '#000000',
    secondary: '#111827',
    tertiary: '#1F2937',
  },
  
  text: {
    primary: '#F9FAFB',
    secondary: '#D1D5DB',
    tertiary: '#9CA3AF',
    inverse: '#111827',
  },
  
  border: {
    primary: '#374151',
    secondary: '#1F2937',
    tertiary: '#111827',
  },
};

// Tipos para o contexto
interface ColorContextType {
  colors: ColorPalette;
  setColors: (colors: ColorPalette) => void;
  setDarkMode: () => void;
  setLightMode: () => void;
  isDarkMode: boolean;
  getColor: (path: string) => string;
  getContrastColor: (backgroundColor: string) => string;
}

// Contexto das cores
const ColorContext = createContext<ColorContextType | undefined>(undefined);

// Hook personalizado para usar as cores
export const useColors = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColors deve ser usado dentro de um ColorProvider');
  }
  return context;
};

// Hook para acessar apenas a paleta de cores
export const useColorPalette = (): ColorPalette => {
  const { colors } = useColors();
  return colors;
};

// Função utilitária para obter cor por caminho (ex: "gray.500", "text.primary")
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || '';
};

// Função para calcular cor de contraste
const getContrastColor = (backgroundColor: string): string => {
  // Remove o # se presente
  const hex = backgroundColor.replace('#', '');
  
  // Converte para RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calcula luminância
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Retorna branco ou preto baseado na luminância
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Props do provider
export interface ColorProviderProps {
  children: ReactNode;
  initialColors?: ColorPalette;
  initialIsDarkMode?: boolean;
}

// Componente provider
export const ColorProvider: React.FC<ColorProviderProps> = ({
  children,
  initialColors = defaultColorPalette,
  initialIsDarkMode = false
}) => {
  const [colors, setColors] = useState<ColorPalette>(initialColors);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialIsDarkMode);

  const setDarkMode = () => {
    setIsDarkMode(true);
    setColors(darkColorPalette);
  };

  const setLightMode = () => {
    setIsDarkMode(false);
    setColors(defaultColorPalette);
  };

  const getColor = (path: string): string => {
    return getNestedValue(colors, path);
  };

  const getContrastColorForBackground = (backgroundColor: string): string => {
    return getContrastColor(backgroundColor);
  };

  const value: ColorContextType = {
    colors,
    setColors,
    setDarkMode,
    setLightMode,
    isDarkMode,
    getColor,
    getContrastColor: getContrastColorForBackground
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
