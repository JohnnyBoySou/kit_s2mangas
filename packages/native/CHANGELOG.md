# @s2mangas/native

## 1.0.0

### Major Changes

- 3ed9edb: fix inputbig

## 0.0.8

### Patch Changes

- 81299e1: fix: corrigir erros de build e testes
  - fix: corrigir caminho de tipos no package.json para react-native-builder-bob
  - fix: corrigir testes do componente Card (borderRadius -> r, backgroundColor -> bgColor)
  - fix: corrigir testes do componente CheckBox (status -> value, setStatus -> setValue)
  - feat: integração com expo-image para caching de imagens
  - refactor: mover funções de máscara para @s2mangas/core
  - feat: adicionar animações aos componentes Input

- Updated dependencies [81299e1]
  - @s2mangas/core@1.0.3

## 0.0.7

### Patch Changes

- e33e32b: fix: corrigir erros de build e testes
  - fix: corrigir caminho de tipos no package.json para react-native-builder-bob
  - fix: corrigir testes do componente Card (borderRadius -> r, backgroundColor -> bgColor)
  - fix: corrigir testes do componente CheckBox (status -> value, setStatus -> setValue)
  - feat: integração com expo-image para caching de imagens
  - refactor: mover funções de máscara para @s2mangas/core
  - feat: adicionar animações aos componentes Input

## 0.0.6

### Patch Changes

- **fix**: corrigir caminho de tipos no package.json para react-native-builder-bob
  - Corrigido o caminho do campo "types" de `lib/typescript/index.d.ts` para `lib/typescript/native/src/index.d.ts`
  - Resolvido erro de build do react-native-builder-bob

- **fix**: corrigir testes do componente Card
  - Substituído `borderRadius` por `r` conforme interface CardProps
  - Substituído `backgroundColor` por `bgColor` conforme interface CardProps
  - Adicionados testes para props `w`, `h`, `borderColor`, `borderWidth`, `align`, `justify`

- **fix**: corrigir testes do componente CheckBox
  - Substituído `status` e `setStatus` por `value` e `setValue` conforme interface CheckProps
  - Atualizados todos os testes para usar as props corretas

- **feat**: integração com expo-image para caching de imagens
  - Adicionado suporte ao expo-image no componente Image
  - Configurado Jest para mock do expo-image
  - Adicionado expo-image como peerDependency

- **refactor**: mover funções de máscara para @s2mangas/core
  - Movidas todas as funções de máscara (CPF, CEP, PHONE, etc.) para utils do core
  - Refatorados componentes Input e InputBig para usar máscaras do core
  - Melhorada organização do código e reutilização

- **feat**: adicionar animações aos componentes Input
  - Implementada animação de cor da borda no Input
  - Implementadas animações de foco e hover no InputBig
  - Adicionado suporte a useImperativeHandle para controle externo

## 0.0.5

### Patch Changes

- f27e5a3: fix: corrigir dependência workspace:\* para versão específica

  Corrige a dependência @s2mangas/core de workspace:\* para ^1.0.1 para que o pacote funcione corretamente quando instalado via npm.

## 0.0.4

### Patch Changes

- f27e5a3: feat: bump version for @s2mangas/native

  Nova versão do pacote native com melhorias e correções.

- f27e5a3: fix: corrigir dependência workspace:\* para versão específica

  Corrige a dependência @s2mangas/core de workspace:\* para ^1.0.1 para que o pacote funcione corretamente quando instalado via npm.

## 0.0.3

### Patch Changes

- 08407b0: feat: bump version for @s2mangas/native

  Nova versão do pacote native com melhorias e correções.

## 0.0.2

### Patch Changes

- 78b4186: Setup automated releases with GitHub Actions and Changesets

  This changeset sets up the automated release system that will:
  - Create release PRs automatically when changesets are merged
  - Publish packages to NPM automatically
  - Generate changelogs
  - Handle version bumping across the monorepo

- Updated dependencies [78b4186]
  - @s2mangas/core@1.0.1
