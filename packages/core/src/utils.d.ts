export declare const hexToRgba: (hex: string, alpha?: number) => string;
export declare const isValidHexColor: (color: string) => boolean;
export declare const getContrastColor: (backgroundColor: string) => string;
export declare const SIZES: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 16;
    readonly lg: 24;
    readonly xl: 32;
    readonly xxl: 48;
};
export declare const SPACING: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 16;
    readonly lg: 24;
    readonly xl: 32;
    readonly xxl: 48;
};
export type Size = keyof typeof SIZES;
export type Spacing = keyof typeof SPACING;
export type MaskType = "CPF" | "PHONE" | "CEP" | "NASCIMENTO" | "CURRENCY";
export interface MaskConfig {
    maskFunction: (text: string) => string;
    maxLength?: number;
}
export declare const getMaskFunction: (mask?: MaskType) => MaskConfig;
export declare function applyCpfMask(value: string): string;
export declare function applyCepMask(value: string): string;
export declare function applyPhoneMask(value: string): string;
export declare function applyBirthdateMask(value: string): string;
export declare function applyCurrencyMask(value: string): string;
//# sourceMappingURL=utils.d.ts.map