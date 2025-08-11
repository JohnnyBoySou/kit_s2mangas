require('@testing-library/jest-dom');

// Mock do tema para evitar problemas de importação
jest.mock('@s2mangas/core', () => ({
  theme: {
    color: {
      background: '#000000',
      primary: '#ED274A',
      secundary: '#FF620A',
      destructive: '#e74c3c',
      ghost: '#303030',
      link: '#3498db',
      blue: '#0092FF',
      red: '#EB5757',
      green: '#27AE60',
      yellow: '#ebd557',
      orange: '#FF620A',
      alert: '#FF620A',
      warning: '#ebd557',
      title: '#f1f1f1',
      label: '#B2B2B2',
      textPrimary: '#ED274A',
      textSecondary: '#FF620A',
      textGhost: '#ffffff',
      textLink: '#303030',
      borderPrimary: '#ED274A',
      borderSecondary: '#FF620A',
      borderDestructive: '#e74c3c',
      borderGhost: '#303030',
      true: '#ED274A',
      false: '#505050',
      muted: '#d1d1d1',
      activeText: '#f1f1f1',
      text: '#d1d1d1'
    },
    font: {
      black: 'Font_Black',
      bold: 'Font_Bold',
      medium: 'Font_Medium',
      book: 'Font_Book'
    },
    size: {
      headtitle: 32,
      title: 24,
      label: 18,
      sublabel: 16,
      small: 12
    }
  },
}));
