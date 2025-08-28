export declare const BREAKPOINTS: {
    readonly mobile: 480;
    readonly tablet: 768;
    readonly desktop: 1024;
    readonly wide: 1200;
};
export declare const Z_INDEX: {
    readonly dropdown: 1000;
    readonly sticky: 1020;
    readonly fixed: 1030;
    readonly modalBackdrop: 1040;
    readonly modal: 1050;
    readonly popover: 1060;
    readonly tooltip: 1070;
};
export declare const ANIMATION: {
    readonly fast: 150;
    readonly normal: 250;
    readonly slow: 350;
};
export declare const BORDER_RADIUS: {
    readonly none: 0;
    readonly sm: 2;
    readonly md: 4;
    readonly lg: 8;
    readonly xl: 12;
    readonly full: 9999;
};
export declare const SHADOWS: {
    readonly sm: {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 1;
        };
        readonly shadowOpacity: 0.05;
        readonly shadowRadius: 2;
        readonly elevation: 1;
    };
    readonly md: {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 2;
        };
        readonly shadowOpacity: 0.1;
        readonly shadowRadius: 4;
        readonly elevation: 2;
    };
    readonly lg: {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 4;
        };
        readonly shadowOpacity: 0.15;
        readonly shadowRadius: 8;
        readonly elevation: 4;
    };
};
export type Breakpoint = keyof typeof BREAKPOINTS;
export type ZIndex = keyof typeof Z_INDEX;
export type Animation = keyof typeof ANIMATION;
export type BorderRadius = keyof typeof BORDER_RADIUS;
export type Shadow = keyof typeof SHADOWS;
//# sourceMappingURL=constants.d.ts.map