import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { S2MangasProvider } from '@s2mangas/native';
import 'react-native-reanimated';

export default function RootLayout() {
  const colorScheme = "dark";
  const [loaded] = useFonts({
    Font_Black: require('../../assets/fonts/Circular_Black.ttf'),
    Font_Bold: require('../../assets/fonts/Circular_Bold.ttf'),
    Font_Medium: require('../../assets/fonts/Circular_Medium.ttf'),
    Font_Book: require('../../assets/fonts/Circular_Book.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const headerStyle = {
    backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: colorScheme === 'dark' ? '#333333' : '#e5e5e5',
  };

  const headerTitleStyle = {
    color: colorScheme === 'dark' ? '#ffffff' : '#000000',
    fontSize: 18,
    fontWeight: '600' as const,
  };

  const headerTintColor = colorScheme === 'dark' ? '#ffffff' : '#000000';

  return (
    <S2MangasProvider 
      themeProps={{ initialIsDark: colorScheme === 'dark' }}
      colorProps={{ initialIsDarkMode: colorScheme === 'dark' }}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ 
              title: 'Home',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="typographys" 
            options={{ 
              title: 'Tipografia',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="inputs" 
            options={{ 
              title: 'Inputs',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="buttons" 
            options={{ 
              title: 'Botões',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="cards" 
            options={{ 
              title: 'Cards',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="toggles" 
            options={{ 
              title: 'Toggles',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="image" 
            options={{ 
              title: 'Image',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="flatlist" 
            options={{ 
              title: 'FlatList',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="modal" 
            options={{ 
              title: 'Modal',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="tabs" 
            options={{ 
              title: 'Tabs',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
          <Stack.Screen 
            name="badges" 
            options={{ 
              title: 'Badges',
              headerShown: true,
              headerStyle,
              headerTitleStyle,
              headerTintColor,
            }} 
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </S2MangasProvider>
  );
}
