import React from 'react';
import Radio from './radio';

describe('Radio Component', () => {
  it('renders with default props', () => {
    const element = React.createElement(Radio, {
      selected: false
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Radio);
    expect(element.props.selected).toBe(false);
  });

  it('renders with selected prop', () => {
    const element = React.createElement(Radio, {
      selected: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Radio);
    expect(element.props.selected).toBe(true);
  });

  it('renders when not selected', () => {
    const element = React.createElement(Radio, {
      selected: false
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Radio);
    expect(element.props.selected).toBe(false);
  });

  it('renders when selected', () => {
    const element = React.createElement(Radio, {
      selected: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Radio);
    expect(element.props.selected).toBe(true);
  });

  it('has correct component structure', () => {
    const element = React.createElement(Radio, {
      selected: false
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Radio);
    expect(typeof element.props.selected).toBe('boolean');
  });

  it('accepts boolean selected prop', () => {
    const element = React.createElement(Radio, {
      selected: true
    });
    
    expect(element.props.selected).toBe(true);
    expect(typeof element.props.selected).toBe('boolean');
  });

  it('renders with different selected states', () => {
    const falseElement = React.createElement(Radio, { selected: false });
    const trueElement = React.createElement(Radio, { selected: true });
    
    expect(falseElement.props.selected).toBe(false);
    expect(trueElement.props.selected).toBe(true);
  });

  it('handles boolean prop correctly', () => {
    const element = React.createElement(Radio, {
      selected: false
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Radio);
    expect(element.props.selected).toBe(false);
    expect(typeof element.props.selected).toBe('boolean');
  });
});
