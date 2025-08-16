# @s2mangas/core

## 1.0.2

### Patch Changes

- **feat**: adicionar funções de máscara para inputs
  - Adicionadas funções `applyCpfMask`, `applyCepMask`, `applyPhoneMask`, `applyBirthdateMask`, `applyCurrencyMask`
  - Adicionado tipo `MaskType` e interface `MaskConfig`
  - Adicionada função `getMaskFunction` para obter configuração de máscara
  - Implementados testes completos para todas as funções de máscara
  - Funções movidas do pacote native para o core para melhor reutilização

## 1.0.1

### Patch Changes

- 78b4186: Setup automated releases with GitHub Actions and Changesets

  This changeset sets up the automated release system that will:
  - Create release PRs automatically when changesets are merged
  - Publish packages to NPM automatically
  - Generate changelogs
  - Handle version bumping across the monorepo
