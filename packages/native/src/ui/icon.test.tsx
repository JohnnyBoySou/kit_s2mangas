import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Icon from './icon';

describe('Icon Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Icon name="Home" testID="icon" />
    );
    expect(getByTestId('icon')).toBeTruthy();
  });

  it('renders with custom size', () => {
    const { getByTestId } = render(
      <Icon name="Home" size={32} testID="icon" />
    );
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Icon name="Home" color="#ff0000" testID="icon" />
    );
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('renders with custom strokeWidth', () => {
    const { getByTestId } = render(
      <Icon name="Home" strokeWidth={2} testID="icon" />
    );
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('renders as pressable when onPress is provided', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Icon name="Home" onPress={mockOnPress} testID="icon" />
    );
    
    const icon = getByTestId('icon');
    fireEvent.press(icon);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Icon 
        name="Home" 
        onPress={mockOnPress} 
        disabled={true}
        testID="icon" 
      />
    );
    
    const icon = getByTestId('icon');
    fireEvent.press(icon);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Icon 
        name="Home"
        testID="icon"
        accessibilityLabel="Home icon"
        accessibilityHint="Navigate to home"
        accessibilityRole="button"
      />
    );
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Icon name="Home" style={customStyle} testID="icon" />
    );
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('returns null for non-existent icon', () => {
    const { queryByTestId } = render(
      <Icon name="NonExistentIcon" testID="icon" />
    );
    expect(queryByTestId('icon')).toBeNull();
  });
});