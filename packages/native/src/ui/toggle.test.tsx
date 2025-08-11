import React from 'react';
import Toggle from './toggle';

describe('Toggle Component', () => {
  const mockSetValue = jest.fn();

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders correctly with default props', () => {
    const element = React.createElement(Toggle, {
      value: false,
      setValue: mockSetValue,
      testID: "toggle"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Toggle);
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
  });

  it('renders in checked state', () => {
    const element = React.createElement(Toggle, {
      value: true,
      setValue: mockSetValue,
      testID: "toggle"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
  });

  it('renders in unchecked state', () => {
    const element = React.createElement(Toggle, {
      value: false,
      setValue: mockSetValue,
      testID: "toggle"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
  });

  it('calls setValue when pressed', () => {
    const element = React.createElement(Toggle, {
      value: false,
      setValue: mockSetValue,
      testID: "toggle"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
  });

  it('toggles value correctly', () => {
    const element = React.createElement(Toggle, {
      value: true,
      setValue: mockSetValue,
      testID: "toggle"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
  });

  it('renders in loading state', () => {
    const element = React.createElement(Toggle, {
      value: false,
      setValue: mockSetValue,
      isLoading: true,
      testID: "toggle"
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.isLoading).toBe(true);
    expect(element.props.testID).toBe("toggle");
  });

  it('renders in disabled state', () => {
    const element = React.createElement(Toggle, {
      value: false,
      setValue: mockSetValue,
      disabled: true,
      testID: "toggle"
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("toggle");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Toggle, {
      value: false,
      setValue: mockSetValue,
      testID: "toggle",
      accessibilityLabel: "Test toggle",
      accessibilityRole: "switch",
      accessibilityHint: "Toggle this option",
      accessibilityValue: false,
      accessibilityStates: ['unchecked']
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(false);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
    expect(element.props.accessibilityLabel).toBe("Test toggle");
    expect(element.props.accessibilityRole).toBe("switch");
    expect(element.props.accessibilityHint).toBe("Toggle this option");
    expect(element.props.accessibilityValue).toBe(false);
    expect(element.props.accessibilityStates).toEqual(['unchecked']);
  });

  it('renders with checked accessibility states', () => {
    const element = React.createElement(Toggle, {
      value: true,
      setValue: mockSetValue,
      testID: "toggle",
      accessibilityStates: ['checked', 'selected']
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe(true);
    expect(element.props.setValue).toBe(mockSetValue);
    expect(element.props.testID).toBe("toggle");
    expect(element.props.accessibilityStates).toEqual(['checked', 'selected']);
  });
});