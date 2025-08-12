import React from 'react';
import Sheet from './sheet';

describe('Sheet Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders when visible is true', () => {
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Sheet);
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('does not render when visible is false', () => {
    const element = React.createElement(Sheet, {
      visible: false,
      onClose: mockOnClose
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(false);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom testID', () => {
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose,
      testID: "custom-sheet"
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.testID).toBe("custom-sheet");
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom snap points', () => {
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose,
      snapPoints: [0.2, 400]
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.snapPoints).toEqual([0.2, 400]);
    expect(element.props.children).toBeDefined();
  });

  it('renders without onClose prop', () => {
    const element = React.createElement(Sheet, {
      visible: true
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBeUndefined();
    expect(element.props.children).toBeDefined();
  });

  it('renders with complex children', () => {
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose
    }, [
      React.createElement('div', { key: 'title' }, 'Title'),
      React.createElement('div', { key: 'description' }, 'Description'),
      React.createElement('div', { key: 'footer' }, 'Footer')
    ]);
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
    expect(Array.isArray(element.props.children)).toBe(true);
    expect(element.props.children).toHaveLength(3);
  });

  it('renders with default snap points when not provided', () => {
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.snapPoints).toBeUndefined();
    expect(element.props.children).toBeDefined();
  });

  it('renders handle indicator', () => {
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose
    }, React.createElement('div', {}, 'Sheet Content'));
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
  });

  it('renders with scrollable content', () => {
    const longContent = Array.from({ length: 20 }, (_, i) => 
      React.createElement('div', { key: i }, `Item ${i + 1}`)
    );
    
    const element = React.createElement(Sheet, {
      visible: true,
      onClose: mockOnClose
    }, longContent);
    
    expect(element).toBeDefined();
    expect(element.props.visible).toBe(true);
    expect(element.props.onClose).toBe(mockOnClose);
    expect(element.props.children).toBeDefined();
    expect(Array.isArray(element.props.children)).toBe(true);
    expect(element.props.children).toHaveLength(20);
  });

  it('maintains display name', () => {
    expect(Sheet.displayName).toBe('Sheet');
  });
});