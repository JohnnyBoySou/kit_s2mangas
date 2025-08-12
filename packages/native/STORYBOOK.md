# Storybook para React Native

Este pacote inclui configuração completa do Storybook para React Native, permitindo visualizar e testar componentes em um ambiente isolado.

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
cd packages/native
pnpm install
```

### 2. Executar Storybook
```bash
# Desenvolvimento
pnpm storybook

# Build para produção
pnpm storybook:build

# Gerar loader de stories
pnpm storybook:loader
```

## 📱 Visualização

O Storybook React Native pode ser visualizado de duas formas:

### 1. No Dispositivo/Emulador
- Execute o Storybook e abra no dispositivo ou emulador
- Acesse via `http://localhost:7007`

### 2. No Navegador (Web)
- O Storybook também funciona no navegador para desenvolvimento
- Acesse via `http://localhost:7007`

## 🎨 Stories Disponíveis

### Componentes com Stories:
- **Button**: Botões com múltiplas variantes e estados
- **Text**: Componentes de texto com hierarquia completa

### Estrutura das Stories:
```
src/ui/
├── button/
│   ├── button.tsx
│   └── button.stories.tsx
├── text.tsx
└── text.stories.tsx
```

## 🔧 Configuração

### Arquivos de Configuração:
- `.storybook/main.js`: Configuração principal
- `.storybook/preview.js`: Configuração de preview

### Addons Configurados:
- `@storybook/addon-ondevice-actions`: Ações em dispositivo
- `@storybook/addon-ondevice-controls`: Controles interativos
- `@storybook/addon-ondevice-notes`: Notas e documentação
- `@storybook/addon-ondevice-backgrounds`: Backgrounds
- `@storybook/addon-ondevice-viewport`: Viewports

## 📝 Criando Novas Stories

### 1. Estrutura Básica
```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';
import YourComponent from './your-component';

export default {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    notes: 'Descrição do componente',
  },
  argTypes: {
    // Controles interativos
  },
};

export const Default = {
  args: {
    // Props padrão
  },
};
```

### 2. Story com Render Customizado
```tsx
export const CustomStory = {
  render: () => (
    <View style={styles.container}>
      <YourComponent />
    </View>
  ),
};
```

### 3. Story com Ações
```tsx
export const WithActions = {
  args: {
    onPress: action('button-pressed'),
  },
};
```

## 🎯 Exemplos de Uso

### Button Stories
- Variantes: default, primary, secondary, destructive, etc.
- Estados: loading, disabled
- Com ícones e children
- Comparações visuais

### Text Stories
- Hierarquia: HeadTitle, Title, Label, SubLabel, Description
- Alinhamentos: left, center, right
- Cores e tamanhos
- Exemplos em contexto (cards, perfis)

## 🔄 Integração com CI/CD

O Storybook pode ser integrado ao pipeline de CI/CD:

```yaml
# Exemplo para GitHub Actions
- name: Build Storybook
  run: |
    cd packages/native
    pnpm storybook:build
```

## 📚 Recursos Adicionais

- [Documentação oficial do Storybook React Native](https://storybook.js.org/docs/react-native/get-started/introduction)
- [Addons disponíveis](https://storybook.js.org/addons)
- [Melhores práticas](https://storybook.js.org/docs/react-native/writing-stories/introduction)

## 🐛 Troubleshooting

### Problemas Comuns:

1. **Erro de dependências**: Execute `pnpm install` novamente
2. **Porta ocupada**: Mude a porta no script `storybook`
3. **Componentes não aparecem**: Verifique se o arquivo `.stories.tsx` está na pasta correta

### Logs de Debug:
```bash
# Executar com logs detalhados
DEBUG=* pnpm storybook
```
