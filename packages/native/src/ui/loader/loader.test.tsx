import React from 'react';
import Loader from './loader';

describe('Loader Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Loader, {
      testID: "loader"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.testID).toBe("loader");
  });

  it('renders with custom size', () => {
    const element = React.createElement(Loader, {
      size: "large",
      testID: "loader"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.size).toBe("large");
    expect(element.props.testID).toBe("loader");
  });

  it('renders with custom color', () => {
    const element = React.createElement(Loader, {
      color: "#ff0000",
      testID: "loader"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.color).toBe("#ff0000");
    expect(element.props.testID).toBe("loader");
  });

  it('renders when visible is true', () => {
    const element = React.createElement(Loader, {
      visible: true,
      testID: "loader"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.visible).toBe(true);
    expect(element.props.testID).toBe("loader");
  });

  it('does not render when visible is false', () => {
    const element = React.createElement(Loader, {
      visible: false,
      testID: "loader"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.visible).toBe(false);
    expect(element.props.testID).toBe("loader");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Loader, {
      testID: "loader",
      accessibilityLabel: "Loading content",
      accessibilityRole: "progressbar"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.testID).toBe("loader");
    expect(element.props.accessibilityLabel).toBe("Loading content");
    expect(element.props.accessibilityRole).toBe("progressbar");
  });

  it('renders with numeric size', () => {
    const element = React.createElement(Loader, {
      size: 32,
      testID: "loader"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Loader);
    expect(element.props.size).toBe(32);
    expect(element.props.testID).toBe("loader");
  });
});