import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './pagination';

// Mock do componente Icon
jest.mock('../icon/icon', () => {
	return function MockIcon({ name, size }: any) {
		return (
			<span data-testid={`icon-${name}`} style={{ fontSize: size }}>
				{name}
			</span>
		);
	};
});

describe('Pagination', () => {
	const defaultProps = {
		currentPage: 1,
		totalPages: 10,
		onPageChange: jest.fn(),
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render pagination with correct pages', () => {
		render(<Pagination {...defaultProps} currentPage={5} />);
		
		// Should show pages around current page
		expect(screen.getByText('3')).toBeInTheDocument();
		expect(screen.getByText('4')).toBeInTheDocument();
		expect(screen.getByText('5')).toBeInTheDocument();
		expect(screen.getByText('6')).toBeInTheDocument();
		expect(screen.getByText('7')).toBeInTheDocument();
	});

	it('should call onPageChange when page button is clicked', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
		
		fireEvent.click(screen.getByText('2'));
		
		expect(onPageChange).toHaveBeenCalledWith(2);
	});

	it('should call onPageChange when next button is clicked', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} onPageChange={onPageChange} />);
		
		fireEvent.click(screen.getByLabelText('Próxima página'));
		
		expect(onPageChange).toHaveBeenCalledWith(2);
	});

	it('should call onPageChange when previous button is clicked', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} />);
		
		fireEvent.click(screen.getByLabelText('Página anterior'));
		
		expect(onPageChange).toHaveBeenCalledWith(4);
	});

	it('should disable previous button on first page', () => {
		render(<Pagination {...defaultProps} currentPage={1} />);
		
		expect(screen.getByLabelText('Página anterior')).toBeDisabled();
	});

	it('should disable next button on last page', () => {
		render(<Pagination {...defaultProps} currentPage={10} />);
		
		expect(screen.getByLabelText('Próxima página')).toBeDisabled();
	});

	it('should show first/last buttons when showFirstLast is true', () => {
		render(<Pagination {...defaultProps} currentPage={5} showFirstLast={true} />);
		
		expect(screen.getByLabelText('Primeira página')).toBeInTheDocument();
		expect(screen.getByLabelText('Última página')).toBeInTheDocument();
	});

	it('should not show first/last buttons when showFirstLast is false', () => {
		render(<Pagination {...defaultProps} currentPage={5} showFirstLast={false} />);
		
		expect(screen.queryByLabelText('Primeira página')).not.toBeInTheDocument();
		expect(screen.queryByLabelText('Última página')).not.toBeInTheDocument();
	});

	it('should call onPageChange when first button is clicked', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} showFirstLast={true} />);
		
		fireEvent.click(screen.getByLabelText('Primeira página'));
		
		expect(onPageChange).toHaveBeenCalledWith(1);
	});

	it('should call onPageChange when last button is clicked', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} showFirstLast={true} />);
		
		fireEvent.click(screen.getByLabelText('Última página'));
		
		expect(onPageChange).toHaveBeenCalledWith(10);
	});

	it('should show page info when showPageInfo is true', () => {
		render(<Pagination {...defaultProps} currentPage={5} showPageInfo={true} />);
		
		expect(screen.getByText('Página 5 de 10')).toBeInTheDocument();
	});

	it('should not show page info when showPageInfo is false', () => {
		render(<Pagination {...defaultProps} currentPage={5} showPageInfo={false} />);
		
		expect(screen.queryByText('Página 5 de 10')).not.toBeInTheDocument();
	});

	it('should disable all buttons when disabled is true', () => {
		render(<Pagination {...defaultProps} currentPage={5} disabled={true} />);
		
		const buttons = screen.getAllByRole('button');
		buttons.forEach(button => {
			expect(button).toBeDisabled();
		});
	});

	it('should not call onPageChange when disabled', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} disabled={true} />);
		
		fireEvent.click(screen.getByText('6'));
		
		expect(onPageChange).not.toHaveBeenCalled();
	});

	it('should highlight current page', () => {
		render(<Pagination {...defaultProps} currentPage={5} />);
		
		const currentPageButton = screen.getByLabelText('Página 5');
		expect(currentPageButton).toHaveAttribute('aria-current', 'page');
	});

	it('should show ellipsis when there are more pages', () => {
		render(<Pagination {...defaultProps} currentPage={8} totalPages={20} />);
		
		const ellipsis = screen.getAllByText('...');
		expect(ellipsis.length).toBeGreaterThan(0);
	});

	it('should limit visible pages based on maxVisiblePages', () => {
		render(<Pagination {...defaultProps} currentPage={10} totalPages={20} maxVisiblePages={3} />);
		
		// Should show 3 pages around current page
		expect(screen.getByText('9')).toBeInTheDocument();
		expect(screen.getByText('10')).toBeInTheDocument();
		expect(screen.getByText('11')).toBeInTheDocument();
		
		// Should not show pages outside the range
		expect(screen.queryByText('7')).not.toBeInTheDocument();
		expect(screen.queryByText('13')).not.toBeInTheDocument();
	});

	it('should apply testID when provided', () => {
		render(<Pagination {...defaultProps} testID="test-pagination" />);
		
		expect(screen.getByTestId('test-pagination')).toBeInTheDocument();
	});

	it('should apply className when provided', () => {
		render(<Pagination {...defaultProps} className="custom-pagination" />);
		
		expect(screen.getByText('1').closest('.custom-pagination')).toBeInTheDocument();
	});

	it('should apply custom style when provided', () => {
		const customStyle = { backgroundColor: 'red' };
		render(<Pagination {...defaultProps} style={customStyle} testID="test-pagination" />);
		
		const pagination = screen.getByTestId('test-pagination');
		expect(pagination).toHaveStyle({ backgroundColor: 'red' });
	});

	it('should handle single page correctly', () => {
		render(<Pagination {...defaultProps} totalPages={1} />);
		
		expect(screen.getByLabelText('Página anterior')).toBeDisabled();
		expect(screen.getByLabelText('Próxima página')).toBeDisabled();
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	it('should not call onPageChange when clicking current page', () => {
		const onPageChange = jest.fn();
		render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} />);
		
		fireEvent.click(screen.getByText('5'));
		
		expect(onPageChange).not.toHaveBeenCalled();
	});

	it('should render correct icons', () => {
		render(<Pagination {...defaultProps} currentPage={5} showFirstLast={true} />);
		
		expect(screen.getByTestId('icon-ChevronsLeft')).toBeInTheDocument();
		expect(screen.getByTestId('icon-ChevronLeft')).toBeInTheDocument();
		expect(screen.getByTestId('icon-ChevronRight')).toBeInTheDocument();
		expect(screen.getByTestId('icon-ChevronsRight')).toBeInTheDocument();
	});

	it('should handle small size correctly', () => {
		render(<Pagination {...defaultProps} size="small" />);
		
		const button = screen.getByText('1');
		expect(button).toHaveStyle({ fontSize: '12px' });
	});

	it('should handle large size correctly', () => {
		render(<Pagination {...defaultProps} size="large" />);
		
		const button = screen.getByText('1');
		expect(button).toHaveStyle({ fontSize: '16px' });
	});

	it('should apply outlined variant styles', () => {
		render(<Pagination {...defaultProps} variant="outlined" />);
		
		const button = screen.getByText('1');
		expect(button).toHaveStyle({ border: '1px solid #007bff' });
	});

	it('should apply minimal variant styles', () => {
		render(<Pagination {...defaultProps} variant="minimal" />);
		
		const button = screen.getByText('1');
		expect(button).toHaveStyle({ backgroundColor: '#f8f9fa' });
	});
});