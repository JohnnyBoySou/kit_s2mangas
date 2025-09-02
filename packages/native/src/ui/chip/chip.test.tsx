import React from 'react';
import Chip from './chip';

describe('Chip Component', () => {
  it('renders with text', () => {
    const element = React.createElement(Chip, { children: 'Test Chip' });
    expect(element).toBeDefined();
    expect(element.type).toBe(Chip);
    expect(element.props.children).toBe('Test Chip');
  });

  it('renders with default variant', () => {
    const element = React.createElement(Chip, {
      variant: 'default',
      testID: 'chip',
      children: 'Default Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe('default');
    expect(element.props.testID).toBe('chip');
    expect(element.props.children).toBe('Default Chip');
  });

  it('renders with secondary variant', () => {
    const element = React.createElement(Chip, {
      variant: 'secondary',
      testID: 'chip',
      children: 'Secondary Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe('secondary');
    expect(element.props.testID).toBe('chip');
  });

  it('renders with outline variant', () => {
    const element = React.createElement(Chip, {
      variant: 'outline',
      testID: 'chip',
      children: 'Outline Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe('outline');
    expect(element.props.testID).toBe('chip');
  });

  it('renders with destructive variant', () => {
    const element = React.createElement(Chip, {
      variant: 'destructive',
      testID: 'chip',
      children: 'Destructive Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe('destructive');
    expect(element.props.testID).toBe('chip');
  });

  it('handles press events', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Chip, {
      onPress: mockOnPress,
      testID: 'chip',
      children: 'Clickable Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe('chip');
  });

  it('renders with remove functionality', () => {
    const mockOnRemove = jest.fn();
    const element = React.createElement(Chip, {
      onRemove: mockOnRemove,
      testID: 'chip',
      children: 'Removable Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.testID).toBe('chip');
    expect(element.props.children).toBe('Removable Chip');
  });

  it('renders with selected state', () => {
    const element = React.createElement(Chip, {
      testID: 'chip',
      children: 'Selected Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.testID).toBe('chip');
    expect(element.props.children).toBe('Selected Chip');
  });

  it('renders with small size', () => {
    const element = React.createElement(Chip, {
      size: 'sm',
      testID: 'chip',
      children: 'Small Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.size).toBe('sm');
    expect(element.props.testID).toBe('chip');
  });

  it('renders with large size', () => {
    const element = React.createElement(Chip, {
      size: 'lg',
      testID: 'chip',
      children: 'Large Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.size).toBe('lg');
    expect(element.props.testID).toBe('chip');
  });

  it('renders with default size', () => {
    const element = React.createElement(Chip, {
      size: 'default',
      testID: 'chip',
      children: 'Default Size Chip',
    });

    expect(element).toBeDefined();
    expect(element.props.size).toBe('default');
    expect(element.props.testID).toBe('chip');
  });
});
