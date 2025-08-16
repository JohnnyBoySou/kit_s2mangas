import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from './modal';
import { Button } from './button';
import { Text } from './text';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    notes: 'Componente Modal reutilizável com overlay e animações',
  },
  argTypes: {
    visible: {
      control: { type: 'boolean' },
      description: 'Controla se o modal está visível',
    },
    animationType: {
      control: { type: 'select' },
      options: ['none', 'slide', 'fade'],
      description: 'Tipo de animação do modal',
    },
    transparent: {
      control: { type: 'boolean' },
      description: 'Se o modal deve ter fundo transparente',
    },
  },
};

const ModalWrapper = ({ visible, ...props }) => {
  const [isVisible, setIsVisible] = useState(visible);

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsVisible(true)}>
        Abrir Modal
      </Button>
      
      <Modal
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        {...props}
      >
        <View style={styles.modalContent}>
          <Text variant="title" style={styles.modalTitle}>
            Modal de Exemplo
          </Text>
          <Text variant="description" style={styles.modalDescription}>
            Este é um exemplo de modal com conteúdo personalizado.
            Você pode adicionar qualquer conteúdo aqui.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              variant="secondary"
              onPress={() => setIsVisible(false)}
              style={styles.button}
            >
              Cancelar
            </Button>
            <Button
              onPress={() => {
                console.log('confirm-pressed');
                setIsVisible(false);
              }}
              style={styles.button}
            >
              Confirmar
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export const Default = {
  args: {
    visible: false,
    animationType: 'fade',
    transparent: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const SlideAnimation = {
  args: {
    visible: false,
    animationType: 'slide',
    transparent: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const NoAnimation = {
  args: {
    visible: false,
    animationType: 'none',
    transparent: true,
  },
  render: (args) => <ModalWrapper {...args} />,
};

export const CustomStyle = {
  args: {
    visible: false,
    animationType: 'fade',
    transparent: true,
    style: {
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      padding: 30,
    },
    overlayStyle: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
  render: (args) => <ModalWrapper {...args} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    marginBottom: 10,
    textAlign: 'center',
  },
  modalDescription: {
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    minWidth: 100,
  },
});
