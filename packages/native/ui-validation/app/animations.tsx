import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import {
  Avatar,
  Button,
  Input,
  Badge,
  Toggle,
  Switch,
  Card,
  Skeleton,
  MultiStepProgress,
  Column,
  Row,
  Title,
  Label,
  Description,
  Divider,
  useS2Mangas,
  Main,
} from 's2mangas-native';

export default function HomeScreen() {
  const { isDark, toggleAppearance } = useS2Mangas();
  const [toggleValue, setToggleValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  // Funções wrapper para compatibilidade com os tipos dos componentes
  const handleToggleChange = (value: boolean) => {
    setToggleValue(value);
    return value;
  };

  const handleSwitchChange = (value: boolean) => {
    setSwitchValue(value);
  };

  return (
    <Main>
      <Title>Componentes @s2mangas/native</Title>

      {/* Botões */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Botões</Label>
        <Row gh={8}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </Row>
      </Column>

      {/* Inputs */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Inputs</Label>
        <Input placeholder="Digite algo aqui..." />
        <Input placeholder="Com ícone" />
      </Column>

      {/* Badges e Avatars */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Badges e Avatars</Label>
        <Row gh={8}>
          <Badge variant="default">Novo</Badge>
          <Badge variant="secondary">Ativo</Badge>
          <Badge variant="destructive">Atenção</Badge>
          <Badge variant="outline">Erro</Badge>
        </Row>
        <Row gh={8}>
          <Avatar width={40} height={40} url="https://via.placeholder.com/40" />
          <Avatar width={60} height={60} url="https://via.placeholder.com/60" />
          <Avatar width={80} height={80} url="https://via.placeholder.com/80" />
        </Row>
      </Column>

      {/* Toggles e Switches */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Toggles e Switches</Label>
        <Row gh={16}>
          <Toggle value={toggleValue} setValue={handleToggleChange} />
          <Switch value={switchValue} setValue={handleSwitchChange} />
        </Row>
        <Row gh={16}>
          <Label>{`Toggle: ${toggleValue ? 'Ligado' : 'Desligado'}`}</Label>
          <Label>{`Switch: ${switchValue ? 'Ligado' : 'Desligado'}`}</Label>
        </Row>
      </Column>

      {/* Cards */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Cards</Label>
        <Card padding={16}>
          <Title>Título do Card</Title>
          <Description>
            Este é um exemplo de card usando os componentes do @s2mangas/native
          </Description>
          <Button variant="primary">Ação</Button>
        </Card>
      </Column>

      {/* Progress */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Progresso</Label>
        <MultiStepProgress steps={3} current={1} />
      </Column>

      {/* Skeleton */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Skeleton Loading</Label>
        <Skeleton w={200} h={20} />
        <Skeleton w={150} h={16} />
      </Column>

      {/* Tema */}
      <Column gv={16} style={styles.componentGroup}>
        <Label>Controle de Tema</Label>
        <Button 
          variant="outline" 
          onPress={toggleAppearance}
          label={`Alternar Tema (${isDark ? 'Escuro' : 'Claro'})`}
        />
      </Column>

      <Divider />
    </Main>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  nativeComponentsSection: {
    gap: 24,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  componentGroup: {
    paddingVertical: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
