<div align="center">

# 🎨 S2Mangas UI Kit

<p align="center">
  <strong>Um design system moderno e completo para React Web e React Native</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@s2mangas/core?label=core&color=%234F46E5" alt="Core Version" />
  <img src="https://img.shields.io/npm/v/@s2mangas/react?label=react&color=%2306B6D4" alt="React Version" />
  <img src="https://img.shields.io/npm/v/@s2mangas/native?label=native&color=%2310B981" alt="Native Version" />
  <img src="https://img.shields.io/npm/l/@s2mangas/core" alt="License" />
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-componentes">Componentes</a> •
  <a href="#-documentação">Documentação</a> •
  <a href="#-desenvolvimento">Desenvolvimento</a> •
  <a href="#-contribuindo">Contribuindo</a>
</p>

</div>

---

## 🌟 Principais Características

- 🎯 **Cross-platform**: Componentes que funcionam tanto em React Web quanto React Native
- 🎨 **Design System**: Tokens de design consistentes e temas customizáveis
- 📱 **Responsivo**: Layout adaptável para diferentes tamanhos de tela
- ♿ **Acessível**: Componentes seguem diretrizes WCAG 2.1
- 🧪 **Testado**: Cobertura de testes abrangente
- 📚 **Documentado**: Storybook interativo para exploração dos componentes
- 🚀 **Performance**: Otimizado para carregamento rápido e experiência fluida
- 🔧 **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento

## 📦 Arquitetura de Pacotes

