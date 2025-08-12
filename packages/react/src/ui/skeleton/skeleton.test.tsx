import React from 'react';
import { render, screen } from '@testing-library/react';
import Skeleton from './skeleton';

describe('Skeleton', () => {
	it('should render with default props', () => {
		render(<Skeleton />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toBeInTheDocument();
	});

	it('should render with testID', () => {
		render(<Skeleton testID="test-skeleton" />);
		const skeleton = screen.getByTestId('test-skeleton');
		expect(skeleton).toBeInTheDocument();
	});

	it('should render with className', () => {
		render(<Skeleton className="custom-skeleton" />);
		const skeleton = document.querySelector('.custom-skeleton');
		expect(skeleton).toBeInTheDocument();
	});

	it('should render with custom width and height', () => {
		render(<Skeleton width={200} height={100} />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ width: '200px', height: '100px' });
	});

	it('should render with percentage width and height', () => {
		render(<Skeleton width="50%" height="25%" />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ width: '50%', height: '25%' });
	});

	it('should render with custom border radius', () => {
		render(<Skeleton borderRadius={16} />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ borderRadius: '16px' });
	});

	it('should render rectangular variant by default', () => {
		render(<Skeleton />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ 
			width: '100%', 
			height: '48px', 
			borderRadius: '8px' 
		});
	});

	it('should render circular variant', () => {
		render(<Skeleton variant="circular" />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ 
			width: '40px', 
			height: '40px', 
			borderRadius: '50%' 
		});
	});

	it('should render text variant', () => {
		render(<Skeleton variant="text" />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ 
			width: '100%', 
			height: '16px', 
			borderRadius: '4px' 
		});
	});

	it('should render multiple text lines', () => {
		render(<Skeleton variant="text" lines={3} />);
		const container = screen.getByTestId('skeleton-container');
		const skeletonLines = container.querySelectorAll('div');
		expect(skeletonLines).toHaveLength(3);
	});

	it('should render with custom spacing between lines', () => {
		render(<Skeleton variant="text" lines={2} spacing={16} />);
		const container = screen.getByTestId('skeleton-container');
		expect(container).toHaveStyle({ gap: '16px' });
	});

	it('should apply custom styles', () => {
		const customStyle = { border: '2px solid red' };
		render(<Skeleton style={customStyle} />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle(customStyle);
	});

	it('should have animation styles', () => {
		render(<Skeleton />);
		const skeleton = screen.getByTestId('skeleton-default');
		expect(skeleton).toHaveStyle({ 
			transition: 'background-color 0.5s ease-in-out' 
		});
	});
});
