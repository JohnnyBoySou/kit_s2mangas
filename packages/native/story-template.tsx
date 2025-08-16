import React from 'react';
import { View, StyleSheet } from 'react-native';
import YourComponent from './your-component';

export default {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    notes: 'Descrição do seu componente',
  },
  argTypes: {
    // Defina os controles interativos aqui
    // Exemplo:
    // variant: {
    //   control: { type: 'select' },
    //   options: ['default', 'primary', 'secondary'],
    //   description: 'Variante do componente',
    // },
  },
};

// Story padrão
export const Default = {
  args: {
    // Props padrão do componente
  },
};

// Story com render customizado
export const CustomRender = {
  render: () => (
    <View style={styles.container}>
      <YourComponent />
    </View>
  ),
};

// Story com ações
export const WithActions = {
  args: {
    onPress: () => console.log('component-pressed'),
  },
};

// Story com diferentes variantes
export const Variants = {
  render: () => (
    <View style={styles.container}>
      <YourComponent variant="default" />
      <YourComponent variant="primary" />
      <YourComponent variant="secondary" />
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
});
