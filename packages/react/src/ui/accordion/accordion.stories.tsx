import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Accordion, { AccordionItem } from './accordion';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
# Accordion

O componente Accordion permite organizar e exibir conteúdo de forma expansível e colapsável. É ideal para FAQs, seções de ajuda, configurações e qualquer cenário onde você precisa economizar espaço na interface.

## Características

- **Expansão controlada**: Suporte para um ou múltiplos itens abertos simultaneamente
- **Estados visuais**: Diferentes variantes (default, bordered, filled) para se adequar ao design
- **Acessibilidade**: Navegação por teclado e estados visuais claros
- **Flexibilidade**: Suporte a ícones, conteúdo customizado e itens desabilitados
- **Callbacks**: Eventos de toggle para integração com lógica de negócio

## Quando usar

- Seções de Perguntas Frequentes (FAQ)
- Configurações e preferências
- Apresentação de recursos de produto
- Documentação e ajuda
- Qualquer conteúdo que se beneficie de organização hierárquica

## Melhores práticas

- Use títulos descritivos e concisos
- Mantenha o conteúdo organizado e escaneável
- Considere usar ícones para melhor identificação visual
- Para FAQs, ordene por relevância ou frequência
- Evite aninhar accordions muito profundamente
				`,
			},
		},
	},
	argTypes: {
		items: {
			description: 'Array de itens do accordion. Cada item deve ter id, title, content e opcionalmente icon e disabled.',
			control: { type: 'object' },
			table: {
				type: { summary: 'AccordionItem[]' },
				defaultValue: { summary: '[]' },
			},
		},
		allowMultiple: {
			description: 'Permite que múltiplos itens sejam expandidos simultaneamente. Por padrão, apenas um item pode estar aberto.',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		defaultOpenItems: {
			description: 'Array com os IDs dos itens que devem estar abertos por padrão ao carregar o componente.',
			control: { type: 'object' },
			table: {
				type: { summary: 'string[]' },
				defaultValue: { summary: '[]' },
			},
		},
		variant: {
			description: 'Variante visual do accordion que define o estilo de apresentação.',
			control: { type: 'select' },
			options: ['default', 'bordered', 'filled'],
			table: {
				type: { summary: "'default' | 'bordered' | 'filled'" },
				defaultValue: { summary: "'default'" },
			},
		},
		onItemToggle: {
			description: 'Callback executado quando um item é expandido ou recolhido. Recebe o ID do item e o novo estado (aberto/fechado).',
			action: 'item toggled',
			table: {
				type: { summary: '(itemId: string, isOpen: boolean) => void' },
			},
		},
		testID: {
			description: 'Identificador único para testes automatizados.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		className: {
			description: 'Classe CSS adicional para customização de estilos.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		style: {
			description: 'Objeto com estilos CSS inline para customização avançada.',
			control: { type: 'object' },
			table: {
				type: { summary: 'React.CSSProperties' },
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Dados de exemplo
const basicItems: AccordionItem[] = [
	{
		id: '1',
		title: 'O que é React?',
		content: (
			<div>
				<p>React é uma biblioteca JavaScript para construir interfaces de usuário.</p>
				<p>Desenvolvida pelo Facebook, é amplamente utilizada para criar aplicações web modernas.</p>
			</div>
		),
	},
	{
		id: '2',
		title: 'Como instalar o React?',
		content: (
			<div>
				<p>Você pode instalar o React usando npm ou yarn:</p>
				<code style={{ display: 'block', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
					npm install react react-dom
				</code>
			</div>
		),
	},
	{
		id: '3',
		title: 'Quais são os benefícios?',
		content: (
			<ul>
				<li>Componentes reutilizáveis</li>
				<li>Virtual DOM para performance</li>
				<li>Ecossistema rico</li>
				<li>Comunidade ativa</li>
			</ul>
		),
	},
];

const itemsWithIcons: AccordionItem[] = [
	{
		id: '1',
		title: 'Perfil do Usuário',
		content: (
			<div>
				<p>Gerencie suas informações pessoais e preferências de conta.</p>
				<button style={{ padding: '8px 16px', marginTop: '8px' }}>Editar Perfil</button>
			</div>
		),
		icon: 'User',
	},
	{
		id: '2',
		title: 'Configurações',
		content: (
			<div>
				<p>Ajuste as configurações do sistema e notificações.</p>
				<label style={{ display: 'block', marginTop: '8px' }}>
					<input type="checkbox" style={{ marginRight: '8px' }} />
					Receber notificações por email
				</label>
			</div>
		),
		icon: 'Settings',
	},
	{
		id: '3',
		title: 'Ajuda e Suporte',
		content: (
			<div>
				<p>Encontre respostas para suas dúvidas ou entre em contato conosco.</p>
				<p>Email: suporte@exemplo.com</p>
			</div>
		),
		icon: 'HelpCircle',
	},
	{
		id: '4',
		title: 'Conta Desativada',
		content: <p>Esta seção não está disponível.</p>,
		icon: 'Lock',
		disabled: true,
	},
];

export const Default: Story = {
	args: {
		items: basicItems,
	},
};

export const AllowMultiple: Story = {
	args: {
		items: basicItems,
		allowMultiple: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Permite que múltiplos itens sejam expandidos simultaneamente.',
			},
		},
	},
};

export const DefaultOpen: Story = {
	args: {
		items: basicItems,
		defaultOpenItems: ['1', '3'],
		allowMultiple: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Alguns itens podem estar abertos por padrão.',
			},
		},
	},
};

export const WithIcons: Story = {
	args: {
		items: itemsWithIcons,
	},
	parameters: {
		docs: {
			description: {
				story: 'Accordion com ícones nos itens, incluindo item desabilitado.',
			},
		},
	},
};

export const BorderedVariant: Story = {
	args: {
		items: basicItems,
		variant: 'bordered',
	},
	parameters: {
		docs: {
			description: {
				story: 'Variante com bordas para melhor definição visual.',
			},
		},
	},
};

export const FilledVariant: Story = {
	args: {
		items: basicItems,
		variant: 'filled',
	},
	parameters: {
		docs: {
			description: {
				story: 'Variante com fundo preenchido para destaque.',
			},
		},
	},
};

export const CustomStyling: Story = {
	args: {
		items: basicItems,
		className: 'custom-accordion',
		style: {
			maxWidth: '600px',
			margin: '0 auto',
			boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Accordion com estilos customizados aplicados.',
			},
		},
	},
};

// FAQ Example
const faqItems: AccordionItem[] = [
	{
		id: 'faq1',
		title: 'Como posso cancelar minha assinatura?',
		content: (
			<div>
				<p>Você pode cancelar sua assinatura a qualquer momento através das configurações da conta.</p>
				<p>Acesse: Perfil → Assinatura → Cancelar</p>
			</div>
		),
	},
	{
		id: 'faq2',
		title: 'Posso alterar meu plano?',
		content: (
			<div>
				<p>Sim! Você pode fazer upgrade ou downgrade do seu plano quando quiser.</p>
				<p>As alterações entram em vigor no próximo ciclo de cobrança.</p>
			</div>
		),
	},
	{
		id: 'faq3',
		title: 'Como funciona o período de teste?',
		content: (
			<div>
				<p>Oferecemos 14 dias de teste gratuito para novos usuários.</p>
				<p>Não é necessário cartão de crédito para começar.</p>
			</div>
		),
	},
	{
		id: 'faq4',
		title: 'Há suporte técnico disponível?',
		content: (
			<div>
				<p>Sim, nosso suporte está disponível 24/7 através do chat ou email.</p>
				<p>Tempo médio de resposta: 2 horas</p>
			</div>
		),
	},
];

export const FAQExample: Story = {
	args: {
		items: faqItems,
		variant: 'bordered',
	},
	parameters: {
		docs: {
			description: {
				story: 'Exemplo de uso como seção de Perguntas Frequentes (FAQ).',
			},
		},
	},
};

// Product Features Example
const featureItems: AccordionItem[] = [
	{
		id: 'analytics',
		title: 'Analytics Avançado',
		content: (
			<div>
				<p>Obtenha insights detalhados sobre o desempenho do seu negócio.</p>
				<ul>
					<li>Relatórios em tempo real</li>
					<li>Dashboards customizáveis</li>
					<li>Exportação de dados</li>
					<li>Alertas automáticos</li>
				</ul>
			</div>
		),
		icon: 'BarChart3',
	},
	{
		id: 'security',
		title: 'Segurança Enterprise',
		content: (
			<div>
				<p>Proteja seus dados com nossa infraestrutura de segurança robusta.</p>
				<ul>
					<li>Criptografia end-to-end</li>
					<li>Autenticação de dois fatores</li>
					<li>Backup automático</li>
					<li>Compliance GDPR</li>
				</ul>
			</div>
		),
		icon: 'Shield',
	},
	{
		id: 'integration',
		title: 'Integrações',
		content: (
			<div>
				<p>Conecte-se facilmente com suas ferramentas favoritas.</p>
				<ul>
					<li>API REST completa</li>
					<li>Webhooks</li>
					<li>Zapier</li>
					<li>Slack, Teams, Discord</li>
				</ul>
			</div>
		),
		icon: 'Zap',
	},
];

export const ProductFeatures: Story = {
	args: {
		items: featureItems,
		variant: 'filled',
		allowMultiple: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Exemplo de uso para apresentar recursos de produto.',
			},
		},
	},
};

// Interactive Example
export const InteractiveExample: Story = {
	args: {
		items: basicItems,
		onItemToggle: (itemId: string, isOpen: boolean) => {
			console.log(`Item ${itemId} ${isOpen ? 'aberto' : 'fechado'}`);
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Exemplo interativo com callback de toggle. Verifique o console para ver os eventos.',
			},
		},
	},
};

// Variants Showcase
export const VariantsShowcase: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
			<div>
				<h3 style={{ marginBottom: '16px' }}>Default</h3>
				<Accordion items={basicItems.slice(0, 2)} />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '16px' }}>Bordered</h3>
				<Accordion items={basicItems.slice(0, 2)} variant="bordered" />
			</div>
			
			<div>
				<h3 style={{ marginBottom: '16px' }}>Filled</h3>
				<Accordion items={basicItems.slice(0, 2)} variant="filled" />
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Comparação visual entre as diferentes variantes do accordion.',
			},
		},
	},
};