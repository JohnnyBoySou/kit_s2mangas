import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Badge from './badge';

describe('Badge Component', () => {
  it('renders with text', () => {
    const { getByText } = render(<Badge>Test Badge</Badge>);
    expect(getByText('Test Badge')).toBeTruthy();
  });

  it('renders with default variant', () => {
    const { getByTestId } = render(
      <Badge variant="default" testID="badge">Default Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });

  it('renders with secondary variant', () => {
    const { getByTestId } = render(
      <Badge variant="secondary" testID="badge">Secondary Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });

  it('renders with outline variant', () => {
    const { getByTestId } = render(
      <Badge variant="outline" testID="badge">Outline Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });

  it('renders with destructive variant', () => {
    const { getByTestId } = render(
      <Badge variant="destructive" testID="badge">Destructive Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });

  it('handles press events', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Badge onPress={mockOnPress} testID="badge">Clickable Badge</Badge>
    );
    
    fireEvent.press(getByTestId('badge'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders with remove functionality', () => {
    const mockOnRemove = jest.fn();
    const { getByTestId, getByLabelText } = render(
      <Badge
        onRemove={mockOnRemove}
        testID="badge"
      >
        Removable Badge
      </Badge>
    );
    
    expect(getByTestId('badge')).toBeTruthy();
    
    const removeButton = getByLabelText('Remove badge');
    fireEvent.press(removeButton);
    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });

  it('renders with small size', () => {
    const { getByTestId } = render(
      <Badge size="sm" testID="badge">Small Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });

  it('renders with large size', () => {
    const { getByTestId } = render(
      <Badge size="lg" testID="badge">Large Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });

  it('renders with default size', () => {
    const { getByTestId } = render(
      <Badge size="default" testID="badge">Default Size Badge</Badge>
    );
    expect(getByTestId('badge')).toBeTruthy();
  });
});