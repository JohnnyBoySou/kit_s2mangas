import { useState } from 'react';
import Input from './input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label do input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do input',
    },
    value: {
      control: { type: 'text' },
      description: 'Valor do input',
    },
    error: {
      control: { type: 'text' },
      description: 'Mensagem de erro',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Texto de ajuda',
    },
    mask: {
      control: { type: 'select' },
      options: ['CPF', 'PHONE', 'CEP', 'NASCIMENTO', 'CURRENCY'],
      description: 'Tipo de máscara',
    },
    isPassword: {
      control: { type: 'boolean' },
      description: 'Input de senha',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilitar input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'number', 'tel', 'url'],
      description: 'Tipo do input',
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
};

// Story básica
export const Default = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    value: '',
  },
};

// Input com label
export const WithLabel = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    type: 'email',
  },
};

// Input com placeholder
export const WithPlaceholder = {
  args: {
    placeholder: 'Digite algo aqui...',
  },
};

// Input com erro
export const WithError = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    value: 'email-invalido',
    error: 'Email inválido',
  },
};

// Input com texto de ajuda
export const WithHelperText = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    helperText: 'A senha deve ter pelo menos 8 caracteres',
    isPassword: true,
  },
};

// Input desabilitado
export const Disabled = {
  args: {
    label: 'Campo Desabilitado',
    placeholder: 'Não é possível editar',
    value: 'Valor fixo',
    disabled: true,
  },
};

// Input de senha
export const Password = {
  args: {
    label: 'Senha',
    placeholder: 'Digite sua senha',
    isPassword: true,
  },
};

// Input com máscara CPF
export const CPFMask = {
  args: {
    label: 'CPF',
    placeholder: '000.000.000-00',
    mask: 'CPF',
  },
};

// Input com máscara telefone
export const PhoneMask = {
  args: {
    label: 'Telefone',
    placeholder: '(00) 00000-0000',
    mask: 'PHONE',
  },
};

// Input com máscara CEP
export const CEPMask = {
  args: {
    label: 'CEP',
    placeholder: '00000-000',
    mask: 'CEP',
  },
};

// Input com máscara data de nascimento
export const BirthdateMask = {
  args: {
    label: 'Data de Nascimento',
    placeholder: 'DD/MM/AAAA',
    mask: 'NASCIMENTO',
  },
};

// Input com máscara moeda
export const CurrencyMask = {
  args: {
    label: 'Valor',
    placeholder: 'R$ 0,00',
    mask: 'CURRENCY',
  },
};

// Input de email
export const Email = {
  args: {
    label: 'Email',
    placeholder: 'exemplo@email.com',
    type: 'email',
  },
};

// Input numérico
export const Number = {
  args: {
    label: 'Idade',
    placeholder: 'Digite sua idade',
    type: 'number',
  },
};

// Input de URL
export const URL = {
  args: {
    label: 'Website',
    placeholder: 'https://exemplo.com',
    type: 'url',
  },
};

// Input de telefone
export const Telephone = {
  args: {
    label: 'Telefone',
    placeholder: '(00) 00000-0000',
    type: 'tel',
  },
};

// Comparação de estados
export const StateComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
      <Input label="Input Normal" placeholder="Estado normal" />
      <Input label="Input com Valor" placeholder="Com valor" value="Texto digitado" />
      <Input label="Input com Erro" placeholder="Com erro" value="valor inválido" error="Campo obrigatório" />
      <Input label="Input Desabilitado" placeholder="Desabilitado" value="Não editável" disabled={true} />
      <Input label="Input Focado" placeholder="Focado" value="Em foco" />
    </div>
  ),
};

// Comparação de máscaras
export const MaskComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
      <Input label="CPF" placeholder="000.000.000-00" mask="CPF" />
      <Input label="Telefone" placeholder="(00) 00000-0000" mask="PHONE" />
      <Input label="CEP" placeholder="00000-000" mask="CEP" />
      <Input label="Data de Nascimento" placeholder="DD/MM/AAAA" mask="NASCIMENTO" />
      <Input label="Valor" placeholder="R$ 0,00" mask="CURRENCY" />
    </div>
  ),
};

// Input interativo
export const Interactive = {
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    
    const handleChange = (newValue: string) => {
      setValue(newValue);
      setError('');
      
      if (newValue.length > 0 && newValue.length < 3) {
        setError('Mínimo 3 caracteres');
      }
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
        <Input
          label="Input Interativo"
          placeholder="Digite algo..."
          value={value}
          onChange={handleChange}
          error={error}
        />
        <p style={{ 
          fontFamily: 'Font_Book', 
          fontSize: '14px', 
          color: '#666',
          margin: '0'
        }}>
          Valor digitado: "{value}"
        </p>
      </div>
    );
  },
};

// Formulário de exemplo
export const FormExample = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      password: '',
    });
    
    const handleFieldChange = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
        <h3 style={{ 
          margin: '0 0 16px 0', 
          fontFamily: 'Font_Bold', 
          fontSize: '18px' 
        }}>
          Formulário de Cadastro
        </h3>
        
        <Input
          label="Nome Completo"
          placeholder="Digite seu nome completo"
          value={formData.name}
          onChange={(value) => handleFieldChange('name', value)}
        />
        
        <Input
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
          value={formData.email}
          onChange={(value) => handleFieldChange('email', value)}
        />
        
        <Input
          label="CPF"
          placeholder="000.000.000-00"
          mask="CPF"
          value={formData.cpf}
          onChange={(value) => handleFieldChange('cpf', value)}
        />
        
        <Input
          label="Telefone"
          placeholder="(00) 00000-0000"
          mask="PHONE"
          value={formData.phone}
          onChange={(value) => handleFieldChange('phone', value)}
        />
        
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          isPassword={true}
          value={formData.password}
          onChange={(value) => handleFieldChange('password', value)}
          helperText="Mínimo 8 caracteres"
        />
        
        <button style={{
          backgroundColor: '#007AFF',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontFamily: 'Font_Medium',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '16px'
        }}>
          Cadastrar
        </button>
      </div>
    );
  },
};

// Input com validação em tempo real
export const RealTimeValidation = {
  render: () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const validateEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError('Email inválido');
      } else {
        setEmailError('');
      }
    };
    
    const handleEmailChange = (value: string) => {
      setEmail(value);
      validateEmail(value);
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '400px' }}>
        <Input
          label="Email com Validação"
          placeholder="Digite um email válido"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '8px',
          fontFamily: 'Font_Book',
          fontSize: '14px'
        }}>
          <strong>Status:</strong> {emailError ? '❌ Inválido' : email ? '✅ Válido' : '⏳ Aguardando'}
        </div>
      </div>
    );
  },
};

// Input com diferentes tipos
export const InputTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '400px' }}>
      <Input label="Texto" placeholder="Input de texto" type="text" />
      <Input label="Email" placeholder="exemplo@email.com" type="email" />
      <Input label="Número" placeholder="Digite um número" type="number" />
      <Input label="Telefone" placeholder="(00) 00000-0000" type="tel" />
      <Input label="URL" placeholder="https://exemplo.com" type="url" />
      <Input label="Senha" placeholder="Digite sua senha" isPassword={true} />
    </div>
  ),
};
