import React from 'react';
import Check from './check';

describe('Check Component', () => {
  const mockSetStatus = jest.fn();

  beforeEach(() => {
    mockSetStatus.mockClear();
  });

  it('renders correctly with default props', () => {
    const element = React.createElement(Check, {
      status: false,
      setStatus: mockSetStatus,
      testID: "check"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Check);
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("check");
  });

  it('renders in checked state', () => {
    const element = React.createElement(Check, {
      status: true,
      setStatus: mockSetStatus,
      testID: "check"
    });
    expect(element).toBeDefined();
    expect(element.props.status).toBe(true);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("check");
  });

  it('renders in unchecked state', () => {
    const element = React.createElement(Check, {
      status: false,
      setStatus: mockSetStatus,
      testID: "check"
    });
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("check");
  });

  it('calls setStatus when pressed', () => {
    const element = React.createElement(Check, {
      status: false,
      setStatus: mockSetStatus,
      testID: "check"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("check");
  });

  it('toggles status correctly', () => {
    const element = React.createElement(Check, {
      status: true,
      setStatus: mockSetStatus,
      testID: "check"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(true);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("check");
  });

  it('renders in disabled state', () => {
    const element = React.createElement(Check, {
      status: false,
      setStatus: mockSetStatus,
      disabled: true,
      testID: "check"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("check");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Check, {
      status: false,
      setStatus: mockSetStatus,
      testID: "check",
      accessibilityLabel: "Test check",
      accessibilityRole: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("check");
    expect(element.props.accessibilityLabel).toBe("Test check");
    expect(element.props.accessibilityRole).toBe("checkbox");
  });
});