# @s2mangas/react

Pacote de componentes React migrados do React Native para React web.

## Instalação

```bash
npm install @s2mangas/react
# ou
yarn add @s2mangas/react
# ou
pnpm add @s2mangas/react
```

## Uso

### Importar estilos CSS (opcional)

```javascript
import '@s2mangas/react/styles.css';
```

### Componentes Básicos

```jsx
import { Button, Input, Card, Badge } from '@s2mangas/react';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Clique aqui
      </Button>
      
      <Input 
        label="Email" 
        placeholder="Digite seu email"
        onChange={(value) => console.log(value)}
      />
      
      <Card padding={16}>
        <h2>Conteúdo do Card</h2>
        <p>Este é um exemplo de card.</p>
      </Card>
      
      <Badge variant="primary">Novo</Badge>
    </div>
  );
}
```

### Componentes de Layout

```jsx
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from '@s2mangas/react';

function LayoutExample() {
  return (
    <Main>
      <Column gap={16}>
        <Row gap={8} justifyContent="space-between">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Row>
        
        <ScrollHorizontal gap={12}>
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </ScrollHorizontal>
      </Column>
    </Main>
  );
}
```

### Componentes de Texto

```jsx
import { Title, HeadTitle, Label, SubLabel, Description } from '@s2mangas/react';

function TextExample() {
  return (
    <div>
      <Title>Título Principal</Title>
      <HeadTitle>Subtítulo</HeadTitle>
      <Label>Rótulo</Label>
      <SubLabel>Sub rótulo</SubLabel>
      <Description>Descrição do conteúdo</Description>
    </div>
  );
}
```

### Componentes de Formulário

```jsx
import { Input, Checkbox, Switch } from '@s2mangas/react';

function FormExample() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <form>
      <Input
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="Digite seu email"
      />
      
      <Checkbox
        checked={agreed}
        onChange={setAgreed}
        label="Concordo com os termos"
      />
      
      <Switch
        checked={notifications}
        onChange={setNotifications}
      />
    </form>
  );
}
```

## Componentes Disponíveis

### Básicos
- `Button` - Botão com várias variantes
- `Input` - Campo de entrada com máscaras
- `Card` - Container com sombra
- `Badge` - Badge para status
- `Loader` - Indicador de carregamento
- `Divider` - Separador horizontal/vertical

### Layout
- `Column` - Container com flexbox column
- `Row` - Container com flexbox row
- `Main` - Container principal
- `ScrollHorizontal` - Scroll horizontal
- `ScrollVertical` - Scroll vertical

### Texto
- `Title` - Título principal
- `HeadTitle` - Subtítulo
- `Label` - Rótulo
- `SubLabel` - Sub rótulo
- `Description` - Descrição
- `U` - Texto sublinhado

### Formulário
- `Checkbox` - Checkbox
- `Switch` - Switch toggle

## Tema

O pacote utiliza o tema do `@s2mangas/core` para consistência visual.

```jsx
import { theme } from '@s2mangas/react';

console.log(theme.color.primary); // Cor primária
console.log(theme.font.bold); // Fonte em negrito
console.log(theme.size.label); // Tamanho do texto
```

## Migração do React Native

Este pacote foi migrado do React Native para React web, mantendo a mesma API e funcionalidades. As principais mudanças incluem:

- `onPress` → `onClick`
- `ViewStyle` → `React.CSSProperties`
- `TextStyle` → `React.CSSProperties`
- `Pressable` → `button`
- `TextInput` → `input`
- `View` → `div`
- `Text` → `span`/`p`/`h1`/`h2`

## Suporte

Para suporte, consulte a documentação do `@s2mangas/core` ou abra uma issue no repositório.
