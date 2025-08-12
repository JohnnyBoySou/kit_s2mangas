import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Image from './image';

describe('Image', () => {
	it('should render with required props', () => {
		render(<Image src="https://example.com/image.jpg" />);
		const img = screen.getByAltText('Image');
		expect(img).toBeInTheDocument();
	});

	it('should render image with correct src', () => {
		render(<Image src="https://example.com/image.jpg" alt="Test image" />);
		const img = screen.getByAltText('Test image');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
		expect(img).toHaveAttribute('alt', 'Test image');
	});

	it('should apply custom width and height', () => {
		render(<Image src="https://example.com/image.jpg" width={200} height={150} />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveStyle({ width: '200px', height: '150px' });
	});

	it('should apply percentage width and height', () => {
		render(<Image src="https://example.com/image.jpg" width="50%" height="100%" />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveStyle({ width: '50%', height: '100%' });
	});

	it('should apply different object-fit values', () => {
		const { rerender } = render(<Image src="https://example.com/image.jpg" objectFit="contain" />);
		let img = screen.getByAltText('Image');
		expect(img).toHaveStyle({ objectFit: 'contain' });

		rerender(<Image src="https://example.com/image.jpg" objectFit="fill" />);
		img = screen.getByAltText('Image');
		expect(img).toHaveStyle({ objectFit: 'fill' });
	});

	it('should apply border radius', () => {
		render(<Image src="https://example.com/image.jpg" borderRadius={8} />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveStyle({ borderRadius: '8px' });
	});

	it('should apply percentage border radius', () => {
		render(<Image src="https://example.com/image.jpg" borderRadius="50%" />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveStyle({ borderRadius: '50%' });
	});

	it('should enable lazy loading', () => {
		render(<Image src="https://example.com/image.jpg" lazy={true} />);
		const img = screen.getByAltText('Image');
		expect(img).toHaveAttribute('loading', 'lazy');
	});

	it('should disable lazy loading by default', () => {
		render(<Image src="https://example.com/image.jpg" />);
		const img = screen.getByAltText('Image');
		expect(img).toHaveAttribute('loading', 'eager');
	});

	it('should handle image error and show fallback', async () => {
		render(<Image src="invalid-url" />);
		const img = screen.getByAltText('Image');
		
		// Simula erro na imagem
		await act(async () => {
			img.dispatchEvent(new Event('error'));
		});
		
		// Verifica se o fallback está sendo exibido
		await waitFor(() => {
			const fallback = screen.getByAltText('Image').parentElement?.querySelector('svg');
			expect(fallback).toBeInTheDocument();
		});
	});

	it('should use fallback image when provided', async () => {
		render(<Image src="invalid-url" fallback="https://example.com/fallback.jpg" />);
		const img = screen.getByAltText('Image');
		
		// Simula erro na imagem
		await act(async () => {
			img.dispatchEvent(new Event('error'));
		});
		
		// Aguarda a atualização do estado
		await waitFor(() => {
			const fallbackImg = screen.getByAltText('Image');
			expect(fallbackImg).toHaveAttribute('src', 'https://example.com/fallback.jpg');
		});
	});

	it('should call onError when image fails to load', async () => {
		const onError = jest.fn();
		render(<Image src="invalid-url" onError={onError} />);
		const img = screen.getByAltText('Image');
		
		await act(async () => {
			img.dispatchEvent(new Event('error'));
		});
		
		expect(onError).toHaveBeenCalled();
	});

	it('should call onLoad when image loads successfully', async () => {
		const onLoad = jest.fn();
		render(<Image src="https://example.com/image.jpg" onLoad={onLoad} />);
		const img = screen.getByAltText('Image');
		
		await act(async () => {
			img.dispatchEvent(new Event('load'));
		});
		
		expect(onLoad).toHaveBeenCalled();
	});

	it('should call onClick when clicked', () => {
		const onClick = jest.fn();
		render(<Image src="https://example.com/image.jpg" onClick={onClick} />);
		const container = screen.getByAltText('Image').parentElement;
		
		container?.click();
		
		expect(onClick).toHaveBeenCalled();
	});

	it('should show cursor pointer when onClick is provided', () => {
		render(<Image src="https://example.com/image.jpg" onClick={() => {}} />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveStyle({ cursor: 'pointer' });
	});

	it('should apply custom styles', () => {
		const customStyle = { border: '2px solid red' };
		render(<Image src="https://example.com/image.jpg" style={customStyle} />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveStyle(customStyle);
	});

	it('should render with testID', () => {
		render(<Image src="https://example.com/image.jpg" testID="test-image" />);
		const container = screen.getByTestId('test-image');
		expect(container).toBeInTheDocument();
	});

	it('should render with className', () => {
		render(<Image src="https://example.com/image.jpg" className="custom-image" />);
		const container = screen.getByAltText('Image').parentElement;
		expect(container).toHaveClass('custom-image');
	});

	it('should show loading placeholder initially', () => {
		render(<Image src="https://example.com/image.jpg" />);
		const container = screen.getByAltText('Image').parentElement;
		const loadingPlaceholder = container?.querySelector('div[style*="animation: spin"]');
		expect(loadingPlaceholder).toBeInTheDocument();
	});
});
