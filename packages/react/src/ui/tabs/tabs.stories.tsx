import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Tabs from './tabs';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: { type: 'text' },
		},
		values: {
			control: { type: 'object' },
		},
		setValue: {
			action: 'tab changed',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Home');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Home', 'Sobre', 'Contato']}
			/>
		);
	},
};

export const ManyTabs: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Dashboard');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Dashboard', 'Usuários', 'Produtos', 'Relatórios', 'Configurações', 'Ajuda']}
			/>
		);
	},
};

export const TwoTabs: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Login');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Login', 'Cadastro']}
			/>
		);
	},
};

export const LongTabNames: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Gerenciamento de Usuários');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Gerenciamento de Usuários', 'Relatórios Financeiros', 'Configurações Avançadas']}
			/>
		);
	},
};

export const SingleTab: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Único');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Único']}
			/>
		);
	},
};

export const WithCustomStyle: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Estilizado');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Estilizado', 'Customizado', 'Diferente']}
				style={{
					border: '2px solid #007AFF',
					backgroundColor: '#1a1a1a',
					boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
				}}
			/>
		);
	},
};

export const Interactive: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Tab 1');
		const [content, setContent] = useState('Conteúdo da Tab 1');

		const handleTabChange = (tab: string) => {
			setSelectedTab(tab);
			switch (tab) {
				case 'Tab 1':
					setContent('Conteúdo da Tab 1 - Esta é a primeira aba com informações importantes.');
					break;
				case 'Tab 2':
					setContent('Conteúdo da Tab 2 - Segunda aba com dados diferentes e úteis.');
					break;
				case 'Tab 3':
					setContent('Conteúdo da Tab 3 - Terceira aba com mais informações relevantes.');
					break;
				default:
					setContent('Selecione uma aba para ver o conteúdo.');
			}
		};

		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
				<Tabs
					value={selectedTab}
					setValue={handleTabChange}
					values={['Tab 1', 'Tab 2', 'Tab 3']}
				/>
				
				<div style={{
					padding: '20px',
					backgroundColor: '#f8f9fa',
					borderRadius: '8px',
					minWidth: '300px',
					textAlign: 'center',
					fontFamily: 'Font_Book',
					fontSize: '14px',
					color: '#333',
				}}>
					{content}
				</div>
			</div>
		);
	},
};

export const ScrollableTabs: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Janeiro');
		
		return (
			<div style={{ width: '300px' }}>
				<Tabs
					value={selectedTab}
					setValue={setSelectedTab}
					values={[
						'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
						'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
					]}
				/>
			</div>
		);
	},
};

export const ToggleBehavior: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('');
		
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
				<Tabs
					value={selectedTab}
					setValue={setSelectedTab}
					values={['Opção A', 'Opção B', 'Opção C']}
				/>
				
				<div style={{
					padding: '12px',
					backgroundColor: '#e9ecef',
					borderRadius: '6px',
					fontFamily: 'Font_Book',
					fontSize: '14px',
					color: '#333',
				}}>
					Tab selecionada: {selectedTab || 'Nenhuma'}
				</div>
				
				<p style={{
					fontSize: '12px',
					color: '#666',
					textAlign: 'center',
					fontFamily: 'Font_Book',
					margin: 0,
				}}>
					Clique na mesma aba para desmarcá-la
				</p>
			</div>
		);
	},
};

export const WithTestID: Story = {
	render: () => {
		const [selectedTab, setSelectedTab] = useState('Test');
		
		return (
			<Tabs
				value={selectedTab}
				setValue={setSelectedTab}
				values={['Test', 'Example', 'Demo']}
				testID="tabs-component"
			/>
		);
	},
};