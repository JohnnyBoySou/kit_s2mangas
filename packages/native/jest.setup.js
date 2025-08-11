// Configurações básicas do Jest para React Native
import '@testing-library/jest-native/extend-expect';

// Mock do react-native-svg
jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  const Mock = (p) => React.createElement(View, p, p.children);
  const tags = [
    'Svg','Circle','Ellipse','G','Text','TSpan','TextPath','Path','Polygon','Polyline',
    'Line','Rect','Use','Image','Symbol','Defs','LinearGradient','RadialGradient',
    'Stop','ClipPath','Pattern','Mask','Marker','ForeignObject'
  ];
  const o = {}; tags.forEach(t => o[t] = Mock);
  return o;
});

// Mock do lucide-react-native
jest.mock('lucide-react-native', () => {
  const React = require('react');
  const { View } = require('react-native');
  return new Proxy({}, { get: () => (props) => React.createElement(View, props) });
});

// Mock do react-native-reanimated (comentado por padrão)
// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   Reanimated.default.call = () => {};
//   return Reanimated;
// });

// Configurações globais do Jest
global.console = {
  ...console,
  // Uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  error: jest.fn(),
};

// Mock do AsyncStorage (comentado - não necessário para testes de UI)
// jest.mock('@react-native-async-storage/async-storage', () =>
//   require('@react-native-async-storage/async-storage/jest/async-storage-mock')
// );

// Mock do react-native/Libraries/EventEmitter/NativeEventEmitter
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// Mock do react-native/Libraries/Animated/NativeAnimatedHelper (comentado para evitar problemas)
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({
//   addListener: jest.fn(),
//   removeListeners: jest.fn(),
// }));

// Mock do @react-native/js-polyfills para evitar problemas de sintaxe
jest.mock('@react-native/js-polyfills', () => ({
  errorGuard: jest.fn(),
}));
