import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Check from './check';

describe('Check Component', () => {
  const mockSetStatus = jest.fn();

  beforeEach(() => {
    mockSetStatus.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Check status={false} setStatus={mockSetStatus} testID="check" />
    );
    expect(getByTestId('check')).toBeTruthy();
  });

  it('renders in checked state', () => {
    const { getByTestId } = render(
      <Check status={true} setStatus={mockSetStatus} testID="check" />
    );
    const check = getByTestId('check');
    expect(check).toBeTruthy();
  });

  it('renders in unchecked state', () => {
    const { getByTestId } = render(
      <Check status={false} setStatus={mockSetStatus} testID="check" />
    );
    const check = getByTestId('check');
    expect(check).toBeTruthy();
  });

  it('calls setStatus when pressed', () => {
    const { getByTestId } = render(
      <Check status={false} setStatus={mockSetStatus} testID="check" />
    );
    
    const check = getByTestId('check');
    fireEvent.press(check);
    expect(mockSetStatus).toHaveBeenCalledWith(true);
  });

  it('toggles status correctly', () => {
    const { getByTestId } = render(
      <Check status={true} setStatus={mockSetStatus} testID="check" />
    );
    
    const check = getByTestId('check');
    fireEvent.press(check);
    expect(mockSetStatus).toHaveBeenCalledWith(false);
  });

  it('renders in disabled state', () => {
    const { getByTestId } = render(
      <Check 
        status={false} 
        setStatus={mockSetStatus} 
        disabled={true}
        testID="check" 
      />
    );
    
    const check = getByTestId('check');
    fireEvent.press(check);
    expect(mockSetStatus).not.toHaveBeenCalled();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Check 
        status={false} 
        setStatus={mockSetStatus}
        testID="check"
        accessibilityLabel="Test check"
        accessibilityRole="checkbox"
      />
    );
    const check = getByTestId('check');
    expect(check).toBeTruthy();
  });
});