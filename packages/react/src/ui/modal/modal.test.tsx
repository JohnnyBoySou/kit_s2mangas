import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './modal';

// Mock do componente Icon
jest.mock('../icon/icon', () => {
	return function MockIcon({ name, size, color, onClick }: any) {
		return (
			<span 
				data-testid={`icon-${name}`}
				onClick={onClick}
				style={{ fontSize: size, color }}
			>
				{name}
			</span>
		);
	};
});

describe('Modal', () => {
	const defaultProps = {
		isOpen: true,
		onClose: jest.fn(),
		children: <div>Modal content</div>,
	};

	beforeEach(() => {
		jest.clearAllMocks();
		// Reset body overflow
		document.body.style.overflow = 'unset';
	});

	it('should render modal when isOpen is true', () => {
		render(<Modal {...defaultProps} />);
		
		expect(screen.getByText('Modal content')).toBeInTheDocument();
	});

	it('should not render modal when isOpen is false', () => {
		render(<Modal {...defaultProps} isOpen={false} />);
		
		expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
	});

	it('should render title when provided', () => {
		render(<Modal {...defaultProps} title="Test Modal" />);
		
		expect(screen.getByText('Test Modal')).toBeInTheDocument();
	});

	it('should render close button by default', () => {
		render(<Modal {...defaultProps} title="Test Modal" />);
		
		expect(screen.getByTestId('icon-X')).toBeInTheDocument();
	});

	it('should not render close button when showCloseButton is false', () => {
		render(<Modal {...defaultProps} title="Test Modal" showCloseButton={false} />);
		
		expect(screen.queryByTestId('icon-X')).not.toBeInTheDocument();
	});

	it('should call onClose when close button is clicked', () => {
		const onClose = jest.fn();
		render(<Modal {...defaultProps} onClose={onClose} title="Test Modal" />);
		
		fireEvent.click(screen.getByTestId('icon-X'));
		
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('should call onClose when overlay is clicked and closeOnOverlayClick is true', () => {
		const onClose = jest.fn();
		render(<Modal {...defaultProps} onClose={onClose} closeOnOverlayClick={true} testID="test-modal" />);
		
		const overlay = screen.getByTestId('test-modal');
		fireEvent.click(overlay);
		
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('should not call onClose when overlay is clicked and closeOnOverlayClick is false', () => {
		const onClose = jest.fn();
		render(<Modal {...defaultProps} onClose={onClose} closeOnOverlayClick={false} testID="test-modal" />);
		
		const overlay = screen.getByTestId('test-modal');
		fireEvent.click(overlay);
		
		expect(onClose).not.toHaveBeenCalled();
	});

	it('should call onClose when Escape key is pressed and closeOnEscape is true', () => {
		const onClose = jest.fn();
		render(<Modal {...defaultProps} onClose={onClose} closeOnEscape={true} />);
		
		fireEvent.keyDown(document, { key: 'Escape' });
		
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('should not call onClose when Escape key is pressed and closeOnEscape is false', () => {
		const onClose = jest.fn();
		render(<Modal {...defaultProps} onClose={onClose} closeOnEscape={false} />);
		
		fireEvent.keyDown(document, { key: 'Escape' });
		
		expect(onClose).not.toHaveBeenCalled();
	});

	it('should apply testID when provided', () => {
		render(<Modal {...defaultProps} testID="test-modal" />);
		
		expect(screen.getByTestId('test-modal')).toBeInTheDocument();
	});

	it('should apply className when provided', () => {
		render(<Modal {...defaultProps} className="custom-modal" />);
		
		const modal = screen.getByText('Modal content').closest('.custom-modal');
		expect(modal).toBeInTheDocument();
	});

	it('should apply custom style when provided', () => {
		const customStyle = { backgroundColor: 'red' };
		render(<Modal {...defaultProps} style={customStyle} testID="test-modal" />);
		
		const modal = screen.getByTestId('test-modal');
		expect(modal.style.backgroundColor).toBe('red');
	});

	it('should apply different sizes correctly', () => {
		const { rerender } = render(<Modal {...defaultProps} size="small" testID="test-modal" />);
		// O tamanho é aplicado ao div interno (segundo filho do overlay)
		let modalContent = screen.getByTestId('test-modal').firstElementChild;
		expect(modalContent).toHaveStyle({ width: '400px' });

		rerender(<Modal {...defaultProps} size="large" testID="test-modal" />);
		modalContent = screen.getByTestId('test-modal').firstElementChild;
		expect(modalContent).toHaveStyle({ width: '800px' });

		rerender(<Modal {...defaultProps} size="fullscreen" testID="test-modal" />);
		modalContent = screen.getByTestId('test-modal').firstElementChild;
		expect(modalContent).toHaveStyle({ width: '100vw' });
	});

	it('should set body overflow to hidden when modal is open', () => {
		render(<Modal {...defaultProps} />);
		
		expect(document.body.style.overflow).toBe('hidden');
	});

	it('should reset body overflow when modal is closed', () => {
		const { unmount } = render(<Modal {...defaultProps} />);
		
		unmount();
		
		expect(document.body.style.overflow).toBe('unset');
	});

	it('should not call onClose when modal content is clicked', () => {
		const onClose = jest.fn();
		render(<Modal {...defaultProps} onClose={onClose} />);
		
		fireEvent.click(screen.getByText('Modal content'));
		
		expect(onClose).not.toHaveBeenCalled();
	});
});