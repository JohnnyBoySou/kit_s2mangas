import {
  Column,
  Row,
  Title,
  Label,
  Description,
  Divider,
  Main,
  Card,
  ScrollVertical,
  Image,
  Avatar,
} from '@s2mangas/native';

const IMAGES_URL = [
  'https://i.pinimg.com/736x/c6/39/71/c63971ec3499e09623800b42cfa3451f.jpg',
  'https://i.pinimg.com/736x/e8/89/03/e8890380ff70baf178fd07c3a22ce269.jpg',
  'https://i.pinimg.com/736x/6f/88/cd/6f88cdefea4ba7daef0733c1f54f61dd.jpg',
  'https://i.pinimg.com/736x/6f/30/23/6f3023226e542866353a540b1563f65e.jpg',
  'https://i.pinimg.com/736x/ab/26/6b/ab266b03ee56bdb30dd56d7b99e77468.jpg',
  'https://i.pinimg.com/736x/b2/ed/eb/b2edebb4b2ece94b2995d75f104e0e11.jpg',
  'https://i.pinimg.com/736x/15/f7/02/15f702634b0d5bb9260033a73e089c95.jpg',
  'https://i.pinimg.com/736x/7b/98/90/7b9890bd455e41340b470a8059203098.jpg',
];

const getRandomImage = () => {
  return IMAGES_URL[Math.floor(Math.random() * IMAGES_URL.length)];
};

