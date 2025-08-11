import React from 'react';
import { render } from '@testing-library/react-native';
import Divider from './divider';

describe('Divider Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Divider testID="divider" />);
    expect(getByTestId('divider')).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Divider color="#ff0000" testID="divider" />
    );
    const divider = getByTestId('divider');
    expect(divider).toBeTruthy();
  });

  it('renders with custom thickness', () => {
    const { getByTestId } = render(
      <Divider thickness={2} testID="divider" />
    );
    const divider = getByTestId('divider');
    expect(divider).toBeTruthy();
  });

  it('renders with custom marginVertical', () => {
    const { getByTestId } = render(
      <Divider marginVertical={16} testID="divider" />
    );
    const divider = getByTestId('divider');
    expect(divider).toBeTruthy();
  });

  it('renders with custom marginHorizontal', () => {
    const { getByTestId } = render(
      <Divider marginHorizontal={20} testID="divider" />
    );
    const divider = getByTestId('divider');
    expect(divider).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { opacity: 0.5 };
    const { getByTestId } = render(
      <Divider style={customStyle} testID="divider" />
    );
    const divider = getByTestId('divider');
    expect(divider).toBeTruthy();
  });
});