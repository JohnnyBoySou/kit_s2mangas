import { Button, Column, Title, Main, ScrollVertical } from '@s2mangas/native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <Main>
      <ScrollVertical>
        <Column
          gv={16}
          ph={24}
          pv={12}
         
          style={{ flexGrow: 1, flex: 1 }}
        >
          <Title>Componentes @s2mangas/native</Title>
          <Button variant="ghost" onPress={() => router.push('/buttons')}>
            Buttons
          </Button>
          <Button variant="ghost" onPress={() => router.push('/toggles')}>
            Toggles
          </Button>
          <Button variant="ghost" onPress={() => router.push('/cards')}>
            Cards
          </Button>
          <Button variant="ghost" onPress={() => router.push('/image')}>
            Image
          </Button>
          <Button variant="ghost" onPress={() => router.push('/tabs')}>
            Tabs
          </Button>
          <Button variant="ghost" onPress={() => router.push('/badges')}>
            Badges
          </Button>
          <Button variant="ghost" onPress={() => router.push('/typographys')}>
            Typographys
          </Button>
          <Button variant="ghost" onPress={() => router.push('/inputs')}>
            Inputs
          </Button>
        </Column>
      </ScrollVertical>
    </Main>
  );
}
