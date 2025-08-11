import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Modal from './modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders correctly when visible', () => {
    const { getByText } = render(
      <Modal visible={true} onClose={mockOnClose}>
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const { queryByText } = render(
      <Modal visible={false} onClose={mockOnClose}>
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(queryByText('Modal Content')).toBeNull();
  });

  it('renders with custom testID', () => {
    const { getByTestId } = render(
      <Modal visible={true} onClose={mockOnClose} testID="test-modal">
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByTestId('test-modal')).toBeTruthy();
  });

  it('renders with custom animationType', () => {
    const { getByText } = render(
      <Modal visible={true} onClose={mockOnClose} animationType="slide">
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeTruthy();
  });

  it('renders with transparent prop', () => {
    const { getByText } = render(
      <Modal visible={true} onClose={mockOnClose} transparent={false}>
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByText } = render(
      <Modal visible={true} onClose={mockOnClose} style={customStyle}>
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeTruthy();
  });

  it('renders with custom overlayStyle', () => {
    const customOverlayStyle = { backgroundColor: 'rgba(255, 0, 0, 0.5)' };
    const { getByText } = render(
      <Modal visible={true} onClose={mockOnClose} overlayStyle={customOverlayStyle}>
        <Text>Modal Content</Text>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeTruthy();
  });
});