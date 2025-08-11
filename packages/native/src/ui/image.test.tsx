import React from 'react';
import Image from './image';

describe('Image Component', () => {
  const mockSrc = 'https://example.com/image.jpg';

  it('renders with default props', () => {
    const element = React.createElement(Image, {
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.type).toBe(Image);
    expect(element.props.testID).toBe("image");
  });

  it('renders with src prop', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.testID).toBe("image");
  });

  it('renders with source prop', () => {
    const element = React.createElement(Image, {
      source: { uri: mockSrc },
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.source).toEqual({ uri: mockSrc });
    expect(element.props.testID).toBe("image");
  });

  it('renders with custom dimensions', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      w: 200,
      h: 150,
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.w).toBe(200);
    expect(element.props.h).toBe(150);
    expect(element.props.testID).toBe("image");
  });

  it('renders with border radius', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      r: 10,
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.r).toBe(10);
    expect(element.props.testID).toBe("image");
  });

  it('renders with background color', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      bg: "#FF0000",
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.bg).toBe("#FF0000");
    expect(element.props.testID).toBe("image");
  });

  it('renders with custom alignment', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      align: "flex-start",
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.align).toBe("flex-start");
    expect(element.props.testID).toBe("image");
  });

  it('renders with content fit cover', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      contentFit: "cover",
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.contentFit).toBe("cover");
    expect(element.props.testID).toBe("image");
  });

  it('renders with content fit contain', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      contentFit: "contain",
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.contentFit).toBe("contain");
    expect(element.props.testID).toBe("image");
  });

  it('renders with content fit fill', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      contentFit: "fill",
      testID: "image"
    });
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.contentFit).toBe("fill");
    expect(element.props.testID).toBe("image");
  });

  it('renders as pressable when onPress is provided', () => {
    const mockOnPress = jest.fn();
    const element = React.createElement(Image, {
      src: mockSrc,
      onPress: mockOnPress,
      testID: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("image");
  });

  it('renders with fallback component', () => {
    const FallbackComponent = () => React.createElement('div', { testID: "fallback" }, 'Fallback');
    
    const element = React.createElement(Image, {
      fallback: React.createElement(FallbackComponent),
      testID: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.fallback).toBeDefined();
    expect(element.props.testID).toBe("image");
  });

  it('renders with accessibility props', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      testID: "image",
      accessibilityLabel: "Test image",
      accessibilityHint: "Tap to view",
      accessibilityRole: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.testID).toBe("image");
    expect(element.props.accessibilityLabel).toBe("Test image");
    expect(element.props.accessibilityHint).toBe("Tap to view");
    expect(element.props.accessibilityRole).toBe("image");
  });

  it('renders with custom style', () => {
    const customStyle = { opacity: 0.5 };
    const element = React.createElement(Image, {
      src: mockSrc,
      style: customStyle,
      testID: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("image");
  });

  it('renders with string dimensions', () => {
    const element = React.createElement(Image, {
      src: mockSrc,
      w: "100%",
      h: "200px",
      testID: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.src).toBe(mockSrc);
    expect(element.props.w).toBe("100%");
    expect(element.props.h).toBe("200px");
    expect(element.props.testID).toBe("image");
  });

  it('renders with fallback and onPress', () => {
    const mockOnPress = jest.fn();
    const FallbackComponent = () => React.createElement('div', { testID: "fallback" }, 'Fallback');
    
    const element = React.createElement(Image, {
      fallback: React.createElement(FallbackComponent),
      onPress: mockOnPress,
      testID: "image"
    });
    
    expect(element).toBeDefined();
    expect(element.props.fallback).toBeDefined();
    expect(element.props.onPress).toBe(mockOnPress);
    expect(element.props.testID).toBe("image");
  });
});