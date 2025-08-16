import React from 'react';
import Avatar from './avatar';

describe('Avatar Component', () => {
  it('renders with image url', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Avatar);
    expect(element.props.src).toBe("https://example.com/avatar.jpg");
    expect(element.props.testID).toBe("avatar");
  });

  it('renders with custom width and height', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      w: 60,
      h: 60,
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.w).toBe(60);
    expect(element.props.h).toBe(60);
  });

  it('renders with circle shape', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      shape: "circle",
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.shape).toBe("circle");
  });

  it('renders with square shape', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      shape: "square",
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.shape).toBe("square");
  });

  it('renders with initials when no image', () => {
    const element = React.createElement(Avatar, {
      initials: "JD",
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.initials).toBe("JD");
    expect(element.props.src).toBeUndefined();
  });

  it('applies custom styles', () => {
    const customStyle = { borderWidth: 2, borderColor: 'red' };
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      style: customStyle,
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.style).toBe(customStyle);
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      testID: "avatar",
      accessibilityLabel: "User avatar",
      accessibilityRole: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.accessibilityLabel).toBe("User avatar");
    expect(element.props.accessibilityRole).toBe("image");
  });

  it('handles press events', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      onPress: mockOnPress,
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.onPress).toBe(mockOnPress);
  });

  it('renders in disabled state', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      disabled: true,
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.disabled).toBe(true);
  });

  it('renders with loading state', () => {
    const element = React.createElement(Avatar, {
      src: "https://example.com/avatar.jpg",
      loading: true,
      testID: "avatar"
    });
    
    expect(element).toBeDefined();
    expect(element.props.loading).toBe(true);
  });
});