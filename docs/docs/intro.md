---
id: intro
title: 💡 Introdução
sidebar_position: 0
---

# 💡 Bem-vindo ao S2Mangás Kit

O **S2Mangás Kit** é um conjunto de **componentes e tema** para acelerar o desenvolvimento de **aplicações React Native**.  
Ele foi criado com foco em **produtividade, consistência e qualidade**, permitindo que você construa interfaces rapidamente sem perder boas práticas de UI/UX.

---

## 📦 Pacotes

O kit está dividido em dois pacotes principais:

### `@s2mangas/native`

- Componentes **prontos para React Native / Expo**
- Exemplos: `Button`, `Switch`, `Input`, `Loader`
- Totalmente personalizáveis e consistentes com o tema do kit

### `@s2mangas/core`

- Contém **tema e variáveis de estilo**
- Inclui cores, tamanhos, espaçamentos e outras definições globais
- Permite **padronizar visual** entre todos os componentes e telas

---

## 🚀 Objetivos

- **Agilizar o desenvolvimento** de apps React Native
- **Garantir consistência visual** usando um tema unificado
- **Fornecer componentes reutilizáveis** testados em produção
- **Permitir modularidade**, usando apenas os pacotes necessários

---

## 🛠️ Começando

1. Instale os pacotes:

```bash
npm install @s2mangas/native @s2mangas/core
# ou
yarn add @s2mangas/native @s2mangas/core
```

2. Importe e use os componentes:

```tsx
import { Button, Switch } from "@s2mangas/native";

<Button title="Clique aqui" onPress={() => console.log("clicou")} />
<Switch value={true} onValueChange={(val) => console.log(val)} />
```

3. Importe o tema para padronizar estilos:

```tsx
import { theme } from "@s2mangas/core";

console.log(theme.colors.primary); // exemplo: acessar cor primária
```