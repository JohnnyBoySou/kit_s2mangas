import { 
  BREAKPOINTS, 
  Z_INDEX, 
  ANIMATION, 
  BORDER_RADIUS, 
  SHADOWS,
  type Breakpoint,
  type ZIndex,
  type Animation,
  type BorderRadius,
  type Shadow
} from './constants';

describe('Constants', () => {
  describe('BREAKPOINTS', () => {
    it('should have all required breakpoint properties', () => {
      expect(BREAKPOINTS).toHaveProperty('mobile');
      expect(BREAKPOINTS).toHaveProperty('tablet');
      expect(BREAKPOINTS).toHaveProperty('desktop');
      expect(BREAKPOINTS).toHaveProperty('wide');
    });

    it('should have numeric breakpoint values', () => {
      expect(typeof BREAKPOINTS.mobile).toBe('number');
      expect(typeof BREAKPOINTS.tablet).toBe('number');
      expect(typeof BREAKPOINTS.desktop).toBe('number');
      expect(typeof BREAKPOINTS.wide).toBe('number');
    });

    it('should have correct breakpoint hierarchy', () => {
      expect(BREAKPOINTS.mobile).toBeLessThan(BREAKPOINTS.tablet);
      expect(BREAKPOINTS.tablet).toBeLessThan(BREAKPOINTS.desktop);
      expect(BREAKPOINTS.desktop).toBeLessThan(BREAKPOINTS.wide);
    });

    it('should have specific breakpoint values', () => {
      expect(BREAKPOINTS.mobile).toBe(480);
      expect(BREAKPOINTS.tablet).toBe(768);
      expect(BREAKPOINTS.desktop).toBe(1024);
      expect(BREAKPOINTS.wide).toBe(1200);
    });
  });

  describe('Z_INDEX', () => {
    it('should have all required z-index properties', () => {
      expect(Z_INDEX).toHaveProperty('dropdown');
      expect(Z_INDEX).toHaveProperty('sticky');
      expect(Z_INDEX).toHaveProperty('fixed');
      expect(Z_INDEX).toHaveProperty('modalBackdrop');
      expect(Z_INDEX).toHaveProperty('modal');
      expect(Z_INDEX).toHaveProperty('popover');
      expect(Z_INDEX).toHaveProperty('tooltip');
    });

    it('should have numeric z-index values', () => {
      expect(typeof Z_INDEX.dropdown).toBe('number');
      expect(typeof Z_INDEX.sticky).toBe('number');
      expect(typeof Z_INDEX.fixed).toBe('number');
      expect(typeof Z_INDEX.modalBackdrop).toBe('number');
      expect(typeof Z_INDEX.modal).toBe('number');
      expect(typeof Z_INDEX.popover).toBe('number');
      expect(typeof Z_INDEX.tooltip).toBe('number');
    });

    it('should have correct z-index hierarchy', () => {
      expect(Z_INDEX.dropdown).toBeLessThan(Z_INDEX.sticky);
      expect(Z_INDEX.sticky).toBeLessThan(Z_INDEX.fixed);
      expect(Z_INDEX.fixed).toBeLessThan(Z_INDEX.modalBackdrop);
      expect(Z_INDEX.modalBackdrop).toBeLessThan(Z_INDEX.modal);
      expect(Z_INDEX.modal).toBeLessThan(Z_INDEX.popover);
      expect(Z_INDEX.popover).toBeLessThan(Z_INDEX.tooltip);
    });

    it('should have specific z-index values', () => {
      expect(Z_INDEX.dropdown).toBe(1000);
      expect(Z_INDEX.sticky).toBe(1020);
      expect(Z_INDEX.fixed).toBe(1030);
      expect(Z_INDEX.modalBackdrop).toBe(1040);
      expect(Z_INDEX.modal).toBe(1050);
      expect(Z_INDEX.popover).toBe(1060);
      expect(Z_INDEX.tooltip).toBe(1070);
    });
  });

  describe('ANIMATION', () => {
    it('should have all required animation properties', () => {
      expect(ANIMATION).toHaveProperty('fast');
      expect(ANIMATION).toHaveProperty('normal');
      expect(ANIMATION).toHaveProperty('slow');
    });

    it('should have numeric animation values', () => {
      expect(typeof ANIMATION.fast).toBe('number');
      expect(typeof ANIMATION.normal).toBe('number');
      expect(typeof ANIMATION.slow).toBe('number');
    });

    it('should have correct animation hierarchy', () => {
      expect(ANIMATION.fast).toBeLessThan(ANIMATION.normal);
      expect(ANIMATION.normal).toBeLessThan(ANIMATION.slow);
    });

    it('should have specific animation values', () => {
      expect(ANIMATION.fast).toBe(150);
      expect(ANIMATION.normal).toBe(250);
      expect(ANIMATION.slow).toBe(350);
    });
  });

  describe('BORDER_RADIUS', () => {
    it('should have all required border radius properties', () => {
      expect(BORDER_RADIUS).toHaveProperty('none');
      expect(BORDER_RADIUS).toHaveProperty('sm');
      expect(BORDER_RADIUS).toHaveProperty('md');
      expect(BORDER_RADIUS).toHaveProperty('lg');
      expect(BORDER_RADIUS).toHaveProperty('xl');
      expect(BORDER_RADIUS).toHaveProperty('full');
    });

    it('should have numeric border radius values', () => {
      expect(typeof BORDER_RADIUS.none).toBe('number');
      expect(typeof BORDER_RADIUS.sm).toBe('number');
      expect(typeof BORDER_RADIUS.md).toBe('number');
      expect(typeof BORDER_RADIUS.lg).toBe('number');
      expect(typeof BORDER_RADIUS.xl).toBe('number');
      expect(typeof BORDER_RADIUS.full).toBe('number');
    });

    it('should have correct border radius hierarchy', () => {
      expect(BORDER_RADIUS.none).toBeLessThan(BORDER_RADIUS.sm);
      expect(BORDER_RADIUS.sm).toBeLessThan(BORDER_RADIUS.md);
      expect(BORDER_RADIUS.md).toBeLessThan(BORDER_RADIUS.lg);
      expect(BORDER_RADIUS.lg).toBeLessThan(BORDER_RADIUS.xl);
      expect(BORDER_RADIUS.xl).toBeLessThan(BORDER_RADIUS.full);
    });

    it('should have specific border radius values', () => {
      expect(BORDER_RADIUS.none).toBe(0);
      expect(BORDER_RADIUS.sm).toBe(2);
      expect(BORDER_RADIUS.md).toBe(4);
      expect(BORDER_RADIUS.lg).toBe(8);
      expect(BORDER_RADIUS.xl).toBe(12);
      expect(BORDER_RADIUS.full).toBe(9999);
    });
  });

  describe('SHADOWS', () => {
    it('should have all required shadow properties', () => {
      expect(SHADOWS).toHaveProperty('sm');
      expect(SHADOWS).toHaveProperty('md');
      expect(SHADOWS).toHaveProperty('lg');
    });

    it('should have shadow objects with required properties', () => {
      const shadowProperties = ['shadowColor', 'shadowOffset', 'shadowOpacity', 'shadowRadius', 'elevation'];
      
      shadowProperties.forEach(prop => {
        expect(SHADOWS.sm).toHaveProperty(prop);
        expect(SHADOWS.md).toHaveProperty(prop);
        expect(SHADOWS.lg).toHaveProperty(prop);
      });
    });

    it('should have correct shadow structure', () => {
      expect(SHADOWS.sm.shadowColor).toBe('#000');
      expect(SHADOWS.sm.shadowOffset).toEqual({ width: 0, height: 1 });
      expect(SHADOWS.sm.shadowOpacity).toBe(0.05);
      expect(SHADOWS.sm.shadowRadius).toBe(2);
      expect(SHADOWS.sm.elevation).toBe(1);
    });

    it('should have progressive shadow intensity', () => {
      expect(SHADOWS.sm.shadowOpacity).toBeLessThan(SHADOWS.md.shadowOpacity);
      expect(SHADOWS.md.shadowOpacity).toBeLessThan(SHADOWS.lg.shadowOpacity);
      
      expect(SHADOWS.sm.shadowRadius).toBeLessThan(SHADOWS.md.shadowRadius);
      expect(SHADOWS.md.shadowRadius).toBeLessThan(SHADOWS.lg.shadowRadius);
      
      expect(SHADOWS.sm.elevation).toBeLessThan(SHADOWS.md.elevation);
      expect(SHADOWS.md.elevation).toBeLessThan(SHADOWS.lg.elevation);
    });
  });

  describe('Type exports', () => {
    it('should export Breakpoint type', () => {
      const testBreakpoint: Breakpoint = 'mobile';
      expect(testBreakpoint).toBe('mobile');
    });

    it('should export ZIndex type', () => {
      const testZIndex: ZIndex = 'modal';
      expect(testZIndex).toBe('modal');
    });

    it('should export Animation type', () => {
      const testAnimation: Animation = 'normal';
      expect(testAnimation).toBe('normal');
    });

    it('should export BorderRadius type', () => {
      const testBorderRadius: BorderRadius = 'md';
      expect(testBorderRadius).toBe('md');
    });

    it('should export Shadow type', () => {
      const testShadow: Shadow = 'lg';
      expect(testShadow).toBe('lg');
    });
  });
});
