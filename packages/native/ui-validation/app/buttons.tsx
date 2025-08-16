import { useState } from 'react';

import {
  Button,
  Column,
  Row,
  Title,
  Label,
  Description,
  Divider,
  useS2Mangas,
  Main,
  Card,
  ScrollVertical,
} from 's2mangas-native';

export default function ButtonsScreen() {
  const { isDark, toggleAppearance } = useS2Mangas();
  const [loading, setLoading] = useState(false);

  const handleLoadingPress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Main>
      <ScrollVertical>
        <Column gv={6} ph={24} pv={44}>
          <Title level={1}>Botões</Title>
          <Description>
            Componente Button do @s2mangas/native com todas as suas variantes e
            propriedades.
          </Description>

          <Divider />

          {/* Variantes de Botões */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Variantes</Title>
              <Description>
                Diferentes estilos visuais disponíveis para o botão.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </Row>
                <Row gh={8}>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Estados dos Botões */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Estados</Title>
              <Description>
                Diferentes estados que um botão pode ter.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" disabled>
                    Desabilitado
                  </Button>
                  <Button variant="primary" loading>
                    Carregando
                  </Button>
                </Row>
                <Row gh={8}>
                  <Button
                    variant="secondary"
                    loading={loading}
                    onPress={handleLoadingPress}
                    
                  >
                    {loading ? 'Carregando...' : 'Clique para carregar'}
                  </Button>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Tamanhos dos Botões */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tamanhos</Title>
              <Description>
                Diferentes tamanhos disponíveis para o botão.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Button variant="primary" size="sm">Pequeno</Button>
                  <Button variant="primary" size="md">Médio</Button>
                  <Button variant="primary" size="lg">Grande</Button>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Botões com Ícones */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Botões com Ícones</Title>
              <Description>
                Botões que incluem ícones para melhor UX.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Button variant="primary" icon="plus">
                    Adicionar
                  </Button>
                  <Button variant="secondary" icon="edit">
                    Editar
                  </Button>
                  <Button variant="outline" icon="trash">
                    Excluir
                  </Button>
                </Row>
                <Row gh={8}>
                  <Button variant="ghost" icon="heart" />
                  <Button variant="ghost" icon="star" />
                  <Button variant="ghost" icon="share" />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Botões com Ícones e Diferentes Tamanhos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Ícones com Diferentes Tamanhos</Title>
              <Description>
                Botões com ícones em diferentes tamanhos.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Button variant="primary" icon="plus" size="sm" />
                  <Button variant="primary" icon="plus" size="md" />
                  <Button variant="primary" icon="plus" size="lg" />
                </Row>
                <Row gh={8}>
                  <Button variant="outline" icon="heart" size="sm" />
                  <Button variant="outline" icon="heart" size="md" />
                  <Button variant="outline" icon="heart" size="lg" />
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Botões de Ação */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Botões de Ação</Title>
              <Description>
                Exemplos de botões em contextos reais de uso.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Button variant="primary" icon="check">
                    Confirmar
                  </Button>
                  <Button variant="outline" icon="x">
                    Cancelar
                  </Button>
                </Row>
                <Row gh={8}>
                  <Button variant="destructive" icon="trash">
                    Excluir Item
                  </Button>
                  <Button variant="link" icon="external-link">
                    Ver Detalhes
                  </Button>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Controle de Tema */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Controle de Tema</Title>
              <Description>
                Teste como os botões se comportam em diferentes temas.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Button
                variant="primary"
                onPress={toggleAppearance}
                icon={isDark ? 'sun' : 'moon'}
                label={`Alternar para ${isDark ? 'Claro' : 'Escuro'}`}
              />
            </Card>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no componente
                Button.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>
                  variant: primary | secondary | outline | ghost | destructive |
                  link
                </Label>
                <Description>Define o estilo visual do botão</Description>

                <Label>size: sm | md | lg</Label>
                <Description>Define o tamanho do botão (padrão: md)</Description>

                <Label>disabled: boolean</Label>
                <Description>Desabilita o botão</Description>

                <Label>loading: boolean</Label>
                <Description>Mostra um indicador de carregamento</Description>

                <Label>icon: string</Label>
                <Description>Nome do ícone a ser exibido</Description>

                <Label>onPress: () =&gt; void</Label>
                <Description>
                  Função chamada quando o botão é pressionado
                </Description>

                <Label>label: string</Label>
                <Description>
                  Texto do botão (alternativa ao children)
                </Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}
