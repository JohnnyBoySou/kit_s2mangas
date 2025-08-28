module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.test.cjs' }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library|lucide-react-native|react-native-svg|react-native-reanimated|@react-native/js-polyfills|expo-image)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', 'babel.config.test.js', 'jest.config.js', 'jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.d.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@s2mangas/core$': '<rootDir>/../core/src',
    '^expo-image$': '<rootDir>/src/__mocks__/expo-image.ts',
  },
  testTimeout: 10000,
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  resolver: undefined,
  moduleDirectories: ['node_modules'],
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
};
