import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeadTitle, Title, Label, SubLabel, Description, U } from './text';

export default {
  title: 'Components/Text',
  parameters: {
    notes: 'Componentes de texto React Native com diferentes estilos e hierarquias',
  },
};

// HeadTitle
export const HeadTitleComponent = {
  render: () => (
    <View style={styles.container}>
      <HeadTitle>Este é um HeadTitle</HeadTitle>
      <HeadTitle size={24} color="#007AFF">HeadTitle Menor</HeadTitle>
      <HeadTitle size={40} color="#28a745" align="center">HeadTitle Grande</HeadTitle>
    </View>
  ),
};

// Title
export const TitleComponent = {
  render: () => (
    <View style={styles.container}>
      <Title>Este é um Title</Title>
      <Title size={20} color="#FF6B6B">Title Menor</Title>
      <Title size={36} color="#6f42c1" align="center">Title Grande</Title>
    </View>
  ),
};

// Label
export const LabelComponent = {
  render: () => (
    <View style={styles.container}>
      <Label>Este é um Label</Label>
      <Label size={18} color="#007AFF">Label Maior</Label>
      <Label size={12} color="#666" align="center">Label Menor</Label>
    </View>
  ),
};

// SubLabel
export const SubLabelComponent = {
  render: () => (
    <View style={styles.container}>
      <SubLabel>Este é um SubLabel</SubLabel>
      <SubLabel size={16} color="#007AFF">SubLabel Maior</SubLabel>
      <SubLabel size={10} color="#999" align="center">SubLabel Menor</SubLabel>
    </View>
  ),
};

// Description
export const DescriptionComponent = {
  render: () => (
    <View style={styles.container}>
      <Description>
        Este é um texto descritivo que pode conter múltiplas linhas e informações detalhadas sobre algo.
      </Description>
      <Description size={16} color="#007AFF" align="center">
        Descrição com cor personalizada e alinhamento centralizado.
      </Description>
      <Description size={12} color="#666" spacing={2}>
        Descrição com espaçamento entre letras aumentado para melhor legibilidade.
      </Description>
    </View>
  ),
};

// Underlined Text
export const UnderlinedComponent = {
  render: () => (
    <View style={styles.container}>
      <U>Texto Sublinhado</U>
      <Label>
        Texto normal com <U>parte sublinhada</U> no meio.
      </Label>
    </View>
  ),
};

// Hierarquia de textos
export const TextHierarchy = {
  render: () => (
    <View style={styles.container}>
      <HeadTitle size={32} mb={16}>Hierarquia de Textos</HeadTitle>
      <Title size={24} mb={12}>Título Principal</Title>
      <Label size={18} mb={8}>Rótulo Importante</Label>
      <SubLabel size={16} mb={8}>Sub-rotulo</SubLabel>
      <Description size={14} mb={16}>
        Este é um exemplo de como os diferentes componentes de texto se relacionam 
        em uma hierarquia visual clara e consistente.
      </Description>
      <U>Link ou texto sublinhado</U>
    </View>
  ),
};

// Texto com margens
export const TextWithMargins = {
  render: () => (
    <View style={styles.container}>
      <HeadTitle mb={20}>Texto com Margem Inferior</HeadTitle>
      <Title mt={16} mb={12}>Texto com Margens Superior e Inferior</Title>
      <Label mh={20} mv={8}>Texto com Margens Horizontais e Verticais</Label>
      <SubLabel ml={10} mr={10}>Texto com Margens Laterais</SubLabel>
      <Description mt={16} mb={8}>
        Este exemplo demonstra como usar as diferentes propriedades de margem 
        para controlar o espaçamento entre os elementos de texto.
      </Description>
    </View>
  ),
};

