import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './skeleton';

const meta: Meta<typeof Skeleton> = {
	title: 'Components/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['rectangular', 'circular', 'text'],
		},
		lines: {
			control: { type: 'number', min: 1, max: 10 },
		},
		spacing: {
			control: { type: 'number', min: 0, max: 32 },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const Rectangular: Story = {
	args: {
		variant: 'rectangular',
		width: 300,
		height: 100,
	},
};

export const Circular: Story = {
	args: {
		variant: 'circular',
		width: 60,
		height: 60,
	},
};

export const Text: Story = {
	args: {
		variant: 'text',
		width: 300,
		height: 16,
	},
};

export const MultipleTextLines: Story = {
	args: {
		variant: 'text',
		lines: 3,
		width: 300,
	},
};

export const CustomSpacing: Story = {
	args: {
		variant: 'text',
		lines: 4,
		spacing: 16,
		width: 300,
	},
};

export const CustomDimensions: Story = {
	args: {
		width: 200,
		height: 80,
		borderRadius: 12,
	},
};

export const PercentageDimensions: Story = {
	args: {
		width: '50%',
		height: '25%',
	},
};

export const CustomStyle: Story = {
	args: {
		width: 250,
		height: 120,
		style: {
			border: '2px solid #ff6b6b',
			boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
		},
	},
};

export const MultipleSkeletons: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
			<Skeleton variant="circular" width={40} height={40} />
			<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
				<Skeleton variant="text" width="100%" height={16} />
				<Skeleton variant="text" width="60%" height={14} />
			</div>
		</div>
	),
};

export const CardSkeleton: Story = {
	render: () => (
		<div style={{ 
			width: '300px', 
			padding: '16px', 
			border: '1px solid #e0e0e0', 
			borderRadius: '8px',
			display: 'flex',
			flexDirection: 'column',
			gap: '12px'
		}}>
			<Skeleton variant="text" width="80%" height={20} />
			<Skeleton variant="text" width="100%" height={16} />
			<Skeleton variant="text" width="90%" height={16} />
			<Skeleton variant="text" width="70%" height={16} />
			<Skeleton width="100%" height={120} borderRadius={8} />
		</div>
	),
};

export const AvatarSkeleton: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
			<Skeleton variant="circular" width={48} height={48} />
			<div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
				<Skeleton variant="text" width={120} height={16} />
				<Skeleton variant="text" width={80} height={14} />
			</div>
		</div>
	),
};

export const TableSkeleton: Story = {
	render: () => (
		<div style={{ width: '600px' }}>
			{Array.from({ length: 5 }).map((_, index) => (
				<div key={index} style={{ 
					display: 'flex', 
					gap: '12px', 
					marginBottom: '8px',
					alignItems: 'center'
				}}>
					<Skeleton variant="text" width="20%" height={16} />
					<Skeleton variant="text" width="40%" height={16} />
					<Skeleton variant="text" width="25%" height={16} />
					<Skeleton variant="text" width="15%" height={16} />
				</div>
			))}
		</div>
	),
};
