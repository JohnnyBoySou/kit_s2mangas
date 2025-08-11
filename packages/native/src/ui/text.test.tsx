import React from 'react';
import { render } from '@testing-library/react-native';
import { HeadTitle, Title, Label, SubLabel, Description, U } from './text';

describe('Text Components', () => {
  it('renders HeadTitle correctly', () => {
    const { getByText } = render(<HeadTitle>Hello World</HeadTitle>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders Title correctly', () => {
    const { getByText } = render(<Title>Title Text</Title>);
    expect(getByText('Title Text')).toBeTruthy();
  });

  it('renders Label correctly', () => {
    const { getByText } = render(<Label>Label Text</Label>);
    expect(getByText('Label Text')).toBeTruthy();
  });

  it('renders SubLabel correctly', () => {
    const { getByText } = render(<SubLabel>SubLabel Text</SubLabel>);
    expect(getByText('SubLabel Text')).toBeTruthy();
  });

  it('renders Description correctly', () => {
    const { getByText } = render(<Description>Description Text</Description>);
    expect(getByText('Description Text')).toBeTruthy();
  });

  it('renders U (underlined) correctly', () => {
    const { getByText } = render(<U>Underlined Text</U>);
    expect(getByText('Underlined Text')).toBeTruthy();
  });

  it('renders with primary color', () => {
    const { getByTestId } = render(
      <Text color="primary" testID="text">
        Primary text
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
  });

  it('renders with secondary color', () => {
    const { getByTestId } = render(
      <Text color="secondary" testID="text">
        Secondary text
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
  });

  it('renders with center alignment', () => {
    const { getByTestId } = render(
      <Text align="center" testID="text">
        Centered text
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
  });

  it('renders with right alignment', () => {
    const { getByTestId } = render(
      <Text align="right" testID="text">
        Right aligned text
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { fontWeight: 'bold' };
    const { getByTestId } = render(
      <Text style={customStyle} testID="text">
        Custom styled text
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
  });

  it('renders with numberOfLines prop', () => {
    const { getByTestId } = render(
      <Text numberOfLines={2} testID="text">
        This is a very long text that should be truncated after two lines
      </Text>
    );
    const text = getByTestId('text');
    expect(text.props.numberOfLines).toBe(2);
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Text 
        testID="text"
        accessibilityLabel="Important text"
        accessibilityRole="text"
      >
        Accessible text
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
  });
});