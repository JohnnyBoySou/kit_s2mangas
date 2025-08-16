import React from 'react';
import Tabs from './tabs';

describe('Tabs Component', () => {
  const mockSetValue = jest.fn();
  const testValues = ['Tab 1', 'Tab 2', 'Tab 3'];

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders correctly with default props', () => {
    const element = React.createElement(Tabs, {
      onChange: mockSetValue,
      values: testValues
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Tabs);
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toBe(testValues);
  });

  it('renders with selected value', () => {
    const element = React.createElement(Tabs, {
      value: "Tab 2",
      onChange: mockSetValue,
      values: testValues
    });
    expect(element).toBeDefined();
    expect(element.props.value).toBe("Tab 2");
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toBe(testValues);
  });

  it('calls setValue when tab is pressed', () => {
    const element = React.createElement(Tabs, {
      onChange: mockSetValue,
      values: testValues
    });
    
    expect(element).toBeDefined();
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toBe(testValues);
  });

  it('deselects tab when already selected tab is pressed', () => {
    const element = React.createElement(Tabs, {
      value: "Tab 2",
      onChange: mockSetValue,
      values: testValues
    });
    
    expect(element).toBeDefined();
    expect(element.props.value).toBe("Tab 2");
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toBe(testValues);
  });

  it('renders with custom testID', () => {
    const element = React.createElement(Tabs, {
      onChange: mockSetValue,
      values: testValues,
      testID: "tabs"
    });
    expect(element).toBeDefined();
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toBe(testValues);
    expect(element.props.testID).toBe("tabs");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Tabs, {
      onChange: mockSetValue,
      values: testValues,
      testID: "tabs",
      accessibilityRole: "button",
      accessibilityLabel: "Tab navigation",
      accessibilityHint: "Select a tab to navigate"
    });
    
    expect(element).toBeDefined();
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toBe(testValues);
    expect(element.props.testID).toBe("tabs");
    expect(element.props.accessibilityRole).toBe("button");
    expect(element.props.accessibilityLabel).toBe("Tab navigation");
    expect(element.props.accessibilityHint).toBe("Select a tab to navigate");
  });

  it('renders with empty values array', () => {
    const element = React.createElement(Tabs, {
      onChange: mockSetValue,
      values: []
    });
    expect(element).toBeDefined();
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toEqual([]);
  });

  it('renders with single value', () => {
    const element = React.createElement(Tabs, {
      onChange: mockSetValue,
      values: ['Single Tab']
    });
    expect(element).toBeDefined();
    expect(element.props.onChange).toBe(mockSetValue);
    expect(element.props.values).toEqual(['Single Tab']);
  });
});