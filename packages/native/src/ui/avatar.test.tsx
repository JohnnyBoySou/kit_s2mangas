import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Avatar from './avatar';

describe('Avatar Component', () => {
  it('renders with image url', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders with custom width and height', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        width={60}
        height={60}
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders with circle shape', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        shape="circle"
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders with square shape', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        shape="square"
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders with initials when no image', () => {
    const { getByText } = render(
      <Avatar
        initials="JD"
        testID="avatar"
      />
    );
    
    expect(getByText('JD')).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customStyle = { borderWidth: 2, borderColor: 'red' };
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        style={customStyle}
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        testID="avatar"
        accessibilityLabel="User avatar"
        accessibilityRole="image"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('handles press events', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        onPress={mockOnPress}
        testID="avatar"
      />
    );
    
    fireEvent.press(getByTestId('avatar'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders in disabled state', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        disabled={true}
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders with loading state', () => {
    const { getByTestId } = render(
      <Avatar
        url="https://example.com/avatar.jpg"
        loading={true}
        testID="avatar"
      />
    );
    
    expect(getByTestId('avatar')).toBeTruthy();
  });
});