import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import Switch from './switch';

describe('Switch Component', () => {
  const defaultProps = {
    value: false,
    setValue: jest.fn(),
    testID: 'switch-test'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<Switch {...defaultProps} />);
    
    const switchElement = screen.getByTestId('switch-test');
    expect(switchElement).toBeTruthy();
  });

  it('renders in off state by default', () => {
    render(<Switch {...defaultProps} />);
    
    const switchElement = screen.getByTestId('switch-test');
    expect(switchElement).toBeTruthy();
    expect(switchElement.props.accessibilityState.checked).toBe(false);
  });

  it('renders in on state when value is true', () => {
    render(<Switch {...defaultProps} value={true} />);
    
    const switchElement = screen.getByTestId('switch-test');
    expect(switchElement).toBeTruthy();
    expect(switchElement.props.accessibilityState.checked).toBe(true);
  });

  it('calls setValue when pressed', () => {
    const mockSetValue = jest.fn();
    render(<Switch {...defaultProps} setValue={mockSetValue} />);
    
    const switchElement = screen.getByTestId('switch-test');
    fireEvent.press(switchElement);
    
    expect(mockSetValue).toHaveBeenCalledWith(true);
  });

  it('toggles from off to on when pressed', () => {
    const mockSetValue = jest.fn();
    render(<Switch {...defaultProps} value={false} setValue={mockSetValue} />);
    
    const switchElement = screen.getByTestId('switch-test');
    fireEvent.press(switchElement);
    
    expect(mockSetValue).toHaveBeenCalledWith(true);
  });

  it('toggles from on to off when pressed', () => {
    const mockSetValue = jest.fn();
    render(<Switch {...defaultProps} value={true} setValue={mockSetValue} />);
    
    const switchElement = screen.getByTestId('switch-test');
    fireEvent.press(switchElement);
    
    expect(mockSetValue).toHaveBeenCalledWith(false);
  });

  it('renders in disabled state', () => {
    render(<Switch {...defaultProps} disabled={true} />);
    
    const switchElement = screen.getByTestId('switch-test');
    expect(switchElement).toBeTruthy();
    expect(switchElement.props.accessibilityState.checked).toBe(false);
  });

  it('does not call setValue when disabled and pressed', () => {
    const mockSetValue = jest.fn();
    render(<Switch {...defaultProps} disabled={true} setValue={mockSetValue} />);
    
    const switchElement = screen.getByTestId('switch-test');
    fireEvent.press(switchElement);
    
    expect(mockSetValue).not.toHaveBeenCalled();
  });

  it('renders with accessibility props', () => {
    render(
      <Switch 
        {...defaultProps} 
        accessibilityLabel="Toggle switch"
        accessibilityRole="switch"
      />
    );
    
    const switchElement = screen.getByTestId('switch-test');
    expect(switchElement.props.accessibilityLabel).toBe('Toggle switch');
    expect(switchElement.props.accessibilityRole).toBe('switch');
  });

  it('renders with checkbox accessibility role', () => {
    render(
      <Switch 
        {...defaultProps} 
        accessibilityRole="checkbox"
      />
    );
    
    const switchElement = screen.getByTestId('switch-test');
    expect(switchElement.props.accessibilityRole).toBe('checkbox');
  });

  it('updates accessibility state when value changes', () => {
    const { rerender } = render(<Switch {...defaultProps} value={false} />);
    
    let switchElement = screen.getByTestId('switch-test');
    expect(switchElement.props.accessibilityState.checked).toBe(false);
    
    rerender(<Switch {...defaultProps} value={true} />);
    
    switchElement = screen.getByTestId('switch-test');
    expect(switchElement.props.accessibilityState.checked).toBe(true);
  });

  it('handles multiple rapid presses correctly', () => {
    const mockSetValue = jest.fn();
    render(<Switch {...defaultProps} setValue={mockSetValue} />);
    
    const switchElement = screen.getByTestId('switch-test');
    
    fireEvent.press(switchElement);
    fireEvent.press(switchElement);
    fireEvent.press(switchElement);
    
    expect(mockSetValue).toHaveBeenCalledTimes(3);
    expect(mockSetValue).toHaveBeenNthCalledWith(1, true);
    expect(mockSetValue).toHaveBeenNthCalledWith(2, true);
    expect(mockSetValue).toHaveBeenNthCalledWith(3, true);
  });

  it('maintains disabled state after value changes', () => {
    const { rerender } = render(<Switch {...defaultProps} disabled={true} />);
    
    let switchElement = screen.getByTestId('switch-test');
    expect(switchElement.props.accessibilityState.checked).toBe(false);
    
    rerender(<Switch {...defaultProps} disabled={true} value={true} />);
    
    switchElement = screen.getByTestId('switch-test');
    expect(switchElement.props.accessibilityState.checked).toBe(true);
  });
});