| Pacote | Descrição | Versão | Tamanho |
|--------|-----------|--------|---------|
| **[@s2mangas/core](./packages/core)** | Design tokens, temas e utilitários | ![Version](https://img.shields.io/npm/v/@s2mangas/core) | ![Size](https://img.shields.io/bundlephobia/minzip/@s2mangas/core) |
| **[@s2mangas/react](./packages/react)** | Componentes React Web | ![Version](https://img.shields.io/npm/v/@s2mangas/react) | ![Size](https://img.shields.io/bundlephobia/minzip/@s2mangas/react) |
| **[@s2mangas/native](./packages/native)** | Componentes React Native | ![Version](https://img.shields.io/npm/v/@s2mangas/native) | ![Size](https://img.shields.io/bundlephobia/minzip/@s2mangas/native) |

## 🚀 Quick Start

### Instalação

#### Para projetos React Web:
```bash
npm install @s2mangas/react @s2mangas/core
# ou
yarn add @s2mangas/react @s2mangas/core
# ou
pnpm add @s2mangas/react @s2mangas/core
```

#### Para projetos React Native:
```bash
npm install @s2mangas/native @s2mangas/core
# ou
yarn add @s2mangas/native @s2mangas/core
# ou
pnpm add @s2mangas/native @s2mangas/core
```

### Configuração Inicial

#### React Web
```jsx
// App.jsx
import '@s2mangas/react/styles.css'; // Importar estilos CSS

import { Button, Card, Text } from '@s2mangas/react';

function App() {
  return (
    <Card padding={20}>
      <Text.Title>Bem-vindo ao S2Mangas UI!</Text.Title>
      <Text.Description>
        Um design system moderno e completo.
      </Text.Description>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Começar
      </Button>
    </Card>
  );
}
```

#### React Native
```jsx
// App.jsx
import React from 'react';
import { S2MangasProvider } from '@s2mangas/native';
import { Button, Card, Text } from '@s2mangas/native';

export default function App() {
  return (
    <S2MangasProvider>
      <Card padding={20}>
        <Text.Title>Bem-vindo ao S2Mangas UI!</Text.Title>
        <Text.Description>
          Um design system moderno e completo.
        </Text.Description>
        <Button variant="primary" onPress={() => alert('Hello!')}>
          Começar
        </Button>
      </Card>
    </S2MangasProvider>
  );
}
```

## 🎨 Componentes

### ✅ Componentes Prontos

<table>
<tr>
<td width="50%">

**React Web (@s2mangas/react)**
- 🔘 **Button** - Botões com múltiplas variantes
- 📝 **Input** - Campos de entrada com máscaras
- 🃏 **Card** - Containers com elevação
- 🏷️ **Badge** - Indicadores de status
- ✅ **Checkbox** - Caixas de seleção
- 🔄 **Switch** - Interruptores toggle
- ➗ **Divider** - Separadores visuais
- ⏳ **Loader** - Indicadores de carregamento
- 💬 **Tooltip** - Dicas contextuais
- 🧭 **Breadcrumb** - Navegação hierárquica
- 📐 **Layout** - Column, Row, Main, Scroll
- ✏️ **Text** - Title, Label, Description

</td>
<td width="50%">

**React Native (@s2mangas/native)**
- 🔘 **Button** - Botões nativos otimizados
- 👤 **Avatar** - Imagens de perfil
- 📝 **Input** - Campos de entrada nativos
- 🔢 **InputOTP** - Campos para códigos
- 🍞 **Toast** - Notificações temporárias
- 📋 **Sheet** - Painéis deslizantes
- 📊 **Select** - Seletores dropdown
- 🎛️ **Toggle** - Controles on/off
- 🏷️ **Badge** - Indicadores coloridos
- 📑 **Tabs** - Navegação por abas
- 🖼️ **Image** - Imagens otimizadas
- 📜 **FlatList** - Listas performáticas
- 🎭 **Modal** - Sobreposições modais
- 📊 **Progress** - Barras de progresso
- 💀 **Skeleton** - Placeholders de carregamento

</td>
</tr>
</table>

### 🔄 Em Desenvolvimento

- **Date Picker** - Seleção de datas
- **File Upload** - Upload de arquivos
- **Data Grid** - Tabelas avançadas
- **Charts** - Gráficos e visualizações
- **Calendar** - Calendário interativo

## 📚 Documentação

### 🎭 Storybook Interativo

Explore todos os componentes de forma interativa:

#### React Web
```bash
# Desenvolvimento do monorepo
git clone https://github.com/JohnnyBoySou/kit_s2mangas.git
cd kit_s2mangas
pnpm install
pnpm storybook
```
**Acesse**: http://localhost:6006

#### React Native
```bash
# Storybook React Native
pnpm storybook:native
```
**Acesse**: http://localhost:7007

### 📖 Guias de Uso

- 📋 **[Guia de Componentes](./docs/components.md)** - Documentação detalhada de cada componente
- 🚀 **[Processo de Release](./docs/release-process.md)** - Como são feitos os lançamentos
- 🔧 **[Configuração do GitHub](/.github/README.md)** - Workflows e automação

## 🧪 Testes e Qualidade

### Testes Automatizados
```bash
# Executar todos os testes
pnpm test

# Testes com cobertura
pnpm test:coverage

# Testes em modo watch
pnpm test:watch
```

### Qualidade de Código
```bash
# Verificações de lint
pnpm lint
pnpm lint:fix

# Verificação de tipos
pnpm typecheck

# Formatação de código
pnpm format
pnpm format:check
```

### Análise de Bundle
```bash
# Analisar tamanho dos pacotes
pnpm size

# Verificar bundlewatch
pnpm bundle
```

## 🔧 Desenvolvimento

### Estrutura do Monorepo

```
kit_s2mangas/
├── 📁 packages/
│   ├── 🎨 core/          # Design tokens, temas e utilitários
│   ├── ⚛️ react/         # Componentes React Web
│   └── 📱 native/        # Componentes React Native
├── 📁 docs/              # Documentação adicional
├── 📁 examples/          # Projetos de exemplo
├── 📁 scripts/           # Scripts de automação
└── 📁 .github/           # Workflows CI/CD
```

### Scripts de Desenvolvimento

```bash
# Build de todos os pacotes
pnpm build

# Desenvolvimento com watch mode
pnpm dev

# Limpeza completa
pnpm clean:all

# Auditoria de dependências
pnpm audit

# Verificar dependências desatualizadas
pnpm outdated

# Atualizar dependências
pnpm update
```

### Configuração do Ambiente

#### Requisitos
- Node.js 18+ ou 20+
- pnpm 9.15.0+
- Git

#### Setup Inicial
```bash
# Clone o repositório
git clone https://github.com/JohnnyBoySou/kit_s2mangas.git
cd kit_s2mangas

# Instale as dependências
pnpm install

# Configure os hooks de pre-commit
pnpm prepare

# Execute os testes para verificar se tudo está funcionando
pnpm test

# Faça o build
pnpm build
```

## 🎨 Tema e Customização

### Design Tokens

O `@s2mangas/core` fornece um sistema robusto de design tokens:

```typescript
import { theme } from '@s2mangas/core';

// Cores
theme.color.primary      // #4F46E5 - Índigo vibrante
theme.color.secondary    // #06B6D4 - Cyan moderno
theme.color.success      // #10B981 - Verde sucesso
theme.color.warning      // #F59E0B - Amarelo atenção
theme.color.error        // #EF4444 - Vermelho erro
theme.color.background   // #FFFFFF / #000000 - Adapta ao tema

// Tipografia
theme.font.bold          // Font_Bold
theme.font.medium        // Font_Medium
theme.font.regular       // Font_Regular

// Tamanhos
theme.size.title         // 24px
theme.size.subtitle      // 20px
theme.size.label         // 18px
theme.size.body          // 16px
theme.size.caption       // 14px

// Espaçamentos
theme.spacing.xs         // 4px
theme.spacing.sm         // 8px
theme.spacing.md         // 16px
theme.spacing.lg         // 24px
theme.spacing.xl         // 32px

// Breakpoints
theme.breakpoints.mobile  // 480px
theme.breakpoints.tablet  // 768px
theme.breakpoints.desktop // 1024px
```

### Temas Customizados

```typescript
import { createTheme } from '@s2mangas/core';

const customTheme = createTheme({
  color: {
    primary: '#FF6B35',
    secondary: '#F7931E',
    // ... outras cores
  },
  font: {
    bold: 'CustomFont-Bold',
    // ... outras fontes
  }
});
```

## 🚢 Releases e Versionamento

Este projeto usa [Changesets](https://github.com/changesets/changesets) para gerenciamento automático de versões:

### Para Contribuidores
```bash
# Após fazer mudanças, adicione um changeset
pnpm changeset:add

# Para release (apenas mantenedores)
pnpm release
```

### Workflow de Release
1. 📝 Mudanças são feitas via PRs
2. 🔄 Changesets são adicionados descrevendo as mudanças
3. 🤖 Bot automático cria PR de release
4. ✅ Merge do PR publica automaticamente no NPM
5. 📋 Changelog é atualizado automaticamente

## 🤝 Contribuindo

Adoramos contribuições! Veja como você pode ajudar:

### 🐛 Reportando Bugs
1. Verifique se o bug já não foi reportado
2. Use o template de issue para bugs
3. Inclua informações sobre ambiente e reprodução

### ✨ Sugerindo Features
1. Verifique se a feature já não foi sugerida
2. Use o template de issue para features
3. Descreva o problema que a feature resolve

### 🔧 Desenvolvimento
1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Faça suas mudanças seguindo os padrões do projeto
4. Adicione testes para suas mudanças
5. Execute os testes: `pnpm test`
6. Adicione um changeset: `pnpm changeset:add`
7. Commit: `git commit -m 'feat: adiciona nova feature'`
8. Push: `git push origin feature/nova-feature`
9. Abra um Pull Request

### 📋 Diretrizes de Desenvolvimento
- ✅ Siga os padrões de código estabelecidos
- 🧪 Adicione testes para novas funcionalidades
- 📚 Documente mudanças na API
- 🎨 Mantenha consistência visual
- ♿ Considere acessibilidade
- 📱 Teste em diferentes dispositivos/browsers

## 📊 Status do Projeto

- **Build Status**: ![CI](https://github.com/JohnnyBoySou/kit_s2mangas/workflows/CI/badge.svg)
- **Coverage**: ![Coverage](https://img.shields.io/codecov/c/github/JohnnyBoySou/kit_s2mangas)
- **Downloads**: ![Downloads](https://img.shields.io/npm/dm/@s2mangas/react)
- **Issues**: ![Issues](https://img.shields.io/github/issues/JohnnyBoySou/kit_s2mangas)
- **PRs**: ![PRs](https://img.shields.io/github/issues-pr/JohnnyBoySou/kit_s2mangas)

## 🔗 Links Úteis

- 📖 **[Documentação Completa](https://s2mangas-storybook.vercel.app)**
- 🎭 **[Storybook React Web](https://s2mangas-react.vercel.app)**
- 📱 **[Storybook React Native](https://s2mangas-native.vercel.app)**
- 🐛 **[Reportar Bug](https://github.com/JohnnyBoySou/kit_s2mangas/issues/new?template=bug_report.md)**
- 💡 **[Sugerir Feature](https://github.com/JohnnyBoySou/kit_s2mangas/issues/new?template=feature_request.md)**
- 💬 **[Discussões](https://github.com/JohnnyBoySou/kit_s2mangas/discussions)**

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2024 S2Mangas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

## 🆘 Suporte e Comunidade

- 🐛 **Issues**: [GitHub Issues](https://github.com/JohnnyBoySou/kit_s2mangas/issues)
- 💬 **Discussões**: [GitHub Discussions](https://github.com/JohnnyBoySou/kit_s2mangas/discussions)
- 📧 **Email**: [joaodesousa101@gmail.com](mailto:joaodesousa101@gmail.com)
- 📚 **Documentação**: [Guia de Componentes](./docs/components.md)

## 🙏 Agradecimentos

Especial agradecimento a todos os [contribuidores](https://github.com/JohnnyBoySou/kit_s2mangas/contributors) que tornam este projeto possível!

---

<div align="center">
  <p>
    <strong>Feito com ❤️ pela equipe S2Mangas</strong>
  </p>
  <p>
    <a href="https://github.com/JohnnyBoySou">GitHub</a> •
    <a href="https://www.npmjs.com/org/s2mangas">NPM</a> •
    <a href="https://s2mangas-storybook.vercel.app">Documentação</a>
  </p>
</div>
