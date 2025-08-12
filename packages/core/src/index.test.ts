import { theme, tokens } from './index';
import * as constants from './constants';

describe('Index exports', () => {
  describe('theme', () => {
    it('should export theme as default', () => {
      expect(theme).toBeDefined();
      expect(typeof theme).toBe('object');
      expect(theme).toHaveProperty('color');
      expect(theme).toHaveProperty('size');
      expect(theme).toHaveProperty('font');
    });

    it('should have correct theme structure', () => {
      expect(theme.color.background).toBe('#000000');
      expect(theme.color.primary).toBe('#ED274A');
      expect(theme.size.headtitle).toBe(32);
      expect(theme.font.black).toBe('Font_Black');
    });
  });

  describe('tokens', () => {
    it('should export tokens object', () => {
      expect(tokens).toBeDefined();
      expect(typeof tokens).toBe('object');
    });

    it('should have correct tokens structure', () => {
      expect(tokens).toHaveProperty('colors');
      expect(tokens.colors).toHaveProperty('primary');
      expect(tokens.colors).toHaveProperty('contrastText');
    });

    it('should have correct token values', () => {
      expect(tokens.colors.primary).toBe('#4F46E5');
      expect(tokens.colors.contrastText).toBe('#FFFFFF');
    });
  });

  describe('constants exports', () => {
    it('should export all constants', () => {
      expect(constants.BREAKPOINTS).toBeDefined();
      expect(constants.Z_INDEX).toBeDefined();
      expect(constants.ANIMATION).toBeDefined();
      expect(constants.BORDER_RADIUS).toBeDefined();
      expect(constants.SHADOWS).toBeDefined();
    });
  });

  describe('export consistency', () => {
    it('should maintain consistent exports', () => {
      // Test that all expected exports are available
      expect(theme).toBeDefined();
      expect(tokens).toBeDefined();
      expect(constants.BREAKPOINTS).toBeDefined();
      expect(constants.Z_INDEX).toBeDefined();
      expect(constants.ANIMATION).toBeDefined();
      expect(constants.BORDER_RADIUS).toBeDefined();
      expect(constants.SHADOWS).toBeDefined();
    });
  });
});
