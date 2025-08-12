import Badge from './badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Variante visual do badge',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do badge',
    },
    children: {
      control: { type: 'text' },
      description: 'Conteúdo do badge',
    },
    className: {
      control: { type: 'text' },
      description: 'Classe CSS adicional',
    },
  },
};

// Story básica
export const Default = {
  args: {
    children: 'Badge',
    variant: 'default',
    size: 'md',
  },
};

// Variantes
export const Primary = {
  args: {
    children: 'Primary',
    variant: 'default',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Outline = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

// Tamanhos
export const Small = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Medium = {
  args: {
    children: 'Medium',
    size: 'md',
  },
};

export const Large = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

// Exemplos práticos
export const Notification = {
  args: {
    children: '3',
    variant: 'destructive',
    size: 'sm',
  },
};

export const Status = {
  args: {
    children: 'Ativo',
    variant: 'default',
    size: 'md',
  },
};

export const Tag = {
  args: {
    children: 'React',
    variant: 'outline',
    size: 'sm',
  },
};

export const Category = {
  args: {
    children: 'Tecnologia',
    variant: 'secondary',
    size: 'md',
  },
};

// Comparação de variantes
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

// Comparação de tamanhos
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

// Exemplos de uso real
export const UsageExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'Font_Bold' }}>Notificações</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span>Mensagens</span>
          <Badge variant="destructive" size="sm">5</Badge>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'Font_Bold' }}>Status</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Badge variant="default">Online</Badge>
          <Badge variant="secondary">Away</Badge>
          <Badge variant="destructive">Offline</Badge>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'Font_Bold' }}>Tags</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge variant="outline" size="sm">React</Badge>
          <Badge variant="outline" size="sm">TypeScript</Badge>
          <Badge variant="outline" size="sm">UI/UX</Badge>
          <Badge variant="outline" size="sm">Design System</Badge>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontFamily: 'Font_Bold' }}>Categorias</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Badge variant="secondary">Tecnologia</Badge>
          <Badge variant="secondary">Design</Badge>
          <Badge variant="secondary">Desenvolvimento</Badge>
        </div>
      </div>
    </div>
  ),
};

// Badge com ícones
export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">
        <span style={{ marginRight: '4px' }}>🚀</span>
        Novo
      </Badge>
      <Badge variant="destructive">
        <span style={{ marginRight: '4px' }}>⚠️</span>
        Erro
      </Badge>
      <Badge variant="outline">
        <span style={{ marginRight: '4px' }}>✅</span>
        Concluído
      </Badge>
      <Badge variant="secondary">
        <span style={{ marginRight: '4px' }}>📱</span>
        Mobile
      </Badge>
    </div>
  ),
};

// Badge com números
export const WithNumbers = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="destructive" size="sm">1</Badge>
      <Badge variant="destructive" size="sm">5</Badge>
      <Badge variant="destructive" size="sm">99+</Badge>
      <Badge variant="default" size="sm">1000</Badge>
    </div>
  ),
};

// Badge com texto longo
export const LongText = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default">Texto curto</Badge>
      <Badge variant="secondary">Texto um pouco mais longo</Badge>
      <Badge variant="outline">Texto muito longo que pode quebrar em múltiplas linhas</Badge>
    </div>
  ),
};
