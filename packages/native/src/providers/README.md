# Providers de Tema e Cores

Este módulo fornece providers React para gerenciar temas e cores de forma global e dinâmica no S2Mangas Native.

## Estrutura

```
providers/
├── index.tsx           # Provider combinado e hooks
├── theme-provider.tsx  # Provider de tema
├── color-provider.tsx  # Provider de cores
├── example.tsx         # Exemplos de uso
└── README.md          # Esta documentação
```

## Providers Disponíveis

### 1. S2MangasProvider (Recomendado)

Provider combinado que inclui tanto o ThemeProvider quanto o ColorProvider.

```tsx
import { S2MangasProvider } from '@s2mangas/native';

const App = () => {
  return (
    <S2MangasProvider>
      <YourApp />
    </S2MangasProvider>
  );
};
```

### 2. ThemeProvider

Provider específico para gerenciar temas (cores, tamanhos, fontes).

```tsx
import { ThemeProvider } from '@s2mangas/native';

const App = () => {
  return (
    <ThemeProvider initialIsDark={true}>
      <YourApp />
    </ThemeProvider>
  );
};
```

### 3. ColorProvider

Provider específico para gerenciar paletas de cores.

```tsx
import { ColorProvider } from '@s2mangas/native';

const App = () => {
  return (
    <ColorProvider initialIsDarkMode={false}>
      <YourApp />
    </ColorProvider>
  );
};
```

## Hooks Disponíveis

### useS2Mangas (Recomendado)

Hook combinado que fornece acesso a todos os recursos de tema e cores.

```tsx
import { useS2Mangas } from '@s2mangas/native';

const MyComponent = () => {
  const {
    theme,           // Tema completo (cores, tamanhos, fontes)
    colors,          // Paleta de cores
    isDark,          // Se o tema está em modo escuro
    isDarkMode,      // Se as cores estão em modo escuro
    toggleAppearance, // Alterna entre claro/escuro
    setDarkAppearance, // Define modo escuro
    setLightAppearance, // Define modo claro
    setTheme,        // Define tema customizado
    setColors,       // Define paleta customizada
    getColor,        // Obtém cor por caminho
    getContrastColor // Calcula cor de contraste
  } = useS2Mangas();

  return (
    <View style={{ backgroundColor: theme.color.background }}>
      <Text style={{ color: theme.color.text }}>
        Olá, mundo!
      </Text>
    </View>
  );
};
```

### useTheme

Hook específico para acessar apenas o tema.

```tsx
import { useTheme } from '@s2mangas/native';

const MyComponent = () => {
  const { theme, isDark, toggleTheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.color.background }}>
      <Text style={{ color: theme.color.text }}>
        Tema: {isDark ? 'Escuro' : 'Claro'}
      </Text>
    </View>
  );
};
```

### useThemeColors, useThemeSizes, useThemeFonts

Hooks específicos para acessar partes do tema.

```tsx
import { useThemeColors, useThemeSizes, useThemeFonts } from '@s2mangas/native';

const MyComponent = () => {
  const colors = useThemeColors();
  const sizes = useThemeSizes();
  const fonts = useThemeFonts();
  
  return (
    <Text style={{
      color: colors.text,
      fontSize: sizes.title,
      fontFamily: fonts.bold
    }}>
      Texto estilizado
    </Text>
  );
};
```

### useColors

Hook específico para acessar apenas as cores.

```tsx
import { useColors } from '@s2mangas/native';

const MyComponent = () => {
  const { colors, isDarkMode, setDarkMode, setLightMode } = useColors();
  
  return (
    <View style={{ backgroundColor: colors.colors.background.primary }}>
      <Text style={{ color: colors.colors.text.primary }}>
        Modo: {isDarkMode ? 'Escuro' : 'Claro'}
      </Text>
    </View>
  );
};
```

### useColorPalette

Hook para acessar apenas a paleta de cores.

```tsx
import { useColorPalette } from '@s2mangas/native';

const MyComponent = () => {
  const colorPalette = useColorPalette();
  
  return (
    <View style={{ backgroundColor: colorPalette.background.primary }}>
      <Text style={{ color: colorPalette.text.primary }}>
        Usando paleta de cores
      </Text>
    </View>
  );
};
```

## Temas Predefinidos

### lightTheme

Tema claro com fundo branco e texto escuro.

