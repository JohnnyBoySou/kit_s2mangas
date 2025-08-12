import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion, { AccordionItem } from './accordion';

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

describe('Accordion', () => {
	const mockItems: AccordionItem[] = [
		{
			id: '1',
			title: 'Item 1',
			content: <div>Content 1</div>,
		},
		{
			id: '2',
			title: 'Item 2',
			content: <div>Content 2</div>,
			icon: 'User',
		},
		{
			id: '3',
			title: 'Item 3',
			content: <div>Content 3</div>,
			disabled: true,
		},
	];

	const defaultProps = {
		items: mockItems,
	};

	it('should render all accordion items', () => {
		render(<Accordion {...defaultProps} />);
		
		expect(screen.getByText('Item 1')).toBeInTheDocument();
		expect(screen.getByText('Item 2')).toBeInTheDocument();
		expect(screen.getByText('Item 3')).toBeInTheDocument();
	});

	it('should not show content initially', () => {
		render(<Accordion {...defaultProps} />);
		
		const content1 = screen.getByText('Content 1').parentElement?.parentElement;
		const content2 = screen.getByText('Content 2').parentElement?.parentElement;
		const content3 = screen.getByText('Content 3').parentElement?.parentElement;
		
		expect(content1).toHaveStyle({ maxHeight: '0px' });
		expect(content2).toHaveStyle({ maxHeight: '0px' });
		expect(content3).toHaveStyle({ maxHeight: '0px' });
	});

	it('should show content when item is clicked', () => {
		render(<Accordion {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Item 1'));
		
		const content1 = screen.getByText('Content 1').parentElement?.parentElement;
		expect(content1).toHaveStyle({ maxHeight: '1000px' });
	});

	it('should hide content when item is clicked again', () => {
		render(<Accordion {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Item 1'));
		const content1 = screen.getByText('Content 1').parentElement?.parentElement;
		expect(content1).toHaveStyle({ maxHeight: '1000px' });
		
		fireEvent.click(screen.getByText('Item 1'));
		expect(content1).toHaveStyle({ maxHeight: '0px' });
	});

	it('should only allow one item open at a time by default', () => {
		render(<Accordion {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Item 1'));
		const content1 = screen.getByText('Content 1').parentElement?.parentElement;
		expect(content1).toHaveStyle({ maxHeight: '1000px' });
		
		fireEvent.click(screen.getByText('Item 2'));
		const content2 = screen.getByText('Content 2').parentElement?.parentElement;
		expect(content1).toHaveStyle({ maxHeight: '0px' });
		expect(content2).toHaveStyle({ maxHeight: '1000px' });
	});

	it('should allow multiple items open when allowMultiple is true', () => {
		render(<Accordion {...defaultProps} allowMultiple={true} />);
		
		fireEvent.click(screen.getByText('Item 1'));
		fireEvent.click(screen.getByText('Item 2'));
		
		const content1 = screen.getByText('Content 1').parentElement?.parentElement;
		const content2 = screen.getByText('Content 2').parentElement?.parentElement;
		expect(content1).toHaveStyle({ maxHeight: '1000px' });
		expect(content2).toHaveStyle({ maxHeight: '1000px' });
	});

	it('should open default items', () => {
		render(<Accordion {...defaultProps} defaultOpenItems={['1', '3']} />);
		
		const content1 = screen.getByText('Content 1').parentElement?.parentElement;
		const content2 = screen.getByText('Content 2').parentElement?.parentElement;
		const content3 = screen.getByText('Content 3').parentElement?.parentElement;
		
		expect(content1).toHaveStyle({ maxHeight: '1000px' });
		expect(content2).toHaveStyle({ maxHeight: '0px' });
		expect(content3).toHaveStyle({ maxHeight: '1000px' });
	});

	it('should not open disabled items', () => {
		render(<Accordion {...defaultProps} />);
		
		fireEvent.click(screen.getByText('Item 3'));
		
		const content3 = screen.getByText('Content 3').parentElement?.parentElement;
		expect(content3).toHaveStyle({ maxHeight: '0px' });
	});

	it('should render icons for items that have them', () => {
		render(<Accordion {...defaultProps} />);
		
		expect(screen.getByTestId('icon-User')).toBeInTheDocument();
	});

	it('should render chevron icons for all items', () => {
		render(<Accordion {...defaultProps} />);
		
		const chevronIcons = screen.getAllByTestId('icon-ChevronDown');
		expect(chevronIcons).toHaveLength(3);
	});

	it('should call onItemToggle when item is toggled', () => {
		const onItemToggle = jest.fn();
		render(<Accordion {...defaultProps} onItemToggle={onItemToggle} />);
		
		fireEvent.click(screen.getByText('Item 1'));
		
		expect(onItemToggle).toHaveBeenCalledWith('1', true);
		
		fireEvent.click(screen.getByText('Item 1'));
		
		expect(onItemToggle).toHaveBeenCalledWith('1', false);
	});

	it('should apply testID when provided', () => {
		render(<Accordion {...defaultProps} testID="test-accordion" />);
		
		expect(screen.getByTestId('test-accordion')).toBeInTheDocument();
	});

	it('should apply className when provided', () => {
		render(<Accordion {...defaultProps} className="custom-accordion" />);
		
		const accordion = screen.getByText('Item 1').closest('.custom-accordion');
		expect(accordion).toBeInTheDocument();
	});

	it('should apply custom style when provided', () => {
		const customStyle = { backgroundColor: 'red' };
		render(<Accordion {...defaultProps} style={customStyle} testID="test-accordion" />);
		
		const accordion = screen.getByTestId('test-accordion');
		expect(accordion).toHaveStyle({ backgroundColor: 'red' });
	});

	it('should apply bordered variant styles', () => {
		render(<Accordion {...defaultProps} variant="bordered" testID="test-accordion" />);
		
		const accordion = screen.getByTestId('test-accordion');
		expect(accordion).toHaveStyle({ border: '1px solid #e9ecef' });
		expect(accordion).toHaveStyle({ borderRadius: '8px' });
	});

	it('should apply filled variant styles', () => {
		render(<Accordion {...defaultProps} variant="filled" testID="test-accordion" />);
		
		const accordion = screen.getByTestId('test-accordion');
		expect(accordion).toHaveStyle({ backgroundColor: '#f8f9fa' });
		expect(accordion).toHaveStyle({ borderRadius: '8px' });
	});

	it('should disable button for disabled items', () => {
		render(<Accordion {...defaultProps} />);
		
		const disabledButton = screen.getByText('Item 3').closest('button');
		expect(disabledButton).toBeDisabled();
	});

	it('should handle empty items array', () => {
		render(<Accordion items={[]} />);
		
		// Should not throw error and render empty accordion
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});

	it('should handle items without content', () => {
		const itemsWithoutContent: AccordionItem[] = [
			{
				id: '1',
				title: 'Item without content',
				content: null,
			},
		];

		render(<Accordion items={itemsWithoutContent} />);
		
		fireEvent.click(screen.getByText('Item without content'));
		
		// Should not throw error
		expect(screen.getByText('Item without content')).toBeInTheDocument();
	});

	it('should rotate chevron icon when item is open', () => {
		render(<Accordion {...defaultProps} />);
		
		const chevronIcon = screen.getAllByTestId('icon-ChevronDown')[0];
		expect(chevronIcon).toHaveStyle({ transform: 'rotate(0deg)' });
		
		fireEvent.click(screen.getByText('Item 1'));
		
		expect(chevronIcon).toHaveStyle({ transform: 'rotate(180deg)' });
	});
});