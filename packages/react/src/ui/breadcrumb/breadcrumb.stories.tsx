import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Breadcrumb, { BreadcrumbItem } from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
	title: 'UI/Breadcrumb',
	component: Breadcrumb,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
O componente **Breadcrumb** fornece navegação hierárquica para ajudar os usuários a entender sua localização atual dentro de uma aplicação e navegar facilmente para níveis superiores.

## Características

- ✅ **Navegação intuitiva**: Mostra o caminho hierárquico atual
- ✅ **Colapso automático**: Reduz itens quando há muitos níveis
- ✅ **Separadores customizáveis**: Chevron, slash, arrow ou personalizado
- ✅ **Tamanhos variados**: Small, medium e large
- ✅ **Ícones opcionais**: Suporte a ícones para cada item
- ✅ **Acessibilidade**: Suporte completo a screen readers
- ✅ **Responsivo**: Adapta-se a diferentes tamanhos de tela

## Quando usar

- Navegação em estruturas hierárquicas profundas
- E-commerce (categoria > subcategoria > produto)
- Sistemas de arquivos
- Documentação com múltiplos níveis
- Qualquer interface com navegação em árvore

## Boas práticas

- Use no máximo 5-7 níveis visíveis
- Mantenha os rótulos concisos
- Use ícones consistentes quando aplicável
- Sempre marque o último item como página atual
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		items: {
			description: 'Array de itens do breadcrumb. Cada item deve ter id, label e opcionalmente href, icon e disabled.',
			control: { type: 'object' },
			table: {
				type: { summary: 'BreadcrumbItem[]' },
				defaultValue: { summary: '[]' },
			},
		},
		onItemClick: {
			description: 'Callback chamado quando um item é clicado. Recebe o item clicado como parâmetro.',
			action: 'clicked',
			table: {
				type: { summary: '(item: BreadcrumbItem) => void' },
			},
		},
		separator: {
			description: 'Tipo de separador entre os itens. Pode ser um dos tipos predefinidos ou uma string customizada.',
			control: { type: 'select' },
			options: ['chevron', 'slash', 'arrow'],
			table: {
				type: { summary: "'chevron' | 'slash' | 'arrow' | string" },
				defaultValue: { summary: "'chevron'" },
			},
		},
		maxItems: {
			description: 'Número máximo de itens visíveis antes de colapsar. Quando excedido, mostra primeiro item, ellipsis e últimos itens.',
			control: { type: 'number', min: 2, max: 10 },
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 'undefined' },
			},
		},
		size: {
			description: 'Tamanho do breadcrumb que afeta font-size, padding e tamanho dos ícones.',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			table: {
				type: { summary: "'small' | 'medium' | 'large'" },
				defaultValue: { summary: "'medium'" },
			},
		},
		showIcons: {
			description: 'Controla se os ícones dos itens devem ser exibidos.',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		testID: {
			description: 'ID para identificação em testes automatizados.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		className: {
			description: 'Classe CSS customizada para estilização adicional.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		style: {
			description: 'Estilos inline customizados aplicados ao container principal.',
			control: { type: 'object' },
			table: {
				type: { summary: 'React.CSSProperties' },
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// Dados de exemplo
const basicItems: BreadcrumbItem[] = [
	{
		id: 'home',
		label: 'Home',
		href: '/',
		icon: 'Home',
	},
	{
		id: 'products',
		label: 'Produtos',
		href: '/products',
		icon: 'Package',
	},
	{
		id: 'category',
		label: 'Eletrônicos',
		href: '/products/electronics',
		icon: 'Smartphone',
	},
	{
		id: 'current',
		label: 'iPhone 15 Pro',
	},
];

const longPathItems: BreadcrumbItem[] = [
	{
		id: 'home',
		label: 'Home',
		href: '/',
		icon: 'Home',
	},
	{
		id: 'company',
		label: 'Empresa',
		href: '/company',
		icon: 'Building',
	},
	{
		id: 'departments',
		label: 'Departamentos',
		href: '/company/departments',
		icon: 'Users',
	},
	{
		id: 'engineering',
		label: 'Engenharia',
		href: '/company/departments/engineering',
		icon: 'Code',
	},
	{
		id: 'frontend',
		label: 'Frontend',
		href: '/company/departments/engineering/frontend',
		icon: 'Monitor',
	},
	{
		id: 'react',
		label: 'React Team',
		href: '/company/departments/engineering/frontend/react',
		icon: 'Zap',
	},
	{
		id: 'current',
		label: 'João Silva',
	},
];

const fileSystemItems: BreadcrumbItem[] = [
	{
		id: 'root',
		label: 'Meus Arquivos',
		href: '/files',
		icon: 'HardDrive',
	},
	{
		id: 'documents',
		label: 'Documentos',
		href: '/files/documents',
		icon: 'Folder',
	},
	{
		id: 'projects',
		label: 'Projetos',
		href: '/files/documents/projects',
		icon: 'FolderOpen',
	},
	{
		id: 'current',
		label: 'projeto-final.pdf',
		icon: 'FileText',
	},
];

export const Default: Story = {
	args: {
		items: basicItems,
	},
};

export const WithoutIcons: Story = {
	args: {
		items: basicItems,
		showIcons: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb sem ícones para um visual mais limpo.',
			},
		},
	},
};

export const SlashSeparator: Story = {
	args: {
		items: basicItems,
		separator: 'slash',
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb usando barras como separadores.',
			},
		},
	},
};

