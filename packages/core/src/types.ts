// Tipos de acessibilidade
export type A11yState = { 
  disabled?: boolean; 
  selected?: boolean; 
  busy?: boolean; 
  expanded?: boolean; 
  checked?: boolean 
};

// Tipos de cores
export type ColorVariant = 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link';
export type ColorScheme = 'light' | 'dark';

// Tipos de tamanho
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Tipos de espaçamento
export type SpacingVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// Tipos de fonte
export type FontWeight = 'black' | 'bold' | 'medium' | 'book';

// Tipos de tema
export interface Theme {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    destructive: string;
    ghost: string;
    link: string;
    [key: string]: string;
  };
  sizes: {
    headtitle: number;
    title: number;
    label: number;
    sublabel: number;
    small: number;
  };
  fonts: {
    black: string;
    bold: string;
    medium: string;
    book: string;
  };
}
