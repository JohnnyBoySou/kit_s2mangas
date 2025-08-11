import React from 'react';
import { render } from '@testing-library/react-native';
import Line from './line';

describe('Line Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(
      <Line testID="line" />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Line testID="line" color="#FF0000" />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with custom dimensions', () => {
    const { getByTestId } = render(
      <Line testID="line" height={5} width={200} />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with custom margins', () => {
    const { getByTestId } = render(
      <Line testID="line" mv={10} mh={20} />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with custom opacity', () => {
    const { getByTestId } = render(
      <Line testID="line" opacity={0.5} />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Line 
        testID="line"
        accessibilityLabel="Test line"
        accessibilityRole="none"
        accessibilityElementsHidden={true}
      />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with visible prop', () => {
    const { getByTestId } = render(
      <Line testID="line" visible={true} />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });

  it('renders with all custom props', () => {
    const { getByTestId } = render(
      <Line 
        testID="line"
        color="#00FF00"
        height={10}
        width={300}
        mv={15}
        mh={25}
        opacity={0.8}
        visible={true}
        accessibilityLabel="Custom line"
        accessibilityRole="list"
      />
    );
    
    expect(getByTestId('line')).toBeTruthy();
  });
});