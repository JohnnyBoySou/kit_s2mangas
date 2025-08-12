import type { Meta, StoryObj } from '@storybook/react';
import Image from './image';

const meta: Meta<typeof Image> = {
	title: 'Components/Image',
	component: Image,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		objectFit: {
			control: { type: 'select' },
			options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
		},
		width: {
			control: { type: 'text' },
		},
		height: {
			control: { type: 'text' },
		},
		borderRadius: {
			control: { type: 'text' },
		},
		lazy: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
		alt: 'Paisagem de montanha',
		width: 400,
		height: 300,
	},
};

export const Square: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
		alt: 'Imagem quadrada',
		width: 300,
		height: 300,
	},
};

export const Rounded: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
		alt: 'Imagem com bordas arredondadas',
		width: 300,
		height: 300,
		borderRadius: 16,
	},
};

export const Circular: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop',
		alt: 'Imagem circular',
		width: 200,
		height: 200,
		borderRadius: '50%',
	},
};

export const ObjectFitCover: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
		alt: 'Object-fit cover',
		width: 400,
		height: 200,
		objectFit: 'cover',
	},
};

export const ObjectFitContain: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
		alt: 'Object-fit contain',
		width: 400,
		height: 200,
		objectFit: 'contain',
	},
};

export const ObjectFitFill: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
		alt: 'Object-fit fill',
		width: 400,
		height: 200,
		objectFit: 'fill',
	},
};

export const LazyLoading: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
		alt: 'Imagem com lazy loading',
		width: 400,
		height: 300,
		lazy: true,
	},
};

export const WithFallback: Story = {
	args: {
		src: 'https://invalid-url-that-will-fail.com/image.jpg',
		alt: 'Imagem com fallback',
		width: 300,
		height: 200,
		fallback: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
	},
};

export const Clickable: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
		alt: 'Imagem clicável',
		width: 300,
		height: 200,
		onClick: () => alert('Imagem clicada!'),
	},
};

export const WithCustomStyle: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
		alt: 'Imagem com estilo customizado',
		width: 300,
		height: 200,
		style: {
			border: '3px solid #ff6b6b',
			boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
		},
	},
};

export const Responsive: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
		alt: 'Imagem responsiva',
		width: '100%',
		height: 'auto',
		style: {
			maxWidth: '400px',
		},
	},
};

export const MultipleImages: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
			<Image
				src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop"
				alt="Imagem 1"
				width={150}
				height={150}
				borderRadius={8}
			/>
			<Image
				src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop"
				alt="Imagem 2"
				width={150}
				height={150}
				borderRadius="50%"
			/>
			<Image
				src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop"
				alt="Imagem 3"
				width={150}
				height={150}
				style={{ border: '2px solid #ff6b6b' }}
			/>
		</div>
	),
};

export const Interactive: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
		alt: 'Imagem interativa',
		width: 300,
		height: 200,
		onError: () => console.log('Image failed to load'),
		onLoad: () => console.log('Image loaded successfully'),
		onClick: () => console.log('Image clicked'),
	},
};
