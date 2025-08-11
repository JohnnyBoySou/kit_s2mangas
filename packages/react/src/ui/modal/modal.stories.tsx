import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from './modal';
import Button from '../button/button';

const meta: Meta<typeof Modal> = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
O componente **Modal** oferece uma interface de sobreposição versátil para exibir conteúdo em uma camada superior à interface principal.

## Características principais:

- **Controle de visibilidade**: Abertura e fechamento programático
- **Múltiplos tamanhos**: Small (400px), medium (600px), large (800px) e fullscreen
- **Fechamento flexível**: Via botão X, clique no overlay ou tecla Escape
- **Bloqueio de scroll**: Previne rolagem da página de fundo automaticamente
- **Acessibilidade**: Suporte a navegação por teclado e screen readers
- **Customização**: Estilos e classes CSS personalizáveis

## Casos de uso:

- Formulários de cadastro/edição
- Confirmações de ação
- Exibição de detalhes
- Galerias de imagens
- Avisos e notificações importantes
- Conteúdo auxiliar que não requer nova página

## Boas práticas:

- Use tamanhos apropriados para o conteúdo (small para confirmações, large para formulários)
- Mantenha \`closeOnOverlayClick\` ativo para melhor UX
- Forneça sempre uma forma de fechar o modal
- Use títulos descritivos quando apropriado
- Evite modais aninhados (modal dentro de modal)
				`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		isOpen: {
			description: 'Controla se o modal está visível ou oculto',
			control: { type: 'boolean' },
			type: { name: 'boolean', required: true },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		onClose: {
			description: 'Função chamada quando o modal deve ser fechado',
			action: 'closed',
			type: { name: 'function', required: true },
			table: {
				type: { summary: '() => void' },
			},
		},
		title: {
			description: 'Título exibido no cabeçalho do modal',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		children: {
			description: 'Conteúdo principal do modal',
			type: { name: 'other', value: 'React.ReactNode', required: true },
			table: {
				type: { summary: 'React.ReactNode' },
			},
		},
		size: {
			description: 'Tamanho do modal',
			control: { type: 'select' },
			options: ['small', 'medium', 'large', 'fullscreen'],
			table: {
				type: { summary: "'small' | 'medium' | 'large' | 'fullscreen'" },
				defaultValue: { summary: "'medium'" },
			},
		},
		showCloseButton: {
			description: 'Exibe o botão X no cabeçalho para fechar o modal',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		closeOnOverlayClick: {
			description: 'Permite fechar o modal clicando na área escura ao redor',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		closeOnEscape: {
			description: 'Permite fechar o modal pressionando a tecla Escape',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		testID: {
			description: 'Identificador para testes automatizados',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		className: {
			description: 'Classes CSS adicionais para o overlay do modal',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		style: {
			description: 'Estilos CSS inline para o overlay do modal',
			control: { type: 'object' },
			table: {
				type: { summary: 'React.CSSProperties' },
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Modal Padrão"
				>
					<p>Este é o conteúdo do modal padrão.</p>
					<p>Você pode fechar clicando no X, pressionando Escape ou clicando fora do modal.</p>
				</Modal>
			</div>
		);
	},
};

export const WithoutTitle: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Sem Título</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
				>
					<h3 style={{ marginTop: 0, fontFamily: 'Font_Medium' }}>Conteúdo Personalizado</h3>
					<p>Este modal não tem título na barra superior.</p>
				</Modal>
			</div>
		);
	},
};

export const SmallSize: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Pequeno</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Modal Pequeno"
					size="small"
				>
					<p>Este é um modal pequeno (400px de largura).</p>
				</Modal>
			</div>
		);
	},
};

export const LargeSize: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Grande</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Modal Grande"
					size="large"
				>
					<p>Este é um modal grande (800px de largura).</p>
					<p>Perfeito para formulários extensos ou conteúdo detalhado.</p>
				</Modal>
			</div>
		);
	},
};

export const Fullscreen: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Tela Cheia</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Modal Tela Cheia"
					size="fullscreen"
				>
					<div style={{ height: '200vh', background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}>
						<h3 style={{ fontFamily: 'Font_Medium' }}>Conteúdo Extenso</h3>
						<p>Este modal ocupa toda a tela e tem conteúdo rolável.</p>
						<p>Role para baixo para ver mais conteúdo...</p>
						{Array.from({ length: 50 }, (_, i) => (
							<p key={i}>Linha de conteúdo {i + 1}</p>
						))}
					</div>
				</Modal>
			</div>
		);
	},
};

