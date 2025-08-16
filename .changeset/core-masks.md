---
"@s2mangas/core": patch
---

feat: adicionar funções de máscara para inputs

- Adicionadas funções `applyCpfMask`, `applyCepMask`, `applyPhoneMask`, `applyBirthdateMask`, `applyCurrencyMask`
- Adicionado tipo `MaskType` e interface `MaskConfig`
- Adicionada função `getMaskFunction` para obter configuração de máscara
- Implementados testes completos para todas as funções de máscara
- Funções movidas do pacote native para o core para melhor reutilização
