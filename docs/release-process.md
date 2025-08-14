# Processo de Release - S2Mangas Kit

Este documento explica como fazer releases dos pacotes do S2Mangas Kit.

## Visão Geral

O projeto usa [Changesets](https://github.com/changesets/changesets) para gerenciar versões e releases. O processo é automatizado via GitHub Actions.

## Fluxo de Release

### 1. Desenvolvimento
Durante o desenvolvimento, quando você faz mudanças que precisam ser versionadas:

```bash
# Criar um changeset
pnpm changeset

# Ou usar o alias
pnpm changeset:add
```

Isso irá:
- Abrir um prompt interativo
- Permitir selecionar os pacotes afetados
- Escolher o tipo de mudança (patch, minor, major)
- Adicionar uma descrição da mudança

### 2. Commit e Push
```bash
git add .
git commit -m "feat: adicionar nova funcionalidade"
git push origin main
```

### 3. Release Automático
Quando o código é enviado para a branch `main`, a GitHub Action:
1. Verifica se há changesets pendentes
2. Se houver, executa o processo de release
3. Se não houver, pula o release

## Comandos Úteis

### Verificar Status dos Changesets
```bash
pnpm changeset:status
```

### Fazer Release Manual
```bash
# Usar o script interativo
pnpm release:check

# Ou fazer release direto (não recomendado)
pnpm release
```

### Criar Changeset Programaticamente
```bash
# Para um pacote específico
pnpm changeset add --package @s2mangas/core

# Para múltiplos pacotes
pnpm changeset add --package @s2mangas/core --package @s2mangas/react
```

## Problemas Comuns

### "No unpublished projects to publish"

**Causa**: Tentativa de fazer release sem changesets pendentes.

**Solução**:
1. Verificar se há changesets: `pnpm changeset:status`
2. Se não houver, criar um: `pnpm changeset`
3. Commit e push das mudanças

### "Version X is already published on npm"

**Causa**: Tentativa de publicar uma versão que já existe.

**Solução**:
1. Verificar se há changesets pendentes
2. Se não houver, não há necessidade de release
3. Se houver, o changeset irá incrementar a versão automaticamente

### Pipeline Executando Sem Mudanças

**Causa**: A pipeline está sendo executada mesmo sem changesets.

**Solução**: A pipeline foi atualizada para verificar changesets antes de executar.

## Estrutura dos Pacotes

- `@s2mangas/core` - Utilitários e constantes
- `@s2mangas/native` - Componentes React Native
- `@s2mangas/react` - Componentes React Web

## Versionamento

- **Patch** (1.0.0 → 1.0.1): Bug fixes
- **Minor** (1.0.0 → 1.1.0): Novas funcionalidades (backward compatible)
- **Major** (1.0.0 → 2.0.0): Breaking changes

## Dependências Internas

Os pacotes usam `workspace:*` para dependências internas, que são resolvidas automaticamente durante o build.

## Troubleshooting

### Reset Changesets
Se precisar resetar os changesets:

```bash
# Remover todos os changesets
rm -rf .changeset/*.md

# Ou remover um específico
rm .changeset/[hash].md
```

### Forçar Release
Se precisar forçar um release sem mudanças:

```bash
# Criar changeset vazio
pnpm changeset add --empty

# Ou editar manualmente o package.json
# (não recomendado)
```

### Verificar Versões Publicadas
```bash
# Verificar versão no npm
npm view @s2mangas/core version
npm view @s2mangas/native version
npm view @s2mangas/react version
```

## Dicas

1. **Sempre use changesets** para mudanças que precisam ser versionadas
2. **Teste localmente** antes de fazer push
3. **Verifique o status** antes de tentar fazer release
4. **Use o script interativo** (`pnpm release:check`) para releases manuais
5. **Mantenha a documentação atualizada** quando fizer mudanças significativas
