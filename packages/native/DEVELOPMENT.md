# 🎨 Guia de Desenvolvimento - Visualização de Componentes

Este guia te ajudará a visualizar e testar os componentes do pacote native enquanto os desenvolve.

## 🚀 Início Rápido

### 1. Iniciar o Storybook
```bash
# Opção 1: Script automático
./dev-storybook.sh

# Opção 2: Comando direto
pnpm storybook
```

### 2. Acessar a Interface
- **URL**: http://localhost:7007
- **Navegador**: Chrome, Firefox, Safari
- **Recarregamento**: Automático quando você edita os componentes

## 📱 Componentes Disponíveis

### ✅ Com Stories Implementadas:
- **Button** (`src/ui/button/button.stories.tsx`)
- **Text** (`src/ui/text/text.stories.tsx`)
- **Modal** (`src/ui/modal.stories.tsx`)

### 🔄 Componentes Pendentes:
- Avatar, Badge, Card, Checkbox, Divider, FlatList, Icon, Image, Input, Layout, Loader, OTP, Progress, Select, Sheet, Skeleton, Switch, Tabs, Toast, Toggle

## 🛠️ Como Criar Stories para Novos Componentes

### 1. Estrutura Básica
```tsx
// src/ui/seu-componente/seu-componente.stories.tsx
import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import SeuComponente from './seu-componente';

export default {
  title: 'Components/SeuComponente',
  component: SeuComponente,
  parameters: {
    notes: 'Descrição do componente',
  },
};

export const Default = {
  args: {
    // props padrão
  },
};
```

### 2. Usar o Template
```bash
# Copie o template
cp story-template.tsx src/ui/seu-componente/seu-componente.stories.tsx

# Edite o arquivo conforme necessário
```

## 🎯 Dicas de Desenvolvimento

### 1. **Hot Reload**
- O Storybook recarrega automaticamente quando você edita os componentes
- Não precisa reiniciar o servidor

### 2. **Controles Interativos**
- Use `argTypes` para criar controles no painel lateral
- Teste diferentes props em tempo real

### 3. **Ações**
- Use `action()` para capturar eventos
- Veja os logs no painel "Actions"

### 4. **Documentação**
- Adicione `notes` para documentar o componente
- Use `parameters` para configurações adicionais

## 🔧 Configurações Avançadas

### 1. **Viewports**
Teste em diferentes tamanhos de tela:
```tsx
export default {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
```

### 2. **Backgrounds**
Teste com diferentes fundos:
```tsx
export default {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};
```

### 3. **Estados**
Crie stories para diferentes estados:
```tsx
export const Loading = {
  args: {
    loading: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};
```

## 🐛 Troubleshooting

### Problemas Comuns:

1. **Porta 7007 ocupada**
   ```bash
   # Mude a porta no package.json
   "storybook": "storybook dev -p 7008"
   ```

2. **Componente não aparece**
   - Verifique se o arquivo `.stories.tsx` está na pasta correta
   - Confirme se o import está correto

3. **Erro de dependências**
   ```bash
   pnpm install
   ```

4. **Hot reload não funciona**
   - Verifique se o arquivo está sendo salvo
   - Tente recarregar a página

## 📚 Recursos Úteis

- [Documentação Storybook](https://storybook.js.org/docs/react-native/get-started/introduction)
- [Addons disponíveis](https://storybook.js.org/addons)
- [Melhores práticas](https://storybook.js.org/docs/react-native/writing-stories/introduction)

## 🎨 Workflow Recomendado

1. **Desenvolva o componente** em `src/ui/seu-componente/seu-componente.tsx`
2. **Crie a story** em `src/ui/seu-componente/seu-componente.stories.tsx`
3. **Teste no Storybook** acessando http://localhost:7007
4. **Itere rapidamente** com hot reload
5. **Adicione testes** em `src/ui/seu-componente/seu-componente.test.tsx`

## 🚀 Próximos Passos

- [ ] Criar stories para todos os componentes pendentes
- [ ] Adicionar testes de interação
- [ ] Configurar visual regression testing
- [ ] Integrar com CI/CD
