import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'xl'],
		},
		src: {
			control: { type: 'text' },
		},
		name: {
			control: { type: 'text' },
		},
		alt: {
			control: { type: 'text' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'João Silva',
	},
};

export const WithImage: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
		name: 'João Silva',
		alt: 'Foto do João Silva',
	},
};

export const Small: Story = {
	args: {
		name: 'João Silva',
		size: 'sm',
	},
};

export const Large: Story = {
	args: {
		name: 'João Silva',
		size: 'lg',
	},
};

export const ExtraLarge: Story = {
	args: {
		name: 'João Silva',
		size: 'xl',
	},
};

export const SingleName: Story = {
	args: {
		name: 'João',
	},
};

export const NoName: Story = {
	args: {},
};

export const WithCustomStyle: Story = {
	args: {
		name: 'João Silva',
		style: {
			border: '3px solid #ff6b6b',
			boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
		},
	},
};

export const MultipleAvatars: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
			<Avatar name="João Silva" size="sm" />
			<Avatar name="Maria Santos" size="md" />
			<Avatar name="Pedro Costa" size="lg" />
			<Avatar name="Ana Oliveira" size="xl" />
		</div>
	),
};

export const WithImageError: Story = {
	args: {
		src: 'https://invalid-url-that-will-fail.com/image.jpg',
		name: 'João Silva',
	},
};

export const Interactive: Story = {
	args: {
		name: 'João Silva',
		onError: () => console.log('Image failed to load'),
		onLoad: () => console.log('Image loaded successfully'),
	},
};
