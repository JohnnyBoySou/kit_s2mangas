import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button } from './src/ui/button';
import { Text as TextComponent } from './src/ui/text';
import Modal from './src/ui/modal/modal';

const Playground = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const sections = [
    {
      title: 'Button Components',
      component: (
        <View style={styles.section}>
          <TextComponent variant="title" style={styles.sectionTitle}>
            Botões
          </TextComponent>
          <View style={styles.row}>
            <Button label="Default" variant="default" onPress={() => console.log('default')} />
            <Button label="Primary" variant="primary" onPress={() => console.log('primary')} />
          </View>
          <View style={styles.row}>
            <Button label="Secondary" variant="secondary" onPress={() => console.log('secondary')} />
            <Button label="Destructive" variant="destructive" onPress={() => console.log('destructive')} />
          </View>
          <View style={styles.row}>
            <Button label="Loading" variant="primary" loading={true} onPress={() => console.log('loading')} />
            <Button label="Disabled" variant="primary" disabled={true} onPress={() => console.log('disabled')} />
          </View>
        </View>
      ),
    },
    {
      title: 'Text Components',
      component: (
        <View style={styles.section}>
          <TextComponent variant="title" style={styles.sectionTitle}>
            Textos
          </TextComponent>
          <TextComponent variant="headTitle">HeadTitle - Título Principal</TextComponent>
          <TextComponent variant="title">Title - Título Secundário</TextComponent>
          <TextComponent variant="label">Label - Rótulo</TextComponent>
          <TextComponent variant="subLabel">SubLabel - Sub-rótulo</TextComponent>
          <TextComponent variant="description">
            Description - Descrição longa para mostrar como o texto se comporta em múltiplas linhas
          </TextComponent>
        </View>
      ),
    },
    {
      title: 'Modal Component',
      component: (
        <View style={styles.section}>
          <TextComponent variant="title" style={styles.sectionTitle}>
            Modal
          </TextComponent>
          <Button 
            label="Abrir Modal" 
            variant="primary" 
            onPress={() => setModalVisible(true)} 
          />
          <Modal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContent}>
              <TextComponent variant="title" style={styles.modalTitle}>
                Modal de Exemplo
              </TextComponent>
              <TextComponent variant="description" style={styles.modalDescription}>
                Este é um exemplo de modal funcionando no playground.
              </TextComponent>
              <View style={styles.buttonContainer}>
                <Button
                  variant="secondary"
                  onPress={() => setModalVisible(false)}
                  style={styles.modalButton}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={() => {
                    console.log('confirmado');
                    setModalVisible(false);
                  }}
                  style={styles.modalButton}
                >
                  Confirmar
                </Button>
              </View>
            </View>
          </Modal>
        </View>
      ),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TextComponent variant="headTitle" style={styles.headerTitle}>
          S2Mangas Native Playground
        </TextComponent>
        <TextComponent variant="description" style={styles.headerDescription}>
          Visualize e teste os componentes React Native
        </TextComponent>
      </View>

      {sections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          {section.component}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerTitle: {
    color: '#ffffff',
    marginBottom: 8,
  },
  headerDescription: {
    color: '#cccccc',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#ffffff',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
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
  modalButton: {
    minWidth: 100,
  },
});

export default Playground;