export default function ImageScreen() {
  return (
    <Main>
      <ScrollVertical>
        <Column gv={16} ph={24} pv={44}>
          <Title>Imagens e Avatars - Documentação</Title>
          <Description>
            Componentes de imagem e avatar do @s2mangas/native com todas as suas
            variantes e propriedades.
          </Description>

          <Divider />

          {/* Componente Image */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componente Image</Title>
              <Description>
                Componente de imagem com cache automático e otimizações.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Image
                  w={200}
                  h={150}
                  src={getRandomImage()}
                  accessibilityLabel="Imagem de exemplo"
                />
                <Image
                  w={300}
                  h={200}
                  src={getRandomImage()}
                  accessibilityLabel="Imagem aleatória"
                />
              </Column>
            </Card>
          </Column>

          {/* Tamanhos de Imagem */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tamanhos de Imagem</Title>
              <Description>
                Diferentes tamanhos disponíveis para o componente Image.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Image
                    w={100}
                    h={100}
                    src={getRandomImage()}
                    accessibilityLabel="Pequena"
                  />
                  <Image
                    w={150}
                    h={150}
                    src={getRandomImage()}
                    accessibilityLabel="Média"
                  />
                  <Image
                    w={200}
                    h={200}
                    src={getRandomImage()}
                    accessibilityLabel="Grande"
                  />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Proporções de Imagem */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Proporções de Imagem</Title>
              <Description>
                Diferentes proporções e formatos de imagem.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Image
                    w={120}
                    h={80}
                    src={getRandomImage()}
                    accessibilityLabel="Landscape"
                  />
                  <Image
                    w={80}
                    h={120}
                    src={getRandomImage()}
                    accessibilityLabel="Portrait"
                  />
                  <Image
                    w={100}
                    h={100}
                    src={getRandomImage()}
                    accessibilityLabel="Square"
                  />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Componente Avatar */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componente Avatar</Title>
              <Description>
                Componente de avatar para perfis de usuário.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Avatar w={40} h={40} src={getRandomImage()} />
                  <Avatar w={60} h={60} src={getRandomImage()} />
                  <Avatar w={80} h={80} src={getRandomImage()} />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Tamanhos de Avatar */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tamanhos de Avatar</Title>
              <Description>
                Diferentes tamanhos disponíveis para o componente Avatar.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Column align="center">
                    <Avatar w={32} h={32} src={getRandomImage()} />
                    <Label>32px</Label>
                  </Column>
                  <Column align="center">
                    <Avatar w={48} h={48} src={getRandomImage()} />
                    <Label>48px</Label>
                  </Column>
                  <Column align="center">
                    <Avatar w={64} h={64} src={getRandomImage()} />
                    <Label>64px</Label>
                  </Column>
                  <Column align="center">
                    <Avatar w={96} h={96} src={getRandomImage()} />
                    <Label>96px</Label>
                  </Column>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Avatars com Diferentes Imagens */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Avatars com Diferentes Imagens</Title>
              <Description>
                Exemplos de avatars com diferentes tipos de imagem.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Avatar w={60} h={60} src={getRandomImage()} />
                  <Avatar w={60} h={60} src={getRandomImage()} />
                  <Avatar w={60} h={60} src={getRandomImage()} />
                  <Avatar w={60} h={60} src={getRandomImage()} />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Imagens com Placeholder */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Imagens com Placeholder</Title>
              <Description>
                Imagens que mostram um placeholder quando não carregam.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Image
                    w={100}
                    h={100}
                    src=""
                    r={12}
                    bg="#101010"
                    accessibilityLabel="Imagem que não carrega"
                  />
                  <Image
                    w={100}
                    h={100}
                    fallback
                    accessibilityLabel="Fallback padrão"
                  />
                  <Image
                    w={100}
                    h={100}
                    src=""
                    fallback
                    bg="#303030"
                    accessibilityLabel="Fallback com background"
                  />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Imagens Responsivas */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Imagens Responsivas</Title>
              <Description>
                Imagens que se adaptam ao tamanho do container.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Image
                  w={350}
                  h={200}
                  src={getRandomImage()}
                  accessibilityLabel="Imagem responsiva"
                />
              </Column>
            </Card>
          </Column>

          {/* Exemplos Práticos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Exemplos Práticos</Title>
              <Description>
                Exemplos de uso real dos componentes de imagem.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={12}>
                  <Avatar w={50} h={50} src={getRandomImage()} />
                  <Column>
                    <Title level={3}>João Silva</Title>
                    <Description>Desenvolvedor Frontend</Description>
                  </Column>
                </Row>
                <Image
                  w={350}
                  h={150}
                  src={getRandomImage()}
                  accessibilityLabel="Banner do perfil"
                />
              </Column>
            </Card>
          </Column>

          {/* Controle de Tema */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Controle de Tema</Title>
              <Description>
                Teste como os componentes de imagem se comportam em diferentes
                temas.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Avatar w={60} h={60} src={getRandomImage()} />
                  <Image
                    w={100}
                    h={100}
                    src={getRandomImage()}
                    accessibilityLabel="Imagem com tema"
                  />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Propriedades do Componente Image */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades do Componente Image</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no
                componente Image.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>width: number | string</Label>
                <Description>
                  Largura da imagem em pixels ou porcentagem
                </Description>

                <Label>height: number | string</Label>
                <Description>
                  Altura da imagem em pixels ou porcentagem
                </Description>

                <Label>url: string</Label>
                <Description>URL da imagem a ser carregada</Description>

                <Label>alt: string</Label>
                <Description>Texto alternativo para acessibilidade</Description>

                <Label>style: ViewStyle</Label>
                <Description>Estilos adicionais do React Native</Description>

                <Label>
                  resizeMode: 'cover' | 'contain' | 'stretch' | 'center'
                </Label>
                <Description>Modo de redimensionamento da imagem</Description>
              </Column>
            </Card>
          </Column>

          {/* Propriedades do Componente Avatar */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades do Componente Avatar</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no
                componente Avatar.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>width: number</Label>
                <Description>Largura do avatar em pixels</Description>

                <Label>height: number</Label>
                <Description>Altura do avatar em pixels</Description>

                <Label>url: string</Label>
                <Description>URL da imagem do avatar</Description>

                <Label>style: ViewStyle</Label>
                <Description>Estilos adicionais do React Native</Description>

                <Label>borderRadius: number</Label>
                <Description>Raio da borda para formato circular</Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}
