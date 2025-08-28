import React from 'react';
import Button from './button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Button, {
      children: 'Test Button'
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Button);
    expect(element.props.children).toBe('Test Button');
  });

  it('renders with primary variant', () => {
    const element = React.createElement(Button, {
      variant: "primary",
      testID: "button",
      children: 'Primary Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("primary");
    expect(element.props.testID).toBe("button");
    expect(element.props.children).toBe("Primary Button");
  });

  it('renders with secondary variant', () => {
    const element = React.createElement(Button, {
      variant: "secondary",
      testID: "button",
      children: 'Secondary Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("secondary");
    expect(element.props.testID).toBe("button");
  });

  it('renders with outline variant', () => {
    const element = React.createElement(Button, {
      variant: "outline",
      testID: "button",
      children: 'Outline Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("outline");
    expect(element.props.testID).toBe("button");
  });

  it('renders with ghost variant', () => {
    const element = React.createElement(Button, {
      variant: "ghost",
      testID: "button",
      children: 'Ghost Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.variant).toBe("ghost");
    expect(element.props.testID).toBe("button");
  });



  it('handles onPress correctly', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Button, {
      onPress: mockOnPress,
      testID: "button",
      children: 'Clickable Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("button");
  });

  it('renders in disabled state', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Button, {
      disabled: true,
      onPress: mockOnPress,
      testID: "button",
      children: 'Disabled Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.disabled).toBe(true);
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("button");
  });

  it('renders in loading state', () => {
    const element = React.createElement(Button, {
      loading: true,
      testID: "button",
      children: 'Loading Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.loading).toBe(true);
    expect(element.props.testID).toBe("button");
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const element = React.createElement(Button, {
      style: customStyle,
      testID: "button",
      children: 'Custom Style Button'
    });
    
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("button");
  });


});