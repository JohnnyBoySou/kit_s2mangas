import type { Meta, StoryObj } from '@storybook/react';
import Select from './select';

const meta: Meta<typeof Select> = {
	title: 'Components/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		disabled: {
			control: { type: 'boolean' },
		},
		error: {
			control: { type: 'boolean' },
		},
		required: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
	{ value: 'option1', label: 'Opção 1' },
	{ value: 'option2', label: 'Opção 2' },
	{ value: 'option3', label: 'Opção 3' },
	{ value: 'option4', label: 'Opção 4', disabled: true },
	{ value: 'option5', label: 'Opção 5' },
];

export const Default: Story = {
	args: {
		options: defaultOptions,
	},
};

export const WithLabel: Story = {
	args: {
		options: defaultOptions,
		label: 'Escolha uma opção',
	},
};

export const Required: Story = {
	args: {
		options: defaultOptions,
		label: 'Escolha uma opção',
		required: true,
	},
};

export const WithPlaceholder: Story = {
	args: {
		options: defaultOptions,
		placeholder: 'Selecione uma opção do menu',
	},
};

export const WithSelectedValue: Story = {
	args: {
		options: defaultOptions,
		value: 'option2',
		label: 'Opção selecionada',
	},
};

export const Disabled: Story = {
	args: {
		options: defaultOptions,
		disabled: true,
		label: 'Select desabilitado',
	},
};

export const WithError: Story = {
	args: {
		options: defaultOptions,
		error: true,
		label: 'Select com erro',
	},
};

export const LongOptions: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Esta é uma opção muito longa que pode quebrar o layout' },
			{ value: 'option2', label: 'Outra opção com texto extenso para testar o comportamento' },
			{ value: 'option3', label: 'Opção normal' },
			{ value: 'option4', label: 'Mais uma opção com texto longo para verificar o comportamento' },
		],
		label: 'Opções com texto longo',
	},
};

export const ManyOptions: Story = {
	args: {
		options: Array.from({ length: 20 }, (_, i) => ({
			value: `option${i + 1}`,
			label: `Opção ${i + 1}`,
		})),
		label: 'Muitas opções',
	},
};

export const WithDisabledOptions: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Opção 1' },
			{ value: 'option2', label: 'Opção 2', disabled: true },
			{ value: 'option3', label: 'Opção 3' },
			{ value: 'option4', label: 'Opção 4', disabled: true },
			{ value: 'option5', label: 'Opção 5' },
		],
		label: 'Opções com itens desabilitados',
	},
};

export const Interactive: Story = {
	args: {
		options: defaultOptions,
		label: 'Select interativo',
		onChange: (value) => console.log('Selected:', value),
	},
};
