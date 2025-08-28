// Configurações básicas do Jest para React Native

// Mock do @react-native/js-polyfills para evitar problemas de sintaxe
jest.mock('@react-native/js-polyfills', () => ({
  errorGuard: jest.fn(),
}));

// Mock do React Native para evitar problemas com módulos ES6
jest.mock('react-native', () => {
  const React = require('react');
  
  const MockComponent = (props) => React.createElement('div', props, props.children);
  const MockText = (props) => React.createElement('span', props, props.children);
  const MockImage = (props) => React.createElement('img', props);
  const MockPressable = (props) => React.createElement('button', props, props.children);
  const MockActivityIndicator = (props) => React.createElement('div', { ...props, 'data-testid': 'activity-indicator' });
  
  return {
    View: MockComponent,
    Text: MockText,
    TouchableOpacity: MockComponent,
    ScrollView: MockComponent,
    TextInput: MockComponent,
    Image: MockImage,
    FlatList: MockComponent,
    Pressable: MockPressable,
    ActivityIndicator: MockActivityIndicator,
    StyleSheet: {
      create: (styles) => styles,
      absoluteFillObject: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
    },
    Dimensions: {
      get: () => ({ width: 375, height: 667 }),
    },
    Platform: {
      OS: 'ios',
      select: (obj) => obj.ios || obj.default,
    },
    Animated: {
      Value: jest.fn(),
      timing: jest.fn(),
      spring: jest.fn(),
    },
    Easing: {
      out: jest.fn((easing) => easing),
      quad: jest.fn(),
      linear: jest.fn(),
      ease: jest.fn(),
    },
  };
});

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

// Mock do react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const React = require('react');
  const { View } = require('react-native');
  
  return {
    default: {
      View: (props) => React.createElement(View, props, props.children),
    },
    useSharedValue: jest.fn((initialValue) => ({ value: initialValue })),
    useAnimatedStyle: jest.fn(() => ({})),
    withSpring: jest.fn((value) => value),
    withTiming: jest.fn((value) => value),
    interpolateColor: jest.fn((value, inputRange, outputRange) => outputRange[0]),
    View: (props) => React.createElement(View, props, props.children),
  };
});

// Mock do @s2mangas/core
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
    size: {
      headtitle: 32,
      title: 24,
      label: 18,
      sublabel: 16,
      small: 12
    },
    font: {
      black: "Font_Black",
      bold: "Font_Bold",
      medium: "Font_Medium",
      book: "Font_Book"
    }
  },
}));

// Configurações globais do Jest
global.console = {
  ...console,
  error: jest.fn(),
};
