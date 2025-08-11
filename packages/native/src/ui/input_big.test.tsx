import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputBig from './input_big';

describe('InputBig Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders with default props', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} />
    );
    
    expect(getByDisplayValue('')).toBeTruthy();
  });

  it('renders with label', () => {
    const { getByText } = render(
      <InputBig value="" setValue={mockSetValue} label="Test Label" />
    );
    
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <InputBig 
        value="" 
        setValue={mockSetValue} 
        placeholder="Test Placeholder" 
      />
    );
    
    expect(getByPlaceholderText('Test Placeholder')).toBeTruthy();
  });

  it('calls setValue when text changes', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} />
    );
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, 'test text');
    
    expect(mockSetValue).toHaveBeenCalledWith('test text');
  });

  it('renders in disabled state', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} disabled={true} />
    );
    
    const input = getByDisplayValue('');
    expect(input.props.editable).toBe(false);
  });

  it('applies CPF mask correctly', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} mask="CPF" />
    );
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, '12345678901');
    
    expect(mockSetValue).toHaveBeenCalledWith('123.456.789-01');
  });

  it('applies PHONE mask correctly', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} mask="PHONE" />
    );
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, '11987654321');
    
    expect(mockSetValue).toHaveBeenCalledWith('(11) 98765-4321');
  });

  it('applies CEP mask correctly', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} mask="CEP" />
    );
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, '12345678');
    
    expect(mockSetValue).toHaveBeenCalledWith('12345-678');
  });

  it('applies NASCIMENTO mask correctly', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} mask="NASCIMENTO" />
    );
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, '01012000');
    
    expect(mockSetValue).toHaveBeenCalledWith('01/01/2000');
  });

  it('handles focus and blur events', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} />
    );
    
    const input = getByDisplayValue('');
    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
    
    expect(input).toBeTruthy();
  });

  it('renders with custom keyboard type', () => {
    const { getByDisplayValue } = render(
      <InputBig 
        value="" 
        setValue={mockSetValue} 
        keyboard="numeric" 
      />
    );
    
    const input = getByDisplayValue('');
    expect(input.props.keyboardType).toBe('numeric');
  });

  it('handles submit editing', () => {
    const mockOnSubmit = jest.fn();
    const { getByDisplayValue } = render(
      <InputBig 
        value="" 
        setValue={mockSetValue} 
        onSubmitEditing={mockOnSubmit}
      />
    );
    
    const input = getByDisplayValue('');
    fireEvent(input, 'submitEditing');
    
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  it('renders with focused prop', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} focused={true} />
    );
    
    const input = getByDisplayValue('');
    expect(input.props.autoFocus).toBe(true);
  });

  it('respects maxLength for masks', () => {
    const { getByDisplayValue } = render(
      <InputBig value="" setValue={mockSetValue} mask="CPF" />
    );
    
    const input = getByDisplayValue('');
    fireEvent.changeText(input, '123456789012345'); // More than 11 digits
    
    // Should be limited to CPF format
    expect(mockSetValue).toHaveBeenCalledWith('123.456.789-01');
  });

  it('renders with testID', () => {
    const { getByTestId } = render(
      <InputBig 
        value="" 
        setValue={mockSetValue} 
        testID="input-big"
      />
    );
    
    expect(getByTestId('input-big')).toBeTruthy();
  });
});