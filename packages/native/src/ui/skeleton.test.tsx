import React from 'react';
import { render } from '@testing-library/react-native';
import { Skeleton } from './skeleton';

describe('Skeleton Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <Skeleton testID="skeleton" />
    );
    expect(getByTestId('skeleton')).toBeTruthy();
  });

  it('renders with custom width', () => {
    const { getByTestId } = render(
      <Skeleton w={100} testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with custom height', () => {
    const { getByTestId } = render(
      <Skeleton h={50} testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with percentage width', () => {
    const { getByTestId } = render(
      <Skeleton w="50%" testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with percentage height', () => {
    const { getByTestId } = render(
      <Skeleton h="25%" testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with custom border radius', () => {
    const { getByTestId } = render(
      <Skeleton r={10} testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Skeleton c="#ff0000" testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { margin: 10 };
    const { getByTestId } = render(
      <Skeleton style={customStyle} testID="skeleton" />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });

  it('renders with all custom props', () => {
    const { getByTestId } = render(
      <Skeleton 
        w={200} 
        h={100} 
        r={8} 
        c="#333333" 
        testID="skeleton" 
      />
    );
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeTruthy();
  });
});