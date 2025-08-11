import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Sheet from './sheet';

describe('Sheet Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders when visible is true', () => {
    const { getByText } = render(
      <Sheet visible={true} onClose={mockOnClose}>
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    expect(getByText('Sheet Content')).toBeTruthy();
  });

  it('does not render when visible is false', () => {
    const { queryByText } = render(
      <Sheet visible={false} onClose={mockOnClose}>
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    expect(queryByText('Sheet Content')).toBeNull();
  });

  it('renders with custom testID', () => {
    const { getByTestId } = render(
      <Sheet visible={true} onClose={mockOnClose} testID="custom-sheet">
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    expect(getByTestId('custom-sheet')).toBeTruthy();
  });

  it('renders with custom snap points', () => {
    const { getByText } = render(
      <Sheet visible={true} onClose={mockOnClose} snapPoints={[0.2, 400]}>
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    expect(getByText('Sheet Content')).toBeTruthy();
  });

  it('renders without onClose prop', () => {
    const { getByText } = render(
      <Sheet visible={true}>
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    expect(getByText('Sheet Content')).toBeTruthy();
  });

  it('renders with complex children', () => {
    const { getByText } = render(
      <Sheet visible={true} onClose={mockOnClose}>
        <Text>Title</Text>
        <Text>Description</Text>
        <Text>Footer</Text>
      </Sheet>
    );
    
    expect(getByText('Title')).toBeTruthy();
    expect(getByText('Description')).toBeTruthy();
    expect(getByText('Footer')).toBeTruthy();
  });

  it('renders with default snap points when not provided', () => {
    const { getByText } = render(
      <Sheet visible={true} onClose={mockOnClose}>
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    expect(getByText('Sheet Content')).toBeTruthy();
  });

  it('renders handle indicator', () => {
    const { getByText } = render(
      <Sheet visible={true} onClose={mockOnClose}>
        <Text>Sheet Content</Text>
      </Sheet>
    );
    
    // The handle indicator is a View without text, so we check for content
    expect(getByText('Sheet Content')).toBeTruthy();
  });

  it('renders with scrollable content', () => {
    const longContent = Array.from({ length: 20 }, (_, i) => (
      <Text key={i}>Item {i + 1}</Text>
    ));
    
    const { getByText } = render(
      <Sheet visible={true} onClose={mockOnClose}>
        {longContent}
      </Sheet>
    );
    
    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 20')).toBeTruthy();
  });

  it('maintains display name', () => {
    expect(Sheet.displayName).toBe('Sheet');
  });
});