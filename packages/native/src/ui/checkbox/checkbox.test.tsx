import React from 'react';
import CheckBox from './checkbox';

describe('CheckBox Component', () => {
  const mockSetStatus = jest.fn();

  beforeEach(() => {
    mockSetStatus.mockClear();
  });

  it('renders correctly with default props', () => {
    const element = React.createElement(CheckBox, {
      status: false,
      setStatus: mockSetStatus,
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(CheckBox);
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders with label', () => {
    const element = React.createElement(CheckBox, {
      status: false,
      setStatus: mockSetStatus,
      label: "Test Label",
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.label).toBe("Test Label");
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders in checked state', () => {
    const element = React.createElement(CheckBox, {
      status: true,
      setStatus: mockSetStatus,
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.props.status).toBe(true);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders in unchecked state', () => {
    const element = React.createElement(CheckBox, {
      status: false,
      setStatus: mockSetStatus,
      testID: "checkbox"
    });
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("checkbox");
  });

  it('calls setStatus when pressed', () => {
    const element = React.createElement(CheckBox, {
      status: false,
      setStatus: mockSetStatus,
      testID: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("checkbox");
  });

  it('toggles status correctly', () => {
    const element = React.createElement(CheckBox, {
      status: true,
      setStatus: mockSetStatus,
      testID: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(true);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders in disabled state', () => {
    const element = React.createElement(CheckBox, {
      status: false,
      setStatus: mockSetStatus,
      disabled: true,
      testID: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.disabled).toBe(true);
    expect(element.props.testID).toBe("checkbox");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(CheckBox, {
      status: false,
      setStatus: mockSetStatus,
      testID: "checkbox",
      accessibilityLabel: "Test checkbox",
      accessibilityRole: "checkbox"
    });
    
    expect(element).toBeDefined();
    expect(element.props.status).toBe(false);
    expect(element.props.setStatus).toBe(mockSetStatus);
    expect(element.props.testID).toBe("checkbox");
    expect(element.props.accessibilityLabel).toBe("Test checkbox");
    expect(element.props.accessibilityRole).toBe("checkbox");
  });
});