# S2Mangas UI Kit

Um design system completo com componentes para React Web e React Native.

## 📦 Pacotes

- **@s2mangas/core**: Design tokens, temas e utilitários
- **@s2mangas/react**: Componentes React Web
- **@s2mangas/native**: Componentes React Native

## 🚀 Quick Start

### Instalação

```bash
# Clone o repositório
git clone https://github.com/s2mangas/kit-s2mangas.git
cd kit-s2mangas

# Instale as dependências
pnpm install

# Build dos pacotes
pnpm build
```

### Uso

```bash
# React Web
import { Button, Card, Text } from '@s2mangas/react';

# React Native
import { Button, Card, Text } from '@s2mangas/native';
```

## 📚 Documentação Visual

### Storybook React Web
```bash
# Executar Storybook React
pnpm storybook

# Build do Storybook React
pnpm storybook:build
```

**Acesse**: http://localhost:6006

### Storybook React Native
```bash
# Executar Storybook React Native
pnpm storybook:native

# Build do Storybook React Native
pnpm storybook:native:build
```

**Acesse**: http://localhost:7007

## 🎨 Componentes Disponíveis

### React Web
- ✅ Button
- ✅ Badge
- ✅ Card
- ✅ Checkbox
- ✅ Divider
- ✅ Input
- ✅ Loader
- ✅ Switch
- ✅ Text
- ✅ Layout

### React Native
- ✅ Button
- ✅ Text (HeadTitle, Title, Label, SubLabel, Description)
- 🔄 Em desenvolvimento...

## 🧪 Testes

```bash
# Executar todos os testes
pnpm test

# Testes com coverage
pnpm test:coverage

# Testes em modo watch
pnpm test:watch
```

## 🔧 Desenvolvimento

### Scripts Disponíveis

```bash
# Build
pnpm build

# Lint
pnpm lint
pnpm lint:fix

# Type check
pnpm typecheck

# Formatação
pnpm format
pnpm format:check

# Limpeza
pnpm clean:all
```

### Estrutura do Projeto

```
packages/
├── core/           # Design tokens e temas
├── react/          # Componentes React Web
└── native/         # Componentes React Native
```

## 📖 Documentação

### Storybook React Web
- Componentes interativos
- Controles de propriedades
- Exemplos de uso
- Documentação automática

### Storybook React Native
- Visualização em dispositivo/emulador
- Controles on-device
- Exemplos de uso nativo
- Documentação específica para mobile

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

- 📧 Email: suporte@s2mangas.com
- 🐛 Issues: [GitHub Issues](https://github.com/s2mangas/kit-s2mangas/issues)
- 📖 Documentação: [Storybook](http://localhost:6006)

## 🔄 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para informações sobre mudanças em cada versão.
