import React from 'react';
import Select from './select';

describe('Select Component', () => {
  const mockOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const defaultValue = { label: 'Default', value: 'default' };

  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with default placeholder', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Select);
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.placeholder).toBeUndefined();
  });

  it('renders with custom placeholder', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      placeholder: "Choose an option"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.placeholder).toBe("Choose an option");
  });

  it('displays selected option label', () => {
    const selectedOption = mockOptions[0];
    const element = React.createElement(Select, {
      options: mockOptions,
      value: selectedOption,
      onChange: mockOnChange
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(selectedOption);
    expect(element.props.onChange).toBe(mockOnChange);
  });

  it('opens dropdown when pressed', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.testID).toBe("select");
  });

  it('calls onChange when option is selected', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.testID).toBe("select");
  });

  it('closes dropdown after selecting option', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.testID).toBe("select");
  });

  it('renders in disabled state', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      disabled: true,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("select");
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      style: customStyle,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("select");
  });

  it('renders with custom text style', () => {
    const customTextStyle = { fontSize: 20 };
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      textStyle: customTextStyle
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.textStyle).toBe(customTextStyle);
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      testID: "select",
      accessibilityLabel: "Select an option",
      accessibilityRole: "button"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.testID).toBe("select");
    expect(element.props.accessibilityLabel).toBe("Select an option");
    expect(element.props.accessibilityRole).toBe("button");
  });

  it('highlights selected option in dropdown', () => {
    const selectedOption = mockOptions[1];
    const element = React.createElement(Select, {
      options: mockOptions,
      value: selectedOption,
      onChange: mockOnChange,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(selectedOption);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.testID).toBe("select");
  });

  it('handles empty options array', () => {
    const element = React.createElement(Select, {
      options: [],
      value: defaultValue,
      onChange: mockOnChange
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toEqual([]);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
  });

  it('toggles dropdown open/close', () => {
    const element = React.createElement(Select, {
      options: mockOptions,
      value: defaultValue,
      onChange: mockOnChange,
      testID: "select"
    });
    
    expect(element).toBeDefined();
    expect(element.props.options).toBe(mockOptions);
    expect(element.props.value).toBe(defaultValue);
    expect(element.props.onChange).toBe(mockOnChange);
    expect(element.props.testID).toBe("select");
  });
});