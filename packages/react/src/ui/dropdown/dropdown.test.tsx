import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown, { DropdownItem } from './dropdown';

// Mock do componente Icon
jest.mock('../icon/icon', () => {
	return function MockIcon({ name, size, color }: any) {
		return (
			<span 
				data-testid={`icon-${name}`}
				style={{ fontSize: size, color }}
			>
				{name}
			</span>
		);
	};
});

describe('Dropdown', () => {
	const mockItems: DropdownItem[] = [
		{ id: '1', label: 'Item 1', onClick: jest.fn() },
		{ id: '2', label: 'Item 2', icon: 'User', onClick: jest.fn() },
		{ id: '3', label: 'Item 3', disabled: true, onClick: jest.fn() },
		{ id: 'divider', label: '', divider: true },
		{ id: '4', label: 'Item 4', onClick: jest.fn() },
	];

	const defaultProps = {
		trigger: <button>Open Menu</button>,
		items: mockItems,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render trigger element', () => {
		render(<Dropdown {...defaultProps} />);
		
		expect(screen.getByText('Open Menu')).toBeInTheDocument();
	});

	it('should not show dropdown items initially', () => {
		render(<Dropdown {...defaultProps} />);
		
		expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
	});

	it('should show dropdown items when trigger is clicked', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		expect(screen.getByText('Item 2')).toBeInTheDocument();
		expect(screen.getByText('Item 3')).toBeInTheDocument();
		expect(screen.getByText('Item 4')).toBeInTheDocument();
	});

	it('should hide dropdown when trigger is clicked again', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		
		fireEvent.click(screen.getByText('Open Menu'));
		expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
	});

	it('should call item onClick when item is clicked', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		fireEvent.click(screen.getByText('Item 1'));
		
		expect(mockItems[0].onClick).toHaveBeenCalledTimes(1);
	});

	it('should not call onClick for disabled items', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		fireEvent.click(screen.getByText('Item 3'));
		
		expect(mockItems[2].onClick).not.toHaveBeenCalled();
	});

	it('should close dropdown when item is clicked by default', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		
		fireEvent.click(screen.getByText('Item 1'));
		expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
	});

	it('should not close dropdown when closeOnItemClick is false', () => {
		render(<Dropdown {...defaultProps} closeOnItemClick={false} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		fireEvent.click(screen.getByText('Item 1'));
		
		expect(screen.getByText('Item 1')).toBeInTheDocument();
	});

	it('should close dropdown when clicking outside', () => {
		render(
			<div>
				<Dropdown {...defaultProps} />
				<div data-testid="outside">Outside</div>
			</div>
		);
		
		fireEvent.click(screen.getByText('Open Menu'));
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		
		fireEvent.mouseDown(screen.getByTestId('outside'));
		expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
	});

	it('should close dropdown when Escape key is pressed', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		
		fireEvent.keyDown(document, { key: 'Escape' });
		expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
	});

	it('should not open dropdown when disabled', () => {
		render(<Dropdown {...defaultProps} disabled={true} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		
		expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
	});

	it('should render icons for items that have them', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		
		expect(screen.getByTestId('icon-User')).toBeInTheDocument();
	});

	it('should render dividers', () => {
		render(<Dropdown {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		
		const dropdown = screen.getByText('Item 1').closest('div')?.parentElement;
		const dividers = dropdown?.querySelectorAll('div[style*="height: 1px"]');
		expect(dividers).toHaveLength(1);
	});

	it('should apply testID when provided', () => {
		render(<Dropdown {...defaultProps} testID="test-dropdown" />);
		
		expect(screen.getByTestId('test-dropdown')).toBeInTheDocument();
	});

	it('should apply className when provided', () => {
		render(<Dropdown {...defaultProps} className="custom-dropdown" />);
		
		const dropdown = screen.getByText('Open Menu').closest('.custom-dropdown');
		expect(dropdown).toBeInTheDocument();
	});

	it('should apply custom style when provided', () => {
		const customStyle = { backgroundColor: 'red' };
		render(<Dropdown {...defaultProps} style={customStyle} testID="test-dropdown" />);
		
		const dropdown = screen.getByTestId('test-dropdown');
		expect(dropdown).toHaveStyle({ backgroundColor: 'red' });
	});

	it('should position dropdown correctly based on position prop', () => {
		// Test bottom-right position
		const { container } = render(<Dropdown {...defaultProps} position="bottom-right" />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		// Buscar o div que contém o estilo position: absolute
		const dropdownMenu = container.querySelector('div[style*="position: absolute"]');
		expect(dropdownMenu).toHaveStyle({ right: '0px' });
	});

	it('should position dropdown correctly for top-left position', () => {
		const { container } = render(<Dropdown {...defaultProps} position="top-left" />);
		
		fireEvent.click(screen.getByText('Open Menu'));
		const dropdownMenu = container.querySelector('div[style*="position: absolute"]');
		expect(dropdownMenu).toHaveStyle({ bottom: '100%' });
	});

	it('should handle items without onClick gracefully', () => {
		const itemsWithoutOnClick: DropdownItem[] = [
			{ id: '1', label: 'Item without onClick' },
		];

		render(<Dropdown trigger={<button>Open</button>} items={itemsWithoutOnClick} />);
		
		fireEvent.click(screen.getByText('Open'));
		
		// Should not throw error when clicking item without onClick
		expect(() => {
			fireEvent.click(screen.getByText('Item without onClick'));
		}).not.toThrow();
	});
});