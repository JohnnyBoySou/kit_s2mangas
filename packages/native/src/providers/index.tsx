import React, { ReactNode } from 'react';
import { ThemeProvider, ThemeProviderProps, useTheme } from './theme-provider';
import { ColorProvider, ColorProviderProps, useColors } from './color-provider';

// Re-export dos providers individuais
export { ThemeProvider, useTheme, useThemeColors, useThemeSizes, useThemeFonts, lightTheme, darkTheme } from './theme-provider';
export { ColorProvider, useColors, useColorPalette, defaultColorPalette, darkColorPalette } from './color-provider';
export type { Theme, ThemeColors, ThemeSizes, ThemeFonts, ThemeProviderProps } from './theme-provider';
export type { ColorPalette, ColorProviderProps } from './color-provider';

// Props para o provider combinado
interface CombinedProviderProps {
  children: ReactNode;
  themeProps?: Partial<ThemeProviderProps>;
  colorProps?: Partial<ColorProviderProps>;
}

// Provider combinado que inclui ambos os providers
export const S2MangasProvider: React.FC<CombinedProviderProps> = ({
  children,
  themeProps = {},
  colorProps = {}
}) => {
  return (
    <ThemeProvider {...themeProps}>
      <ColorProvider {...colorProps}>
        {children}
      </ColorProvider>
    </ThemeProvider>
  );
};

// Hook combinado para acessar tanto tema quanto cores
export const useS2Mangas = () => {
  const theme = useTheme();
  const colors = useColors();
  
  return {
    ...theme,
    ...colors,
    // Métodos combinados
    toggleAppearance: () => {
      theme.toggleTheme();
      if (theme.isDark) {
        colors.setDarkMode();
      } else {
        colors.setLightMode();
      }
    },
    setDarkAppearance: () => {
      theme.setDarkTheme();
      colors.setDarkMode();
    },
    setLightAppearance: () => {
      theme.setLightTheme();
      colors.setLightMode();
    }
  };
};

export default S2MangasProvider;
