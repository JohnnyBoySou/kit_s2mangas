import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Icon from './icon';

const meta: Meta<typeof Icon> = {
	title: 'Components/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: { type: 'select' },
			options: [
				'Home', 'User', 'Settings', 'Search', 'Heart', 'Star', 'Bell', 'Mail',
				'Phone', 'Calendar', 'Clock', 'MapPin', 'Camera', 'Image', 'File',
				'Folder', 'Download', 'Upload', 'Edit', 'Trash2', 'Plus', 'Minus',
				'X', 'Check', 'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronDown',
				'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Menu', 'MoreHorizontal',
				'MoreVertical', 'Eye', 'EyeOff', 'Lock', 'Unlock', 'Shield', 'AlertCircle',
				'CheckCircle', 'XCircle', 'Info', 'HelpCircle', 'Zap', 'Wifi', 'Battery',
				'Volume2', 'VolumeX', 'Play', 'Pause', 'Square', 'SkipBack', 'SkipForward'
			],
		},
		size: {
			control: { type: 'number', min: 12, max: 64, step: 2 },
		},
		color: {
			control: { type: 'color' },
		},
		strokeWidth: {
			control: { type: 'number', min: 0.5, max: 4, step: 0.5 },
		},
		onClick: {
			action: 'clicked',
		},
		disabled: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'Home',
	},
};

export const WithClick: Story = {
	args: {
		name: 'Settings',
		onClick: () => alert('Icon clicked!'),
	},
};

export const Disabled: Story = {
	args: {
		name: 'User',
		onClick: () => alert('This should not fire'),
		disabled: true,
	},
};

export const CustomSize: Story = {
	args: {
		name: 'Heart',
		size: 48,
		color: '#ff6b6b',
	},
};

export const CustomColor: Story = {
	args: {
		name: 'Star',
		color: '#ffd43b',
		size: 32,
	},
};

export const CustomStrokeWidth: Story = {
	args: {
		name: 'Search',
		strokeWidth: 3,
		size: 32,
	},
};

export const WithCustomStyle: Story = {
	args: {
		name: 'Bell',
		style: {
			padding: '8px',
			backgroundColor: '#e9ecef',
			borderRadius: '8px',
			border: '2px solid #007AFF',
		},
		onClick: () => alert('Styled icon clicked!'),
	},
};

export const IconSizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Home" size={16} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>16px</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Home" size={24} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>24px</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Home" size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>32px</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Home" size={48} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>48px</p>
			</div>
		</div>
	),
};

export const IconColors: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Heart" color="#ff6b6b" size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>Red</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Star" color="#ffd43b" size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>Yellow</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="CheckCircle" color="#51cf66" size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>Green</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Info" color="#339af0" size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>Blue</p>
			</div>
		</div>
	),
};

export const StrokeWidthVariations: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Search" strokeWidth={1} size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>1px</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Search" strokeWidth={1.5} size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>1.5px</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Search" strokeWidth={2} size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>2px</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Icon name="Search" strokeWidth={3} size={32} />
				<p style={{ fontSize: '12px', margin: '4px 0 0 0', fontFamily: 'Font_Book' }}>3px</p>
			</div>
		</div>
	),
};

export const CommonIcons: Story = {
	render: () => (
		<div style={{ 
			display: 'grid', 
			gridTemplateColumns: 'repeat(8, 1fr)', 
			gap: '16px',
			padding: '16px',
			backgroundColor: '#f8f9fa',
			borderRadius: '8px'
		}}>
			{[
				'Home', 'User', 'Settings', 'Search', 'Heart', 'Star', 'Bell', 'Mail',
				'Phone', 'Calendar', 'Clock', 'MapPin', 'Camera', 'Image', 'File', 'Folder',
				'Download', 'Upload', 'Edit', 'Trash2', 'Plus', 'Minus', 'X', 'Check',
				'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
			].map((iconName) => (
				<div key={iconName} style={{ 
					textAlign: 'center',
					padding: '8px',
					backgroundColor: 'white',
					borderRadius: '6px',
					border: '1px solid #e9ecef'
				}}>
					<Icon name={iconName as any} size={24} />
					<p style={{ 
						fontSize: '10px', 
						margin: '4px 0 0 0', 
						fontFamily: 'Font_Book',
						color: '#666'
					}}>
						{iconName}
					</p>
				</div>
			))}
		</div>
	),
};

