import React from 'react';
import { View, StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    notes: 'Botão React Native com múltiplas variantes e estados',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'ghost', 'link', 'outline', 'primary', 'blur'],
      description: 'Variante visual do botão',
    },
    label: {
      control: { type: 'text' },
      description: 'Texto do botão',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Estado de carregamento',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Estado desabilitado',
    },
    onPress: { action: 'pressed' },
  },
};

// Story básica
export const Default = {
  args: {
    label: 'Botão Padrão',
    variant: 'default',
    onPress: action('button-pressed'),
  },
};

// Botão primário
export const Primary = {
  args: {
    label: 'Botão Primário',
    variant: 'primary',
    onPress: action('button-pressed'),
  },
};

// Botão secundário
export const Secondary = {
  args: {
    label: 'Botão Secundário',
    variant: 'secondary',
    onPress: action('button-pressed'),
  },
};

// Botão destrutivo
export const Destructive = {
  args: {
    label: 'Botão Destrutivo',
    variant: 'destructive',
    onPress: action('button-pressed'),
  },
};

// Botão outline
export const Outline = {
  args: {
    label: 'Botão Outline',
    variant: 'outline',
    onPress: action('button-pressed'),
  },
};

// Botão ghost
export const Ghost = {
  args: {
    label: 'Botão Ghost',
    variant: 'ghost',
    onPress: action('button-pressed'),
  },
};

// Botão link
export const Link = {
  args: {
    label: 'Botão Link',
    variant: 'link',
    onPress: action('button-pressed'),
  },
};

// Botão blur
export const Blur = {
  args: {
    label: 'Botão Blur',
    variant: 'blur',
    onPress: action('button-pressed'),
  },
};

// Botão com loading
export const Loading = {
  args: {
    label: 'Carregando...',
    variant: 'primary',
    loading: true,
    onPress: action('button-pressed'),
  },
};

// Botão desabilitado
export const Disabled = {
  args: {
    label: 'Botão Desabilitado',
    variant: 'primary',
    disabled: true,
    onPress: action('button-pressed'),
  },
};

// Comparação de variantes
export const AllVariants = {
  render: () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label="Default" variant="default" onPress={action('default-pressed')} />
        <Button label="Primary" variant="primary" onPress={action('primary-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Secondary" variant="secondary" onPress={action('secondary-pressed')} />
        <Button label="Destructive" variant="destructive" onPress={action('destructive-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Outline" variant="outline" onPress={action('outline-pressed')} />
        <Button label="Ghost" variant="ghost" onPress={action('ghost-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Link" variant="link" onPress={action('link-pressed')} />
        <Button label="Blur" variant="blur" onPress={action('blur-pressed')} />
      </View>
    </View>
  ),
};

// Estados do botão
export const ButtonStates = {
  render: () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label="Normal" variant="primary" onPress={action('normal-pressed')} />
        <Button label="Loading" variant="primary" loading={true} onPress={action('loading-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Disabled" variant="primary" disabled={true} onPress={action('disabled-pressed')} />
        <Button label="With Icon" variant="primary" onPress={action('icon-pressed')} />
      </View>
    </View>
  ),
};

// Botão com ícone
export const WithIcon = {
  render: () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button 
          label="Com Ícone" 
          variant="primary" 
          icon={<View style={styles.icon} />}
          onPress={action('icon-pressed')} 
        />
        <Button 
          variant="primary" 
          icon={<View style={styles.icon} />}
          onPress={action('icon-only-pressed')} 
        />
      </View>
    </View>
  ),
};

// Botão com children
export const WithChildren = {
  render: () => (
    <View style={styles.container}>
      <Button variant="primary" onPress={action('children-pressed')}>
        <View style={styles.customContent}>
          <View style={styles.icon} />
          <View style={styles.textContainer}>
            <View style={styles.customText} />
            <View style={styles.customSubtext} />
          </View>
        </View>
      </Button>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  icon: {
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  customContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 8,
  },
  customText: {
    width: 60,
    height: 12,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    marginBottom: 4,
  },
  customSubtext: {
    width: 40,
    height: 8,
    backgroundColor: '#ffffff80',
    borderRadius: 2,
  },
});
