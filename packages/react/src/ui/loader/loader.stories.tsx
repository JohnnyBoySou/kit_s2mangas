import Loader from './loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do loader',
    },
    color: {
      control: { type: 'color' },
      description: 'Cor do loader',
    },
  },
};

// Story básica
export const Default = {
  args: {
    size: 'md',
    color: '#007AFF',
  },
};

// Loader pequeno
export const Small = {
  args: {
    size: 'sm',
    color: '#007AFF',
  },
};

// Loader médio
export const Medium = {
  args: {
    size: 'md',
    color: '#007AFF',
  },
};

// Loader grande
export const Large = {
  args: {
    size: 'lg',
    color: '#007AFF',
  },
};

// Loader colorido
export const Colored = {
  args: {
    size: 'md',
    color: '#FF6B6B',
  },
};

// Loader com cor personalizada
export const CustomColor = {
  args: {
    size: 'md',
    color: '#28a745',
  },
};

// Comparação de tamanhos
export const SizeComparison = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Loader size="sm" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Pequeno (16px)
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="md" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Médio (24px)
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="lg" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Grande (32px)
        </p>
      </div>
    </div>
  ),
};

// Comparação de cores
export const ColorComparison = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Loader color="#007AFF" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Azul
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader color="#FF6B6B" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Vermelho
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader color="#28a745" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Verde
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader color="#6f42c1" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Roxo
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader color="#fd7e14" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Laranja
        </p>
      </div>
    </div>
  ),
};

// Loader com texto
export const WithText = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <Loader size="md" />
      <p style={{ 
        margin: '0', 
        fontFamily: 'Font_Book', 
        fontSize: '14px',
        color: '#666'
      }}>
        Carregando...
      </p>
    </div>
  ),
};

// Loader em botão
export const InButton = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <button style={{
        backgroundColor: '#007AFF',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        fontFamily: 'Font_Medium',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <Loader size="sm" color="white" />
        Carregando
      </button>
      
      <button style={{
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        fontFamily: 'Font_Medium',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <Loader size="sm" color="white" />
        Processando
      </button>
    </div>
  ),
};

// Loader em card
export const InCard = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      minWidth: '300px'
    }}>
      <Loader size="lg" />
      <h3 style={{ 
        margin: '0', 
        fontFamily: 'Font_Bold', 
        fontSize: '16px' 
      }}>
        Carregando Dados
      </h3>
      <p style={{ 
        margin: '0', 
        fontFamily: 'Font_Book', 
        fontSize: '14px',
        color: '#666',
        textAlign: 'center'
      }}>
        Aguarde enquanto processamos suas informações...
      </p>
    </div>
  ),
};

// Loader em overlay
export const InOverlay = {
  render: () => (
    <div style={{ 
      position: 'relative',
      width: '400px',
      height: '200px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ 
          margin: '0 0 16px 0', 
          fontFamily: 'Font_Book', 
          fontSize: '14px',
          color: '#666'
        }}>
          Conteúdo da página
        </p>
        <p style={{ 
          margin: '0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#999'
        }}>
          (Simulando conteúdo carregado)
        </p>
      </div>
      
      {/* Overlay de loading */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <Loader size="md" />
          <p style={{ 
            margin: '12px 0 0 0', 
            fontFamily: 'Font_Book', 
            fontSize: '14px',
            color: '#666'
          }}>
            Carregando...
          </p>
        </div>
      </div>
    </div>
  ),
};

// Loader em lista
export const InList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '300px' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        padding: '12px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0 0 4px 0', fontFamily: 'Font_Bold', fontSize: '14px' }}>
            Item 1
          </p>
          <p style={{ margin: '0', fontFamily: 'Font_Book', fontSize: '12px', color: '#666' }}>
            Descrição do item
          </p>
        </div>
        <Loader size="sm" />
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        padding: '12px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0 0 4px 0', fontFamily: 'Font_Bold', fontSize: '14px' }}>
            Item 2
          </p>
          <p style={{ margin: '0', fontFamily: 'Font_Book', fontSize: '12px', color: '#666' }}>
            Descrição do item
          </p>
        </div>
        <Loader size="sm" color="#28a745" />
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        padding: '12px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px' }} />
        <div style={{ flex: 1 }}>
          <p style={{ margin: '0 0 4px 0', fontFamily: 'Font_Bold', fontSize: '14px' }}>
            Item 3
          </p>
          <p style={{ margin: '0', fontFamily: 'Font_Book', fontSize: '12px', color: '#666' }}>
            Descrição do item
          </p>
        </div>
        <Loader size="sm" color="#FF6B6B" />
      </div>
    </div>
  ),
};

// Loader com diferentes estados
export const LoadingStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '400px' }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px',
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <Loader size="sm" />
        <div>
          <p style={{ margin: '0 0 4px 0', fontFamily: 'Font_Bold', fontSize: '14px' }}>
            Carregando dados...
          </p>
          <p style={{ margin: '0', fontFamily: 'Font_Book', fontSize: '12px', color: '#666' }}>
            Aguarde um momento
          </p>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px',
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <Loader size="sm" color="#28a745" />
        <div>
          <p style={{ margin: '0 0 4px 0', fontFamily: 'Font_Bold', fontSize: '14px' }}>
            Processando...
          </p>
          <p style={{ margin: '0', fontFamily: 'Font_Book', fontSize: '12px', color: '#666' }}>
            Salvando alterações
          </p>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px',
        padding: '16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        backgroundColor: 'white'
      }}>
        <Loader size="sm" color="#FF6B6B" />
        <div>
          <p style={{ margin: '0 0 4px 0', fontFamily: 'Font_Bold', fontSize: '14px' }}>
            Sincronizando...
          </p>
          <p style={{ margin: '0', fontFamily: 'Font_Book', fontSize: '12px', color: '#666' }}>
            Conectando ao servidor
          </p>
        </div>
      </div>
    </div>
  ),
};

// Loader em grid
export const InGrid = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '16px',
      maxWidth: '500px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Loader size="sm" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Pequeno
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="md" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Médio
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="lg" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Grande
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="md" color="#28a745" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Verde
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="md" color="#FF6B6B" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Vermelho
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Loader size="md" color="#6f42c1" />
        <p style={{ 
          margin: '8px 0 0 0', 
          fontFamily: 'Font_Book', 
          fontSize: '12px',
          color: '#666'
        }}>
          Roxo
        </p>
      </div>
    </div>
  ),
};
