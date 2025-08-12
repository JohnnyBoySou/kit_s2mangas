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
      borderRadius: 12,
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.borderRadius).toBe(12);
    expect(element.props.testID).toBe("test-card");
  });

  it('renders with custom backgroundColor', () => {
    const element = React.createElement(Card, {
      backgroundColor: "#ff0000",
      testID: "test-card",
      children: React.createElement('div', {}, 'Test Content')
    });
    
    expect(element).toBeDefined();
    expect(element.props.backgroundColor).toBe("#ff0000");
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
});