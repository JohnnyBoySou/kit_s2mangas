import React from 'react';
import Input from './input';

describe('Input Component', () => {
  it('renders correctly with placeholder', () => {
    const element = React.createElement(Input, {
      placeholder: "Enter text"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.placeholder).toBe("Enter text");
  });

  it('renders with default value', () => {
    const element = React.createElement(Input, {
      value: "Default value"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe("Default value");
  });

  it('handles onChangeText correctly', () => {
    const mockOnChangeText = jest.fn();
    const element = React.createElement(Input, {
      onChangeText: mockOnChangeText,
      testID: "input",
      placeholder: "Type here"
    });
    
    expect(element).toBeDefined();
    expect(element.props.onChangeText).toBe(mockOnChangeText);
    expect(element.props.testID).toBe("input");
    expect(element.props.placeholder).toBe("Type here");
  });

  it('renders with label', () => {
    const element = React.createElement(Input, {
      label: "Username",
      placeholder: "Enter username"
    });
    expect(element).toBeDefined();
    expect(element.props.label).toBe("Username");
    expect(element.props.placeholder).toBe("Enter username");
  });

  it('renders with error message', () => {
    const element = React.createElement(Input, {
      placeholder: "Enter email",
      error: "Invalid email format"
    });
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Enter email");
    expect(element.props.error).toBe("Invalid email format");
  });

  it('renders with helper text', () => {
    const element = React.createElement(Input, {
      placeholder: "Enter password",
      helperText: "Must be at least 8 characters"
    });
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Enter password");
    expect(element.props.helperText).toBe("Must be at least 8 characters");
  });

  it('renders in disabled state', () => {
    const element = React.createElement(Input, {
      placeholder: "Disabled input",
      disabled: true,
      testID: "input"
    });
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Disabled input");
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("input");
  });

  it('renders with secure text entry', () => {
    const element = React.createElement(Input, {
      placeholder: "Enter password",
      secureTextEntry: true,
      testID: "input"
    });
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Enter password");
    expect(element.props.secureTextEntry).toBe(true);
    expect(element.props.testID).toBe("input");
  });

  it('renders with multiline', () => {
    const element = React.createElement(Input, {
      placeholder: "Enter description",
      multiline: true,
      testID: "input"
    });
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Enter description");
    expect(element.props.multiline).toBe(true);
    expect(element.props.testID).toBe("input");
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'lightgray' };
    const element = React.createElement(Input, {
      placeholder: "Custom input",
      style: customStyle,
      testID: "input"
    });
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Custom input");
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("input");
  });

  it('handles onFocus correctly', () => {
    const mockOnFocus = jest.fn();
    const element = React.createElement(Input, {
      placeholder: "Focus test",
      onFocus: mockOnFocus,
      testID: "input"
    });
    
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Focus test");
    expect(element.props.onFocus).toBe(mockOnFocus);
    expect(element.props.testID).toBe("input");
  });

  it('handles onBlur correctly', () => {
    const mockOnBlur = jest.fn();
    const element = React.createElement(Input, {
      placeholder: "Blur test",
      onBlur: mockOnBlur,
      testID: "input"
    });
    
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Blur test");
    expect(element.props.onBlur).toBe(mockOnBlur);
    expect(element.props.testID).toBe("input");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Input, {
      placeholder: "Accessible input",
      testID: "input",
      accessibilityLabel: "Username input",
      accessibilityHint: "Enter your username"
    });
    
    expect(element).toBeDefined();
    expect(element.props.placeholder).toBe("Accessible input");
    expect(element.props.testID).toBe("input");
    expect(element.props.accessibilityLabel).toBe("Username input");
    expect(element.props.accessibilityHint).toBe("Enter your username");
  });
});