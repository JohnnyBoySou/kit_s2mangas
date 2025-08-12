# 🎨 Guia de Componentes

Este guia apresenta todos os componentes disponíveis no S2Mangas UI Kit, com exemplos de uso e propriedades.

## 📦 Pacotes Disponíveis

### React Web (`@s2mangas/react`)
Componentes otimizados para aplicações web React.

### React Native (`@s2mangas/native`)
Componentes nativos para aplicações mobile React Native.

## 🎯 Componentes Básicos

### Button

Botão com múltiplas variantes e tamanhos.

```tsx
import { Button } from '@s2mangas/react';

// Variantes
<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="destructive">Destrutivo</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>

// Estados
<Button disabled>Desabilitado</Button>
<Button loading>Carregando</Button>
```

**Propriedades:**
- `variant`: 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: function

### Input

Campo de entrada com suporte a máscaras e validação.

```tsx
import { Input } from '@s2mangas/react';

// Básico
<Input 
  label="Email"
  placeholder="Digite seu email"
  onChange={(value) => console.log(value)}
/>

// Com máscara
<Input 
  label="Telefone"
  mask="phone"
  placeholder="(11) 99999-9999"
/>

// Com validação
<Input 
  label="Senha"
  type="password"
  error="Senha deve ter pelo menos 8 caracteres"
/>
```

**Propriedades:**
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `mask`: 'phone' | 'cpf' | 'cnpj' | 'cep' | 'currency'
- `error`: string
- `disabled`: boolean

### Card

Container com sombra e padding configurável.

```tsx
import { Card } from '@s2mangas/react';

<Card padding={16}>
  <h2>Título do Card</h2>
  <p>Conteúdo do card aqui...</p>
</Card>

<Card padding={24} elevation={2}>
  <h2>Card com Elevação</h2>
  <p>Card com sombra mais pronunciada</p>
</Card>
```

**Propriedades:**
- `padding`: number
- `elevation`: number (0-5)
- `children`: ReactNode

## 🎨 Componentes de Layout

### Column

Container com flexbox column.

```tsx
import { Column } from '@s2mangas/react';

<Column gap={16} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Column>
```

### Row

Container com flexbox row.

```tsx
import { Row } from '@s2mangas/react';

<Row gap={8} justify="space-between" align="center">
  <div>Esquerda</div>
  <div>Centro</div>
  <div>Direita</div>
</Row>
```

### Main

Container principal da aplicação.

```tsx
import { Main } from '@s2mangas/react';

<Main>
  <h1>Conteúdo Principal</h1>
  <p>Todo o conteúdo da aplicação vai aqui</p>
</Main>
```

## 📝 Componentes de Texto

### Title

Título principal da página.

```tsx
import { Title } from '@s2mangas/react';

<Title>Título Principal da Página</Title>
```

### HeadTitle

Subtítulo ou título secundário.

```tsx
import { HeadTitle } from '@s2mangas/react';

<HeadTitle>Subtítulo da Seção</HeadTitle>
```

### Label

Rótulo para campos e elementos.

```tsx
import { Label } from '@s2mangas/react';

<Label>Nome do Campo</Label>
```

### Description

Texto descritivo.

```tsx
import { Description } from '@s2mangas/react';

<Description>
  Este é um texto descritivo que explica algo importante.
</Description>
```

## 🔧 Componentes de Formulário

### Checkbox

Caixa de seleção.

```tsx
import { Checkbox } from '@s2mangas/react';

<Checkbox 
  checked={agreed}
  onChange={setAgreed}
  label="Concordo com os termos"
/>
```

### Switch

Interruptor toggle.

```tsx
import { Switch } from '@s2mangas/react';

<Switch 
  checked={notifications}
  onChange={setNotifications}
  label="Receber notificações"
/>
```

## 🎭 Componentes de Feedback

### Badge

Indicador de status ou contador.

```tsx
import { Badge } from '@s2mangas/react';

<Badge variant="primary">Novo</Badge>
<Badge variant="secondary">5</Badge>
<Badge variant="destructive">Erro</Badge>
```

### Loader

Indicador de carregamento.

```tsx
import { Loader } from '@s2mangas/react';

<Loader size="sm" />
<Loader size="md" />
<Loader size="lg" />
```

### Message

Mensagem de feedback.

```tsx
import { Message } from '@s2mangas/react';

<Message type="success">Operação realizada com sucesso!</Message>
<Message type="error">Ocorreu um erro. Tente novamente.</Message>
<Message type="warning">Atenção: dados não salvos.</Message>
<Message type="info">Informação importante.</Message>
```

## 🎨 Tema e Customização

Todos os componentes utilizam o tema do `@s2mangas/core`:

```tsx
import { theme } from '@s2mangas/core';

// Cores
theme.color.primary    // #ED274A
theme.color.secondary  // #FF620A
theme.color.background // #000000

// Tamanhos
theme.size.title       // 24
theme.size.label       // 18

// Fontes
theme.font.bold        // Font_Bold
theme.font.medium      // Font_Medium
```

## ♿ Acessibilidade

Todos os componentes seguem as diretrizes WCAG 2.1:

- Suporte a navegação por teclado
- Labels e descrições para screen readers
- Contraste adequado
- Estados focáveis visíveis

## 📱 Responsividade

Os componentes são responsivos por padrão:

- Breakpoints: mobile (480px), tablet (768px), desktop (1024px)
- Layout flexível
- Adaptação automática de tamanhos

## 🧪 Testes

Cada componente possui testes abrangentes:

```bash
# Executar todos os testes
pnpm test

# Testes em modo watch
pnpm test:watch

# Cobertura de testes
pnpm test:coverage
```

## 📚 Exemplos Completos

Veja exemplos práticos no diretório `examples/` ou execute:

```bash
# Storybook (React Web)
pnpm storybook

# Storybook (React Native)
pnpm --filter @s2mangas/native storybook
```
