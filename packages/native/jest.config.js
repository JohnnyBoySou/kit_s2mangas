module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.test.js' }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library|lucide-react-native|react-native-svg|react-native-reanimated|@react-native/js-polyfills)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@s2mangas/core$': '<rootDir>/../core/src',
  },
  testTimeout: 10000,
  // Configurações para resolver problemas com React Native
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  // Configurações para resolver problemas com módulos
  resolver: undefined,
  moduleDirectories: ['node_modules'],
  // Configurações específicas para evitar problemas com React Native
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
};
