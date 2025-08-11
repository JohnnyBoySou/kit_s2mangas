import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Tabs from './tabs';

describe('Tabs Component', () => {
  const mockSetValue = jest.fn();
  const testValues = ['Tab 1', 'Tab 2', 'Tab 3'];

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Tabs setValue={mockSetValue} values={testValues} />
    );
    expect(getByText('Tab 1')).toBeTruthy();
    expect(getByText('Tab 2')).toBeTruthy();
    expect(getByText('Tab 3')).toBeTruthy();
  });

  it('renders with selected value', () => {
    const { getByText } = render(
      <Tabs value="Tab 2" setValue={mockSetValue} values={testValues} />
    );
    expect(getByText('Tab 2')).toBeTruthy();
  });

  it('calls setValue when tab is pressed', () => {
    const { getByText } = render(
      <Tabs setValue={mockSetValue} values={testValues} />
    );
    
    const tab = getByText('Tab 1');
    fireEvent.press(tab);
    expect(mockSetValue).toHaveBeenCalledWith('Tab 1');
  });

  it('deselects tab when already selected tab is pressed', () => {
    const { getByText } = render(
      <Tabs value="Tab 2" setValue={mockSetValue} values={testValues} />
    );
    
    const tab = getByText('Tab 2');
    fireEvent.press(tab);
    expect(mockSetValue).toHaveBeenCalledWith('');
  });

  it('renders with custom testID', () => {
    const { getAllByTestId } = render(
      <Tabs setValue={mockSetValue} values={testValues} testID="tabs" />
    );
    const tabs = getAllByTestId('tabs');
    expect(tabs.length).toBe(testValues.length);
  });

  it('renders with accessibility props', () => {
    const { getAllByTestId } = render(
      <Tabs 
        setValue={mockSetValue} 
        values={testValues}
        testID="tabs"
        accessibilityRole="button"
        accessibilityLabel="Tab navigation"
        accessibilityHint="Select a tab to navigate"
      />
    );
    const tabs = getAllByTestId('tabs');
    expect(tabs.length).toBe(testValues.length);
  });

  it('renders with empty values array', () => {
    const { queryByText } = render(
      <Tabs setValue={mockSetValue} values={[]} />
    );
    expect(queryByText('Tab 1')).toBeNull();
  });

  it('renders with single value', () => {
    const { getByText } = render(
      <Tabs setValue={mockSetValue} values={['Single Tab']} />
    );
    expect(getByText('Single Tab')).toBeTruthy();
  });
});