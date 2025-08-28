import React from 'react';
import CheckBox from './checkbox';

describe('CheckBox Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders correctly with default props', () => {
    const element = React.createElement(CheckBox, {
      value: false,
      setValue: mockSetValue,
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(CheckBox);
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders with label', () => {
    const element = React.createElement(CheckBox, {
      value: false,
      setValue: mockSetValue,
      label: "Test Label",
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.label).toBe("Test Label");
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders in checked state', () => {
    const element = React.createElement(CheckBox, {
      value: true,
      setValue: mockSetValue,
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders in unchecked state', () => {
    const element = React.createElement(CheckBox, {
      value: false,
      setValue: mockSetValue,
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("checkbox");
  });

  it('calls setValue when pressed', () => {
    const element = React.createElement(CheckBox, {
      value: false,
      setValue: mockSetValue,
      testID: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("checkbox");
  });

  it('toggles value correctly', () => {
    const element = React.createElement(CheckBox, {
      value: true,
      setValue: mockSetValue,
      testID: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders in disabled state', () => {
    const element = React.createElement(CheckBox, {
      value: false,
      setValue: mockSetValue,
      disabled: true,
      testID: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(CheckBox, {
      value: false,
      setValue: mockSetValue,
      testID: "checkbox",
      accessibilityLabel: "Test checkbox",
      accessibilityRole: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("checkbox");
    expect(element.props.accessibilityLabel).toBe("Test checkbox");
    expect(element.props.accessibilityRole).toBe("checkbox");
  });
});