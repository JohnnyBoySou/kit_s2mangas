# @s2mangas/core

Pacote core do S2Mangas que contém recursos compartilhados como cores, fontes, constantes e utilitários.

## Estrutura

```
src/
├── theme.ts       # Tema com cores, tamanhos e fontes
├── constants.ts   # Constantes do sistema (breakpoints, z-index, etc.)
├── types.ts       # Tipos e interfaces TypeScript
├── utils.ts       # Utilitários e funções auxiliares
├── fonts/         # Arquivos de fonte
└── index.ts       # Arquivo principal de exportação
```

## Uso

### Tema
```typescript
import { theme } from '@s2mangas/core';

// Usar cores
const primaryColor = theme.color.primary; // "#ED274A"
const backgroundColor = theme.color.background; // "#000000"

// Usar tamanhos
const titleSize = theme.size.title; // 24

// Usar fontes
const boldFont = theme.font.bold; // "Font_Bold"
```

### Constantes
```typescript
import { BREAKPOINTS, Z_INDEX, ANIMATION } from '@s2mangas/core';

// Usar constantes
const mobileBreakpoint = BREAKPOINTS.mobile; // 480
const modalZIndex = Z_INDEX.modal; // 1050
const fastAnimation = ANIMATION.fast; // 150
```

### Tipos
```typescript
import { A11yState, ColorVariant, SizeVariant } from '@s2mangas/core';

// Usar tipos
const state: A11yState = { disabled: true };
const color: ColorVariant = 'primary';
const size: SizeVariant = 'md';
```

### Utilitários
```typescript
import { hexToRgba, getContrastColor, SIZES } from '@s2mangas/core';

// Usar utilitários
const rgbaColor = hexToRgba('#ED274A', 0.5);
const contrastColor = getContrastColor('#000000');
const mediumSize = SIZES.md; // 16
```

## Fontes

O pacote inclui as seguintes fontes:
- **Circular**: Book, Medium, Bold, Black
- **Trap**: Medium, SemiBold, Black
- **Aktiv Grotesk**: Várias variações

## Desenvolvimento

Para adicionar novos recursos:

1. **Tema**: Edite `src/theme.ts`
2. **Constantes**: Edite `src/constants.ts`
3. **Tipos**: Edite `src/types.ts`
4. **Utilitários**: Edite `src/utils.ts`
5. **Fontes**: Adicione arquivos em `src/fonts/`

Sempre exporte novos recursos através do `src/index.ts`.
