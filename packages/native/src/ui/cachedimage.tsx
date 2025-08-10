import React from 'react';
import { Image, ImageProps, View, ActivityIndicator } from 'react-native';

interface CachedImageProps extends Omit<ImageProps, 'source'> {
  uri: string;
  cacheKey?: string;
  showLoader?: boolean;
  loaderColor?: string;
  loaderSize?: 'small' | 'large';
  style?: any;
}

export const CachedImage: React.FC<CachedImageProps> = ({
  uri,
  cacheKey,
  showLoader = true,
  loaderColor = '#FFFFFF',
  loaderSize = 'small',
  style,
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const handleLoadStart = () => {
    setIsLoading(true);
    setError(null);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load image');
  };

  if (error) {
    console.error('Erro ao carregar imagem:', error);
  }

  return (
    <View style={[{ position: 'relative' }, style]}>
      {isLoading && showLoader && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <ActivityIndicator color={loaderColor} size={loaderSize} />
        </View>
      )}
      <Image
        source={{ uri }}
        style={[{ width: '100%', height: '100%' }, style]}
        resizeMode="cover"
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        {...props}
      />
    </View>
  );
}; 