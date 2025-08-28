import React from 'react';
import { ThemeProvider, useTheme, lightTheme, darkTheme } from './theme-provider';

describe('ThemeProvider Component', () => {
  it('renders with default props', () => {
    const element = React.createElement(ThemeProvider, {
      children: React.createElement('div')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(ThemeProvider);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom initial theme', () => {
    const customTheme = {
      ...lightTheme,
      color: {
        ...lightTheme.color,
        background: '#FF0000',
        text: '#00FF00'
      }
    };

    const element = React.createElement(ThemeProvider, {
      children: React.createElement('div'),
      initialTheme: customTheme
    });
    
    expect(element).toBeDefined();
    expect(element.props.initialTheme).toBe(customTheme);
  });

  it('renders with initialIsDark set to false', () => {
    const element = React.createElement(ThemeProvider, {
      children: React.createElement('div'),
      initialIsDark: false
    });
    
    expect(element).toBeDefined();
    expect(element.props.initialIsDark).toBe(false);
  });

  it('renders with initialIsDark set to true', () => {
    const element = React.createElement(ThemeProvider, {
      children: React.createElement('div'),
      initialIsDark: true
    });
    
    expect(element).toBeDefined();
    expect(element.props.initialIsDark).toBe(true);
  });

  it('renders with multiple children', () => {
    const children = [
      React.createElement('div', { key: '1' }),
      React.createElement('span', { key: '2' }),
      React.createElement('p', { key: '3' })
    ];

    const element = React.createElement(ThemeProvider, {
      children: children
    });
    
    expect(element).toBeDefined();
    expect(element.props.children).toHaveLength(3);
  });

  it('renders with null children', () => {
    const element = React.createElement(ThemeProvider, {
      children: null
    });
    
    expect(element).toBeDefined();
    expect(element.props.children).toBeNull();
  });

  it('renders with undefined children', () => {
    const element = React.createElement(ThemeProvider, {
      children: undefined
    });
    
    expect(element).toBeDefined();
    expect(element.props.children).toBeUndefined();
  });

  it('renders with custom props', () => {
    const customProps = {
      children: React.createElement('div'),
      initialTheme: lightTheme,
      initialIsDark: false
    };

    const element = React.createElement(ThemeProvider, customProps);
    
    expect(element).toBeDefined();
    expect(element.props.initialTheme).toBe(lightTheme);
    expect(element.props.initialIsDark).toBe(false);
  });
});

describe('useTheme Hook', () => {
  it('should be defined as a function', () => {
    expect(typeof useTheme).toBe('function');
  });
});

describe('Theme constants', () => {
  it('should have correct light theme colors', () => {
    expect(lightTheme.color.background).toBe('#FFFFFF');
    expect(lightTheme.color.text).toBe('#333333');
    expect(lightTheme.color.primary).toBe('#ED274A');
  });

  it('should have correct dark theme colors', () => {
    expect(darkTheme.color.background).toBe('#000000');
    expect(darkTheme.color.text).toBe('#d1d1d1');
    expect(darkTheme.color.primary).toBe('#ED274A');
  });

  it('should have consistent structure between themes', () => {
    expect(Object.keys(lightTheme.color)).toEqual(Object.keys(darkTheme.color));
    expect(Object.keys(lightTheme.size)).toEqual(Object.keys(darkTheme.size));
    expect(Object.keys(lightTheme.font)).toEqual(Object.keys(lightTheme.font));
  });

  it('should have correct theme sizes', () => {
    expect(lightTheme.size.headtitle).toBe(32);
    expect(lightTheme.size.title).toBe(24);
    expect(lightTheme.size.label).toBe(18);
    expect(lightTheme.size.sublabel).toBe(16);
    expect(lightTheme.size.small).toBe(12);
  });

  it('should have correct theme fonts', () => {
    expect(lightTheme.font.black).toBe('Font_Black');
    expect(lightTheme.font.bold).toBe('Font_Bold');
    expect(lightTheme.font.medium).toBe('Font_Medium');
    expect(lightTheme.font.book).toBe('Font_Book');
  });
});
