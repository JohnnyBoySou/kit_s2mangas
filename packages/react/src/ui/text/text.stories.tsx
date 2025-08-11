import { Title, HeadTitle, Label, SubLabel, Description, U } from './text';

export default {
  title: 'Components/Text',
  parameters: {
    layout: 'centered',
  },
};

// Title
export const TitleComponent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <Title>Este é um Título Principal</Title>
      <Title style={{ color: '#007AFF' }}>Título com Cor Personalizada</Title>
      <Title style={{ textAlign: 'center' }}>Título Centralizado</Title>
    </div>
  ),
};

// HeadTitle
export const HeadTitleComponent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <HeadTitle>Este é um Título de Cabeçalho</HeadTitle>
      <HeadTitle style={{ color: '#28a745' }}>HeadTitle com Cor Verde</HeadTitle>
      <HeadTitle style={{ textAlign: 'right' }}>HeadTitle Alinhado à Direita</HeadTitle>
    </div>
  ),
};

// Label
export const LabelComponent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <Label>Este é um Label</Label>
      <Label style={{ color: '#FF6B6B' }}>Label com Cor Vermelha</Label>
      <Label style={{ fontWeight: 'bold' }}>Label em Negrito</Label>
    </div>
  ),
};

// SubLabel
export const SubLabelComponent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <SubLabel>Este é um SubLabel</SubLabel>
      <SubLabel style={{ color: '#6f42c1' }}>SubLabel com Cor Roxa</SubLabel>
      <SubLabel style={{ fontStyle: 'italic' }}>SubLabel em Itálico</SubLabel>
    </div>
  ),
};

// Description
export const DescriptionComponent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <Description>
        Este é um texto descritivo que pode conter múltiplas linhas e informações detalhadas sobre algo.
      </Description>
      <Description style={{ color: '#fd7e14' }}>
        Descrição com cor laranja personalizada.
      </Description>
      <Description style={{ textAlign: 'justify' }}>
        Este é um texto justificado que se distribui uniformemente entre as margens, criando um layout mais limpo e profissional.
      </Description>
    </div>
  ),
};

// Underlined Text
export const UnderlinedComponent = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <U>Texto Sublinhado</U>
      <U style={{ color: '#007AFF' }}>Texto Sublinhado Azul</U>
      <U style={{ fontWeight: 'bold' }}>Texto Sublinhado em Negrito</U>
    </div>
  ),
};

// Comparação de todos os tipos
export const AllTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', minWidth: '500px' }}>
      <div>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontFamily: 'Font_Bold', 
          fontSize: '16px',
          color: '#666'
        }}>
          Hierarquia de Textos
        </h3>
        
        <Title>Title - Título Principal</Title>
        <HeadTitle>HeadTitle - Título de Cabeçalho</HeadTitle>
        <Label>Label - Rótulo</Label>
        <SubLabel>SubLabel - Sub-rotulo</SubLabel>
        <Description>
          Description - Texto descritivo que pode conter múltiplas linhas e informações detalhadas.
        </Description>
        <U>U - Texto Sublinhado</U>
      </div>
    </div>
  ),
};

// Exemplo de uso em card
export const InCard = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px',
      backgroundColor: 'white',
      minWidth: '400px'
    }}>
      <Title style={{ marginBottom: '12px' }}>
        Produto Premium
      </Title>
      
      <HeadTitle style={{ marginBottom: '8px', color: '#007AFF' }}>
        R$ 99,90
      </HeadTitle>
      
      <Label style={{ marginBottom: '16px' }}>
        Categoria: Tecnologia
      </Label>
      
      <Description style={{ marginBottom: '16px' }}>
        Este é um produto de alta qualidade com recursos avançados e design moderno. 
        Ideal para usuários que buscam performance e estilo.
      </Description>
      
      <SubLabel style={{ marginBottom: '8px' }}>
        Disponível em estoque
      </SubLabel>
      
      <U style={{ cursor: 'pointer', color: '#007AFF' }}>
        Ver detalhes completos
      </U>
    </div>
  ),
};

