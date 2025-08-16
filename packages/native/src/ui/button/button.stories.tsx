import { View, StyleSheet } from 'react-native';
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
    onPress: () => console.log('button-pressed'),
  },
};

// Botão primário
export const Primary = {
  args: {
    label: 'Botão Primário',
    variant: 'primary',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão secundário
export const Secondary = {
  args: {
    label: 'Botão Secundário',
    variant: 'secondary',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão destrutivo
export const Destructive = {
  args: {
    label: 'Botão Destrutivo',
    variant: 'destructive',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão outline
export const Outline = {
  args: {
    label: 'Botão Outline',
    variant: 'outline',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão ghost
export const Ghost = {
  args: {
    label: 'Botão Ghost',
    variant: 'ghost',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão link
export const Link = {
  args: {
    label: 'Botão Link',
    variant: 'link',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão blur
export const Blur = {
  args: {
    label: 'Botão Blur',
    variant: 'blur',
    onPress: () => console.log('button-pressed'),
  },
};

// Botão com loading
export const Loading = {
  args: {
    label: 'Carregando...',
    variant: 'primary',
    loading: true,
    onPress: () => console.log('button-pressed'),
  },
};

// Botão desabilitado
export const Disabled = {
  args: {
    label: 'Botão Desabilitado',
    variant: 'primary',
    disabled: true,
    onPress: () => console.log('button-pressed'),
  },
};

// Comparação de variantes
export const AllVariants = {
  render: () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label="Default" variant="default" onPress={() => console.log('default-pressed')} />
        <Button label="Primary" variant="primary" onPress={() => console.log('primary-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Secondary" variant="secondary" onPress={() => console.log('secondary-pressed')} />
        <Button label="Destructive" variant="destructive" onPress={() => console.log('destructive-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Outline" variant="outline" onPress={() => console.log('outline-pressed')} />
        <Button label="Ghost" variant="ghost" onPress={() => console.log('ghost-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Link" variant="link" onPress={() => console.log('link-pressed')} />
        <Button label="Blur" variant="blur" onPress={() => console.log('blur-pressed')} />
      </View>
    </View>
  ),
};

// Estados do botão
export const ButtonStates = {
  render: () => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label="Normal" variant="primary" onPress={() => console.log('normal-pressed')} />
        <Button label="Loading" variant="primary" loading={true} onPress={() => console.log('loading-pressed')} />
      </View>
      <View style={styles.row}>
        <Button label="Disabled" variant="primary" disabled={true} onPress={() => console.log('disabled-pressed')} />
        <Button label="With Icon" variant="primary" onPress={() => console.log('icon-pressed')} />
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
          onPress={() => console.log('icon-pressed')} 
        />
        <Button 
          variant="primary" 
          icon={<View style={styles.icon} />}
          onPress={() => console.log('icon-only-pressed')} 
        />
      </View>
    </View>
  ),
};

// Botão com children
export const WithChildren = {
  render: () => (
    <View style={styles.container}>
      <Button variant="primary" onPress={() => console.log('children-pressed')}>
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
