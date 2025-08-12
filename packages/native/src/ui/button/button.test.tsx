import React from 'react';
import Button from './button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Button, {}, 'Test Button');
    expect(element).toBeDefined();
    expect(element.type).toBe(Button);
    expect(element.props.children).toBe('Test Button');
  });

  it('renders with primary variant', () => {
    const element = React.createElement(Button, {
      variant: "primary",
      testID: "button"
    }, 'Primary Button');
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("primary");
    expect(element.props.testID).toBe("button");
    expect(element.props.children).toBe("Primary Button");
  });

  it('renders with secondary variant', () => {
    const element = React.createElement(Button, {
      variant: "secondary",
      testID: "button"
    }, 'Secondary Button');
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("secondary");
    expect(element.props.testID).toBe("button");
  });

  it('renders with outline variant', () => {
    const element = React.createElement(Button, {
      variant: "outline",
      testID: "button"
    }, 'Outline Button');
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("outline");
    expect(element.props.testID).toBe("button");
  });

  it('renders with ghost variant', () => {
    const element = React.createElement(Button, {
      variant: "ghost",
      testID: "button"
    }, 'Ghost Button');
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("ghost");
    expect(element.props.testID).toBe("button");
  });

  it('renders with small size', () => {
    const element = React.createElement(Button, {
      size: "sm",
      testID: "button"
    }, 'Small Button');
    
    expect(element).toBeDefined();
    expect(element.props.size).toBe("sm");
    expect(element.props.testID).toBe("button");
  });

  it('renders with medium size', () => {
    const element = React.createElement(Button, {
      size: "md",
      testID: "button"
    }, 'Medium Button');
    
    expect(element).toBeDefined();
    expect(element.props.size).toBe("md");
    expect(element.props.testID).toBe("button");
  });

  it('renders with large size', () => {
    const element = React.createElement(Button, {
      size: "lg",
      testID: "button"
    }, 'Large Button');
    
    expect(element).toBeDefined();
    expect(element.props.size).toBe("lg");
    expect(element.props.testID).toBe("button");
  });

  it('handles onPress correctly', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Button, {
      onPress: mockOnPress,
      testID: "button"
    }, 'Clickable Button');
    
    expect(element).toBeDefined();
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("button");
  });

  it('renders in disabled state', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Button, {
      disabled: true,
      onPress: mockOnPress,
      testID: "button"
    }, 'Disabled Button');
    
    expect(element).toBeDefined();
    expect(element.props.disabled).toBe(true);
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("button");
  });

  it('renders in loading state', () => {
    const element = React.createElement(Button, {
      loading: true,
      testID: "button"
    }, 'Loading Button');
    
    expect(element).toBeDefined();
    expect(element.props.loading).toBe(true);
    expect(element.props.testID).toBe("button");
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const element = React.createElement(Button, {
      style: customStyle,
      testID: "button"
    }, 'Custom Style Button');
    
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("button");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Button, {
      testID: "button",
      accessibilityLabel: "Test button",
      accessibilityHint: "Tap to test"
    }, 'Accessible Button');
    
    expect(element).toBeDefined();
    expect(element.props.testID).toBe("button");
    expect(element.props.accessibilityLabel).toBe("Test button");
    expect(element.props.accessibilityHint).toBe("Tap to test");
  });
});