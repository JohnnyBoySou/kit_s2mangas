import React, { useState } from 'react';
import Icon from '../icon/icon';

export interface AccordionItem {
	id: string;
	title: string;
	content: React.ReactNode;
	disabled?: boolean;
	icon?: string;
}

export interface AccordionProps {
	items: AccordionItem[];
	allowMultiple?: boolean;
	defaultOpenItems?: string[];
	variant?: 'default' | 'bordered' | 'filled';
	testID?: string;
	className?: string;
	style?: React.CSSProperties;
	onItemToggle?: (itemId: string, isOpen: boolean) => void;
}

const Accordion: React.FC<AccordionProps> = ({
	items,
	allowMultiple = false,
	defaultOpenItems = [],
	variant = 'default',
	testID,
	className,
	style,
	onItemToggle,
}) => {
	const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

	const toggleItem = (itemId: string) => {
		const item = items.find(item => item.id === itemId);
		if (item?.disabled) return;

		setOpenItems(prev => {
			let newOpenItems: string[];
			
			if (allowMultiple) {
				newOpenItems = prev.includes(itemId)
					? prev.filter(id => id !== itemId)
					: [...prev, itemId];
			} else {
				newOpenItems = prev.includes(itemId) ? [] : [itemId];
			}

			const isOpen = newOpenItems.includes(itemId);
			onItemToggle?.(itemId, isOpen);
			
			return newOpenItems;
		});
	};

	const getVariantStyles = () => {
		switch (variant) {
			case 'bordered':
				return {
					container: {
						border: '1px solid #e9ecef',
						borderRadius: '8px',
						overflow: 'hidden',
					},
					item: {
						borderBottom: '1px solid #e9ecef',
					},
					header: {
						backgroundColor: '#f8f9fa',
					},
				};
			case 'filled':
				return {
					container: {
						backgroundColor: '#f8f9fa',
						borderRadius: '8px',
						overflow: 'hidden',
					},
					item: {
						marginBottom: '1px',
					},
					header: {
						backgroundColor: '#e9ecef',
					},
				};
			default:
				return {
					container: {},
					item: {
						borderBottom: '1px solid #e9ecef',
					},
					header: {
						backgroundColor: 'transparent',
					},
				};
		}
	};

	const variantStyles = getVariantStyles();

	return (
		<div
			data-testid={testID}
			className={className}
			style={{
				...variantStyles.container,
				...style,
			}}
		>
			{items.map((item, index) => {
				const isOpen = openItems.includes(item.id);
				const isLastItem = index === items.length - 1;

				return (
					<div
						key={item.id}
						style={{
							...variantStyles.item,
							...(isLastItem && { borderBottom: 'none' }),
						}}
					>
						<button
							onClick={() => toggleItem(item.id)}
							disabled={item.disabled}
							style={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								padding: '16px',
								border: 'none',
								backgroundColor: variantStyles.header.backgroundColor,
								cursor: item.disabled ? 'not-allowed' : 'pointer',
								textAlign: 'left',
								fontSize: '16px',
								fontFamily: 'Font_Medium',
								color: item.disabled ? '#999' : '#333',
								opacity: item.disabled ? 0.5 : 1,
								transition: 'background-color 0.2s',
							}}
							onMouseEnter={(e) => {
								if (!item.disabled) {
									e.currentTarget.style.backgroundColor = 
										variant === 'default' ? '#f8f9fa' : 
										variant === 'bordered' ? '#e9ecef' : 
										'#dee2e6';
								}
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = variantStyles.header.backgroundColor;
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
								{item.icon && (
									<Icon 
										name={item.icon as any} 
										size={20} 
										color={item.disabled ? '#999' : '#666'} 
									/>
								)}
								<span>{item.title}</span>
							</div>
							<Icon 
								name="ChevronDown" 
								size={20} 
								color={item.disabled ? '#999' : '#666'}
								style={{
									transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
									transition: 'transform 0.2s ease',
								}}
							/>
						</button>
						
						<div
							style={{
								overflow: 'hidden',
								transition: 'max-height 0.3s ease, padding 0.3s ease',
								maxHeight: isOpen ? '1000px' : '0px',
								padding: isOpen ? '16px' : '0 16px',
							}}
						>
							<div style={{ paddingBottom: isOpen ? '0' : '16px' }}>
								{item.content}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;