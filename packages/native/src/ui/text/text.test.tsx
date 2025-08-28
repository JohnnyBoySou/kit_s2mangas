import React from 'react';
import { HeadTitle, Title, Label, SubLabel, Description, U } from './text';

describe('Text Components', () => {
  it('renders HeadTitle correctly', () => {
    const element = React.createElement(HeadTitle, { children: 'Hello World' });
    expect(element).toBeDefined();
    expect(element.type).toBe(HeadTitle);
    expect(element.props.children).toBe('Hello World');
  });

  it('renders Title correctly', () => {
    const element = React.createElement(Title, { children: 'Title Text' });
    expect(element).toBeDefined();
    expect(element.type).toBe(Title);
    expect(element.props.children).toBe('Title Text');
  });

  it('renders Label correctly', () => {
    const element = React.createElement(Label, { children: 'Label Text' });
    expect(element).toBeDefined();
    expect(element.type).toBe(Label);
    expect(element.props.children).toBe('Label Text');
  });

  it('renders SubLabel correctly', () => {
    const element = React.createElement(SubLabel, { children: 'SubLabel Text' });
    expect(element).toBeDefined();
    expect(element.type).toBe(SubLabel);
    expect(element.props.children).toBe('SubLabel Text');
  });

  it('renders Description correctly', () => {
    const element = React.createElement(Description, { children: 'Description Text' });
    expect(element).toBeDefined();
    expect(element.type).toBe(Description);
    expect(element.props.children).toBe('Description Text');
  });

  it('renders U (underlined) correctly', () => {
    const element = React.createElement(U, { children: 'Underlined Text' });
    expect(element).toBeDefined();
    expect(element.type).toBe(U);
    expect(element.props.children).toBe('Underlined Text');
  });

  it('renders with primary color', () => {
    const element = React.createElement(HeadTitle, {
      color: "primary",
      children: 'Primary text'
    });
    
    expect(element).toBeDefined();
    expect(element.props.color).toBe("primary");
    expect(element.props.children).toBe('Primary text');
  });

  it('renders with secondary color', () => {
    const element = React.createElement(HeadTitle, {
      color: "secondary",
      children: 'Secondary text'
    });
    
    expect(element).toBeDefined();
    expect(element.props.color).toBe("secondary");
    expect(element.props.children).toBe('Secondary text');
  });

  it('renders with center alignment', () => {
    const element = React.createElement(HeadTitle, {
      align: "center",
      children: 'Centered text'
    });
    
    expect(element).toBeDefined();
    expect(element.props.align).toBe("center");
    expect(element.props.children).toBe('Centered text');
  });

  it('renders with right alignment', () => {
    const element = React.createElement(HeadTitle, {
      align: "right",
      children: 'Right aligned text'
    });
    
    expect(element).toBeDefined();
    expect(element.props.align).toBe("right");
    expect(element.props.children).toBe('Right aligned text');
  });

  it('renders with custom style', () => {
    const customStyle = { fontWeight: 'bold' as const };
    const element = React.createElement(HeadTitle, {
      style: customStyle,
      children: 'Custom styled text'
    });
    
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
    expect(element.props.children).toBe('Custom styled text');
  });

  it('renders with long text content', () => {
    const element = React.createElement(HeadTitle, {
      children: 'This is a very long text that should be displayed properly'
    });
    
    expect(element).toBeDefined();
    expect(element.props.children).toBe('This is a very long text that should be displayed properly');
  });

  it('renders with margin properties', () => {
    const element = React.createElement(HeadTitle, {
      mt: 10,
      mb: 20,
      children: 'Text with margins'
    });
    
    expect(element).toBeDefined();
    expect(element.props.mt).toBe(10);
    expect(element.props.mb).toBe(20);
    expect(element.props.children).toBe('Text with margins');
  });
});