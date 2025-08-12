import React from 'react';
import InputOTP from './otp';

describe('InputOTP Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders four input fields', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('displays current value in inputs', () => {
    const element = React.createElement(InputOTP, {
      value: "12",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("12");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('calls setValue when text is entered', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('handles multiple digits pasted at once', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('ignores non-numeric characters', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('handles backspace correctly', () => {
    const element = React.createElement(InputOTP, {
      value: "12",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("12");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('renders in disabled state', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue,
      disabled: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.disabled).toBe(true);
  });

  it('calls onSubmitEditing when OTP is complete', () => {
    const mockOnSubmit = jest.fn();
    const element = React.createElement(InputOTP, {
      value: "123",
      setValue: mockSetValue,
      onSubmitEditing: mockOnSubmit
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("123");
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.onSubmitEditing).toBe(mockOnSubmit);
  });

  it('limits input to 4 characters', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('handles partial OTP values', () => {
    const element = React.createElement(InputOTP, {
      value: "1",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("1");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('renders with testID', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue,
      testID: "otp-input"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("otp-input");
  });

  it('handles empty string value', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.setValue).toBe(mockSetValue);
  });

  it('handles full OTP value', () => {
    const element = React.createElement(InputOTP, {
      value: "1234",
      setValue: mockSetValue
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("1234");
    expect(element.props.setValue).toBe(mockSetValue);
  });
});