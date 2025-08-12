import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown, { DropdownItem } from './dropdown';
import Button from '../button/button';
import Icon from '../icon/icon';

const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Dropdown

O componente Dropdown fornece uma interface elegante para exibir menus contextuais e listas de ações. É altamente flexível e pode ser usado em diversos cenários.

## Características

- **Posicionamento Flexível**: Suporte para 4 posições diferentes (bottom-left, bottom-right, top-left, top-right)
- **Trigger Customizável**: Aceita qualquer elemento React como trigger
- **Itens Interativos**: Suporte para ícones, divisores, estados desabilitados e callbacks
- **Controle de Fechamento**: Opção para manter o dropdown aberto após clique em item
- **Acessibilidade**: Fechamento com tecla Escape e clique fora
- **Estados Visuais**: Feedback visual para hover e estados desabilitados

## Casos de Uso

- **Menus de Usuário**: Perfil, configurações, logout
- **Menus de Ação**: Editar, duplicar, deletar
- **Filtros**: Seleção múltipla de filtros
- **Menus Contextuais**: Ações específicas do contexto
- **Navegação**: Links e ações de navegação

## Boas Práticas

- Use ícones para melhorar a identificação visual dos itens
- Agrupe ações relacionadas com divisores
- Mantenha labels claros e concisos
- Use estados desabilitados para ações indisponíveis
- Considere o posicionamento baseado na localização do trigger
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		trigger: {
			description: 'Elemento que ativa o dropdown quando clicado',
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		items: {
			description: 'Array de itens do dropdown com suas propriedades e ações',
			table: {
				type: { summary: 'DropdownItem[]' },
			},
		},
		position: {
			description: 'Posição do dropdown em relação ao trigger',
			control: { type: 'select' },
			options: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'bottom-left' },
			},
		},
		disabled: {
			description: 'Desabilita o dropdown, impedindo sua abertura',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		closeOnItemClick: {
			description: 'Define se o dropdown deve fechar automaticamente ao clicar em um item',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		testID: {
			description: 'ID para testes automatizados',
			table: {
				type: { summary: 'string' },
			},
		},
		className: {
			description: 'Classes CSS adicionais para customização',
			table: {
				type: { summary: 'string' },
			},
		},
		style: {
			description: 'Estilos CSS inline para customização avançada',
			table: {
				type: { summary: 'React.CSSProperties' },
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems: DropdownItem[] = [
	{ id: '1', label: 'Perfil', icon: 'User', onClick: () => alert('Perfil clicado') },
	{ id: '2', label: 'Configurações', icon: 'Settings', onClick: () => alert('Configurações clicado') },
	{ id: 'divider1', label: '', divider: true },
	{ id: '3', label: 'Ajuda', icon: 'HelpCircle', onClick: () => alert('Ajuda clicado') },
	{ id: '4', label: 'Sair', icon: 'LogOut', onClick: () => alert('Sair clicado') },
];

export const Default: Story = {
	args: {
		trigger: <Button>Menu</Button>,
		items: basicItems,
	},
};

export const WithIconTrigger: Story = {
	args: {
		trigger: (
			<button
				style={{
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					padding: '8px',
					borderRadius: '4px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Icon name="MoreVertical" size={20} />
			</button>
		),
		items: basicItems,
	},
};

export const BottomRight: Story = {
	args: {
		trigger: <Button>Menu (Bottom Right)</Button>,
		items: basicItems,
		position: 'bottom-right',
	},
};

export const TopLeft: Story = {
	args: {
		trigger: <Button>Menu (Top Left)</Button>,
		items: basicItems,
		position: 'top-left',
	},
};

export const TopRight: Story = {
	args: {
		trigger: <Button>Menu (Top Right)</Button>,
		items: basicItems,
		position: 'top-right',
	},
};

export const WithDisabledItems: Story = {
	args: {
		trigger: <Button>Menu com Itens Desabilitados</Button>,
		items: [
			{ id: '1', label: 'Item Ativo', icon: 'Check', onClick: () => alert('Item ativo') },
			{ id: '2', label: 'Item Desabilitado', icon: 'X', disabled: true, onClick: () => alert('Não deve aparecer') },
			{ id: 'divider1', label: '', divider: true },
			{ id: '3', label: 'Outro Item Ativo', icon: 'Star', onClick: () => alert('Outro item ativo') },
			{ id: '4', label: 'Outro Desabilitado', disabled: true, onClick: () => alert('Não deve aparecer') },
		],
	},
};

export const Disabled: Story = {
	args: {
		trigger: <Button>Menu Desabilitado</Button>,
		items: basicItems,
		disabled: true,
	},
};

export const NoCloseOnClick: Story = {
	args: {
		trigger: <Button>Menu (Não Fecha ao Clicar)</Button>,
		items: [
			{ id: '1', label: 'Item 1', onClick: () => alert('Item 1 - Menu permanece aberto') },
			{ id: '2', label: 'Item 2', onClick: () => alert('Item 2 - Menu permanece aberto') },
			{ id: '3', label: 'Item 3', onClick: () => alert('Item 3 - Menu permanece aberto') },
		],
		closeOnItemClick: false,
	},
};

export const ContextMenu: Story = {
	render: () => {
		const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

		const handleContextMenu = (e: React.MouseEvent) => {
			e.preventDefault();
			setContextMenu({ x: e.clientX, y: e.clientY });
		};

		const contextItems: DropdownItem[] = [
			{ id: '1', label: 'Copiar', icon: 'Copy', onClick: () => { alert('Copiar'); setContextMenu(null); } },
			{ id: '2', label: 'Colar', icon: 'Clipboard', onClick: () => { alert('Colar'); setContextMenu(null); } },
			{ id: 'divider1', label: '', divider: true },
			{ id: '3', label: 'Deletar', icon: 'Trash2', onClick: () => { alert('Deletar'); setContextMenu(null); } },
		];

		return (
			<div>
				<div
					onContextMenu={handleContextMenu}
					style={{
						width: '300px',
						height: '200px',
						backgroundColor: '#f8f9fa',
						border: '2px dashed #dee2e6',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '8px',
						cursor: 'pointer',
						fontFamily: 'Font_Medium',
					}}
				>
					Clique com o botão direito aqui
				</div>
				{contextMenu && (
					<div
						style={{
							position: 'fixed',
							top: contextMenu.y,
							left: contextMenu.x,
							zIndex: 1000,
						}}
					>
						<Dropdown
							trigger={<div />}
							items={contextItems}
							closeOnItemClick={true}
						/>
					</div>
				)}
				{contextMenu && (
					<div
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							zIndex: 999,
						}}
						onClick={() => setContextMenu(null)}
					/>
				)}
			</div>
		);
	},
};

export const UserMenu: Story = {
	render: () => {
		const userItems: DropdownItem[] = [
			{ id: '1', label: 'Meu Perfil', icon: 'User', onClick: () => alert('Ir para perfil') },
			{ id: '2', label: 'Configurações', icon: 'Settings', onClick: () => alert('Abrir configurações') },
			{ id: '3', label: 'Notificações', icon: 'Bell', onClick: () => alert('Ver notificações') },
			{ id: 'divider1', label: '', divider: true },
			{ id: '4', label: 'Ajuda e Suporte', icon: 'HelpCircle', onClick: () => alert('Abrir ajuda') },
			{ id: 'divider2', label: '', divider: true },
			{ id: '5', label: 'Sair', icon: 'LogOut', onClick: () => alert('Fazer logout') },
		];

		return (
			<Dropdown
				trigger={
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
							padding: '8px 12px',
							backgroundColor: '#f8f9fa',
							borderRadius: '8px',
							cursor: 'pointer',
							border: '1px solid #e9ecef',
						}}
					>
						<div
							style={{
								width: '32px',
								height: '32px',
								borderRadius: '50%',
								backgroundColor: '#007AFF',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: 'white',
								fontSize: '14px',
								fontFamily: 'Font_Medium',
							}}
						>
							JD
						</div>
						<div>
							<div style={{ fontSize: '14px', fontFamily: 'Font_Medium' }}>João Silva</div>
							<div style={{ fontSize: '12px', color: '#666' }}>joao@exemplo.com</div>
						</div>
						<Icon name="ChevronDown" size={16} color="#666" />
					</div>
				}
				items={userItems}
				position="bottom-right"
			/>
		);
	},
};

export const ActionsMenu: Story = {
	render: () => {
		const actionItems: DropdownItem[] = [
			{ id: '1', label: 'Editar', icon: 'Edit', onClick: () => alert('Editar item') },
			{ id: '2', label: 'Duplicar', icon: 'Copy', onClick: () => alert('Duplicar item') },
			{ id: '3', label: 'Compartilhar', icon: 'Share', onClick: () => alert('Compartilhar item') },
			{ id: 'divider1', label: '', divider: true },
			{ id: '4', label: 'Arquivar', icon: 'Archive', onClick: () => alert('Arquivar item') },
			{ id: '5', label: 'Deletar', icon: 'Trash2', onClick: () => alert('Deletar item') },
		];

		return (
			<div style={{ display: 'flex', gap: '16px' }}>
				<div
					style={{
						padding: '16px',
						backgroundColor: '#f8f9fa',
						borderRadius: '8px',
						border: '1px solid #e9ecef',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						minWidth: '200px',
					}}
				>
					<div>
						<div style={{ fontFamily: 'Font_Medium', marginBottom: '4px' }}>Documento.pdf</div>
						<div style={{ fontSize: '12px', color: '#666' }}>Modificado há 2 horas</div>
					</div>
					<Dropdown
						trigger={
							<button
								style={{
									background: 'none',
									border: 'none',
									cursor: 'pointer',
									padding: '4px',
									borderRadius: '4px',
								}}
							>
								<Icon name="MoreHorizontal" size={20} color="#666" />
							</button>
						}
						items={actionItems}
						position="bottom-right"
					/>
				</div>
			</div>
		);
	},
};

export const FilterMenu: Story = {
	render: () => {
		const [selectedFilters, setSelectedFilters] = useState<string[]>(['recent']);

		const toggleFilter = (filterId: string) => {
			setSelectedFilters(prev => 
				prev.includes(filterId) 
					? prev.filter(id => id !== filterId)
					: [...prev, filterId]
			);
		};

		const filterItems: DropdownItem[] = [
			{ 
				id: 'recent', 
				label: `${selectedFilters.includes('recent') ? '✓' : ''} Recentes`, 
				onClick: () => toggleFilter('recent') 
			},
			{ 
				id: 'favorites', 
				label: `${selectedFilters.includes('favorites') ? '✓' : ''} Favoritos`, 
				onClick: () => toggleFilter('favorites') 
			},
			{ 
				id: 'shared', 
				label: `${selectedFilters.includes('shared') ? '✓' : ''} Compartilhados`, 
				onClick: () => toggleFilter('shared') 
			},
			{ id: 'divider1', label: '', divider: true },
			{ 
				id: 'archived', 
				label: `${selectedFilters.includes('archived') ? '✓' : ''} Arquivados`, 
				onClick: () => toggleFilter('archived') 
			},
		];

		return (
			<Dropdown
				trigger={
					<Button>
						<Icon name="Filter" size={16} />
						Filtros ({selectedFilters.length})
					</Button>
				}
				items={filterItems}
				closeOnItemClick={false}
			/>
		);
	},
};