export const NoCloseButton: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Sem Botão Fechar</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Sem Botão de Fechar"
					showCloseButton={false}
				>
					<p>Este modal não tem botão de fechar no cabeçalho.</p>
					<p>Você ainda pode fechar pressionando Escape ou clicando fora.</p>
					<div style={{ marginTop: '20px' }}>
						<Button onClick={() => setIsOpen(false)}>Fechar Modal</Button>
					</div>
				</Modal>
			</div>
		);
	},
};

export const NoOverlayClose: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Sem Fechar no Overlay</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Não Fecha no Overlay"
					closeOnOverlayClick={false}
				>
					<p>Este modal não fecha quando você clica fora dele.</p>
					<p>Use o botão X ou pressione Escape para fechar.</p>
				</Modal>
			</div>
		);
	},
};

export const NoEscapeClose: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Modal Sem Escape</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Não Fecha com Escape"
					closeOnEscape={false}
				>
					<p>Este modal não fecha quando você pressiona Escape.</p>
					<p>Use o botão X ou clique fora para fechar.</p>
				</Modal>
			</div>
		);
	},
};

export const FormModal: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);
		const [formData, setFormData] = useState({ name: '', email: '', message: '' });

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			alert(`Dados enviados: ${JSON.stringify(formData, null, 2)}`);
			setIsOpen(false);
			setFormData({ name: '', email: '', message: '' });
		};

		return (
			<div>
				<Button onClick={() => setIsOpen(true)}>Abrir Formulário</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Formulário de Contato"
					size="medium"
				>
					<form onSubmit={handleSubmit}>
						<div style={{ marginBottom: '16px' }}>
							<label style={{ display: 'block', marginBottom: '4px', fontFamily: 'Font_Medium' }}>
								Nome:
							</label>
							<input
								type="text"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								style={{
									width: '100%',
									padding: '8px',
									border: '1px solid #ccc',
									borderRadius: '4px',
									fontSize: '14px',
								}}
								required
							/>
						</div>
						<div style={{ marginBottom: '16px' }}>
							<label style={{ display: 'block', marginBottom: '4px', fontFamily: 'Font_Medium' }}>
								Email:
							</label>
							<input
								type="email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								style={{
									width: '100%',
									padding: '8px',
									border: '1px solid #ccc',
									borderRadius: '4px',
									fontSize: '14px',
								}}
								required
							/>
						</div>
						<div style={{ marginBottom: '20px' }}>
							<label style={{ display: 'block', marginBottom: '4px', fontFamily: 'Font_Medium' }}>
								Mensagem:
							</label>
							<textarea
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								rows={4}
								style={{
									width: '100%',
									padding: '8px',
									border: '1px solid #ccc',
									borderRadius: '4px',
									fontSize: '14px',
									resize: 'vertical',
								}}
								required
							/>
						</div>
						<div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
							<Button 
								onClick={() => setIsOpen(false)}
								style={{ backgroundColor: '#6c757d' }}
							>
								Cancelar
							</Button>
							<button 
								type="submit"
								style={{
									padding: '8px 16px',
									backgroundColor: '#007AFF',
									color: 'white',
									border: 'none',
									borderRadius: '4px',
									cursor: 'pointer',
									fontFamily: 'Font_Medium',
								}}
							>
								Enviar
							</button>
						</div>
					</form>
				</Modal>
			</div>
		);
	},
};

export const ConfirmationModal: Story = {
	render: () => {
		const [isOpen, setIsOpen] = useState(false);

		const handleConfirm = () => {
			alert('Ação confirmada!');
			setIsOpen(false);
		};

		return (
			<div>
				<Button onClick={() => setIsOpen(true)} style={{ backgroundColor: '#dc3545' }}>
					Deletar Item
				</Button>
				<Modal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Confirmar Exclusão"
					size="small"
				>
					<p>Tem certeza que deseja deletar este item?</p>
					<p style={{ color: '#dc3545', fontSize: '14px' }}>
						Esta ação não pode ser desfeita.
					</p>
					<div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
						<Button 
							onClick={() => setIsOpen(false)}
							style={{ backgroundColor: '#6c757d' }}
						>
							Cancelar
						</Button>
						<Button 
							onClick={handleConfirm}
							style={{ backgroundColor: '#dc3545' }}
						>
							Deletar
						</Button>
					</div>
				</Modal>
			</div>
		);
	},
};