// Utilitários para cores
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Utilitários para validação
export const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

// Utilitários para acessibilidade
export const getContrastColor = (backgroundColor: string): string => {
  // Lógica simples para determinar cor de contraste
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
};

// Constantes de tamanho
export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Constantes de espaçamento
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Tipos para as constantes
export type Size = keyof typeof SIZES;
export type Spacing = keyof typeof SPACING;

// Tipos para máscaras
export type MaskType = "CPF" | "PHONE" | "CEP" | "NASCIMENTO" | "CURRENCY";

export interface MaskConfig {
  maskFunction: (text: string) => string;
  maxLength?: number;
}

// Função para obter a configuração de máscara
export const getMaskFunction = (mask?: MaskType): MaskConfig => {
  switch (mask) {
    case "CPF":
      return { maskFunction: applyCpfMask, maxLength: 14 };
    case "PHONE":
      return { maskFunction: applyPhoneMask, maxLength: 16 };
    case "CEP":
      return { maskFunction: applyCepMask, maxLength: 9 };
    case "NASCIMENTO":
      return { maskFunction: applyBirthdateMask, maxLength: 10 };
    case "CURRENCY":
      return { maskFunction: applyCurrencyMask, maxLength: 20 };
    default:
      return { maskFunction: (text: string) => text, maxLength: 0 };
  }
};

// Funções de máscara
export function applyCpfMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 11) // Limita a 11 dígitos
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o terceiro e o quarto dígito
    .replace(/(\d{3})(\d)/, "$1.$2") // Coloca um ponto entre o sexto e o sétimo dígito
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Coloca um hífen entre o nono e o décimo dígito
}

export function applyCepMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 8) // Limita a 8 dígitos
    .replace(/(\d{5})(\d)/, "$1-$2"); // Coloca um hífen entre o quinto e o sexto dígito
}

export function applyPhoneMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 11) // Limita a 11 dígitos
    .replace(/(\d{2})(\d)/, "($1) $2") // Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d{5})(\d)/, "$1-$2"); // Coloca um hífen entre o quinto e o sexto dígito
}

export function applyBirthdateMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .slice(0, 8) // Limita a 8 dígitos (DDMMYYYY)
    .replace(/(\d{2})(\d)/, "$1/$2") // Coloca uma barra entre o dia e o mês
    .replace(/(\d{2})(\d)/, "$1/$2"); // Coloca uma barra entre o mês e o ano
}

export function applyCurrencyMask(value: string): string {
  return value
    .replace(/\D/g, "") // Remove tudo o que não é dígito
    .replace(/^0+/, "") // Remove zeros à esquerda
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") // Adiciona pontos para milhares
    .replace(/^/, "R$ "); // Adiciona prefixo R$
}
