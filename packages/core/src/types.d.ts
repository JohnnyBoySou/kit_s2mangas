export type A11yState = {
    disabled?: boolean;
    selected?: boolean;
    busy?: boolean;
    expanded?: boolean;
    checked?: boolean;
};
export type ColorVariant = 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link';
export type ColorScheme = 'light' | 'dark';
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type SpacingVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type FontWeight = 'black' | 'bold' | 'medium' | 'book';
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
//# sourceMappingURL=types.d.ts.map