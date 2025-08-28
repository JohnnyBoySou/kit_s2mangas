import { useState } from 'react';

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
  Button,
  Image,
  Avatar,
  Skeleton,
} from '@s2mangas/native';

export default function CardsScreen() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Main>
      <ScrollVertical>
        <Column
          gv={16}
          ph={24}
          pv={44}
        >
          <Title>Componentes Card - Documentação</Title>
          <Description>
            Componentes de Card do @s2mangas/native com todas as suas variantes e propriedades.
          </Description>

          <Divider />

          {/* Card Básico */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card Básico</Title>
              <Description>
                Card simples com conteúdo básico.
              </Description>
            </Column>
            <Card pv={16} ph={16} bgColor="#202020">
              <Column gv={8}>
                <Title level={3}>Título do Card</Title>
                <Description>
                  Este é um exemplo de card básico com título e descrição.
                </Description>
              </Column>
            </Card>
          </Column>

          {/* Card com Imagem */}
          <Column gv={12} >
            <Column gv={6} mv={12}>
              <Title level={2}>Card com Imagem</Title>
              <Description>
                Card que inclui uma imagem para melhor apresentação visual.
              </Description>
            </Column>
            <Card pv={16} ph={16} borderColor="#fff" borderWidth={1}>
              <Column gv={12}>
                <Image 
                  src="https://picsum.photos/300/200" 
                  w={300} 
                  h={200} 
                  accessibilityLabel="Imagem de exemplo"
                />
                <Column gv={8}>
                  <Title level={3}>Card com Imagem</Title>
                  <Description>
                    Este card inclui uma imagem para demonstrar como o componente
                    pode ser usado para apresentar conteúdo visual.
                  </Description>
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Card com Avatar */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card com Avatar</Title>
              <Description>
                Card que inclui um avatar para representar usuários ou entidades.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={12}>
                  <Avatar 
                    src="https://picsum.photos/50/50" 
                    w={50} 
                    h={50} 
                  />
                  <Column gv={4}>
                    <Title level={3}>João Silva</Title>
                    <Label>Desenvolvedor Frontend</Label>
                  </Column>
                </Row>
                <Description>
                  Este é um exemplo de card com avatar, útil para perfis de usuário,
                  comentários ou qualquer conteúdo que precise de identificação visual.
                </Description>
              </Column>
            </Card>
          </Column>

          {/* Card com Ações */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card com Ações</Title>
              <Description>
                Card que inclui botões ou ações interativas.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Card Interativo</Title>
                <Description>
                  Este card demonstra como incluir ações e botões para criar
                  interfaces interativas e funcionais.
                </Description>
                <Row gh={8}>
                  <Button variant="primary" size="sm">
                    Ação Principal
                  </Button>
                  <Button variant="outline" size="sm">
                    Ação Secundária
                  </Button>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Card com Diferentes Espaçamentos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Espaçamentos do Card</Title>
              <Description>
                Diferentes configurações de padding vertical e horizontal.
              </Description>
            </Column>
            <Card pv={8} ph={8}>
              <Column gv={4}>
                <Title level={3}>Espaçamento Pequeno</Title>
                <Description>pv={8} ph={8}</Description>
              </Column>
            </Card>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Title level={3}>Espaçamento Médio</Title>
                <Description>pv={16} ph={16} (padrão)</Description>
              </Column>
            </Card>
            <Card pv={24} ph={24}>
              <Column gv={12}>
                <Title level={3}>Espaçamento Grande</Title>
                <Description>pv={24} ph={24}</Description>
              </Column>
            </Card>
          </Column>

          {/* Card com Conteúdo Complexo */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card com Conteúdo Complexo</Title>
              <Description>
                Card que demonstra como organizar conteúdo mais complexo.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={12}>
                  <Avatar 
                    src="https://picsum.photos/60/60" 
                    w={60} 
                    h={60} 
                  />
                  <Column gv={4}>
                    <Title level={3}>Artigo Destacado</Title>
                    <Label>Publicado em 15 de Dezembro, 2024</Label>
                    <Label>Por: Maria Santos</Label>
                  </Column>
                </Row>
                <Image 
                  src="https://picsum.photos/400/200" 
                  w={350} 
                  h={175} 
                  accessibilityLabel="Imagem do artigo"
                />
                <Description>
                  Este é um exemplo de card com conteúdo complexo, incluindo
                  avatar, metadados, imagem e descrição. Ideal para artigos,
                  posts de blog ou qualquer conteúdo rico em informações.
                </Description>
                <Row gh={8}>
                  <Button variant="primary" size="sm">
                    Ler Mais
                  </Button>
                  <Button variant="ghost" size="sm">
                    Compartilhar
                  </Button>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Cards em Grid */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Cards em Grid</Title>
              <Description>
                Exemplo de como organizar múltiplos cards em layout de grid.
              </Description>
            </Column>
            <Column gv={12}>
              <Row gh={12}>
                <Card pv={12} ph={12} style={{ flex: 1 }}>
                  <Column gv={6}>
                    <Title level={4}>Card 1</Title>
                    <Description>Primeiro card do grid</Description>
                  </Column>
                </Card>
                <Card pv={12} ph={12} style={{ flex: 1 }}>
                  <Column gv={6}>
                    <Title level={4}>Card 2</Title>
                    <Description>Segundo card do grid</Description>
                  </Column>
                </Card>
              </Row>
              <Row gh={12}>
                <Card pv={12} ph={12} style={{ flex: 1 }}>
                  <Column gv={6}>
                    <Title level={4}>Card 3</Title>
                    <Description>Terceiro card do grid</Description>
                  </Column>
                </Card>
                <Card pv={12} ph={12} style={{ flex: 1 }}>
                  <Column gv={6}>
                    <Title level={4}>Card 4</Title>
                    <Description>Quarto card do grid</Description>
                  </Column>
                </Card>
              </Row>
            </Column>
          </Column>

          {/* Card com Estado */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card com Estado</Title>
              <Description>
                Card que demonstra como trabalhar com estados interativos.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Card Interativo</Title>
                <Description>
                  Este card demonstra como criar conteúdo expansível e
                  interativo usando estados.
                </Description>
                <Button 
                  variant="outline" 
                  size="sm"
                  onPress={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Recolher' : 'Expandir'}
                </Button>
                {isExpanded && (
                  <Column gv={8}>
                    <Divider />
                    <Description>
                      Conteúdo adicional que aparece quando o card está expandido.
                      Este é um exemplo de como criar cards dinâmicos e interativos.
                    </Description>
                    <Row gh={8}>
                      <Button variant="ghost" size="sm">
                        Ação 1
                      </Button>
                      <Button variant="ghost" size="sm">
                        Ação 2
                      </Button>
                    </Row>
                  </Column>
                )}
              </Column>
            </Card>
          </Column>

          {/* Card com Skeleton */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card com Skeleton</Title>
              <Description>
                Exemplos de como usar o componente Skeleton em cards para mostrar
                estados de carregamento.
              </Description>
            </Column>
            <Column gv={12}>
              {/* Skeleton de Card Básico */}
              <Card pv={16} ph={16}>
                <Column gv={12}>
                  <Skeleton w={200} h={24} r={12} />
                  <Skeleton w={300} h={16} r={12} />
                  <Skeleton w={250} h={16} r={12} />
                </Column>
              </Card>

              {/* Skeleton de Card com Avatar */}
              <Card pv={16} ph={16}>
                <Column gv={12}>
                  <Row gh={12}>
                    <Skeleton w={50} h={50} r={25} />
                    <Column gv={4}>
                      <Skeleton w={120} h={20} />
                      <Skeleton w={150} h={14} />
                    </Column>
                  </Row>
                  <Skeleton w={280} h={16} />
                  <Skeleton w={250} h={16} />
                </Column>
              </Card>

              {/* Skeleton de Card com Imagem */}
              <Card pv={16} ph={16}>
                <Column gv={12}>
                  <Skeleton w={300} h={200} />
                  <Skeleton w={200} h={24} />
                  <Skeleton w={280} h={16} />
                  <Skeleton w={250} h={16} />
                </Column>
              </Card>

              {/* Skeleton de Card Complexo */}
              <Card pv={16} ph={16}>
                <Column gv={12}>
                  <Row gh={12}>
                    <Skeleton w={60} h={60} r={30} />
                    <Column gv={4}>
                      <Skeleton w={140} h={20} />
                      <Skeleton w={180} h={14} />
                      <Skeleton w={120} h={14} />
                    </Column>
                  </Row>
                  <Skeleton w={350} h={175} />
                  <Skeleton w={280} h={16} />
                  <Skeleton w={250} h={16} />
                  <Row gh={8}>
                    <Skeleton w={80} h={32} />
                    <Skeleton w={100} h={32} />
                  </Row>
                </Column>
              </Card>
            </Column>
          </Column>

          {/* Card com Diferentes Temas */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Card em Diferentes Contextos</Title>
              <Description>
                Exemplos de cards em diferentes contextos de uso.
              </Description>
            </Column>
            <Column gv={12}>
              <Card pv={16} ph={16} style={{ backgroundColor: '#f8f9fa' }}>
                <Column gv={8}>
                  <Title level={3}>Card com Background Customizado</Title>
                  <Description>
                    Card com cor de fundo personalizada para destacar conteúdo.
                  </Description>
                </Column>
              </Card>
              <Card pv={16} ph={16} style={{ borderWidth: 2, borderColor: '#007bff' }}>
                <Column gv={8}>
                  <Title level={3}>Card com Borda Destacada</Title>
                  <Description>
                    Card com borda personalizada para indicar importância ou status.
                  </Description>
                </Column>
              </Card>
            </Column>
          </Column>

          {/* Exemplos Práticos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Exemplos Práticos</Title>
              <Description>
                Exemplos de uso real dos componentes Card.
              </Description>
            </Column>
            <Column gv={12}>
              <Title level={3}>Feed de Notícias</Title>
              <Card pv={16} ph={16}>
                <Column gv={12}>
                  <Row gh={12}>
                    <Avatar 
                      src="https://picsum.photos/40/40" 
                      w={40} 
                      h={40} 
                    />
                    <Column gv={4}>
                      <Title level={4}>Tech News</Title>
                      <Label>Há 2 horas</Label>
                    </Column>
                  </Row>
                  <Description>
                    Nova atualização do React Native traz melhorias significativas
                    no desempenho e novas APIs para desenvolvedores.
                  </Description>
                  <Row gh={8}>
                    <Button variant="ghost" size="sm">
                      Curtir
                    </Button>
                    <Button variant="ghost" size="sm">
                      Comentar
                    </Button>
                    <Button variant="ghost" size="sm">
                      Compartilhar
                    </Button>
                  </Row>
                </Column>
              </Card>
            </Column>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no componente Card.
              </Description>
            </Column>
            <Card pv={16} ph={16} bgColor="#202020">
              <Column gv={8}>
                <Label>pv: number</Label>
                <Description>Padding vertical do card</Description>

                <Label>ph: number</Label>
                <Description>Padding horizontal do card</Description>

                <Label>style: ViewStyle</Label>
                <Description>Estilos adicionais do React Native</Description>

                <Label>children: React.ReactNode</Label>
                <Description>Conteúdo do card</Description>

                <Label>testID: string</Label>
                <Description>ID para testes automatizados</Description>

                <Label>accessibilityLabel: string</Label>
                <Description>Label para acessibilidade</Description>

                <Label>accessibilityHint: string</Label>
                <Description>Dica para acessibilidade</Description>
              </Column>
            </Card>
          </Column>

          {/* Casos de Uso */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Casos de Uso Recomendados</Title>
              <Description>
                Quando e como usar o componente Card.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>Feed de Conteúdo</Label>
                <Description>Posts, artigos, notícias</Description>

                <Label>Perfis de Usuário</Label>
                <Description>Informações de usuário com avatar</Description>

                <Label>Produtos/E-commerce</Label>
                <Description>Cards de produtos com imagem e preço</Description>

                <Label>Dashboards</Label>
                <Description>Métricas e informações em grid</Description>

                <Label>Formulários</Label>
                <Description>Agrupamento de campos relacionados</Description>

                <Label>Modais/Dialogs</Label>
                <Description>Conteúdo modal com ações</Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}
