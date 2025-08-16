# 🎨 Expo Snack - Visualização Online

## Como usar o Expo Snack para visualizar componentes

### 1. **Acesse o Expo Snack**
- Vá para: https://snack.expo.dev/
- Ou use o link direto: https://snack.expo.dev/

### 2. **Configure o projeto**
```json
{
  "dependencies": {
    "@s2mangas/native": "latest",
    "react": "18.2.0",
    "react-native": "0.72.6"
  }
}
```

### 3. **Código de exemplo**
```tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from '@s2mangas/native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="headTitle" style={styles.title}>
          S2Mangas Components
        </Text>
      </View>

      <View style={styles.section}>
        <Text variant="title">Botões</Text>
        <View style={styles.row}>
          <Button label="Primary" variant="primary" onPress={() => alert('Primary!')} />
          <Button label="Secondary" variant="secondary" onPress={() => alert('Secondary!')} />
        </View>
        <View style={styles.row}>
          <Button label="Destructive" variant="destructive" onPress={() => alert('Destructive!')} />
          <Button label="Loading" variant="primary" loading={true} />
        </View>
      </View>

      <View style={styles.section}>
        <Text variant="title">Textos</Text>
        <Text variant="headTitle">HeadTitle - Título Principal</Text>
        <Text variant="title">Title - Título Secundário</Text>
        <Text variant="label">Label - Rótulo</Text>
        <Text variant="description">Description - Descrição longa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    color: '#ffffff',
  },
  section: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
});
```

### 4. **Vantagens do Expo Snack**
- ✅ Funciona no navegador
- ✅ Não precisa instalar nada
- ✅ Compartilhável via URL
- ✅ Funciona no celular
- ✅ Atualização em tempo real

### 5. **Limitações**
- ❌ Alguns componentes nativos podem não funcionar
- ❌ Performance limitada
- ❌ Não suporta todos os recursos do React Native
