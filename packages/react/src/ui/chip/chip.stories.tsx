import type { Meta, StoryObj } from '@storybook/react'
import Chip from './chip'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Chip para exibir tags, rótulos ou informações categorizadas com opção de remoção.'
      }
    }
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do chip'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Variante visual do chip'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do chip'
    },
    removable: {
      control: 'boolean',
      description: 'Se o chip pode ser removido'
    },
    disabled: {
      control: 'boolean',
      description: 'Se o chip está desabilitado'
    },
    onRemove: {
      action: 'removed',
      description: 'Callback chamado quando o chip é removido'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Chip'
  }
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="success">Success</Chip>
      <Chip variant="warning">Warning</Chip>
      <Chip variant="error">Error</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes variantes visuais do chip.'
      }
    }
  }
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes tamanhos disponíveis para o chip.'
      }
    }
  }
}

export const Removable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Chip removable onRemove={() => alert('Chip removido!')}>
        Removable Default
      </Chip>
      <Chip variant="primary" removable onRemove={() => alert('Chip removido!')}>
        Removable Primary
      </Chip>
      <Chip variant="success" removable onRemove={() => alert('Chip removido!')}>
        Removable Success
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips que podem ser removidos pelo usuário.'
      }
    }
  }
}

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Chip disabled>Disabled Default</Chip>
      <Chip variant="primary" disabled>Disabled Primary</Chip>
      <Chip variant="success" disabled removable>Disabled Removable</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips no estado desabilitado.'
      }
    }
  }
}

export const Interactive: Story = {
  render: () => {
    const tags = ['React', 'TypeScript', 'CSS', 'Storybook', 'Vite']
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>Tags do Projeto</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {tags.map((tag, index) => (
            <Chip 
              key={tag}
              variant={index % 2 === 0 ? 'primary' : 'secondary'}
              removable
              onRemove={() => alert(`Tag "${tag}" removida!`)}
            >
              {tag}
            </Chip>
          ))}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo interativo mostrando chips sendo usados como tags de projeto.'
      }
    }
  }
}

export const LongContent: Story = {
  args: {
    children: 'Este é um chip com conteúdo muito longo para testar o comportamento',
    removable: true,
    style: { maxWidth: '200px' }
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip com conteúdo longo para testar o comportamento de quebra de texto.'
      }
    }
  }
}