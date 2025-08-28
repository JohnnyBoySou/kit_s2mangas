# Sistema de Releases Automatizadas

Este projeto usa [Changesets](https://github.com/changesets/changesets) para gerenciar versões e releases automatizadas no GitHub e NPM.

## Como funciona

1. **Desenvolvimento**: Faça suas alterações normalmente
2. **Changeset**: Crie um changeset para documentar suas mudanças
3. **Pull Request**: Abra um PR para a branch `main`
4. **Release**: O sistema automaticamente criará releases e publicará no NPM

## Criando um Changeset

Quando você fizer alterações que devem ser incluídas em uma release, execute:

```bash
pnpm changeset
```

Isso irá:
- Perguntar quais pacotes foram alterados
- Perguntar o tipo de mudança (major, minor, patch)
- Solicitar uma descrição das mudanças
- Criar um arquivo de changeset

### Tipos de mudanças

- **Major (1.0.0 → 2.0.0)**: Breaking changes
- **Minor (1.0.0 → 1.1.0)**: Novas funcionalidades (backward compatible)
- **Patch (1.0.0 → 1.0.1)**: Bug fixes e melhorias menores

## Processo de Release

### 1. Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Fazer suas alterações
# ...

# Criar changeset
pnpm changeset

# Commit e push
git add .
git commit -m "feat: nova funcionalidade"
git push
```

### 2. Pull Request

Quando você abrir um PR para `main`, o GitHub Actions irá:
- Executar todos os testes
- Fazer build dos pacotes
- Verificar se tudo está funcionando

### 3. Release Automática

Quando o PR for mergeado na `main`, o sistema irá:
- Criar automaticamente um "Release PR" se houver changesets pendentes
- Este PR irá atualizar as versões dos pacotes e o CHANGELOG
- Quando você mergear o "Release PR", os pacotes serão automaticamente publicados no NPM

## Configuração Necessária

### Secrets do GitHub

Você precisa configurar os seguintes secrets no seu repositório GitHub:

1. **NPM_TOKEN**: Token de acesso do NPM
   - Vá para [npmjs.com](https://www.npmjs.com/)
   - Acesse "Access Tokens" nas configurações
   - Crie um token com permissão "Automation"
   - Adicione como secret `NPM_TOKEN` no GitHub

### Como adicionar secrets:

1. Vá para Settings → Secrets and variables → Actions
2. Clique em "New repository secret"
3. Adicione `NPM_TOKEN` com o valor do seu token NPM

## Comandos Úteis

```bash
# Criar changeset
pnpm changeset

# Versionar pacotes (aplicar changesets)
pnpm version-packages

# Fazer release manual (se necessário)
pnpm release

# Release beta
pnpm release-beta

# Ver status dos changesets
pnpm changeset status
```

## Estrutura dos Pacotes

- `@s2mangas/core`: Utilitários e tipos base
- `@s2mangas/react`: Componentes React
- `@s2mangas/native`: Componentes React Native

## Fluxo Completo de Exemplo

1. **Desenvolver nova funcionalidade**:
   ```bash
   # Fazer alterações no código
   git checkout -b feature/nova-funcionalidade
   # ... fazer alterações ...
   ```

2. **Criar changeset**:
   ```bash
   pnpm changeset
   # Selecionar pacotes alterados
   # Escolher tipo de mudança (minor para nova funcionalidade)
   # Descrever a mudança
   ```

3. **Commit e PR**:
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade"
   git push origin feature/nova-funcionalidade
   # Abrir PR no GitHub
   ```

4. **Merge do PR**: 
   - Após aprovação, mergear o PR
   - GitHub Actions criará automaticamente um "Release PR"

5. **Release**:
   - Revisar o "Release PR" (versões e changelog)
   - Mergear o "Release PR"
   - Pacotes são automaticamente publicados no NPM

## Troubleshooting

### Release não foi criada
- Verifique se há changesets pendentes: `pnpm changeset status`
- Verifique se o workflow do GitHub Actions executou sem erros

### Publicação no NPM falhou
- Verifique se o `NPM_TOKEN` está configurado corretamente
- Verifique se você tem permissões para publicar os pacotes
- Verifique se os nomes dos pacotes não conflitam com pacotes existentes

### Versões inconsistentes
- Execute `pnpm version-packages` para aplicar changesets pendentes
- Verifique se todas as dependências internas estão usando `workspace:*`