```tsx
import { lightTheme } from '@s2mangas/native';

const MyComponent = () => {
  return (
    <ThemeProvider initialTheme={lightTheme}>
      <YourApp />
    </ThemeProvider>
  );
};
```

### darkTheme

Tema escuro com fundo preto e texto claro.

```tsx
import { darkTheme } from '@s2mangas/native';

const MyComponent = () => {
  return (
    <ThemeProvider initialTheme={darkTheme}>
      <YourApp />
    </ThemeProvider>
  );
};
```

## Paletas de Cores Predefinidas

### defaultColorPalette

Paleta de cores padrão (modo claro).

```tsx
import { defaultColorPalette } from '@s2mangas/native';

const MyComponent = () => {
  return (
    <ColorProvider initialColors={defaultColorPalette}>
      <YourApp />
    </ColorProvider>
  );
};
```

### darkColorPalette

Paleta de cores escura.

```tsx
import { darkColorPalette } from '@s2mangas/native';

const MyComponent = () => {
  return (
    <ColorProvider initialColors={darkColorPalette}>
      <YourApp />
    </ColorProvider>
  );
};
```

## Funcionalidades Avançadas

### Obtendo Cores por Caminho

```tsx
const MyComponent = () => {
  const { getColor } = useS2Mangas();
  
  const primaryColor = getColor('primary'); // '#ED274A'
  const gray500 = getColor('gray.500'); // '#6B7280'
  const textPrimary = getColor('text.primary'); // '#111827'
  
  return (
    <View style={{ backgroundColor: gray500 }}>
      <Text style={{ color: textPrimary }}>
        Texto com cor dinâmica
      </Text>
    </View>
  );
};
```

### Calculando Cor de Contraste

```tsx
const MyComponent = () => {
  const { getContrastColor } = useS2Mangas();
  
  const backgroundColor = '#ED274A';
  const textColor = getContrastColor(backgroundColor); // '#FFFFFF'
  
  return (
    <View style={{ backgroundColor }}>
      <Text style={{ color: textColor }}>
        Texto com contraste automático
      </Text>
    </View>
  );
};
```

### Temas Customizados

```tsx
const customTheme = {
  color: {
    background: '#1a1a1a',
    primary: '#FF6B6B',
    text: '#FFFFFF',
    // ... outras cores
  },
  size: {
    title: 28,
    label: 20,
    // ... outros tamanhos
  },
  font: {
    bold: 'CustomBold',
    // ... outras fontes
  }
};

const MyComponent = () => {
  return (
    <ThemeProvider initialTheme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
};
```

### Paletas de Cores Customizadas

```tsx
const customColorPalette = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  background: {
    primary: '#2C3E50',
    secondary: '#34495E',
    tertiary: '#7F8C8D'
  },
  text: {
    primary: '#ECF0F1',
    secondary: '#BDC3C7',
    tertiary: '#95A5A6'
  },
  // ... outras cores
};

const MyComponent = () => {
  return (
    <ColorProvider initialColors={customColorPalette}>
      <YourApp />
    </ColorProvider>
  );
};
```

## Integração com Componentes Existentes

Para integrar os providers com os componentes existentes do S2Mangas, você pode:

1. **Envolver sua aplicação** com o `S2MangasProvider`
2. **Usar os hooks** nos seus componentes
3. **Aplicar as cores dinamicamente** nos estilos

```tsx
import { S2MangasProvider, useS2Mangas, Button } from '@s2mangas/native';

const App = () => {
  return (
    <S2MangasProvider>
      <MyApp />
    </S2MangasProvider>
  );
};

const MyApp = () => {
  const { theme, toggleAppearance } = useS2Mangas();
  
  return (
    <View style={{ backgroundColor: theme.color.background }}>
      <Button 
        label="Alternar Tema"
        onPress={toggleAppearance}
        variant="primary"
      />
    </View>
  );
};
```

## Boas Práticas

1. **Use o S2MangasProvider** como provider principal
2. **Use o hook useS2Mangas** para acessar todos os recursos
3. **Aplique cores dinamicamente** nos estilos dos componentes
4. **Mantenha consistência** entre tema e cores
5. **Teste em ambos os modos** (claro e escuro)
6. **Use getContrastColor** para garantir legibilidade
7. **Documente temas customizados** para reutilização

## Exemplo Completo

Veja o arquivo `example.tsx` para um exemplo completo de uso dos providers.
