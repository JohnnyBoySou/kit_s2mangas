import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CheckBox from './checkbox';

describe('CheckBox Component', () => {
  const mockSetStatus = jest.fn();

  beforeEach(() => {
    mockSetStatus.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <CheckBox status={false} setStatus={mockSetStatus} testID="checkbox" />
    );
    expect(getByTestId('checkbox')).toBeTruthy();
  });

  it('renders with label', () => {
    const { getByText } = render(
      <CheckBox 
        status={false} 
        setStatus={mockSetStatus} 
        label="Test Label"
        testID="checkbox" 
      />
    );
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('renders in checked state', () => {
    const { getByTestId } = render(
      <CheckBox status={true} setStatus={mockSetStatus} testID="checkbox" />
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('renders in unchecked state', () => {
    const { getByTestId } = render(
      <CheckBox status={false} setStatus={mockSetStatus} testID="checkbox" />
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeTruthy();
  });

  it('calls setStatus when pressed', () => {
    const { getByTestId } = render(
      <CheckBox status={false} setStatus={mockSetStatus} testID="checkbox" />
    );
    
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);
    expect(mockSetStatus).toHaveBeenCalledWith(true);
  });

  it('toggles status correctly', () => {
    const { getByTestId } = render(
      <CheckBox status={true} setStatus={mockSetStatus} testID="checkbox" />
    );
    
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);
    expect(mockSetStatus).toHaveBeenCalledWith(false);
  });

  it('renders in disabled state', () => {
    const { getByTestId } = render(
      <CheckBox 
        status={false} 
        setStatus={mockSetStatus} 
        disabled={true}
        testID="checkbox" 
      />
    );
    
    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);
    expect(mockSetStatus).not.toHaveBeenCalled();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <CheckBox 
        status={false} 
        setStatus={mockSetStatus}
        testID="checkbox"
        accessibilityLabel="Test checkbox"
        accessibilityRole="checkbox"
      />
    );
    const checkbox = getByTestId('checkbox');
    expect(checkbox).toBeTruthy();
  });
});