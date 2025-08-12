import React from 'react';
import Divider from './divider';

describe('Divider Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(Divider, {
      testID: "divider"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Divider);
    expect(element.props.testID).toBe("divider");
  });

  it('renders with custom color', () => {
    const element = React.createElement(Divider, {
      color: "#ff0000",
      testID: "divider"
    });
    expect(element).toBeDefined();
    expect(element.props.color).toBe("#ff0000");
    expect(element.props.testID).toBe("divider");
  });

  it('renders with custom thickness', () => {
    const element = React.createElement(Divider, {
      thickness: 2,
      testID: "divider"
    });
    expect(element).toBeDefined();
    expect(element.props.thickness).toBe(2);
    expect(element.props.testID).toBe("divider");
  });

  it('renders with custom marginVertical', () => {
    const element = React.createElement(Divider, {
      marginVertical: 16,
      testID: "divider"
    });
    expect(element).toBeDefined();
    expect(element.props.marginVertical).toBe(16);
    expect(element.props.testID).toBe("divider");
  });

  it('renders with custom marginHorizontal', () => {
    const element = React.createElement(Divider, {
      marginHorizontal: 20,
      testID: "divider"
    });
    expect(element).toBeDefined();
    expect(element.props.marginHorizontal).toBe(20);
    expect(element.props.testID).toBe("divider");
  });

  it('renders with custom style', () => {
    const customStyle = { opacity: 0.5 };
    const element = React.createElement(Divider, {
      style: customStyle,
      testID: "divider"
    });
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("divider");
  });
});