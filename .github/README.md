# GitHub Actions Workflows

Este diretório contém os workflows do GitHub Actions para automação de CI/CD do projeto S2Mangas.

## 📋 **Workflows Disponíveis**

### 🔄 **CI (ci.yml)**
**Trigger:** Push/PR para `main` e `develop`

**Jobs:**
- **Setup** - Configuração inicial
- **Install** - Instalação de dependências (Node 18 e 20)
- **Lint** - Verificação de código com ESLint e Prettier
- **Typecheck** - Verificação de tipos TypeScript
- **Build** - Build de todos os pacotes
- **Test** - Execução de testes

### 🚀 **Release (release.yml)**
**Trigger:** Push de tags `v*`

**Jobs:**
- **Release** - Criação automática de releases
- Build e testes antes do release
- Upload de assets para o GitHub
- Publicação no NPM

### 🔒 **Dependabot (dependabot.yml)**
**Trigger:** PRs do Dependabot e schedule semanal

**Jobs:**
- **Dependabot** - Validação de PRs do Dependabot
- **Security** - Auditoria de segurança semanal
- Criação automática de issues para vulnerabilidades

### 📱 **React Native Tests (react-native.yml)**
**Trigger:** Mudanças no pacote `native`

**Jobs:**
- **React Native Tests** - Testes específicos do React Native
- **React Native E2E** - Testes end-to-end
- **React Native Bundle** - Análise de bundle

## 🛠 **Scripts Disponíveis**

### **Raiz do Projeto**
```bash
# Build
pnpm build

# Linting
pnpm lint
pnpm lint:fix

# Type Checking
pnpm typecheck

# Testes
pnpm test
pnpm test:watch
pnpm test:coverage

# Formatação
pnpm format
pnpm format:check

# Limpeza
pnpm clean
```

### **Pacotes Individuais**
```bash
# Core
cd packages/core
pnpm build
pnpm test

# Native
cd packages/native
pnpm build
pnpm lint
pnpm typecheck
pnpm test

# React
cd packages/react
pnpm build
pnpm test
```

## 🔧 **Configurações**

### **Dependabot**
- Atualizações semanais (segunda-feira às 9h)
- Limite de 10 PRs abertos
- Labels automáticas
- Reviewers e assignees configurados

### **Codecov**
- Meta de cobertura: 80%
- Threshold: 5%
- Ignora arquivos de build e configuração
- Comentários automáticos em PRs

### **Cache**
- Cache do pnpm habilitado
- Cache do Node.js habilitado
- Artifacts retidos por 7-30 dias

## 🚨 **Secrets Necessários**

### **NPM_TOKEN**
Para publicação automática no NPM:
```bash
# Gerar token no npmjs.com
# Adicionar em Settings > Secrets > NPM_TOKEN
```

### **GITHUB_TOKEN**
Automático, não precisa configurar.

## 📊 **Status Badges**

Adicione estes badges ao README principal:

```markdown
![CI](https://github.com/s2mangas/kit-s2mangas/workflows/CI/badge.svg)
![Release](https://github.com/s2mangas/kit-s2mangas/workflows/Release/badge.svg)
![React Native Tests](https://github.com/s2mangas/kit-s2mangas/workflows/React%20Native%20Tests/badge.svg)
![Dependabot](https://github.com/s2mangas/kit-s2mangas/workflows/Dependabot/badge.svg)
```

## 🔍 **Troubleshooting**

### **Build Falhando**
1. Verificar logs do job "Build"
2. Executar `pnpm build` localmente
3. Verificar dependências quebradas

### **Testes Falhando**
1. Verificar logs do job "Test"
2. Executar `pnpm test` localmente
3. Verificar cobertura de testes

### **Lint Falhando**
1. Verificar logs do job "Lint"
2. Executar `pnpm lint:fix` localmente
3. Verificar configuração do ESLint

### **Typecheck Falhando**
1. Verificar logs do job "Typecheck"
2. Executar `pnpm typecheck` localmente
3. Verificar tipos TypeScript

## 📈 **Métricas**

Os workflows geram métricas automáticas:
- **Tempo de execução** por job
- **Taxa de sucesso** dos builds
- **Cobertura de testes** via Codecov
- **Vulnerabilidades** de segurança
- **Dependências desatualizadas**

## 🔄 **Workflow de Desenvolvimento**

1. **Fork** do repositório
2. **Branch** para feature/fix
3. **Desenvolvimento** local
4. **Push** para branch
5. **CI** roda automaticamente
6. **PR** para main/develop
7. **Review** e merge
8. **Release** automático (se tag)
