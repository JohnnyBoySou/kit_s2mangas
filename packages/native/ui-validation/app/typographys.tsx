import {
  Column,
  Title,
  Label,
  Description,
  Divider,
  Main,
  Card,
  ScrollVertical,
  HeadTitle,
  SubLabel,
  U,
} from 's2mangas-native';

export default function TypographyScreen() {
  return (
    <Main>
      <ScrollVertical>
        <Column gv={16} ph={24} pv={44}>
          <Title>Tipografia - Documentação</Title>
          <Description>
            Componentes de texto do @s2mangas/native com todas as suas variantes
            e propriedades.
          </Description>

          <Divider />

          {/* Componentes de Título */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componentes de Título</Title>
              <Description>
                Diferentes níveis de títulos para hierarquia visual.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <HeadTitle>Título Principal (HeadTitle)</HeadTitle>
                <Title>Título Secundário (Title)</Title>
                <Title level={2}>Título H2</Title>
                <Title level={3}>Título H3</Title>
                <Title level={4}>Título H4</Title>
                <Title level={5}>Título H5</Title>
                <Title level={6}>Título H6</Title>
              </Column>
            </Card>
          </Column>

          {/* Componentes de Texto */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componentes de Texto</Title>
              <Description>
                Diferentes estilos de texto para conteúdo.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Label>Label - Texto de rótulo</Label>
                <SubLabel>SubLabel - Texto secundário</SubLabel>
                <Description>Description - Texto descritivo</Description>
              </Column>
            </Card>
          </Column>

          {/* Alinhamentos de Texto */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Alinhamentos de Texto</Title>
              <Description>
                Diferentes alinhamentos disponíveis para os componentes de
                texto.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title align="left">Alinhamento à Esquerda</Title>
                <Title align="center">Alinhamento Centralizado</Title>
                <Title align="right">Alinhamento à Direita</Title>
              </Column>
            </Card>
          </Column>

          {/* Cores de Texto */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Cores de Texto</Title>
              <Description>
                Diferentes cores disponíveis para personalização.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title color="#ED274A">Texto Vermelho</Title>
                <Title color="#27AE60">Texto Verde</Title>
                <Title color="#3498DB">Texto Azul</Title>
                <Title color="#F39C12">Texto Laranja</Title>
                <Title color="#9B59B6">Texto Roxo</Title>
              </Column>
            </Card>
          </Column>

          {/* Tamanhos de Fonte */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tamanhos de Fonte</Title>
              <Description>
                Diferentes tamanhos de fonte para os componentes.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title size={32}>Tamanho 32px</Title>
                <Title size={28}>Tamanho 28px</Title>
                <Title size={24}>Tamanho 24px</Title>
                <Title size={20}>Tamanho 20px</Title>
                <Title size={18}>Tamanho 18px</Title>
                <Title size={16}>Tamanho 16px</Title>
                <Title size={14}>Tamanho 14px</Title>
                <Title size={12}>Tamanho 12px</Title>
              </Column>
            </Card>
          </Column>

          {/* Margens e Espaçamentos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Margens e Espaçamentos</Title>
              <Description>
                Controle de margens e espaçamentos nos componentes de texto.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title mb={8}>Margem Inferior (8px)</Title>
                <Title mt={8}>Margem Superior (8px)</Title>
                <Title mh={16}>Margem Horizontal (16px)</Title>
                <Title mv={16}>Margem Vertical (16px)</Title>
                <Title ml={24}>Margem Esquerda (24px)</Title>
                <Title mr={24}>Margem Direita (24px)</Title>
              </Column>
            </Card>
          </Column>

          {/* Famílias de Fonte */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Famílias de Fonte</Title>
              <Description>
                Diferentes famílias de fonte disponíveis.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title fontFamily="Font_Black">Font Black</Title>
                <Title fontFamily="Font_Bold">Font Bold</Title>
                <Title fontFamily="Font_Medium">Font Medium</Title>
                <Title fontFamily="Font_Book">Font Book</Title>
              </Column>
            </Card>
          </Column>

          {/* Espaçamento entre Linhas */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Espaçamento entre Linhas</Title>
              <Description>
                Controle do espaçamento entre linhas de texto.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Description spacing={0.5}>
                  Texto com espaçamento reduzido entre linhas. Este é um exemplo
                  de texto longo para demonstrar o espaçamento entre linhas.
                </Description>
                <Description spacing={1}>
                  Texto com espaçamento normal entre linhas. Este é um exemplo
                  de texto longo para demonstrar o espaçamento entre linhas.
                </Description>
                <Description spacing={2}>
                  Texto com espaçamento aumentado entre linhas. Este é um
                  exemplo de texto longo para demonstrar o espaçamento entre
                  linhas.
                </Description>
              </Column>
            </Card>
          </Column>

          {/* Texto Sublinhado */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Texto Sublinhado</Title>
              <Description>Componente para texto com sublinhado.</Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <U>Texto com sublinhado</U>
                <Description>
                  Texto normal com <U>palavra sublinhada</U> no meio.
                </Description>
              </Column>
            </Card>
          </Column>

          {/* Exemplos Práticos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Exemplos Práticos</Title>
              <Description>
                Exemplos de uso real dos componentes de tipografia.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <HeadTitle>Página de Produto</HeadTitle>
                <Title level={2}>Nome do Produto</Title>
                <Label>Marca: S2Mangas</Label>
                <Description>
                  Descrição detalhada do produto com todas as suas
                  características e benefícios.
                </Description>
                <SubLabel>SKU: PROD-001</SubLabel>
              </Column>
            </Card>
          </Column>

          {/* Controle de Tema */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Controle de Tema</Title>
              <Description>
                Teste como os componentes de texto se comportam em diferentes
                temas.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title>Título com Tema Adaptativo</Title>
                <Description>
                  Este texto se adapta automaticamente ao tema claro/escuro.
                </Description>
              </Column>
            </Card>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas nos
                componentes de texto.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>size: number</Label>
                <Description>Tamanho da fonte em pixels</Description>

                <Label>color: string</Label>
                <Description>Cor do texto (hex, rgb, nome)</Description>

                <Label>align: left | center | right</Label>
                <Description>Alinhamento do texto</Description>

                <Label>fontFamily: string</Label>
                <Description>Família da fonte</Description>

                <Label>level: 1 | 2 | 3 | 4 | 5 | 6</Label>
                <Description>Nível do heading (h1-h6)</Description>

                <Label>spacing: number</Label>
                <Description>Espaçamento entre linhas</Description>

                <Label>mh, mv, mb, mt, mr, ml: number</Label>
                <Description>
                  Margens (horizontal, vertical, bottom, top, right, left)
                </Description>

                <Label>style: TextStyle</Label>
                <Description>Estilos adicionais do React Native</Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}
