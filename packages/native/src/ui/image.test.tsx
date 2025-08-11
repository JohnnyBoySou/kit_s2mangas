import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Image from './image';

describe('Image Component', () => {
  const mockSrc = 'https://example.com/image.jpg';

  it('renders with default props', () => {
    const { getByTestId } = render(
      <Image testID="image" />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with src prop', () => {
    const { getByTestId } = render(
      <Image src={mockSrc} testID="image" />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with source prop', () => {
    const { getByTestId } = render(
      <Image source={{ uri: mockSrc }} testID="image" />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with custom dimensions', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        w={200} 
        h={150} 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with border radius', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        r={10} 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with background color', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        bg="#FF0000" 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with custom alignment', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        align="flex-start" 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with content fit cover', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        contentFit="cover" 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with content fit contain', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        contentFit="contain" 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with content fit fill', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        contentFit="fill" 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders as pressable when onPress is provided', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        onPress={mockOnPress} 
        testID="image" 
      />
    );
    
    const image = getByTestId('image');
    fireEvent.press(image);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('renders with fallback component', () => {
    const FallbackComponent = () => <Text testID="fallback">Fallback</Text>;
    
    const { getByTestId } = render(
      <Image 
        fallback={<FallbackComponent />} 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with accessibility props', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        testID="image"
        accessibilityLabel="Test image"
        accessibilityHint="Tap to view"
        accessibilityRole="image"
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { opacity: 0.5 };
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        style={customStyle} 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with string dimensions', () => {
    const { getByTestId } = render(
      <Image 
        src={mockSrc} 
        w="100%" 
        h="200px" 
        testID="image" 
      />
    );
    
    expect(getByTestId('image')).toBeTruthy();
  });

  it('renders with fallback and onPress', () => {
    const mockOnPress = jest.fn();
    const FallbackComponent = () => <Text testID="fallback">Fallback</Text>;
    
    const { getByTestId } = render(
      <Image 
        fallback={<FallbackComponent />} 
        onPress={mockOnPress}
        testID="image" 
      />
    );
    
    const image = getByTestId('image');
    fireEvent.press(image);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});