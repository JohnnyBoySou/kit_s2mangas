import { theme } from './theme';

describe('Theme', () => {
  describe('color', () => {
    it('should have all required color properties', () => {
      expect(theme.color).toBeDefined();
      expect(theme.color.background).toBeDefined();
      expect(theme.color.primary).toBeDefined();
      expect(theme.color.secondary).toBeDefined();
      expect(theme.color.destructive).toBeDefined();
      expect(theme.color.ghost).toBeDefined();
      expect(theme.color.link).toBeDefined();
    });

    it('should have valid hex color values', () => {
      const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
      
      expect(theme.color.background).toMatch(hexColorRegex);
      expect(theme.color.primary).toMatch(hexColorRegex);
      expect(theme.color.secondary).toMatch(hexColorRegex);
      expect(theme.color.destructive).toMatch(hexColorRegex);
      expect(theme.color.ghost).toMatch(hexColorRegex);
      expect(theme.color.link).toMatch(hexColorRegex);
    });

    it('should have semantic color values', () => {
      expect(theme.color.background).toBe('#000000');
      expect(theme.color.primary).toBe('#ED274A');
      expect(theme.color.secondary).toBe('#FF620A');
      expect(theme.color.destructive).toBe('#e74c3c');
      expect(theme.color.ghost).toBe('#303030');
      expect(theme.color.link).toBe('#3498db');
    });

    it('should have text color variants', () => {
      expect(theme.color.textPrimary).toBeDefined();
      expect(theme.color.textSecondary).toBeDefined();
      expect(theme.color.textGhost).toBeDefined();
      expect(theme.color.textLink).toBeDefined();
      expect(theme.color.title).toBeDefined();
      expect(theme.color.label).toBeDefined();
    });

    it('should have border color variants', () => {
      expect(theme.color.borderPrimary).toBeDefined();
      expect(theme.color.borderSecondary).toBeDefined();
      expect(theme.color.borderDestructive).toBeDefined();
      expect(theme.color.borderGhost).toBeDefined();
    });
  });

  describe('size', () => {
    it('should have all required size properties', () => {
      expect(theme.size).toBeDefined();
      expect(theme.size.headtitle).toBeDefined();
      expect(theme.size.title).toBeDefined();
      expect(theme.size.label).toBeDefined();
      expect(theme.size.sublabel).toBeDefined();
      expect(theme.size.small).toBeDefined();
    });

    it('should have numeric size values', () => {
      expect(typeof theme.size.headtitle).toBe('number');
      expect(typeof theme.size.title).toBe('number');
      expect(typeof theme.size.label).toBe('number');
      expect(typeof theme.size.sublabel).toBe('number');
      expect(typeof theme.size.small).toBe('number');
    });

    it('should have correct size hierarchy', () => {
      expect(theme.size.headtitle).toBeGreaterThan(theme.size.title);
      expect(theme.size.title).toBeGreaterThan(theme.size.label);
      expect(theme.size.label).toBeGreaterThan(theme.size.sublabel);
      expect(theme.size.sublabel).toBeGreaterThan(theme.size.small);
    });

    it('should have specific size values', () => {
      expect(theme.size.headtitle).toBe(32);
      expect(theme.size.title).toBe(24);
      expect(theme.size.label).toBe(18);
      expect(theme.size.sublabel).toBe(16);
      expect(theme.size.small).toBe(12);
    });
  });

  describe('font', () => {
    it('should have all required font properties', () => {
      expect(theme.font).toBeDefined();
      expect(theme.font.black).toBeDefined();
      expect(theme.font.bold).toBeDefined();
      expect(theme.font.medium).toBeDefined();
      expect(theme.font.book).toBeDefined();
    });

    it('should have string font values', () => {
      expect(typeof theme.font.black).toBe('string');
      expect(typeof theme.font.bold).toBe('string');
      expect(typeof theme.font.medium).toBe('string');
      expect(typeof theme.font.book).toBe('string');
    });

    it('should have specific font values', () => {
      expect(theme.font.black).toBe('Font_Black');
      expect(theme.font.bold).toBe('Font_Bold');
      expect(theme.font.medium).toBe('Font_Medium');
      expect(theme.font.book).toBe('Font_Book');
    });
  });

  describe('theme structure', () => {
    it('should be a valid object', () => {
      expect(typeof theme).toBe('object');
      expect(theme).not.toBeNull();
    });

    it('should have the correct structure', () => {
      expect(theme).toHaveProperty('color');
      expect(theme).toHaveProperty('size');
      expect(theme).toHaveProperty('font');
    });
  });
});
