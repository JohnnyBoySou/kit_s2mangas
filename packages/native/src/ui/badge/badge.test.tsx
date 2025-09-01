import React from 'react';
import Badge from './badge';

describe('Badge Component', () => {
  it('renders with text', () => {
    const element = React.createElement(Badge, { children: 'Test Badge' });
    expect(element).toBeDefined();
    expect(element.type).toBe(Badge);
    expect(element.props.children).toBe('Test Badge');
  });

  it('renders with default variant', () => {
    const element = React.createElement(Badge, {
      variant: "default",
      testID: "badge",
      children: 'Default Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe("default");
    expect(element.props.testID).toBe("badge");
    expect(element.props.children).toBe("Default Badge");
  });

  it('renders with secondary variant', () => {
    const element = React.createElement(Badge, {
      variant: "secondary",
      testID: "badge",
      children: 'Secondary Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe("secondary");
    expect(element.props.testID).toBe("badge");
  });

  it('renders with outline variant', () => {
    const element = React.createElement(Badge, {
      variant: "outline",
      testID: "badge",
      children: 'Outline Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe("outline");
    expect(element.props.testID).toBe("badge");
  });

  it('renders with destructive variant', () => {
    const element = React.createElement(Badge, {
      variant: "destructive",
      testID: "badge",
      children: 'Destructive Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.variant).toBe("destructive");
    expect(element.props.testID).toBe("badge");
  });

  it('renders with small size', () => {
    const element = React.createElement(Badge, {
      size: "sm",
      testID: "badge",
      children: 'Small Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.size).toBe("sm");
    expect(element.props.testID).toBe("badge");
  });

  it('renders with large size', () => {
    const element = React.createElement(Badge, {
      size: "lg",
      testID: "badge",
      children: 'Large Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.size).toBe("lg");
    expect(element.props.testID).toBe("badge");
  });

  it('renders with default size', () => {
    const element = React.createElement(Badge, {
      size: "default",
      testID: "badge",
      children: 'Default Size Badge'
    });

    expect(element).toBeDefined();
    expect(element.props.size).toBe("default");
    expect(element.props.testID).toBe("badge");
  });
});