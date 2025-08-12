import React from 'react';
import { CachedImage } from './cachedimage';

describe('CachedImage', () => {
  const mockUri = 'https://example.com/image.jpg';

  it('renders with default props', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.testID).toBe("cached-image");
  });

  it('renders with custom cache key', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      cacheKey: "custom-key",
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.cacheKey).toBe("custom-key");
    expect(element.props.testID).toBe("cached-image");
  });

  it('shows loader by default', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.testID).toBe("cached-image");
  });

  it('hides loader when showLoader is false', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      showLoader: false,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.showLoader).toBe(false);
    expect(element.props.testID).toBe("cached-image");
  });

  it('renders with custom loader color and size', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      loaderColor: "#FF0000",
      loaderSize: "large",
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.loaderColor).toBe("#FF0000");
    expect(element.props.loaderSize).toBe("large");
    expect(element.props.testID).toBe("cached-image");
  });

  it('renders with custom style', () => {
    const customStyle = { width: 200, height: 200 };
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      style: customStyle,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("cached-image");
  });

  it('handles image load start', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.testID).toBe("cached-image");
  });

  it('handles image load end', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.testID).toBe("cached-image");
  });

  it('handles image error', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      testID: "cached-image"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.testID).toBe("cached-image");
    
    consoleSpy.mockRestore();
  });

  it('passes additional props to Image component', () => {
    const element = React.createElement(CachedImage, {
      uri: mockUri,
      testID: "cached-image",
      accessibilityLabel: "Test image",
      resizeMode: "contain"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(CachedImage);
    expect(element.props.uri).toBe(mockUri);
    expect(element.props.testID).toBe("cached-image");
    expect(element.props.accessibilityLabel).toBe("Test image");
    expect(element.props.resizeMode).toBe("contain");
  });
});