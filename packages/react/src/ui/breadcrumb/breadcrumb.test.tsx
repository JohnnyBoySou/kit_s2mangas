import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb, { BreadcrumbItem } from './breadcrumb';

// Mock do componente Icon
jest.mock('../icon/icon', () => {
	return function MockIcon({ name, size, color, style }: any) {
		return (
			<span 
				data-testid={`icon-${name}`}
				style={{ fontSize: size, color, ...style }}
			>
				{name}
			</span>
		);
	};
});

describe('Breadcrumb', () => {
	const mockItems: BreadcrumbItem[] = [
		{
			id: '1',
			label: 'Home',
			href: '/',
			icon: 'Home',
		},
		{
			id: '2',
			label: 'Products',
			href: '/products',
			icon: 'Package',
		},
		{
			id: '3',
			label: 'Electronics',
			href: '/products/electronics',
		},
		{
			id: '4',
			label: 'Smartphones',
		},
	];

	const defaultProps = {
		items: mockItems,
	};

	it('should render all items', () => {
		render(<Breadcrumb {...defaultProps} />);
		
		expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
		expect(screen.getAllByText('Products').length).toBeGreaterThan(0);
		expect(screen.getAllByText('Electronics').length).toBeGreaterThan(0);
		expect(screen.getAllByText('Smartphones').length).toBeGreaterThan(0);
	});

	it('should render items with href as links', () => {
		render(<Breadcrumb {...defaultProps} />);
		
		const homeLinks = screen.getAllByText('Home');
		const homeLink = homeLinks[0].closest('a');
		expect(homeLink).toHaveAttribute('href', '/');
		
		const productsLinks = screen.getAllByText('Products');
		const productsLink = productsLinks[0].closest('a');
		expect(productsLink).toHaveAttribute('href', '/products');
	});

	it('should render items without href as spans', () => {
		render(<Breadcrumb {...defaultProps} />);
		
		const smartphonesItem = screen.getByText('Smartphones').closest('span');
		expect(smartphonesItem).toBeInTheDocument();
		expect(smartphonesItem?.tagName).toBe('SPAN');
	});

	it('should call onItemClick when item is clicked', () => {
		const onItemClick = jest.fn();
		render(<Breadcrumb {...defaultProps} onItemClick={onItemClick} />);
		
		const homeLinks = screen.getAllByText('Home');
		fireEvent.click(homeLinks[0]);
		
		expect(onItemClick).toHaveBeenCalledWith(defaultProps.items[0]);
	});

	it('should prevent default when onItemClick is provided', () => {
		const onItemClick = jest.fn();
		render(<Breadcrumb {...defaultProps} onItemClick={onItemClick} />);
		
		const homeLinks = screen.getAllByText('Home');
		const homeLink = homeLinks[0].closest('a');
		const clickEvent = new MouseEvent('click', { bubbles: true });
		const preventDefaultSpy = jest.spyOn(clickEvent, 'preventDefault');
		
		fireEvent(homeLink!, clickEvent);
		
		expect(preventDefaultSpy).toHaveBeenCalled();
	});

	it('should not call onItemClick for disabled items', () => {
		const onItemClick = jest.fn();
		const disabledItems = [
			...mockItems,
			{ id: '5', label: 'Disabled', disabled: true },
		];
		
		render(<Breadcrumb items={disabledItems} onItemClick={onItemClick} />);
		
		fireEvent.click(screen.getByText('Disabled'));
		
		expect(onItemClick).not.toHaveBeenCalledWith(expect.objectContaining({ id: '5' }));
	});

	it('should render icons when showIcons is true', () => {
		render(<Breadcrumb {...defaultProps} showIcons={true} />);
		
		expect(screen.getByTestId('icon-Home')).toBeInTheDocument();
		expect(screen.getByTestId('icon-Package')).toBeInTheDocument();
	});

	it('should not render icons when showIcons is false', () => {
		render(<Breadcrumb {...defaultProps} showIcons={false} />);
		
		expect(screen.queryByTestId('icon-Home')).not.toBeInTheDocument();
		expect(screen.queryByTestId('icon-Package')).not.toBeInTheDocument();
	});

	it('should render chevron separators by default', () => {
		render(<Breadcrumb {...defaultProps} />);
		
		const chevronIcons = screen.getAllByTestId('icon-ChevronRight');
		expect(chevronIcons).toHaveLength(3); // 4 items = 3 separators
	});

	it('should render slash separators when specified', () => {
		render(<Breadcrumb {...defaultProps} separator="slash" />);
		
		const slashSeparators = screen.getAllByText('/');
		expect(slashSeparators).toHaveLength(3);
	});

	it('should render arrow separators when specified', () => {
		render(<Breadcrumb {...defaultProps} separator="arrow" />);
		
		const arrowSeparators = screen.getAllByText('→');
		expect(arrowSeparators).toHaveLength(3);
	});

	it('should render custom separator when specified', () => {
		render(<Breadcrumb {...defaultProps} separator="|" />);
		
		const customSeparators = screen.getAllByText('|');
		expect(customSeparators).toHaveLength(3);
	});

	it('should collapse items when maxItems is specified', () => {
		render(<Breadcrumb {...defaultProps} maxItems={3} />);
		
		expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
		expect(screen.getByText('...')).toBeInTheDocument();
		expect(screen.getAllByText('Smartphones').length).toBeGreaterThan(0);
		
		// Com maxItems=3 e 4 itens, mostra: Home, ..., Smartphones
		// Electronics e Products ficam ocultos
		expect(screen.queryByText('Products')).not.toBeInTheDocument();
		expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
	});

	it('should handle maxItems of 2 correctly', () => {
		render(<Breadcrumb {...defaultProps} maxItems={2} />);
		
		const homeElements = screen.getAllByText('Home');
		const smartphoneElements = screen.getAllByText('Smartphones');
		
		expect(homeElements.length).toBeGreaterThan(0);
		expect(smartphoneElements.length).toBeGreaterThan(0);
		
		expect(screen.queryByText('Products')).not.toBeInTheDocument();
		expect(screen.queryByText('Electronics')).not.toBeInTheDocument();
	});

	it('should not call onItemClick for ellipsis', () => {
		const onItemClick = jest.fn();
		render(<Breadcrumb {...defaultProps} maxItems={3} onItemClick={onItemClick} />);
		
		const ellipsisElement = screen.getByText('...');
		fireEvent.click(ellipsisElement);
		
		expect(onItemClick).not.toHaveBeenCalled();
	});

	it('should mark last item as current page', () => {
		render(<Breadcrumb {...defaultProps} />);
		
		const lastItem = screen.getByText('Smartphones').closest('[aria-current]');
		expect(lastItem).toHaveAttribute('aria-current', 'page');
	});

	it('should apply testID when provided', () => {
		render(<Breadcrumb {...defaultProps} testID="test-breadcrumb" />);
		
		expect(screen.getByTestId('test-breadcrumb')).toBeInTheDocument();
	});

	it('should apply className when provided', () => {
		render(<Breadcrumb {...defaultProps} className="custom-breadcrumb" />);
		
		const breadcrumb = screen.getByRole('navigation');
		expect(breadcrumb).toHaveClass('custom-breadcrumb');
	});

	it('should apply custom style when provided', () => {
		const customStyle = { backgroundColor: 'red' };
		render(<Breadcrumb {...defaultProps} style={customStyle} />);
		
		const breadcrumb = screen.getByRole('navigation');
		expect(breadcrumb.style.backgroundColor).toBe('red');
	});

	it('should apply small size styles', () => {
		render(<Breadcrumb {...defaultProps} size="small" />);
		
		const breadcrumb = screen.getByRole('navigation');
		expect(breadcrumb).toHaveStyle({ fontSize: '12px' });
	});

	it('should apply large size styles', () => {
		render(<Breadcrumb {...defaultProps} size="large" />);
		
		const breadcrumb = screen.getByRole('navigation');
		expect(breadcrumb).toHaveStyle({ fontSize: '16px' });
	});

	it('should handle empty items array', () => {
		render(<Breadcrumb items={[]} />);
		
		// Should not throw error and render empty breadcrumb
		expect(screen.queryByText('Home')).not.toBeInTheDocument();
	});

	it('should handle single item correctly', () => {
		const singleItem = [{ id: '1', label: 'Single Item' }];
		render(<Breadcrumb items={singleItem} />);
		
		expect(screen.getAllByText('Single Item').length).toBeGreaterThan(0);
		expect(screen.queryByTestId('icon-ChevronRight')).not.toBeInTheDocument();
	});

	it('should apply disabled styles to disabled items', () => {
		const itemsWithDisabled = [
			...mockItems,
			{ id: '5', label: 'Disabled', disabled: true },
		];
		
		render(<Breadcrumb items={itemsWithDisabled} />);
		
		const disabledItem = screen.getByText('Disabled');
		expect(disabledItem.parentElement).toHaveStyle({ opacity: '0.5' });
		expect(disabledItem.parentElement).toHaveStyle({ cursor: 'default' });
	});

	it('should have proper accessibility attributes', () => {
		render(<Breadcrumb {...defaultProps} />);
		
		const nav = screen.getByRole('navigation');
		expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
		
		const list = screen.getByRole('list');
		expect(list).toBeInTheDocument();
	});

	it('should not render separators for single item', () => {
		const singleItem = [{ id: '1', label: 'Only Item' }];
		render(<Breadcrumb items={singleItem} />);
		
		expect(screen.queryByTestId('icon-ChevronRight')).not.toBeInTheDocument();
		expect(screen.queryByText('/')).not.toBeInTheDocument();
	});

	it('should handle items without icons gracefully', () => {
		const itemsWithoutIcons = [
			{ id: '1', label: 'No Icon 1' },
			{ id: '2', label: 'No Icon 2' },
		];
		
		render(<Breadcrumb items={itemsWithoutIcons} showIcons={true} />);
		
		expect(screen.getAllByText('No Icon 1').length).toBeGreaterThan(0);
		expect(screen.getAllByText('No Icon 2').length).toBeGreaterThan(0);
	});
});