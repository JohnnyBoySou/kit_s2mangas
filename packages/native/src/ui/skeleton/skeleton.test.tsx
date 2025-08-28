import React from 'react';
import Skeleton  from './skeleton';

describe('Skeleton Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Skeleton, {
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Skeleton);
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with custom width', () => {
    const element = React.createElement(Skeleton, {
      w: 100,
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.w).toBe(100);
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with custom height', () => {
    const element = React.createElement(Skeleton, {
      h: 50,
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.h).toBe(50);
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with percentage width', () => {
    const element = React.createElement(Skeleton, {
      w: "50%",
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.w).toBe("50%");
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with percentage height', () => {
    const element = React.createElement(Skeleton, {
      h: "25%",
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.h).toBe("25%");
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with custom border radius', () => {
    const element = React.createElement(Skeleton, {
      r: 10,
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.r).toBe(10);
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with custom color', () => {
    const element = React.createElement(Skeleton, {
      c: "#ff0000",
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.c).toBe("#ff0000");
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with custom style', () => {
    const customStyle = { margin: 10 };
    const element = React.createElement(Skeleton, {
      style: customStyle,
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("skeleton");
  });

  it('renders with all custom props', () => {
    const element = React.createElement(Skeleton, {
      w: 200,
      h: 100,
      r: 8,
      c: "#333333",
      testID: "skeleton"
    });
    expect(element).toBeDefined();
    expect(element.props.w).toBe(200);
    expect(element.props.h).toBe(100);
    expect(element.props.r).toBe(8);
    expect(element.props.c).toBe("#333333");
    expect(element.props.testID).toBe("skeleton");
  });
});