// Texto com alinhamentos
export const TextAlignments = {
  render: () => (
    <View style={styles.container}>
      <Title align="left" mb={12}>Alinhado à Esquerda</Title>
      <Title align="center" mb={12}>Alinhado ao Centro</Title>
      <Title align="right" mb={12}>Alinhado à Direita</Title>
      
      <Label align="left" mb={8}>Label à esquerda</Label>
      <Label align="center" mb={8}>Label centralizado</Label>
      <Label align="right" mb={8}>Label à direita</Label>
      
      <Description align="left" mb={16}>
        Este texto está alinhado à esquerda para demonstrar como o alinhamento funciona 
        em diferentes situações e contextos de uso.
      </Description>
    </View>
  ),
};

// Texto com cores
export const TextColors = {
  render: () => (
    <View style={styles.container}>
      <Title color="#007AFF" mb={8}>Azul Primário</Title>
      <Title color="#28a745" mb={8}>Verde Sucesso</Title>
      <Title color="#FF6B6B" mb={8}>Vermelho Erro</Title>
      <Title color="#6f42c1" mb={8}>Roxo</Title>
      <Title color="#fd7e14" mb={8}>Laranja</Title>
      <Title color="#20c997" mb={8}>Verde Água</Title>
      
      <Label color="#666" mb={4}>Texto secundário</Label>
      <SubLabel color="#999" mb={4}>Texto terciário</SubLabel>
      <Description color="#B2B2B2">
        Texto descritivo com cor personalizada para demonstrar a flexibilidade 
        do sistema de cores.
      </Description>
    </View>
  ),
};

// Texto com tamanhos
export const TextSizes = {
  render: () => (
    <View style={styles.container}>
      <HeadTitle size={48} mb={8}>48px - Muito Grande</HeadTitle>
      <HeadTitle size={36} mb={8}>36px - Grande</HeadTitle>
      <Title size={28} mb={8}>28px - Médio Grande</Title>
      <Title size={24} mb={8}>24px - Médio</Title>
      <Label size={20} mb={8}>20px - Médio Pequeno</Label>
      <Label size={16} mb={8}>16px - Normal</Label>
      <SubLabel size={14} mb={8}>14px - Pequeno</SubLabel>
      <SubLabel size={12} mb={8}>12px - Muito Pequeno</SubLabel>
      <Description size={10} mb={8}>10px - Extra Pequeno</Description>
    </View>
  ),
};

// Exemplo de uso em card
export const TextInCard = {
  render: () => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <HeadTitle size={24} mb={8}>Produto Premium</HeadTitle>
        <Title size={20} color="#007AFF" mb={8}>R$ 99,90</Title>
        <Label size={16} mb={12}>Categoria: Tecnologia</Label>
        <Description size={14} mb={12}>
          Este é um produto de alta qualidade com recursos avançados e design moderno. 
          Ideal para usuários que buscam performance e estilo.
        </Description>
        <SubLabel size={12} mb={8}>Disponível em estoque</SubLabel>
        <U>Ver detalhes completos</U>
      </View>
    </View>
  ),
};

// Exemplo de uso em perfil
export const TextInProfile = {
  render: () => (
    <View style={styles.profileContainer}>
      <View style={styles.profileCard}>
        <HeadTitle size={28} mb={4}>João Silva</HeadTitle>
        <SubLabel size={16} mb={16}>Desenvolvedor Full Stack</SubLabel>
        
        <Label size={16} mb={4}>Email</Label>
        <Description size={14} mb={12}>joao.silva@email.com</Description>
        
        <Label size={16} mb={4}>Localização</Label>
        <Description size={14} mb={12}>São Paulo, SP</Description>
        
        <Label size={16} mb={4}>Bio</Label>
        <Description size={14} mb={16}>
          Desenvolvedor apaixonado por criar soluções inovadoras e experiências 
          de usuário excepcionais.
        </Description>
        
        <U>Editar perfil</U>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
  },
  cardContainer: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
  },
  card: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  profileContainer: {
    padding: 20,
    backgroundColor: '#000000',
    flex: 1,
  },
  profileCard: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
});
