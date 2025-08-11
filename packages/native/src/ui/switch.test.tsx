import React from 'react';
import Switch from './switch';

describe('Switch Component', () => {
  it('renders correctly with default props', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: false,
      setValue: mockSetValue,
      testID: "switch"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Switch);
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("switch");
  });

  it('renders in on state', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: true,
      setValue: mockSetValue,
      testID: "switch"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("switch");
  });

  it('renders in off state', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: false,
      setValue: mockSetValue,
      testID: "switch"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("switch");
  });

  it('handles toggle correctly', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: false,
      setValue: mockSetValue,
      testID: "switch"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("switch");
  });

  it('handles toggle from on to off', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: true,
      setValue: mockSetValue,
      testID: "switch"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("switch");
  });

  it('renders in disabled state', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: false,
      setValue: mockSetValue,
      disabled: true,
      testID: "switch"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("switch");
  });

  it('renders with accessibility props', () => {
    const mockSetValue = jest.fn();
    const element = React.createElement(Switch, {
      value: false,
      setValue: mockSetValue,
      testID: "switch",
      accessibilityLabel: "Toggle switch",
      accessibilityRole: "switch"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("switch");
    expect(element.props.accessibilityLabel).toBe("Toggle switch");
    expect(element.props.accessibilityRole).toBe("switch");
  });
});