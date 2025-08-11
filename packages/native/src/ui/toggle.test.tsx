import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Toggle from './toggle';

describe('Toggle Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Toggle value={false} setValue={mockSetValue} testID="toggle" />
    );
    expect(getByTestId('toggle')).toBeTruthy();
  });

  it('renders in checked state', () => {
    const { getByTestId } = render(
      <Toggle value={true} setValue={mockSetValue} testID="toggle" />
    );
    const toggle = getByTestId('toggle');
    expect(toggle).toBeTruthy();
  });

  it('renders in unchecked state', () => {
    const { getByTestId } = render(
      <Toggle value={false} setValue={mockSetValue} testID="toggle" />
    );
    const toggle = getByTestId('toggle');
    expect(toggle).toBeTruthy();
  });

  it('calls setValue when pressed', () => {
    const { getByTestId } = render(
      <Toggle value={false} setValue={mockSetValue} testID="toggle" />
    );
    
    const toggle = getByTestId('toggle');
    fireEvent.press(toggle);
    expect(mockSetValue).toHaveBeenCalledWith(true);
  });

  it('toggles value correctly', () => {
    const { getByTestId } = render(
      <Toggle value={true} setValue={mockSetValue} testID="toggle" />
    );
    
    const toggle = getByTestId('toggle');
    fireEvent.press(toggle);
    expect(mockSetValue).toHaveBeenCalledWith(false);
  });

  it('renders in loading state', () => {
    const { getByTestId } = render(
      <Toggle 
        value={false} 
        setValue={mockSetValue} 
        isLoading={true}
        testID="toggle" 
      />
    );
    const toggle = getByTestId('toggle');
    expect(toggle).toBeTruthy();
  });

  it('renders in disabled state', () => {
    const { getByTestId } = render(
      <Toggle 
        value={false} 
        setValue={mockSetValue} 
        disabled={true}
        testID="toggle" 
      />
    );
    
    const toggle = getByTestId('toggle');
    fireEvent.press(toggle);
    expect(mockSetValue).not.toHaveBeenCalled();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Toggle 
        value={false} 
        setValue={mockSetValue}
        testID="toggle"
        accessibilityLabel="Test toggle"
        accessibilityRole="switch"
        accessibilityHint="Toggle this option"
        accessibilityValue={false}
        accessibilityStates={['unchecked']}
      />
    );
    const toggle = getByTestId('toggle');
    expect(toggle).toBeTruthy();
  });

  it('renders with checked accessibility states', () => {
    const { getByTestId } = render(
      <Toggle 
        value={true} 
        setValue={mockSetValue}
        testID="toggle"
        accessibilityStates={['checked', 'selected']}
      />
    );
    const toggle = getByTestId('toggle');
    expect(toggle).toBeTruthy();
  });
});