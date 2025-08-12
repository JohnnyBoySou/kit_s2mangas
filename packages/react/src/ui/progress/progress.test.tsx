import React from 'react';
import { render, screen } from '@testing-library/react';
import Progress from './progress';

describe('Progress', () => {
	it('renders with correct value', () => {
		render(<Progress value={50} testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		const progressBar = screen.getByTestId('progress-bar');
		
		expect(progress).toBeInTheDocument();
		expect(progress).toHaveAttribute('aria-valuenow', '50');
		expect(progressBar).toHaveStyle({ width: '50%' });
	});

	it('renders with custom max value', () => {
		render(<Progress value={25} max={50} testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		const progressBar = screen.getByTestId('progress-bar');
		
		expect(progress).toHaveAttribute('aria-valuenow', '25');
		expect(progress).toHaveAttribute('aria-valuemax', '50');
		expect(progressBar).toHaveStyle({ width: '50%' }); // 25/50 = 50%
	});

	it('clamps value between 0 and max', () => {
		const { rerender } = render(<Progress value={-10} testID="progress" />);
		
		let progressBar = screen.getByTestId('progress-bar');
		expect(progressBar).toHaveStyle({ width: '0%' });

		rerender(<Progress value={150} testID="progress" />);
		progressBar = screen.getByTestId('progress-bar');
		expect(progressBar).toHaveStyle({ width: '100%' });
	});

	it('renders with different sizes', () => {
		const sizes = ['small', 'medium', 'large'] as const;
		const expectedHeights = ['4px', '8px', '12px'];

		sizes.forEach((size, index) => {
			const { unmount } = render(<Progress value={50} size={size} testID="progress" />);
			
			const progress = screen.getByTestId('progress');
			expect(progress).toHaveStyle({ height: expectedHeights[index] });

			unmount();
		});
	});

	it('renders with different variants', () => {
		const variants = ['default', 'success', 'warning', 'error', 'info'] as const;
		const expectedColors = ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8'];

		variants.forEach((variant, index) => {
			const { unmount } = render(<Progress value={50} variant={variant} testID="progress" />);
			
			const progressBar = screen.getByTestId('progress-bar');
			expect(progressBar).toHaveStyle({ backgroundColor: expectedColors[index] });

			unmount();
		});
	});

	it('shows percentage when showPercentage is true', () => {
		render(<Progress value={75} showPercentage testID="progress" />);
		
		const text = screen.getByTestId('progress-text');
		expect(text).toHaveTextContent('75%');
	});

	it('shows custom text when text prop is provided', () => {
		render(<Progress value={50} text="Loading..." testID="progress" />);
		
		const text = screen.getByTestId('progress-text');
		expect(text).toHaveTextContent('Loading...');
	});

	it('shows text when showText is true and text is provided', () => {
		render(<Progress value={50} showText text="Custom text" testID="progress" />);
		
		const text = screen.getByTestId('progress-text');
		expect(text).toHaveTextContent('Custom text');
	});

	it('prioritizes custom text over percentage', () => {
		render(<Progress value={50} showPercentage text="Custom" testID="progress" />);
		
		const text = screen.getByTestId('progress-text');
		expect(text).toHaveTextContent('Custom');
	});

	it('does not show text when showText and showPercentage are false', () => {
		render(<Progress value={50} testID="progress" />);
		
		expect(screen.queryByTestId('progress-text')).not.toBeInTheDocument();
	});

	it('renders as indeterminate', () => {
		render(<Progress value={50} indeterminate testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		const progressBar = screen.getByTestId('progress-bar');
		
		expect(progress).not.toHaveAttribute('aria-valuenow');
		expect(progressBar).toHaveStyle({ width: '100%' });
	});

	it('applies rounded styles by default', () => {
		render(<Progress value={50} testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		expect(progress).toHaveStyle({ borderRadius: '4px' });
	});

	it('applies square styles when rounded is false', () => {
		render(<Progress value={50} rounded={false} testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		expect(progress).toHaveStyle({ borderRadius: '0' });
	});

	it('applies animated styles when animated is true', () => {
		render(<Progress value={50} animated testID="progress" />);
		
		const progressBar = screen.getByTestId('progress-bar');
		expect(progressBar).toHaveStyle({
			backgroundImage: expect.stringContaining('linear-gradient'),
			backgroundSize: '1rem 1rem',
			animation: 'progress-stripes 1s linear infinite'
		});
	});

	it('applies testID', () => {
		render(<Progress value={50} testID="custom-progress" />);
		
		expect(screen.getByTestId('custom-progress')).toBeInTheDocument();
	});

	it('applies className', () => {
		render(<Progress value={50} className="custom-class" testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		expect(progress).toHaveClass('custom-class');
	});

	it('applies style', () => {
		const customStyle = { backgroundColor: 'red' };
		render(<Progress value={50} style={customStyle} testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		expect(progress.style.backgroundColor).toBe('red');
	});

	it('has correct accessibility attributes', () => {
		render(<Progress value={75} max={100} text="Loading data" testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		expect(progress).toHaveAttribute('role', 'progressbar');
		expect(progress).toHaveAttribute('aria-valuenow', '75');
		expect(progress).toHaveAttribute('aria-valuemin', '0');
		expect(progress).toHaveAttribute('aria-valuemax', '100');
		expect(progress).toHaveAttribute('aria-label', 'Loading data');
	});

	it('uses percentage as aria-label when no text is provided', () => {
		render(<Progress value={60} testID="progress" />);
		
		const progress = screen.getByTestId('progress');
		expect(progress).toHaveAttribute('aria-label', '60% complete');
	});

	it('handles zero value correctly', () => {
		render(<Progress value={0} testID="progress" />);
		
		const progressBar = screen.getByTestId('progress-bar');
		expect(progressBar).toHaveStyle({ width: '0%' });
	});

	it('handles 100% value correctly', () => {
		render(<Progress value={100} testID="progress" />);
		
		const progressBar = screen.getByTestId('progress-bar');
		expect(progressBar).toHaveStyle({ width: '100%' });
	});

	it('adds animation styles to document head', () => {
		render(<Progress value={50} animated />);
		
		const styleElement = document.getElementById('progress-animations');
		expect(styleElement).toBeInTheDocument();
		expect(styleElement?.textContent).toContain('@keyframes progress-stripes');
	});

	it('does not duplicate animation styles in document head', () => {
		render(<Progress value={50} animated />);
		render(<Progress value={75} indeterminate />);
		
		const styleElements = document.querySelectorAll('#progress-animations');
		expect(styleElements).toHaveLength(1);
	});
});