export const ArrowSeparator: Story = {
	args: {
		items: basicItems,
		separator: 'arrow',
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb usando setas como separadores.',
			},
		},
	},
};

export const CustomSeparator: Story = {
	args: {
		items: basicItems,
		separator: '|',
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com separador customizado.',
			},
		},
	},
};

export const SmallSize: Story = {
	args: {
		items: basicItems,
		size: 'small',
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com tamanho pequeno.',
			},
		},
	},
};

export const LargeSize: Story = {
	args: {
		items: basicItems,
		size: 'large',
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com tamanho grande.',
			},
		},
	},
};

export const CollapsedItems: Story = {
	args: {
		items: longPathItems,
		maxItems: 4,
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com itens colapsados quando há muitos níveis.',
			},
		},
	},
};

export const MinimalCollapse: Story = {
	args: {
		items: longPathItems,
		maxItems: 2,
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com colapso mínimo, mostrando apenas primeiro e último item.',
			},
		},
	},
};

export const FileSystemExample: Story = {
	args: {
		items: fileSystemItems,
	},
	parameters: {
		docs: {
			description: {
				story: 'Exemplo de uso para navegação em sistema de arquivos.',
			},
		},
	},
};

export const WithDisabledItems: Story = {
	args: {
		items: [
			...basicItems.slice(0, 2),
			{
				id: 'disabled',
				label: 'Acesso Restrito',
				disabled: true,
				icon: 'Lock',
			},
			basicItems[basicItems.length - 1],
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com itens desabilitados.',
			},
		},
	},
};

export const CustomStyling: Story = {
	args: {
		items: basicItems,
		className: 'custom-breadcrumb',
		style: {
			padding: '12px 16px',
			backgroundColor: '#f8f9fa',
			borderRadius: '8px',
			border: '1px solid #dee2e6',
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Breadcrumb com estilos customizados.',
			},
		},
	},
};

