import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Card from './card';

describe('Card Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('renders with custom testID', () => {
    const { getByTestId } = render(
      <Card testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    expect(getByTestId('test-card')).toBeTruthy();
  });

  it('renders with custom padding', () => {
    const { getByTestId } = render(
      <Card padding={20} testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card).toBeTruthy();
  });

  it('renders with custom margin', () => {
    const { getByTestId } = render(
      <Card margin={10} testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card).toBeTruthy();
  });

  it('renders with custom elevation', () => {
    const { getByTestId } = render(
      <Card elevation={5} testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card).toBeTruthy();
  });

  it('renders with custom borderRadius', () => {
    const { getByTestId } = render(
      <Card borderRadius={12} testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card).toBeTruthy();
  });

  it('renders with custom backgroundColor', () => {
    const { getByTestId } = render(
      <Card backgroundColor="#ff0000" testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { borderWidth: 1, borderColor: '#000' };
    const { getByTestId } = render(
      <Card style={customStyle} testID="test-card">
        <Text>Test Content</Text>
      </Card>
    );
    const card = getByTestId('test-card');
    expect(card).toBeTruthy();
  });
});