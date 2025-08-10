# Guia de Desenvolvimento - @s2mangas/native

Este documento explica como usar as ferramentas de desenvolvimento configuradas para o projeto.

## Scripts Disponíveis

### Linting
```bash
# Verificar problemas de código
pnpm lint

# Corrigir problemas automaticamente
pnpm lint:fix
```

### Type Checking
```bash
# Verificar tipos TypeScript
pnpm typecheck
```

### Verificação Completa
```bash
# Executar lint e typecheck
pnpm check
```

## Configurações

### ESLint
- Configurado para React Native com TypeScript
- Regras específicas para React Hooks
- Integração com Prettier para formatação

### TypeScript
- Configuração rigorosa para detectar problemas
- Verificação de tipos em tempo de desenvolvimento
- Suporte a JSX/TSX

### Prettier
- Formatação automática do código
- Configurações consistentes para o projeto

## VSCode

O projeto inclui configurações do VSCode para:
- Formatação automática ao salvar
- Validação em tempo real do ESLint
- Suporte completo ao TypeScript
- Auto-imports e sugestões inteligentes

## Estrutura de Arquivos

```
src/
├── ui/           # Componentes UI
├── index.ts      # Arquivo principal de exportação
└── ...

.eslintignore     # Arquivos ignorados pelo ESLint
.eslintrc.js     # Configuração do ESLint
.prettierrc      # Configuração do Prettier
tsconfig.json    # Configuração do TypeScript
.vscode/         # Configurações do VSCode
```

## Boas Práticas

1. **Sempre execute `pnpm check` antes de fazer commit**
2. **Use `pnpm lint:fix` para corrigir problemas de formatação**
3. **Mantenha os tipos TypeScript atualizados**
4. **Siga as regras do ESLint para consistência**

## Resolução de Problemas

### Erros de Lint
Se encontrar erros de lint, execute:
```bash
pnpm lint:fix
```

### Erros de Tipo
Para verificar problemas de tipo:
```bash
pnpm typecheck
```

### Dependências
Se houver problemas com dependências:
```bash
pnpm install
```