export const InteractiveButtons: Story = {
	render: () => {
		const [liked, setLiked] = useState(false);
		const [starred, setStarred] = useState(false);
		const [bookmarked, setBookmarked] = useState(false);

		return (
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<button
					onClick={() => setLiked(!liked)}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						padding: '8px 16px',
						border: '1px solid #e9ecef',
						borderRadius: '6px',
						backgroundColor: liked ? '#ff6b6b' : 'white',
						color: liked ? 'white' : '#333',
						cursor: 'pointer',
						fontFamily: 'Font_Medium',
						fontSize: '14px',
					}}
				>
					<Icon name="Heart" color={liked ? 'white' : '#ff6b6b'} size={16} />
					{liked ? 'Curtido' : 'Curtir'}
				</button>

				<button
					onClick={() => setStarred(!starred)}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						padding: '8px 16px',
						border: '1px solid #e9ecef',
						borderRadius: '6px',
						backgroundColor: starred ? '#ffd43b' : 'white',
						color: starred ? '#333' : '#333',
						cursor: 'pointer',
						fontFamily: 'Font_Medium',
						fontSize: '14px',
					}}
				>
					<Icon name="Star" color={starred ? '#333' : '#ffd43b'} size={16} />
					{starred ? 'Favoritado' : 'Favoritar'}
				</button>

				<button
					onClick={() => setBookmarked(!bookmarked)}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						padding: '8px 16px',
						border: '1px solid #e9ecef',
						borderRadius: '6px',
						backgroundColor: bookmarked ? '#339af0' : 'white',
						color: bookmarked ? 'white' : '#333',
						cursor: 'pointer',
						fontFamily: 'Font_Medium',
						fontSize: '14px',
					}}
				>
					<Icon name="Bookmark" color={bookmarked ? 'white' : '#339af0'} size={16} />
					{bookmarked ? 'Salvo' : 'Salvar'}
				</button>
			</div>
		);
	},
};

export const StatusIcons: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<Icon name="CheckCircle" color="#51cf66" size={24} />
				<span style={{ fontFamily: 'Font_Medium', color: '#51cf66' }}>Sucesso</span>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<Icon name="AlertCircle" color="#ffd43b" size={24} />
				<span style={{ fontFamily: 'Font_Medium', color: '#ffd43b' }}>Aviso</span>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<Icon name="XCircle" color="#ff6b6b" size={24} />
				<span style={{ fontFamily: 'Font_Medium', color: '#ff6b6b' }}>Erro</span>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<Icon name="Info" color="#339af0" size={24} />
				<span style={{ fontFamily: 'Font_Medium', color: '#339af0' }}>Informação</span>
			</div>
		</div>
	),
};

export const NavigationIcons: Story = {
	render: () => (
		<div style={{ 
			display: 'flex', 
			gap: '8px',
			padding: '12px',
			backgroundColor: '#f8f9fa',
			borderRadius: '8px'
		}}>
			<Icon 
				name="ChevronLeft" 
				onClick={() => alert('Voltar')} 
				style={{ 
					padding: '8px',
					backgroundColor: 'white',
					borderRadius: '6px',
					border: '1px solid #e9ecef'
				}}
			/>
			<Icon 
				name="Home" 
				onClick={() => alert('Home')} 
				style={{ 
					padding: '8px',
					backgroundColor: 'white',
					borderRadius: '6px',
					border: '1px solid #e9ecef'
				}}
			/>
			<Icon 
				name="Search" 
				onClick={() => alert('Buscar')} 
				style={{ 
					padding: '8px',
					backgroundColor: 'white',
					borderRadius: '6px',
					border: '1px solid #e9ecef'
				}}
			/>
			<Icon 
				name="User" 
				onClick={() => alert('Perfil')} 
				style={{ 
					padding: '8px',
					backgroundColor: 'white',
					borderRadius: '6px',
					border: '1px solid #e9ecef'
				}}
			/>
			<Icon 
				name="Settings" 
				onClick={() => alert('Configurações')} 
				style={{ 
					padding: '8px',
					backgroundColor: 'white',
					borderRadius: '6px',
					border: '1px solid #e9ecef'
				}}
			/>
		</div>
	),
};