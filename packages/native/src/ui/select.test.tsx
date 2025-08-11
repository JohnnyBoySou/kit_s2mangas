import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
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
    const { getByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
      />
    );
    
    expect(getByText('Selecione uma opção')).toBeTruthy();
  });

  it('renders with custom placeholder', () => {
    const { getByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        placeholder="Choose an option"
      />
    );
    
    expect(getByText('Choose an option')).toBeTruthy();
  });

  it('displays selected option label', () => {
    const selectedOption = mockOptions[0];
    const { getByText } = render(
      <Select 
        options={mockOptions} 
        value={selectedOption} 
        onChange={mockOnChange} 
      />
    );
    
    expect(getByText('Option 1')).toBeTruthy();
  });

  it('opens dropdown when pressed', () => {
    const { getByTestId, getByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        testID="select"
      />
    );
    
    const selectButton = getByTestId('select');
    fireEvent.press(selectButton);
    
    expect(getByText('Option 1')).toBeTruthy();
    expect(getByText('Option 2')).toBeTruthy();
    expect(getByText('Option 3')).toBeTruthy();
  });

  it('calls onChange when option is selected', () => {
    const { getByTestId, getByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        testID="select"
      />
    );
    
    const selectButton = getByTestId('select');
    fireEvent.press(selectButton);
    
    const option1 = getByText('Option 1');
    fireEvent.press(option1);
    
    expect(mockOnChange).toHaveBeenCalledWith('option1');
  });

  it('closes dropdown after selecting option', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        testID="select"
      />
    );
    
    const selectButton = getByTestId('select');
    fireEvent.press(selectButton);
    
    const option1 = getByText('Option 1');
    fireEvent.press(option1);
    
    // Options should not be visible after selection
    expect(queryByText('Option 2')).toBeNull();
    expect(queryByText('Option 3')).toBeNull();
  });

  it('renders in disabled state', () => {
    const { getByTestId } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        disabled={true}
        testID="select"
      />
    );
    
    const selectButton = getByTestId('select');
    expect(selectButton.props.accessibilityState?.disabled).toBe(true);
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        style={customStyle}
        testID="select"
      />
    );
    
    expect(getByTestId('select')).toBeTruthy();
  });

  it('renders with custom text style', () => {
    const customTextStyle = { fontSize: 20 };
    const { getByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        textStyle={customTextStyle}
      />
    );
    
    expect(getByText('Selecione uma opção')).toBeTruthy();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        testID="select"
        accessibilityLabel="Select an option"
        accessibilityRole="button"
      />
    );
    
    expect(getByTestId('select')).toBeTruthy();
  });

  it('highlights selected option in dropdown', () => {
    const selectedOption = mockOptions[1];
    const { getByTestId, getByText } = render(
      <Select 
        options={mockOptions} 
        value={selectedOption} 
        onChange={mockOnChange} 
        testID="select"
      />
    );
    
    const selectButton = getByTestId('select');
    fireEvent.press(selectButton);
    
    expect(getByText('Option 2')).toBeTruthy();
  });

  it('handles empty options array', () => {
    const { getByText } = render(
      <Select 
        options={[]} 
        value={defaultValue} 
        onChange={mockOnChange} 
      />
    );
    
    expect(getByText('Selecione uma opção')).toBeTruthy();
  });

  it('toggles dropdown open/close', () => {
    const { getByTestId, getByText, queryByText } = render(
      <Select 
        options={mockOptions} 
        value={defaultValue} 
        onChange={mockOnChange} 
        testID="select"
      />
    );
    
    const selectButton = getByTestId('select');
    
    // Open dropdown
    fireEvent.press(selectButton);
    expect(getByText('Option 1')).toBeTruthy();
    
    // Close dropdown
    fireEvent.press(selectButton);
    expect(queryByText('Option 1')).toBeNull();
  });
});