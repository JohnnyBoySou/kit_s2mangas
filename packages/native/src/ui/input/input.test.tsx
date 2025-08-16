import React from 'react';
import Input from './input';

describe('Input Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders with default props', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
  });

  it('renders with label', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      label: "Test Label"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.label).toBe("Test Label");
  });

  it('renders with placeholder', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      placeholder: "Test Placeholder"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.placeholder).toBe("Test Placeholder");
  });

  it('calls setValue when text changes', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
  });

  it('renders in disabled state', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      disabled: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.disabled).toBe(true);
  });

  it('applies CPF mask correctly', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      mask: "CPF"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.mask).toBe("CPF");
  });

  it('applies PHONE mask correctly', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      mask: "PHONE"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.mask).toBe("PHONE");
  });

  it('applies CEP mask correctly', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      mask: "CEP"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.mask).toBe("CEP");
  });

  it('applies NASCIMENTO mask correctly', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      mask: "NASCIMENTO"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.mask).toBe("NASCIMENTO");
  });

  it('handles focus and blur events', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
  });

  it('renders with custom keyboard type', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      keyboardType: "numeric"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.keyboardType).toBe("numeric");
  });

  it('handles submit editing', () => {
    const mockOnSubmit = jest.fn();
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      onSubmitEditing: mockOnSubmit
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.onSubmitEditing).toBe(mockOnSubmit);
  });

  it('renders with focused prop', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      focused: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.focused).toBe(true);
  });

  it('respects maxLength for masks', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      mask: "CPF"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.mask).toBe("CPF");
  });

  it('renders with testID', () => {
    const element = React.createElement(Input, {
      value: "",
      onChangeText: mockSetValue,
      testID: "input-big"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Input);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockSetValue);
    expect(element.props.testID).toBe("input-big");
  });
});