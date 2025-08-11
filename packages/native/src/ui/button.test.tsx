import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('renders with primary variant', () => {
    const { getByTestId } = render(
      <Button variant="primary" testID="button">
        Primary Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with secondary variant', () => {
    const { getByTestId } = render(
      <Button variant="secondary" testID="button">
        Secondary Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with outline variant', () => {
    const { getByTestId } = render(
      <Button variant="outline" testID="button">
        Outline Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with ghost variant', () => {
    const { getByTestId } = render(
      <Button variant="ghost" testID="button">
        Ghost Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with small size', () => {
    const { getByTestId } = render(
      <Button size="sm" testID="button">
        Small Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with medium size', () => {
    const { getByTestId } = render(
      <Button size="md" testID="button">
        Medium Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with large size', () => {
    const { getByTestId } = render(
      <Button size="lg" testID="button">
        Large Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('handles onPress correctly', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={mockOnPress} testID="button">
        Clickable Button
      </Button>
    );
    
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders in disabled state', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button disabled onPress={mockOnPress} testID="button">
        Disabled Button
      </Button>
    );
    
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('renders in loading state', () => {
    const { getByTestId } = render(
      <Button loading testID="button">
        Loading Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(
      <Button style={customStyle} testID="button">
        Custom Style Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Button 
        testID="button"
        accessibilityLabel="Test button"
        accessibilityHint="Tap to test"
      >
        Accessible Button
      </Button>
    );
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });
});