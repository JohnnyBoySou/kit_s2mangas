
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
} from 's2mangas-native';

export default function ImageScreen() {

  return (
    <Main>
      <ScrollVertical>
        <Column
          gv={16}
          ph={24}
          pv={44}
          justify="center"
          align="center"
          style={{ flexGrow: 1, flex: 1 }}
        >
          <Title>Imagens e Avatars - Documentação</Title>
          <Description>
            Componentes de imagem e avatar do @s2mangas/native com todas as suas variantes e propriedades.
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
                  src="https://via.placeholder.com/200x150"
                  accessibilityLabel="Imagem de exemplo"
                />
                <Image 
                  w={300}
                  h={200}
                  src="https://picsum.photos/300/200"
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
                    src="https://via.placeholder.com/100x100"
                    accessibilityLabel="Pequena"
                  />
                  <Image 
                    w={150}
                    h={150}
                    src="https://via.placeholder.com/150x150"
                    accessibilityLabel="Média"
                  />
                  <Image 
                    w={200}
                    h={200}
                    src="https://via.placeholder.com/200x200"
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
                    src="https://via.placeholder.com/120x80"
                    accessibilityLabel="Landscape"
                  />
                  <Image 
                    w={80}
                    h={120}
                    src="https://via.placeholder.com/80x120"
                    accessibilityLabel="Portrait"
                  />
                  <Image 
                    w={100}
                    h={100}
                    src="https://via.placeholder.com/100x100"
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
                  <Avatar 
                    width={40}
                    height={40}
                    url="https://via.placeholder.com/40x40"
                  />
                  <Avatar 
                    width={60}
                    height={60}
                    url="https://via.placeholder.com/60x60"
                  />
                  <Avatar 
                    width={80}
                    height={80}
                    url="https://via.placeholder.com/80x80"
                  />
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
                    <Avatar 
                      width={32}
                      height={32}
                      url="https://via.placeholder.com/32x32"
                    />
                    <Label>32px</Label>
                  </Column>
                  <Column align="center">
                    <Avatar 
                      width={48}
                      height={48}
                      url="https://via.placeholder.com/48x48"
                    />
                    <Label>48px</Label>
                  </Column>
                  <Column align="center">
                    <Avatar 
                      width={64}
                      height={64}
                      url="https://via.placeholder.com/64x64"
                    />
                    <Label>64px</Label>
                  </Column>
                  <Column align="center">
                    <Avatar 
                      width={96}
                      height={96}
                      url="https://via.placeholder.com/96x96"
                    />
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
                  <Avatar 
                    width={60}
                    height={60}
                    url="https://picsum.photos/60/60?random=1"
                  />
                  <Avatar 
                    width={60}
                    height={60}
                    url="https://picsum.photos/60/60?random=2"
                  />
                  <Avatar 
                    width={60}
                    height={60}
                    url="https://picsum.photos/60/60?random=3"
                  />
                  <Avatar 
                    width={60}
                    height={60}
                    url="https://picsum.photos/60/60?random=4"
                  />
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
                    src="https://imagem-inexistente.com/100x100"
                    accessibilityLabel="Imagem que não carrega"
                  />
                  <Image 
                    w={100}
                    h={100}
                    src=""
                    accessibilityLabel="URL vazia"
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
                  src="https://via.placeholder.com/400x200"
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
                  <Avatar 
                    width={50}
                    height={50}
                    url="https://via.placeholder.com/50x50"
                  />
                  <Column>
                    <Title level={3}>João Silva</Title>
                    <Description>Desenvolvedor Frontend</Description>
                  </Column>
                </Row>
                <Image 
                  w={350}
                  h={150}
                  src="https://via.placeholder.com/400x150"
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
                Teste como os componentes de imagem se comportam em diferentes temas.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Avatar 
                    width={60}
                    height={60}
                    url="https://via.placeholder.com/60x60"
                  />
                  <Image 
                    w={100}
                    h={100}
                    src="https://via.placeholder.com/100x100"
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
                Lista completa das propriedades que podem ser usadas no componente Image.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>width: number | string</Label>
                <Description>Largura da imagem em pixels ou porcentagem</Description>

                <Label>height: number | string</Label>
                <Description>Altura da imagem em pixels ou porcentagem</Description>

                <Label>url: string</Label>
                <Description>URL da imagem a ser carregada</Description>

                <Label>alt: string</Label>
                <Description>Texto alternativo para acessibilidade</Description>

                <Label>style: ViewStyle</Label>
                <Description>Estilos adicionais do React Native</Description>

                <Label>resizeMode: 'cover' | 'contain' | 'stretch' | 'center'</Label>
                <Description>Modo de redimensionamento da imagem</Description>
              </Column>
            </Card>
          </Column>

          {/* Propriedades do Componente Avatar */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades do Componente Avatar</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no componente Avatar.
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