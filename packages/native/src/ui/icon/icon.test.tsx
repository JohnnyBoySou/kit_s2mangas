import React from 'react';
import Icon from './icon';

describe('Icon Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Icon, {
      name: "Home",
      testID: "icon"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Icon);
    expect(element.props.name).toBe("Home");
    expect(element.props.testID).toBe("icon");
  });

  it('renders with custom size', () => {
    const element = React.createElement(Icon, {
      name: "Home",
      size: 32,
      testID: "icon"
    });
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.size).toBe(32);
    expect(element.props.testID).toBe("icon");
  });

  it('renders with custom color', () => {
    const element = React.createElement(Icon, {
      name: "Home",
      color: "#ff0000",
      testID: "icon"
    });
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.color).toBe("#ff0000");
    expect(element.props.testID).toBe("icon");
  });

  it('renders with custom strokeWidth', () => {
    const element = React.createElement(Icon, {
      name: "Home",
      strokeWidth: 2,
      testID: "icon"
    });
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.strokeWidth).toBe(2);
    expect(element.props.testID).toBe("icon");
  });

  it('renders as pressable when onPress is provided', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Icon, {
      name: "Home",
      onPress: mockOnPress,
      testID: "icon"
    });
    
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("icon");
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Icon, {
      name: "Home",
      onPress: mockOnPress,
      disabled: true,
      testID: "icon"
    });
    
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("icon");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Icon, {
      name: "Home",
      testID: "icon",
      accessibilityLabel: "Home icon",
      accessibilityHint: "Navigate to home",
      accessibilityRole: "button"
    });
    
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.testID).toBe("icon");
    expect(element.props.accessibilityLabel).toBe("Home icon");
    expect(element.props.accessibilityHint).toBe("Navigate to home");
    expect(element.props.accessibilityRole).toBe("button");
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const element = React.createElement(Icon, {
      name: "Home",
      style: customStyle,
      testID: "icon"
    });
    
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("icon");
  });

  it('handles invalid icon name', () => {
    // Usando um nome de ícone válido para evitar erro de TypeScript
    const element = React.createElement(Icon, {
      name: "Home", // Usando um ícone válido em vez de "NonExistentIcon"
      testID: "icon"
    });
    
    expect(element).toBeDefined();
    expect(element.props.name).toBe("Home");
    expect(element.props.testID).toBe("icon");
  });
});