# 🚀 Guia de Deploy - S2Mangas Kit

Este guia explica como fazer deploy dos pacotes do kit de componentes S2Mangas.

## 📦 Pacotes Disponíveis

- **@s2mangas/core** - Utilitários e configurações base
- **@s2mangas/native** - Componentes React Native
- **@s2mangas/react** - Componentes React Web

## 🔄 Workflow de Deploy

### 1. **Preparação para Deploy**

```bash
# Navegar para o diretório do kit
cd kit_s2mangas

# Instalar dependências
pnpm install

# Executar verificações
pnpm check
pnpm test
```

### 2. **Criar Changeset**

```bash
# Criar um changeset para documentar as mudanças
pnpm changeset

# Ou usar o comando mais específico
pnpm changeset:add
```

**Exemplo de changeset:**
```markdown
---
"@s2mangas/native": patch
"@s2mangas/core": minor
---

feat: adiciona novos componentes Button e Modal
fix: corrige problema de importação no Storybook
docs: atualiza documentação dos componentes
```

### 3. **Verificar Status**

```bash
# Ver status dos changesets
pnpm changeset:status

# Verificar se tudo está pronto para deploy
pnpm release:check
```

### 4. **Deploy para Produção**

#### **Deploy Completo (Recomendado)**
```bash
# Deploy completo com versionamento automático
pnpm release-npm
```

#### **Deploy Manual**
```bash
# 1. Versionar pacotes
pnpm version-packages

# 2. Instalar dependências atualizadas
pnpm install

# 3. Build de todos os pacotes
pnpm build

# 4. Publicar no npm
pnpm release
```

### 5. **Deploy Beta (Para Testes)**

```bash
# Deploy beta para testes
pnpm release-beta
```

## 🎯 Scripts de Deploy Disponíveis

### **Scripts Principais:**
- `pnpm release-npm` - Deploy completo automatizado
- `pnpm release-beta` - Deploy beta para testes
- `pnpm release:check` - Verificar se está pronto para deploy

### **Scripts de Build:**
- `pnpm build` - Build de todos os pacotes
- `pnpm clean` - Limpar builds
- `pnpm clean:all` - Limpar tudo (incluindo node_modules)

### **Scripts de Verificação:**
- `pnpm check` - Lint + Typecheck
- `pnpm test` - Executar testes
- `pnpm test:coverage` - Testes com cobertura

## 📋 Checklist de Deploy

### ✅ **Antes do Deploy:**
- [ ] Todos os testes passando (`pnpm test`)
- [ ] Lint sem erros (`pnpm lint`)
- [ ] Typecheck sem erros (`pnpm typecheck`)
- [ ] Build funcionando (`pnpm build`)
- [ ] Changeset criado (`pnpm changeset`)
- [ ] Versão atualizada no package.json

### ✅ **Durante o Deploy:**
- [ ] Executar `pnpm release-npm`
- [ ] Verificar se os pacotes foram publicados no npm
- [ ] Testar instalação dos pacotes em um projeto novo

### ✅ **Após o Deploy:**
- [ ] Verificar se as versões estão corretas no npm
- [ ] Atualizar documentação se necessário
- [ ] Notificar equipe sobre o deploy

## 🔧 Configurações de Deploy

### **NPM Registry**
```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

### **Versionamento**
- **patch** - Correções de bugs
- **minor** - Novas funcionalidades (backward compatible)
- **major** - Breaking changes

## 🐛 Troubleshooting

### **Problemas Comuns:**

1. **Erro de autenticação no npm**
   ```bash
   npm login
   # Ou
   npm whoami
   ```

2. **Pacote já existe com a versão**
   - Verificar se o changeset foi aplicado corretamente
   - Verificar se a versão foi incrementada

3. **Build falha**
   ```bash
   pnpm clean:all
   pnpm install
   pnpm build
   ```

4. **Testes falham**
   ```bash
   pnpm test:debug
   # Verificar logs detalhados
   ```

### **Logs de Debug:**
```bash
# Deploy com logs detalhados
DEBUG=* pnpm release-npm

# Verificar status detalhado
pnpm changeset status --verbose
```

## 📚 Recursos Adicionais

- [Documentação Changesets](https://github.com/changesets/changesets)
- [NPM Publishing](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)

## 🚀 Deploy Rápido

Para um deploy rápido quando você tem certeza de que tudo está funcionando:

```bash
# 1. Criar changeset
pnpm changeset

# 2. Deploy automático
pnpm release-npm
```

## 📝 Exemplo de Workflow Completo

```bash
# 1. Desenvolver e testar
pnpm check
pnpm test

# 2. Criar changeset
pnpm changeset
# Editar o arquivo gerado

# 3. Deploy
pnpm release-npm

# 4. Verificar
npm view @s2mangas/native version
npm view @s2mangas/core version
```
