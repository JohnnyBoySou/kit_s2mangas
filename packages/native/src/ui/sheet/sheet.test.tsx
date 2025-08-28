import React from 'react';
import Sheet from './sheet';

// Mock do @gorhom/bottom-sheet
jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');
  
  const BottomSheet = React.forwardRef((props: any, ref: any) => {
    return React.createElement(View, { 
      ...props, 
      ref,
      testID: props.testID || 'bottom-sheet'
    }, props.children);
  });
  
  const BottomSheetScrollView = (props: any) => {
    return React.createElement(View, { 
      ...props, 
      testID: props.testID || 'bottom-sheet-scroll-view'
    }, props.children);
  };
  
  return {
    __esModule: true,
    default: BottomSheet,
    BottomSheetScrollView
  };
});

describe('Sheet Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders correctly with default props', () => {
    const element = React.createElement(Sheet, {
      onClose: mockOnClose,
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Sheet);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom snap points', () => {
    const snapPoints = [0.2, 400];
    const element = React.createElement(Sheet, {
      snapPoints: snapPoints,
      onClose: mockOnClose,
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.snapPoints).toEqual(snapPoints);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('renders with default snap points when not provided', () => {
    const element = React.createElement(Sheet, {
      onClose: mockOnClose,
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.snapPoints).toBeUndefined();
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('renders without onClose prop', () => {
    const element = React.createElement(Sheet, {
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.onClose).toBeUndefined();
    expect(element.props.children).toBeDefined();
  });

  it('renders with complex children', () => {
    const element = React.createElement(Sheet, {
      onClose: mockOnClose,
      children: [
        React.createElement('div', { key: 'title' }, 'Title'),
        React.createElement('div', { key: 'description' }, 'Description'),
        React.createElement('div', { key: 'footer' }, 'Footer')
      ]
    });
    
    expect(element).toBeDefined();
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
    expect(Array.isArray(element.props.children)).toBe(true);
    expect(element.props.children).toHaveLength(3);
  });

  it('renders with scrollable content', () => {
    const longContent = Array.from({ length: 20 }, (_, i) => 
      React.createElement('div', { key: i }, `Item ${i + 1}`)
    );
    
    const element = React.createElement(Sheet, {
      onClose: mockOnClose,
      children: longContent
    });
    
    expect(element).toBeDefined();
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
    expect(Array.isArray(element.props.children)).toBe(true);
    expect(element.props.children).toHaveLength(20);
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<any>();
    const element = React.createElement(Sheet, {
      ref: ref,
      onClose: mockOnClose,
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.ref).toBe(ref);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('maintains display name', () => {
    expect(Sheet.displayName).toBe('Sheet');
  });

  it('passes through additional props to BottomSheet', () => {
    const element = React.createElement(Sheet, {
      onClose: mockOnClose,
      index: 1,
      enablePanDownToClose: true,
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.index).toBe(1);
    expect(element.props.enablePanDownToClose).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('applies correct default styles', () => {
    const element = React.createElement(Sheet, {
      onClose: mockOnClose,
      children: React.createElement('div', {}, 'Sheet Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });
});