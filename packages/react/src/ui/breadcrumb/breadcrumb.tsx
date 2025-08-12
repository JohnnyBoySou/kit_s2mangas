import React from 'react';
import Icon from '../icon/icon';
import * as Icons from 'lucide-react';

type IconName = keyof typeof Icons;

export interface BreadcrumbItem {
	/** Identificador único do item */
	id: string;
	/** Texto a ser exibido */
	label: string;
	/** URL ou caminho para navegação */
	href?: string;
	/** Ícone do item */
	icon?: IconName;
	/** Se o item está desabilitado */
	disabled?: boolean;
}

export interface BreadcrumbProps {
	/** Array de itens do breadcrumb */
	items: BreadcrumbItem[];
	/** Callback chamado quando um item é clicado */
	onItemClick?: (item: BreadcrumbItem) => void;
	/** Separador entre os itens */
	separator?: 'chevron' | 'slash' | 'arrow' | string;
	/** Número máximo de itens visíveis antes de colapsar */
	maxItems?: number;
	/** Tamanho do breadcrumb */
	size?: 'small' | 'medium' | 'large';
	/** Mostra ícones dos itens */
	showIcons?: boolean;
	/** ID para testes */
	testID?: string;
	/** Classe CSS customizada */
	className?: string;
	/** Estilos inline customizados */
	style?: React.CSSProperties;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
	items,
	onItemClick,
	separator = 'chevron',
	maxItems,
	size = 'medium',
	showIcons = true,
	testID,
	className,
	style,
}) => {
	const getSizeStyles = () => {
		switch (size) {
			case 'small':
				return {
					fontSize: '12px',
					iconSize: 12,
					padding: '4px 8px',
					gap: '4px',
				};
			case 'large':
				return {
					fontSize: '16px',
					iconSize: 20,
					padding: '8px 12px',
					gap: '8px',
				};
			default:
				return {
					fontSize: '14px',
					iconSize: 16,
					padding: '6px 10px',
					gap: '6px',
				};
		}
	};

	const getSeparatorElement = () => {
		const sizeStyles = getSizeStyles();
		
		switch (separator) {
			case 'slash':
				return <span style={{ color: '#6c757d', margin: `0 ${sizeStyles.gap}px` }}>/</span>;
			case 'arrow':
				return <span style={{ color: '#6c757d', margin: `0 ${sizeStyles.gap}px` }}>→</span>;
			case 'chevron':
				return (
					<Icon 
						name="ChevronRight" 
						size={sizeStyles.iconSize} 
						color="#6c757d"
						style={{ margin: `0 ${sizeStyles.gap}px` }}
					/>
				);
			default:
				return <span style={{ color: '#6c757d', margin: `0 ${sizeStyles.gap}px` }}>{separator}</span>;
		}
	};

	const getVisibleItems = (): BreadcrumbItem[] => {
		if (!maxItems || items.length <= maxItems) {
			return items;
		}

		if (maxItems <= 2) {
			return [items[0], items[items.length - 1]];
		}

		const firstItems = items.slice(0, 1);
		const lastItems = items.slice(-(maxItems - 2));
		
		return [...firstItems, { id: 'ellipsis', label: '...', disabled: true }, ...lastItems];
	};

	const handleItemClick = (item: BreadcrumbItem, event: React.MouseEvent) => {
		if (item.disabled || item.id === 'ellipsis') {
			event.preventDefault();
			return;
		}

		if (onItemClick) {
			event.preventDefault();
			onItemClick(item);
		}
	};

	const sizeStyles = getSizeStyles();
	const visibleItems = getVisibleItems();
	const isLastItem = (index: number) => index === visibleItems.length - 1;

	const containerStyles: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		flexWrap: 'wrap',
		fontSize: sizeStyles.fontSize,
		...style,
	};

	const itemStyles = (item: BreadcrumbItem, isLast: boolean): React.CSSProperties => ({
		display: 'flex',
		alignItems: 'center',
		gap: `${sizeStyles.gap}px`,
		padding: sizeStyles.padding,
		borderRadius: '4px',
		textDecoration: 'none',
		color: isLast ? '#495057' : '#007bff',
		cursor: item.disabled || item.id === 'ellipsis' ? 'default' : 'pointer',
		fontWeight: isLast ? '600' : '400',
		opacity: item.disabled ? 0.5 : 1,
		transition: 'all 0.2s ease',
		...((!item.disabled && item.id !== 'ellipsis' && !isLast) && {
			':hover': {
				backgroundColor: '#f8f9fa',
				color: '#0056b3',
			},
		}),
	});

	return (
		<nav
			data-testid={testID}
			className={className}
			style={containerStyles}
			aria-label="Breadcrumb"
		>
			<ol style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0, listStyle: 'none' }}>
				{visibleItems.map((item, index) => {
					const isLast = isLastItem(index);
					
					return (
						<li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
							{item.href ? (
								<a
									href={item.href}
									onClick={(e) => handleItemClick(item, e)}
									style={itemStyles(item, isLast)}
									aria-current={isLast ? 'page' : undefined}
								>
									{showIcons && item.icon && (
										<Icon name={item.icon} size={sizeStyles.iconSize} />
									)}
									<span>{item.label}</span>
								</a>
							) : (
								<span
									onClick={(e) => handleItemClick(item, e)}
									style={itemStyles(item, isLast)}
									aria-current={isLast ? 'page' : undefined}
								>
									{showIcons && item.icon && (
										<Icon name={item.icon} size={sizeStyles.iconSize} />
									)}
									<span>{item.label}</span>
								</span>
							)}
							
							{!isLast && getSeparatorElement()}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;