// Interactive Example
export const InteractiveExample: Story = {
	render: () => {
		const [currentPath, setCurrentPath] = React.useState(['home', 'products', 'category']);
		
		const allItems: Record<string, BreadcrumbItem> = {
			home: { id: 'home', label: 'Home', icon: 'Home' },
			products: { id: 'products', label: 'Produtos', icon: 'Package' },
			category: { id: 'category', label: 'Eletrônicos', icon: 'Smartphone' },
			subcategory: { id: 'subcategory', label: 'Smartphones', icon: 'Phone' },
			product: { id: 'product', label: 'iPhone 15 Pro', icon: 'Apple' },
		};

		const getCurrentItems = (): BreadcrumbItem[] => {
			return currentPath.map((id, index) => ({
				...allItems[id],
				href: index < currentPath.length - 1 ? `/${currentPath.slice(1, index + 1).join('/')}` : undefined,
			}));
		};

		const handleItemClick = (item: BreadcrumbItem) => {
			const itemIndex = currentPath.indexOf(item.id);
			if (itemIndex !== -1) {
				setCurrentPath(currentPath.slice(0, itemIndex + 1));
			}
		};

		const addLevel = (levelId: string) => {
			if (!currentPath.includes(levelId)) {
				setCurrentPath([...currentPath, levelId]);
			}
		};

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<div>
					<h3>Navegação Interativa</h3>
					<p>Clique nos itens do breadcrumb para navegar ou use os botões abaixo:</p>
				</div>
				
				<Breadcrumb
					items={getCurrentItems()}
					onItemClick={handleItemClick}
				/>
				
				<div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
					<button
						onClick={() => addLevel('subcategory')}
						disabled={currentPath.includes('subcategory')}
						style={{ padding: '8px 12px', fontSize: '14px' }}
					>
						Ir para Smartphones
					</button>
					<button
						onClick={() => addLevel('product')}
						disabled={currentPath.includes('product')}
						style={{ padding: '8px 12px', fontSize: '14px' }}
					>
						Ir para iPhone 15 Pro
					</button>
					<button
						onClick={() => setCurrentPath(['home'])}
						style={{ padding: '8px 12px', fontSize: '14px' }}
					>
						Voltar ao início
					</button>
				</div>
				
				<div style={{ fontSize: '12px', color: '#6c757d' }}>
					Caminho atual: {currentPath.join(' → ')}
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Exemplo interativo onde você pode navegar pelos níveis do breadcrumb.',
			},
		},
	},
};

// E-commerce Example
export const EcommerceExample: Story = {
	render: () => {
		const items: BreadcrumbItem[] = [
			{
				id: 'home',
				label: 'Loja',
				href: '/',
				icon: 'Store',
			},
			{
				id: 'category',
				label: 'Roupas',
				href: '/roupas',
				icon: 'Shirt',
			},
			{
				id: 'subcategory',
				label: 'Masculino',
				href: '/roupas/masculino',
				icon: 'User',
			},
			{
				id: 'type',
				label: 'Camisetas',
				href: '/roupas/masculino/camisetas',
				icon: 'Shirt',
			},
			{
				id: 'current',
				label: 'Camiseta Básica Azul',
			},
		];

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
				<div>
					<h3>Exemplo E-commerce</h3>
					<p>Navegação típica em uma loja online:</p>
				</div>
				
				<Breadcrumb items={items} />
				
				<div style={{ 
					padding: '16px', 
					backgroundColor: '#f8f9fa', 
					borderRadius: '8px',
					border: '1px solid #dee2e6'
				}}>
					<h4 style={{ margin: '0 0 8px 0' }}>Camiseta Básica Azul</h4>
					<p style={{ margin: '0', color: '#6c757d' }}>
						Você está visualizando este produto na categoria: Loja → Roupas → Masculino → Camisetas
					</p>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story: 'Exemplo de uso em e-commerce com categorias de produtos.',
			},
		},
	},
};

// Separators Showcase
export const SeparatorsShowcase: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
			<div>
				<h3 style={{ marginBottom: '8px' }}>Chevron (Padrão)</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} separator="chevron" />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '8px' }}>Slash</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} separator="slash" />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '8px' }}>Arrow</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} separator="arrow" />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '8px' }}>Customizado (|)</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} separator="|" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Comparação visual entre os diferentes tipos de separadores.',
			},
		},
	},
};

// Sizes Showcase
export const SizesShowcase: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
			<div>
				<h3 style={{ marginBottom: '8px' }}>Small</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} size="small" />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '8px' }}>Medium (Padrão)</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} size="medium" />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '8px' }}>Large</h3>
				<Breadcrumb items={basicItems.slice(0, 3)} size="large" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Comparação visual entre os diferentes tamanhos do breadcrumb.',
			},
		},
	},
};