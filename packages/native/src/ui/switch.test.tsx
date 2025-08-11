import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Switch from './switch';

describe('Switch Component', () => {
  it('renders correctly with default props', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch value={false} setValue={mockSetValue} testID="switch" />
    );
    const switchComponent = getByTestId('switch');
    expect(switchComponent).toBeTruthy();
  });

  it('renders in on state', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch value={true} setValue={mockSetValue} testID="switch" />
    );
    const switchComponent = getByTestId('switch');
    expect(switchComponent).toBeTruthy();
  });

  it('renders in off state', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch value={false} setValue={mockSetValue} testID="switch" />
    );
    const switchComponent = getByTestId('switch');
    expect(switchComponent).toBeTruthy();
  });

  it('handles toggle correctly', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch value={false} setValue={mockSetValue} testID="switch" />
    );
    
    const switchComponent = getByTestId('switch');
    fireEvent.press(switchComponent);
    expect(mockSetValue).toHaveBeenCalledWith(true);
  });

  it('handles toggle from on to off', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch value={true} setValue={mockSetValue} testID="switch" />
    );
    
    const switchComponent = getByTestId('switch');
    fireEvent.press(switchComponent);
    expect(mockSetValue).toHaveBeenCalledWith(false);
  });

  it('renders in disabled state', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch 
        value={false} 
        setValue={mockSetValue} 
        disabled 
        testID="switch" 
      />
    );
    
    const switchComponent = getByTestId('switch');
    fireEvent.press(switchComponent);
    expect(mockSetValue).not.toHaveBeenCalled();
  });

  it('renders with accessibility props', () => {
    const mockSetValue = jest.fn();
    const { getByTestId } = render(
      <Switch 
        value={false} 
        setValue={mockSetValue}
        testID="switch"
        accessibilityLabel="Toggle switch"
        accessibilityRole="switch"
      />
    );
    const switchComponent = getByTestId('switch');
    expect(switchComponent).toBeTruthy();
  });
});