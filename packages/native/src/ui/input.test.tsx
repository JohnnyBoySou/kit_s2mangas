import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from './input';

describe('Input Component', () => {
  it('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter text" />
    );
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('renders with default value', () => {
    const { getByDisplayValue } = render(
      <Input value="Default value" />
    );
    expect(getByDisplayValue('Default value')).toBeTruthy();
  });

  it('handles onChangeText correctly', () => {
    const mockOnChangeText = jest.fn();
    const { getByTestId } = render(
      <Input 
        onChangeText={mockOnChangeText} 
        testID="input"
        placeholder="Type here"
      />
    );
    
    const input = getByTestId('input');
    fireEvent.changeText(input, 'New text');
    expect(mockOnChangeText).toHaveBeenCalledWith('New text');
  });

  it('renders with label', () => {
    const { getByText } = render(
      <Input label="Username" placeholder="Enter username" />
    );
    expect(getByText('Username')).toBeTruthy();
  });

  it('renders with error message', () => {
    const { getByText } = render(
      <Input 
        placeholder="Enter email" 
        error="Invalid email format"
      />
    );
    expect(getByText('Invalid email format')).toBeTruthy();
  });

  it('renders with helper text', () => {
    const { getByText } = render(
      <Input 
        placeholder="Enter password" 
        helperText="Must be at least 8 characters"
      />
    );
    expect(getByText('Must be at least 8 characters')).toBeTruthy();
  });

  it('renders in disabled state', () => {
    const { getByTestId } = render(
      <Input 
        placeholder="Disabled input" 
        disabled 
        testID="input"
      />
    );
    const input = getByTestId('input');
    expect(input.props.editable).toBe(false);
  });

  it('renders with secure text entry', () => {
    const { getByTestId } = render(
      <Input 
        placeholder="Enter password" 
        secureTextEntry 
        testID="input"
      />
    );
    const input = getByTestId('input');
    expect(input.props.secureTextEntry).toBe(true);
  });

  it('renders with multiline', () => {
    const { getByTestId } = render(
      <Input 
        placeholder="Enter description" 
        multiline 
        testID="input"
      />
    );
    const input = getByTestId('input');
    expect(input.props.multiline).toBe(true);
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'lightgray' };
    const { getByTestId } = render(
      <Input 
        placeholder="Custom input" 
        style={customStyle} 
        testID="input"
      />
    );
    const input = getByTestId('input');
    expect(input).toBeTruthy();
  });

  it('handles onFocus correctly', () => {
    const mockOnFocus = jest.fn();
    const { getByTestId } = render(
      <Input 
        placeholder="Focus test" 
        onFocus={mockOnFocus} 
        testID="input"
      />
    );
    
    const input = getByTestId('input');
    fireEvent(input, 'focus');
    expect(mockOnFocus).toHaveBeenCalledTimes(1);
  });

  it('handles onBlur correctly', () => {
    const mockOnBlur = jest.fn();
    const { getByTestId } = render(
      <Input 
        placeholder="Blur test" 
        onBlur={mockOnBlur} 
        testID="input"
      />
    );
    
    const input = getByTestId('input');
    fireEvent(input, 'blur');
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Input 
        placeholder="Accessible input"
        testID="input"
        accessibilityLabel="Username input"
        accessibilityHint="Enter your username"
      />
    );
    const input = getByTestId('input');
    expect(input).toBeTruthy();
  });
});