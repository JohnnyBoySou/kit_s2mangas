import React from 'react';
import Card from './card';

describe('Card Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Card, {
      children: React.createElement('div', {}, 'Test Content')
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Card);
    expect(element.props.children).toBeDefined();
  });

  it('renders with custom testID', () => {
    const element = React.createElement(Card, {
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom padding', () => {
    const element = React.createElement(Card, {
      padding: 20,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.padding).toBe(20);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom margin', () => {
    const element = React.createElement(Card, {
      margin: 10,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.margin).toBe(10);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom elevation', () => {
    const element = React.createElement(Card, {
      elevation: 5,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.elevation).toBe(5);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom borderRadius', () => {
    const element = React.createElement(Card, {
      r: 12,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.r).toBe(12);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom backgroundColor', () => {
    const element = React.createElement(Card, {
      bgColor: "#ff0000",
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.bgColor).toBe("#ff0000");
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom style', () => {
    const customStyle = { borderWidth: 1, borderColor: '#000' };
    const element = React.createElement(Card, {
      style: customStyle,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom width and height', () => {
    const element = React.createElement(Card, {
      w: 200,
      h: 150,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.w).toBe(200);
    expect(element.props.h).toBe(150);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom border properties', () => {
    const element = React.createElement(Card, {
      borderColor: "#00ff00",
      borderWidth: 2,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.borderColor).toBe("#00ff00");
    expect(element.props.borderWidth).toBe(2);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom layout properties', () => {
    const element = React.createElement(Card, {
      align: "center",
      justify: "space-between",
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.align).toBe("center");
    expect(element.props.justify).toBe("space-between");
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with selected prop as false by default', () => {
    const element = React.createElement(Card, {
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.selected).toBeUndefined();
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with selected prop as true', () => {
    const element = React.createElement(Card, {
      selected: true,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.selected).toBe(true);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with selected and border properties', () => {
    const element = React.createElement(Card, {
      selected: true,
      borderColor: "#00ff00",
      borderWidth: 2,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.selected).toBe(true);
    expect(element.props.borderColor).toBe("#00ff00");
    expect(element.props.borderWidth).toBe(2);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with selected and backgroundColor (should not affect bgColor when selected)', () => {
    const element = React.createElement(Card, {
      selected: true,
      bgColor: "#ff0000",
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.selected).toBe(true);
    expect(element.props.bgColor).toBe("#ff0000");
    expect(element.props.testID).toBe("test-card");
  });
});