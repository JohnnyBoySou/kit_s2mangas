import React from 'react';
import { render } from '@testing-library/react-native';
import MultiStepProgress from './progress';

describe('MultiStepProgress Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={3} current={1} testID="progress" />
    );
    expect(getByTestId('progress')).toBeTruthy();
  });

  it('renders with multiple steps', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={5} current={2} testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });

  it('renders with current step', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={4} current={3} testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });

  it('renders with animation disabled', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={3} current={2} animate={false} testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });

  it('renders with white theme', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={3} current={1} theme="white" testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });

  it('renders with dark theme', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={3} current={1} theme="dark" testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });

  it('returns null when steps is 0', () => {
    const { queryByTestId } = render(
      <MultiStepProgress steps={0} current={1} testID="progress" />
    );
    expect(queryByTestId('progress')).toBeNull();
  });

  it('returns null when steps is negative', () => {
    const { queryByTestId } = render(
      <MultiStepProgress steps={-1} current={1} testID="progress" />
    );
    expect(queryByTestId('progress')).toBeNull();
  });

  it('handles current step beyond total steps', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={3} current={5} testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });

  it('handles current step as 0', () => {
    const { getByTestId } = render(
      <MultiStepProgress steps={3} current={0} testID="progress" />
    );
    const progress = getByTestId('progress');
    expect(progress).toBeTruthy();
  });
});