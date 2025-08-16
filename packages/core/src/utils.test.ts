import { 
  hexToRgba, 
  isValidHexColor, 
  getContrastColor, 
  SIZES, 
  SPACING,
  type Size,
  type Spacing,
  applyCpfMask,
  applyCepMask,
  applyPhoneMask,
  applyBirthdateMask,
  applyCurrencyMask,
  getMaskFunction
} from './utils';

describe('Utils', () => {
  describe('hexToRgba', () => {
    it('should convert hex color to rgba with default alpha', () => {
      expect(hexToRgba('#FF0000')).toBe('rgba(255, 0, 0, 1)');
      expect(hexToRgba('#00FF00')).toBe('rgba(0, 255, 0, 1)');
      expect(hexToRgba('#0000FF')).toBe('rgba(0, 0, 255, 1)');
    });

    it('should convert hex color to rgba with custom alpha', () => {
      expect(hexToRgba('#FF0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
      expect(hexToRgba('#00FF00', 0.8)).toBe('rgba(0, 255, 0, 0.8)');
      expect(hexToRgba('#0000FF', 0.2)).toBe('rgba(0, 0, 255, 0.2)');
    });

    it('should handle different hex color formats', () => {
      expect(hexToRgba('#FFFFFF')).toBe('rgba(255, 255, 255, 1)');
      expect(hexToRgba('#000000')).toBe('rgba(0, 0, 0, 1)');
      expect(hexToRgba('#123456')).toBe('rgba(18, 52, 86, 1)');
    });

    it('should handle edge cases', () => {
      expect(hexToRgba('#000000', 0)).toBe('rgba(0, 0, 0, 0)');
      expect(hexToRgba('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
    });
  });

  describe('isValidHexColor', () => {
    it('should validate correct 6-digit hex colors', () => {
      expect(isValidHexColor('#FF0000')).toBe(true);
      expect(isValidHexColor('#00FF00')).toBe(true);
      expect(isValidHexColor('#0000FF')).toBe(true);
      expect(isValidHexColor('#FFFFFF')).toBe(true);
      expect(isValidHexColor('#000000')).toBe(true);
      expect(isValidHexColor('#123456')).toBe(true);
    });

    it('should validate correct 3-digit hex colors', () => {
      expect(isValidHexColor('#F00')).toBe(true);
      expect(isValidHexColor('#0F0')).toBe(true);
      expect(isValidHexColor('#00F')).toBe(true);
      expect(isValidHexColor('#FFF')).toBe(true);
      expect(isValidHexColor('#000')).toBe(true);
    });

    it('should reject invalid hex colors', () => {
      expect(isValidHexColor('FF0000')).toBe(false); // Missing #
      expect(isValidHexColor('#FF000')).toBe(false); // 5 digits
      expect(isValidHexColor('#FF00000')).toBe(false); // 7 digits
      expect(isValidHexColor('#GG0000')).toBe(false); // Invalid characters
      expect(isValidHexColor('')).toBe(false); // Empty string
      expect(isValidHexColor('#')).toBe(false); // Only #
    });

    it('should handle edge cases', () => {
      expect(isValidHexColor('#123456')).toBe(true);
      expect(isValidHexColor('#ABCDEF')).toBe(true);
      expect(isValidHexColor('#abcdef')).toBe(true); // Lowercase is supported
    });
  });

  describe('getContrastColor', () => {
    it('should return black for light backgrounds', () => {
      expect(getContrastColor('#FFFFFF')).toBe('#000000');
      expect(getContrastColor('#F0F0F0')).toBe('#000000');
      expect(getContrastColor('#E0E0E0')).toBe('#000000');
      expect(getContrastColor('#D0D0D0')).toBe('#000000');
    });

    it('should return white for dark backgrounds', () => {
      expect(getContrastColor('#000000')).toBe('#FFFFFF');
      expect(getContrastColor('#333333')).toBe('#FFFFFF');
      expect(getContrastColor('#666666')).toBe('#FFFFFF');
      expect(getContrastColor('#444444')).toBe('#FFFFFF');
    });

    it('should handle edge cases around the brightness threshold', () => {
      // Brightness threshold is 128
      expect(getContrastColor('#808080')).toBe('#FFFFFF'); // Gray (128,128,128)
      expect(getContrastColor('#7F7F7F')).toBe('#FFFFFF'); // Just below threshold
      expect(getContrastColor('#818181')).toBe('#000000'); // Just above threshold
    });

    it('should handle different color combinations', () => {
      expect(getContrastColor('#FF0000')).toBe('#FFFFFF'); // Red
      expect(getContrastColor('#00FF00')).toBe('#000000'); // Green
      expect(getContrastColor('#0000FF')).toBe('#FFFFFF'); // Blue
      expect(getContrastColor('#FFFF00')).toBe('#000000'); // Yellow
      expect(getContrastColor('#FF00FF')).toBe('#FFFFFF'); // Magenta
      expect(getContrastColor('#00FFFF')).toBe('#000000'); // Cyan
    });
  });

  describe('SIZES', () => {
    it('should have all required size properties', () => {
      expect(SIZES).toHaveProperty('xs');
      expect(SIZES).toHaveProperty('sm');
      expect(SIZES).toHaveProperty('md');
      expect(SIZES).toHaveProperty('lg');
      expect(SIZES).toHaveProperty('xl');
      expect(SIZES).toHaveProperty('xxl');
    });

    it('should have numeric size values', () => {
      expect(typeof SIZES.xs).toBe('number');
      expect(typeof SIZES.sm).toBe('number');
      expect(typeof SIZES.md).toBe('number');
      expect(typeof SIZES.lg).toBe('number');
      expect(typeof SIZES.xl).toBe('number');
      expect(typeof SIZES.xxl).toBe('number');
    });

    it('should have correct size hierarchy', () => {
      expect(SIZES.xs).toBeLessThan(SIZES.sm);
      expect(SIZES.sm).toBeLessThan(SIZES.md);
      expect(SIZES.md).toBeLessThan(SIZES.lg);
      expect(SIZES.lg).toBeLessThan(SIZES.xl);
      expect(SIZES.xl).toBeLessThan(SIZES.xxl);
    });

    it('should have specific size values', () => {
      expect(SIZES.xs).toBe(4);
      expect(SIZES.sm).toBe(8);
      expect(SIZES.md).toBe(16);
      expect(SIZES.lg).toBe(24);
      expect(SIZES.xl).toBe(32);
      expect(SIZES.xxl).toBe(48);
    });
  });

  describe('SPACING', () => {
    it('should have all required spacing properties', () => {
      expect(SPACING).toHaveProperty('xs');
      expect(SPACING).toHaveProperty('sm');
      expect(SPACING).toHaveProperty('md');
      expect(SPACING).toHaveProperty('lg');
      expect(SPACING).toHaveProperty('xl');
      expect(SPACING).toHaveProperty('xxl');
    });

    it('should have numeric spacing values', () => {
      expect(typeof SPACING.xs).toBe('number');
      expect(typeof SPACING.sm).toBe('number');
      expect(typeof SPACING.md).toBe('number');
      expect(typeof SPACING.lg).toBe('number');
      expect(typeof SPACING.xl).toBe('number');
      expect(typeof SPACING.xxl).toBe('number');
    });

    it('should have correct spacing hierarchy', () => {
      expect(SPACING.xs).toBeLessThan(SPACING.sm);
      expect(SPACING.sm).toBeLessThan(SPACING.md);
      expect(SPACING.md).toBeLessThan(SPACING.lg);
      expect(SPACING.lg).toBeLessThan(SPACING.xl);
      expect(SPACING.xl).toBeLessThan(SPACING.xxl);
    });

    it('should have specific spacing values', () => {
      expect(SPACING.xs).toBe(4);
      expect(SPACING.sm).toBe(8);
      expect(SPACING.md).toBe(16);
      expect(SPACING.lg).toBe(24);
      expect(SPACING.xl).toBe(32);
      expect(SPACING.xxl).toBe(48);
    });

    it('should be identical to SIZES', () => {
      expect(SPACING).toEqual(SIZES);
    });
  });

  describe('Type exports', () => {
    it('should export Size type', () => {
      const testSize: Size = 'md';
      expect(testSize).toBe('md');
    });

    it('should export Spacing type', () => {
      const testSpacing: Spacing = 'lg';
      expect(testSpacing).toBe('lg');
    });
  });
});

// Testes para funções de máscara
describe('Mask Functions', () => {
  describe('applyCpfMask', () => {
    it('should format CPF correctly', () => {
      expect(applyCpfMask('12345678901')).toBe('123.456.789-01');
      expect(applyCpfMask('1234567890')).toBe('123.456.789-0');
      expect(applyCpfMask('123456789')).toBe('123.456.789');
    });

    it('should remove non-digits', () => {
      expect(applyCpfMask('123.456.789-01')).toBe('123.456.789-01');
      expect(applyCpfMask('abc123def456ghi789jkl01')).toBe('123.456.789-01');
    });

    it('should limit to 11 digits', () => {
      expect(applyCpfMask('123456789012345')).toBe('123.456.789-01');
    });
  });

  describe('applyCepMask', () => {
    it('should format CEP correctly', () => {
      expect(applyCepMask('12345678')).toBe('12345-678');
      expect(applyCepMask('1234567')).toBe('12345-67');
    });

    it('should remove non-digits', () => {
      expect(applyCepMask('12345-678')).toBe('12345-678');
      expect(applyCepMask('abc123def45ghi678')).toBe('12345-678');
    });

    it('should limit to 8 digits', () => {
      expect(applyCepMask('123456789012345')).toBe('12345-678');
    });
  });

  describe('applyPhoneMask', () => {
    it('should format phone correctly', () => {
      expect(applyPhoneMask('11987654321')).toBe('(11) 98765-4321');
      expect(applyPhoneMask('1198765432')).toBe('(11) 98765-432');
    });

    it('should remove non-digits', () => {
      expect(applyPhoneMask('(11) 98765-4321')).toBe('(11) 98765-4321');
      expect(applyPhoneMask('abc11def987ghi65jkl432mn1')).toBe('(11) 98765-4321');
    });

    it('should limit to 11 digits', () => {
      expect(applyPhoneMask('11987654321012345')).toBe('(11) 98765-4321');
    });
  });

  describe('applyBirthdateMask', () => {
    it('should format birthdate correctly', () => {
      expect(applyBirthdateMask('01012000')).toBe('01/01/2000');
      expect(applyBirthdateMask('0101200')).toBe('01/01/200');
    });

    it('should remove non-digits', () => {
      expect(applyBirthdateMask('01/01/2000')).toBe('01/01/2000');
      expect(applyBirthdateMask('abc01def01ghi2000')).toBe('01/01/2000');
    });

    it('should limit to 8 digits', () => {
      expect(applyBirthdateMask('0101200012345678')).toBe('01/01/2000');
    });
  });

  describe('applyCurrencyMask', () => {
    it('should format currency correctly', () => {
      expect(applyCurrencyMask('1234567')).toBe('R$ 1.234.567');
      expect(applyCurrencyMask('1000')).toBe('R$ 1.000');
      expect(applyCurrencyMask('123')).toBe('R$ 123');
    });

    it('should remove non-digits', () => {
      expect(applyCurrencyMask('R$ 1.234.567')).toBe('R$ 1.234.567');
      expect(applyCurrencyMask('abc1def234ghi567')).toBe('R$ 1.234.567');
    });

    it('should remove leading zeros', () => {
      expect(applyCurrencyMask('001234')).toBe('R$ 1.234');
      expect(applyCurrencyMask('000123')).toBe('R$ 123');
    });
  });

  describe('getMaskFunction', () => {
    it('should return correct mask function for CPF', () => {
      const config = getMaskFunction('CPF');
      expect(config.maxLength).toBe(14);
      expect(config.maskFunction('12345678901')).toBe('123.456.789-01');
    });

    it('should return correct mask function for PHONE', () => {
      const config = getMaskFunction('PHONE');
      expect(config.maxLength).toBe(16);
      expect(config.maskFunction('11987654321')).toBe('(11) 98765-4321');
    });

    it('should return correct mask function for CEP', () => {
      const config = getMaskFunction('CEP');
      expect(config.maxLength).toBe(9);
      expect(config.maskFunction('12345678')).toBe('12345-678');
    });

    it('should return correct mask function for NASCIMENTO', () => {
      const config = getMaskFunction('NASCIMENTO');
      expect(config.maxLength).toBe(10);
      expect(config.maskFunction('01012000')).toBe('01/01/2000');
    });

    it('should return correct mask function for CURRENCY', () => {
      const config = getMaskFunction('CURRENCY');
      expect(config.maxLength).toBe(20);
      expect(config.maskFunction('1234567')).toBe('R$ 1.234.567');
    });

    it('should return default function for unknown mask', () => {
      const config = getMaskFunction();
      expect(config.maxLength).toBe(0);
      expect(config.maskFunction('test')).toBe('test');
    });
  });
});
