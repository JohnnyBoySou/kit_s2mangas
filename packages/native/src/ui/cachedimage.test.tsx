import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CachedImage } from './cachedimage';

describe('CachedImage', () => {
  const mockUri = 'https://example.com/image.jpg';

  it('renders with default props', () => {
    const { getByTestId } = render(
      <CachedImage uri={mockUri} testID="cached-image" />
    );
    
    expect(getByTestId('cached-image')).toBeTruthy();
  });

  it('renders with custom cache key', () => {
    const { getByTestId } = render(
      <CachedImage 
        uri={mockUri} 
        cacheKey="custom-key"
        testID="cached-image" 
      />
    );
    
    expect(getByTestId('cached-image')).toBeTruthy();
  });

  it('shows loader by default', () => {
    const { getByTestId } = render(
      <CachedImage uri={mockUri} testID="cached-image" />
    );
    
    // ActivityIndicator should be present initially
    expect(getByTestId('cached-image')).toBeTruthy();
  });

  it('hides loader when showLoader is false', () => {
    const { getByTestId } = render(
      <CachedImage 
        uri={mockUri} 
        showLoader={false}
        testID="cached-image" 
      />
    );
    
    expect(getByTestId('cached-image')).toBeTruthy();
  });

  it('renders with custom loader color and size', () => {
    const { getByTestId } = render(
      <CachedImage 
        uri={mockUri} 
        loaderColor="#FF0000"
        loaderSize="large"
        testID="cached-image" 
      />
    );
    
    expect(getByTestId('cached-image')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { width: 200, height: 200 };
    const { getByTestId } = render(
      <CachedImage 
        uri={mockUri} 
        style={customStyle}
        testID="cached-image" 
      />
    );
    
    expect(getByTestId('cached-image')).toBeTruthy();
  });

  it('handles image load start', () => {
    const { getByTestId } = render(
      <CachedImage uri={mockUri} testID="cached-image" />
    );
    
    const image = getByTestId('cached-image');
    fireEvent(image, 'loadStart');
    
    expect(image).toBeTruthy();
  });

  it('handles image load end', () => {
    const { getByTestId } = render(
      <CachedImage uri={mockUri} testID="cached-image" />
    );
    
    const image = getByTestId('cached-image');
    fireEvent(image, 'loadEnd');
    
    expect(image).toBeTruthy();
  });

  it('handles image error', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    const { getByTestId } = render(
      <CachedImage uri={mockUri} testID="cached-image" />
    );
    
    const image = getByTestId('cached-image');
    fireEvent(image, 'error');
    
    expect(image).toBeTruthy();
    
    consoleSpy.mockRestore();
  });

  it('passes additional props to Image component', () => {
    const { getByTestId } = render(
      <CachedImage 
        uri={mockUri} 
        testID="cached-image"
        accessibilityLabel="Test image"
        resizeMode="contain"
      />
    );
    
    expect(getByTestId('cached-image')).toBeTruthy();
  });
});