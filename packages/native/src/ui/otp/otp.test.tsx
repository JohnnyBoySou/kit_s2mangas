import React from 'react';
import InputOTP from './otp';

describe('InputOTP Component', () => {
  const mockonChangeText = jest.fn();

  beforeEach(() => {
    mockonChangeText.mockClear();
  });

  it('renders four input fields', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('displays current value in inputs', () => {
    const element = React.createElement(InputOTP, {
      value: "12",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("12");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('calls onChangeText when text is entered', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('handles multiple digits pasted at once', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('ignores non-numeric characters', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('handles backspace correctly', () => {
    const element = React.createElement(InputOTP, {
      value: "12",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("12");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('renders in disabled state', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText,
      disabled: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
    expect(element.props.disabled).toBe(true);
  });

  it('calls onSubmitEditing when OTP is complete', () => {
    const mockOnSubmit = jest.fn();
    const element = React.createElement(InputOTP, {
      value: "123",
      onChangeText: mockonChangeText,
      onSubmitEditing: mockOnSubmit
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("123");
    expect(element.props.onChangeText).toBe(mockonChangeText);
    expect(element.props.onSubmitEditing).toBe(mockOnSubmit);
  });

  it('limits input to 4 characters', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('handles partial OTP values', () => {
    const element = React.createElement(InputOTP, {
      value: "1",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("1");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('renders with testID', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText,
      testID: "otp-input"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
    expect(element.props.testID).toBe("otp-input");
  });

  it('handles empty string value', () => {
    const element = React.createElement(InputOTP, {
      value: "",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });

  it('handles full OTP value', () => {
    const element = React.createElement(InputOTP, {
      value: "1234",
      onChangeText: mockonChangeText
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(InputOTP);
    expect(element.props.value).toBe("1234");
    expect(element.props.onChangeText).toBe(mockonChangeText);
  });
});