import React from 'react';
import { HeadTitle, Title, Label, SubLabel, Description, U } from './text';

describe('Text Components', () => {
  it('renders HeadTitle correctly', () => {
    const element = React.createElement(HeadTitle, {}, 'Hello World');
    expect(element).toBeDefined();
    expect(element.type).toBe(HeadTitle);
    expect(element.props.children).toBe('Hello World');
  });

  it('renders Title correctly', () => {
    const element = React.createElement(Title, {}, 'Title Text');
    expect(element).toBeDefined();
    expect(element.type).toBe(Title);
    expect(element.props.children).toBe('Title Text');
  });

  it('renders Label correctly', () => {
    const element = React.createElement(Label, {}, 'Label Text');
    expect(element).toBeDefined();
    expect(element.type).toBe(Label);
    expect(element.props.children).toBe('Label Text');
  });

  it('renders SubLabel correctly', () => {
    const element = React.createElement(SubLabel, {}, 'SubLabel Text');
    expect(element).toBeDefined();
    expect(element.type).toBe(SubLabel);
    expect(element.props.children).toBe('SubLabel Text');
  });

  it('renders Description correctly', () => {
    const element = React.createElement(Description, {}, 'Description Text');
    expect(element).toBeDefined();
    expect(element.type).toBe(Description);
    expect(element.props.children).toBe('Description Text');
  });

  it('renders U (underlined) correctly', () => {
    const element = React.createElement(U, {}, 'Underlined Text');
    expect(element).toBeDefined();
    expect(element.type).toBe(U);
    expect(element.props.children).toBe('Underlined Text');
  });

  it('renders with primary color', () => {
    const element = React.createElement(HeadTitle, {
      color: "primary",
      testID: "text"
    }, 'Primary text');
    
    expect(element).toBeDefined();
    expect(element.props.color).toBe("primary");
    expect(element.props.testID).toBe("text");
    expect(element.props.children).toBe('Primary text');
  });

  it('renders with secondary color', () => {
    const element = React.createElement(HeadTitle, {
      color: "secondary",
      testID: "text"
    }, 'Secondary text');
    
    expect(element).toBeDefined();
    expect(element.props.color).toBe("secondary");
    expect(element.props.testID).toBe("text");
    expect(element.props.children).toBe('Secondary text');
  });

  it('renders with center alignment', () => {
    const element = React.createElement(HeadTitle, {
      align: "center",
      testID: "text"
    }, 'Centered text');
    
    expect(element).toBeDefined();
    expect(element.props.align).toBe("center");
    expect(element.props.testID).toBe("text");
    expect(element.props.children).toBe('Centered text');
  });

  it('renders with right alignment', () => {
    const element = React.createElement(HeadTitle, {
      align: "right",
      testID: "text"
    }, 'Right aligned text');
    
    expect(element).toBeDefined();
    expect(element.props.align).toBe("right");
    expect(element.props.testID).toBe("text");
    expect(element.props.children).toBe('Right aligned text');
  });

  it('renders with custom style', () => {
    const customStyle = { fontWeight: 'bold' };
    const element = React.createElement(HeadTitle, {
      style: customStyle,
      testID: "text"
    }, 'Custom styled text');
    
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("text");
    expect(element.props.children).toBe('Custom styled text');
  });

  it('renders with numberOfLines prop', () => {
    const element = React.createElement(HeadTitle, {
      numberOfLines: 2,
      testID: "text"
    }, 'This is a very long text that should be truncated after two lines');
    
    expect(element).toBeDefined();
    expect(element.props.numberOfLines).toBe(2);
    expect(element.props.testID).toBe("text");
    expect(element.props.children).toBe('This is a very long text that should be truncated after two lines');
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(HeadTitle, {
      testID: "text",
      accessibilityLabel: "Important text",
      accessibilityRole: "text"
    }, 'Accessible text');
    
    expect(element).toBeDefined();
    expect(element.props.testID).toBe("text");
    expect(element.props.accessibilityLabel).toBe("Important text");
    expect(element.props.accessibilityRole).toBe("text");
    expect(element.props.children).toBe('Accessible text');
  });
});