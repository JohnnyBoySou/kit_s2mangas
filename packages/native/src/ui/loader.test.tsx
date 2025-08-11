import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from './loader';

describe('Loader Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Loader testID="loader" />);
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('renders with custom size', () => {
    const { getByTestId } = render(
      <Loader size="large" testID="loader" />
    );
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Loader color="#ff0000" testID="loader" />
    );
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });

  it('renders when visible is true', () => {
    const { getByTestId } = render(
      <Loader visible={true} testID="loader" />
    );
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('does not render when visible is false', () => {
    const { queryByTestId } = render(
      <Loader visible={false} testID="loader" />
    );
    expect(queryByTestId('loader')).toBeNull();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Loader 
        testID="loader"
        accessibilityLabel="Loading content"
        accessibilityRole="progressbar"
      />
    );
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });

  it('renders with numeric size', () => {
    const { getByTestId } = render(
      <Loader size={32} testID="loader" />
    );
    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
  });
});