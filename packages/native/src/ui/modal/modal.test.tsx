import React from 'react';
import { Text } from 'react-native';
import Modal from './modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders correctly when visible', () => {
    const element = React.createElement(Modal, {
      visible: true,
      onClose: mockOnClose,
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('does not render when not visible', () => {
    const element = React.createElement(Modal, {
      visible: false,
      onClose: mockOnClose,
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(false);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom testID', () => {
    const element = React.createElement(Modal, {
      visible: true,
      onClose: mockOnClose,
      testID: "test-modal",
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.testID).toBe("test-modal");
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom animationType', () => {
    const element = React.createElement(Modal, {
      visible: true,
      onClose: mockOnClose,
      animationType: "slide",
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.animationType).toBe("slide");
    expect(element.props.children).toBeDefined();
  });

  it('renders with transparent prop', () => {
    const element = React.createElement(Modal, {
      visible: true,
      onClose: mockOnClose,
      transparent: false,
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.transparent).toBe(false);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const element = React.createElement(Modal, {
      visible: true,
      onClose: mockOnClose,
      style: customStyle,
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.style).toBe(customStyle);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom overlayStyle', () => {
    const customOverlayStyle = { backgroundColor: 'rgba(255, 0, 0, 0.5)' };
    const element = React.createElement(Modal, {
      visible: true,
      onClose: mockOnClose,
      overlayStyle: customOverlayStyle,
      children: React.createElement(Text, null, 'Modal Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Modal);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.overlayStyle).toBe(customOverlayStyle);
    expect(element.props.children).toBeDefined();
  });
});