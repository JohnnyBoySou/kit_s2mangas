---
id: get-started
title: 🚀 Comece Agora
sidebar_position: 3
---

import Tabs from "../../src/components/Tabs/index";
import TabItem from "../../src/components/Tabs/item";

# 🚀 Comece Agora

Bem-vindo ao **S2Mangás Kit**!  
Este projeto é um **kit de componentes e tema para React Native**, criado e testado para acelerar o desenvolvimento de aplicações móveis.  
Ele é dividido em pacotes, para você usar apenas o que precisar:

- **`@s2mangas/native`** → componentes visuais prontos para React Native / Expo
- **`@s2mangas/core`** → tema e variáveis de estilo (cores, tamanhos, espaçamentos)

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (>= 18)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)

---

## 📦 Instalação

<Tabs>
  <TabItem label="npm">

```bash
# instalar apenas os componentes React Native
npm install @s2mangas/native

# instalar o tema
npm install @s2mangas/core
```

  </TabItem>
  <TabItem label="yarn">

```bash
# instalar apenas os componentes React Native
yarn add @s2mangas/native

# instalar o tema
yarn add @s2mangas/core
```

  </TabItem>
</Tabs>

---

## 🔨 Uso Básico

```tsx
import React from "react";
import { Button, Switch } from "@s2mangas/native";

export default function App() {
  return (
    <>
      <Button title="Clique aqui" onPress={() => console.log("clicou")} />
      <Switch value={true} onValueChange={(val) => console.log(val)} />
    </>
  );
}
```

Exemplo de uso do **tema** do core:

```tsx
import { theme } from "@s2mangas/core";

console.log(theme.colors.primary); // acessar cor primária
console.log(theme.spacing.sm); // acessar espaçamento pequeno
```

---

## 🧪 Testando no Expo Snack

Você pode visualizar e testar os componentes diretamente no [Expo Snack](https://snack.expo.dev/).
👉 Em breve disponibilizaremos exemplos prontos com links diretos para abrir no Snack e interagir com cada componente.

---

## 📚 Próximos Passos

- Veja a [📦 Documentação dos Componentes](../category/componentes)
- Contribua no [GitHub](https://github.com/JohnnyBoySou/kit_s2mangas)
