import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider, useTheme, lightTheme, darkTheme } from './theme-provider';

// Componente de teste para usar o hook
const TestComponent: React.FC = () => {
  const { theme, isDark, toggleTheme, setDarkTheme, setLightTheme } = useTheme();
  
  return (
    <div>
      <div data-testid="background" style={{ backgroundColor: theme.color.background }} />
      <div data-testid="text" style={{ color: theme.color.text }} />
      <div data-testid="is-dark">{isDark ? 'dark' : 'light'}</div>
      <button data-testid="toggle" onClick={() => toggleTheme()}>Toggle</button>
      <button data-testid="set-dark" onClick={() => setDarkTheme()}>Set Dark</button>
      <button data-testid="set-light" onClick={() => setLightTheme()}>Set Light</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('should render with default theme', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('is-dark').props.children).toBe('dark');
  });

  it('should render with light theme when initialIsDark is false', () => {
    const { getByTestId } = render(
      <ThemeProvider initialIsDark={false}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('is-dark').props.children).toBe('light');
  });

  it('should toggle theme when toggleTheme is called', () => {
    const { getByTestId } = render(
      <ThemeProvider initialIsDark={false}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('is-dark').props.children).toBe('light');
    
    fireEvent.press(getByTestId('toggle'));
    
    expect(getByTestId('is-dark').props.children).toBe('dark');
  });

  it('should set dark theme when setDarkTheme is called', () => {
    const { getByTestId } = render(
      <ThemeProvider initialIsDark={false}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('is-dark').props.children).toBe('light');
    
    fireEvent.press(getByTestId('set-dark'));
    
    expect(getByTestId('is-dark').props.children).toBe('dark');
  });

  it('should set light theme when setLightTheme is called', () => {
    const { getByTestId } = render(
      <ThemeProvider initialIsDark={true}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('is-dark').props.children).toBe('dark');
    
    fireEvent.press(getByTestId('set-light'));
    
    expect(getByTestId('is-dark').props.children).toBe('light');
  });

  it('should use custom initial theme', () => {
    const customTheme = {
      ...lightTheme,
      color: {
        ...lightTheme.color,
        background: '#FF0000',
        text: '#00FF00'
      }
    };

    const { getByTestId } = render(
      <ThemeProvider initialTheme={customTheme}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('background').props.style.backgroundColor).toBe('#FF0000');
    expect(getByTestId('text').props.style.color).toBe('#00FF00');
  });

  it('should throw error when useTheme is used outside provider', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme deve ser usado dentro de um ThemeProvider');
    
    consoleSpy.mockRestore();
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
    expect(Object.keys(lightTheme.font)).toEqual(Object.keys(darkTheme.font));
  });
});