// Exemplo de uso em formulário
export const InForm = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
      <Title style={{ marginBottom: '8px' }}>
        Formulário de Cadastro
      </Title>
      
      <Description style={{ marginBottom: '24px' }}>
        Preencha os campos abaixo para criar sua conta.
      </Description>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Label>Nome Completo</Label>
        <input 
          type="text" 
          placeholder="Digite seu nome"
          style={{
            padding: '12px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontFamily: 'Font_Book',
            fontSize: '14px'
          }}
        />
        
        <Label>Email</Label>
        <input 
          type="email" 
          placeholder="exemplo@email.com"
          style={{
            padding: '12px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            fontFamily: 'Font_Book',
            fontSize: '14px'
          }}
        />
        
        <SubLabel>
          Seus dados estão seguros conosco
        </SubLabel>
      </div>
      
      <U style={{ cursor: 'pointer', color: '#007AFF', textAlign: 'center' }}>
        Já tem uma conta? Faça login
      </U>
    </div>
  ),
};

// Exemplo de uso em lista
export const InList = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
      <HeadTitle style={{ marginBottom: '16px' }}>
        Lista de Tarefas
      </HeadTitle>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          padding: '12px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#28a745', borderRadius: '50%' }} />
          <div style={{ flex: 1 }}>
            <Label>Completar documentação</Label>
            <SubLabel>Prazo: Hoje às 18h</SubLabel>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          padding: '12px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#FF6B6B', borderRadius: '50%' }} />
          <div style={{ flex: 1 }}>
            <Label>Revisar código</Label>
            <SubLabel>Prazo: Amanhã às 10h</SubLabel>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          padding: '12px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ width: '20px', height: '20px', backgroundColor: '#007AFF', borderRadius: '50%' }} />
          <div style={{ flex: 1 }}>
            <Label>Testar funcionalidades</Label>
            <SubLabel>Prazo: Sexta-feira</SubLabel>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Exemplo de uso em notificação
export const InNotification = {
  render: () => (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #FFF3CD', 
      borderRadius: '12px',
      backgroundColor: '#FFF3CD',
      minWidth: '400px'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ fontSize: '24px' }}>🔔</div>
        <div style={{ flex: 1 }}>
          <HeadTitle style={{ marginBottom: '8px', color: '#856404' }}>
            Nova Notificação
          </HeadTitle>
          
          <Description style={{ marginBottom: '12px', color: '#856404' }}>
            Você tem uma nova mensagem importante para visualizar. 
            Clique no link abaixo para acessar.
          </Description>
          
          <U style={{ cursor: 'pointer', color: '#856404' }}>
            Ver mensagem
          </U>
        </div>
      </div>
    </div>
  ),
};

// Exemplo de uso em perfil
export const InProfile = {
  render: () => (
    <div style={{ 
      padding: '24px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '12px',
      backgroundColor: 'white',
      minWidth: '400px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          backgroundColor: '#007AFF', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontFamily: 'Font_Bold'
        }}>
          JD
        </div>
        <div>
          <Title style={{ marginBottom: '4px' }}>
            João Silva
          </Title>
          <SubLabel>
            Desenvolvedor Full Stack
          </SubLabel>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <Label>Email</Label>
          <Description>joao.silva@email.com</Description>
        </div>
        
        <div>
          <Label>Localização</Label>
          <Description>São Paulo, SP</Description>
        </div>
        
        <div>
          <Label>Bio</Label>
          <Description>
            Desenvolvedor apaixonado por criar soluções inovadoras e experiências de usuário excepcionais.
          </Description>
        </div>
      </div>
      
      <U style={{ cursor: 'pointer', color: '#007AFF', textAlign: 'center', marginTop: '16px' }}>
        Editar perfil
      </U>
    </div>
  ),
};

// Comparação de tamanhos
export const SizeComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '500px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '100px', textAlign: 'right' }}>
          <SubLabel>Title:</SubLabel>
        </div>
        <Title>Texto de exemplo</Title>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '100px', textAlign: 'right' }}>
          <SubLabel>HeadTitle:</SubLabel>
        </div>
        <HeadTitle>Texto de exemplo</HeadTitle>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '100px', textAlign: 'right' }}>
          <SubLabel>Label:</SubLabel>
        </div>
        <Label>Texto de exemplo</Label>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '100px', textAlign: 'right' }}>
          <SubLabel>SubLabel:</SubLabel>
        </div>
        <SubLabel>Texto de exemplo</SubLabel>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '100px', textAlign: 'right' }}>
          <SubLabel>Description:</SubLabel>
        </div>
        <Description>Texto de exemplo</Description>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '100px', textAlign: 'right' }}>
          <SubLabel>U:</SubLabel>
        </div>
        <U>Texto de exemplo</U>
      </div>
    </div>
  ),
};
