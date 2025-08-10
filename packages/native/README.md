# @s2mangas/native

Biblioteca de componentes UI React Native para S2Mangas, construída com TypeScript e integrada ao sistema de design do core.

## 🎨 **Integração com @s2mangas/core**

Este pacote utiliza o `@s2mangas/core` para cores, fontes, tamanhos e constantes, garantindo consistência visual em toda a aplicação.

## 📦 **Instalação**

```bash
pnpm add @s2mangas/native
```

## 🚀 **Uso**

### Importação Básica
```typescript
import { Button, theme } from '@s2mangas/native';

// Usar componentes
<Button variant="primary" onPress={() => {}}>
  Clique aqui
</Button>

// Usar tema
const primaryColor = theme.color.primary; // "#ED274A"
```

### Componentes Disponíveis

#### Botões
```typescript
import { Button } from '@s2mangas/native';

<Button variant="primary" onPress={() => {}}>
  Botão Primário
</Button>

<Button variant="secondary" onPress={() => {}}>
  Botão Secundário
</Button>

<Button variant="destructive" onPress={() => {}}>
  Botão Destrutivo
</Button>
```

#### Layout
```typescript
import { Column, Row, Main } from '@s2mangas/native';

<Main>
  <Column>
    <Row justify="center" align="center">
      Conteúdo centralizado
    </Row>
  </Column>
</Main>
```

#### Texto
```typescript
import { Title, Label, Description } from '@s2mangas/native';

<Title>Título Principal</Title>
<Label>Rótulo</Label>
<Description>Descrição do conteúdo</Description>
```

#### Formulários
```typescript
import { Input, InputOTP, Select } from '@s2mangas/native';

<Input placeholder="Digite seu nome" />
<InputOTP value="1234" onChange={(value) => {}} />
<Select options={options} value={value} onChange={onChange} />
```

### Tema e Cores

```typescript
import { theme } from '@s2mangas/native';

// Cores principais
const primaryColor = theme.color.primary;     // "#ED274A"
const secondaryColor = theme.color.secundary; // "#FF620A"
const background = theme.color.background;    // "#000000"

// Tamanhos
const titleSize = theme.size.title;           // 24
const labelSize = theme.size.label;           // 18

// Fontes
const boldFont = theme.font.bold;             // "Font_Bold"
const mediumFont = theme.font.medium;         // "Font_Medium"
```

### Constantes do Sistema

```typescript
import { BREAKPOINTS, Z_INDEX, ANIMATION } from '@s2mangas/native';

// Breakpoints
const mobile = BREAKPOINTS.mobile;  // 480
const tablet = BREAKPOINTS.tablet;  // 768

// Z-index
const modal = Z_INDEX.modal;        // 1050
const tooltip = Z_INDEX.tooltip;    // 1070

// Animações
const fast = ANIMATION.fast;        // 150
const normal = ANIMATION.normal;    // 250
```

## 🛠 **Desenvolvimento**

### Scripts Disponíveis

```bash
# Build do projeto
pnpm build

# Verificação de código
pnpm lint
pnpm lint:fix

# Verificação de tipos
pnpm typecheck
pnpm typecheck:strict

# Verificação completa
pnpm check
```

### Estrutura do Projeto

```
src/
├── ui/           # Componentes UI
│   ├── button.tsx
│   ├── input.tsx
│   ├── layout.tsx
│   └── ...
├── types/        # Tipos TypeScript
└── index.ts      # Exportações principais
```

## 🎯 **Características**

- ✅ **TypeScript**: Tipagem completa para todos os componentes
- ✅ **Tema Consistente**: Integração com @s2mangas/core
- ✅ **Acessibilidade**: Suporte a ARIA e screen readers
- ✅ **Performance**: Otimizado para React Native
- ✅ **Customizável**: Props flexíveis para personalização
- ✅ **Documentado**: Exemplos e documentação completa

## 🔧 **Configuração**

O projeto usa:
- **react-native-builder-bob**: Build e distribuição
- **ESLint**: Linting de código
- **Prettier**: Formatação
- **Husky**: Git hooks
- **TypeScript**: Verificação de tipos

## 📚 **Documentação Completa**

Para mais detalhes sobre cada componente, consulte a documentação individual em cada arquivo ou o guia de desenvolvimento em `DEVELOPMENT.md`.
