import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputOTP from './otp';

describe('InputOTP Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders four input fields', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} />
    );
    
    const inputs = getAllByDisplayValue('');
    expect(inputs).toHaveLength(4);
  });

  it('displays current value in inputs', () => {
    const { getByDisplayValue } = render(
      <InputOTP value="12" setValue={mockSetValue} />
    );
    
    expect(getByDisplayValue('1')).toBeTruthy();
    expect(getByDisplayValue('2')).toBeTruthy();
  });

  it('calls setValue when text is entered', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} />
    );
    
    const firstInput = getAllByDisplayValue('')[0];
    fireEvent.changeText(firstInput, '1');
    
    expect(mockSetValue).toHaveBeenCalledWith('1');
  });

  it('handles multiple digits pasted at once', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} />
    );
    
    const firstInput = getAllByDisplayValue('')[0];
    fireEvent.changeText(firstInput, '1234');
    
    expect(mockSetValue).toHaveBeenCalledWith('1234');
  });

  it('ignores non-numeric characters', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} />
    );
    
    const firstInput = getAllByDisplayValue('')[0];
    fireEvent.changeText(firstInput, 'a');
    
    expect(mockSetValue).not.toHaveBeenCalled();
  });

  it('handles backspace correctly', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="12" setValue={mockSetValue} />
    );
    
    const inputs = getAllByDisplayValue('');
    const secondInput = inputs.find(input => input.props.value === '2');
    
    if (secondInput) {
      fireEvent(secondInput, 'keyPress', { nativeEvent: { key: 'Backspace' } });
    }
    
    expect(mockSetValue).toHaveBeenCalled();
  });

  it('renders in disabled state', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} disabled={true} />
    );
    
    const inputs = getAllByDisplayValue('');
    inputs.forEach(input => {
      expect(input.props.editable).toBe(false);
    });
  });

  it('calls onSubmitEditing when OTP is complete', () => {
    const mockOnSubmit = jest.fn();
    const { getAllByDisplayValue } = render(
      <InputOTP value="123" setValue={mockSetValue} onSubmitEditing={mockOnSubmit} />
    );
    
    const inputs = getAllByDisplayValue('');
    const lastInput = inputs[inputs.length - 1];
    fireEvent.changeText(lastInput, '4');
    
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('limits input to 4 characters', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} />
    );
    
    const firstInput = getAllByDisplayValue('')[0];
    fireEvent.changeText(firstInput, '12345');
    
    expect(mockSetValue).toHaveBeenCalledWith('1234');
  });

  it('handles partial OTP values', () => {
    const { getByDisplayValue } = render(
      <InputOTP value="1" setValue={mockSetValue} />
    );
    
    expect(getByDisplayValue('1')).toBeTruthy();
  });

  it('renders with testID', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} testID="otp-input" />
    );
    
    const inputs = getAllByDisplayValue('');
    expect(inputs).toHaveLength(4);
  });

  it('handles empty string value', () => {
    const { getAllByDisplayValue } = render(
      <InputOTP value="" setValue={mockSetValue} />
    );
    
    const inputs = getAllByDisplayValue('');
    expect(inputs).toHaveLength(4);
    inputs.forEach(input => {
      expect(input.props.value).toBe('');
    });
  });

  it('handles full OTP value', () => {
    const { getByDisplayValue } = render(
      <InputOTP value="1234" setValue={mockSetValue} />
    );
    
    expect(getByDisplayValue('1')).toBeTruthy();
    expect(getByDisplayValue('2')).toBeTruthy();
    expect(getByDisplayValue('3')).toBeTruthy();
    expect(getByDisplayValue('4')).toBeTruthy();
  });
});