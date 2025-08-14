import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { S2MangasProvider, useS2Mangas, useTheme, useColors } from './index';

// Componente de exemplo que usa o hook combinado
const ExampleComponent: React.FC = () => {
  const { 
    theme, 
    colors, 
    isDark, 
    isDarkMode, 
    toggleAppearance, 
    setDarkAppearance, 
    setLightAppearance 
  } = useS2Mangas();

  return (
    <View style={[styles.container, { backgroundColor: theme.color.background }]}>
      <Text style={[styles.title, { color: theme.color.text }]}>
        Exemplo de Uso dos Providers
      </Text>
      
      <View style={styles.infoContainer}>
        <Text style={[styles.info, { color: theme.color.label }]}>
          Tema Atual: {isDark ? 'Escuro' : 'Claro'}
        </Text>
        <Text style={[styles.info, { color: theme.color.label }]}>
          Modo Cores: {isDarkMode ? 'Escuro' : 'Claro'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, { backgroundColor: theme.color.primary }]}
          onPress={toggleAppearance}
        >
          <Text style={[styles.buttonText, { color: theme.color.textGhost }]}>
            Alternar Aparência
          </Text>
        </Pressable>

        <Pressable 
          style={[styles.button, { backgroundColor: theme.color.secondary }]}
          onPress={setDarkAppearance}
        >
          <Text style={[styles.buttonText, { color: theme.color.textGhost }]}>
            Modo Escuro
          </Text>
        </Pressable>

        <Pressable 
          style={[styles.button, { backgroundColor: theme.color.ghost }]}
          onPress={setLightAppearance}
        >
          <Text style={[styles.buttonText, { color: theme.color.text }]}>
            Modo Claro
          </Text>
        </Pressable>
      </View>

      <View style={styles.colorPalette}>
        <Text style={[styles.paletteTitle, { color: theme.color.title }]}>
          Paleta de Cores
        </Text>
        <View style={styles.colorGrid}>
          <View style={[styles.colorSwatch, { backgroundColor: colors.primary }]}>
            <Text style={styles.colorLabel}>Primary</Text>
          </View>
          <View style={[styles.colorSwatch, { backgroundColor: colors.secondary }]}>
            <Text style={styles.colorLabel}>Secondary</Text>
          </View>
          <View style={[styles.colorSwatch, { backgroundColor: colors.success }]}>
            <Text style={styles.colorLabel}>Success</Text>
          </View>
          <View style={[styles.colorSwatch, { backgroundColor: colors.error }]}>
            <Text style={styles.colorLabel}>Error</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Componente que usa apenas o provider de tema
const ThemeOnlyComponent: React.FC = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.color.background }]}>
      <Text style={[styles.title, { color: theme.color.text }]}>
        Apenas Provider de Tema
      </Text>
      <Text style={[styles.info, { color: theme.color.label }]}>
        Tema: {isDark ? 'Escuro' : 'Claro'}
      </Text>
      <Pressable 
        style={[styles.button, { backgroundColor: theme.color.primary }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: theme.color.textGhost }]}>
          Alternar Tema
        </Text>
      </Pressable>
    </View>
  );
};

// Componente que usa apenas o provider de cores
const ColorOnlyComponent: React.FC = () => {
  const { colors, isDarkMode, setDarkMode, setLightMode } = useColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background.primary }]}>
      <Text style={[styles.title, { color: colors.text.primary }]}>
        Apenas Provider de Cores
      </Text>
      <Text style={[styles.info, { color: colors.text.secondary }]}>
        Modo: {isDarkMode ? 'Escuro' : 'Claro'}
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={setDarkMode}
        >
          <Text style={[styles.buttonText, { color: colors.text.inverse }]}>
            Modo Escuro
          </Text>
        </Pressable>
        <Pressable 
          style={[styles.button, { backgroundColor: colors.secondary }]}
          onPress={setLightMode}
        >
          <Text style={[styles.buttonText, { color: colors.text.inverse }]}>
            Modo Claro
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

// App principal com providers
const AppWithProviders: React.FC = () => {
  return (
    <S2MangasProvider>
      <ExampleComponent />
      <ThemeOnlyComponent />
      <ColorOnlyComponent />
    </S2MangasProvider>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  colorPalette: {
    alignItems: 'center',
  },
  paletteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  colorSwatch: {
    width: 80,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppWithProviders;
