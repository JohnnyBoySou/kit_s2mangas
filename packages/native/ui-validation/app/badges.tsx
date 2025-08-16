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
  Badge,
  Button,
} from 's2mangas-native';

export default function BadgeScreen() {
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
          <Title>Componente Badge - Documentação</Title>
          <Description>
            Componente Badge do @s2mangas/native com todas as suas variantes e propriedades.
          </Description>

          <Divider />

          {/* Componente Badge */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componente Badge</Title>
              <Description>
                Componente de badge para indicar status, contadores ou labels.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Variantes de Badge</Title>
                <Row gh={8}>
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Badges com Diferentes Tamanhos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Badges com Diferentes Tamanhos</Title>
              <Description>
                Badges em diferentes tamanhos para diferentes contextos.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Badge variant="default" size="sm">Pequeno</Badge>
                  <Badge variant="default" size="default">Padrão</Badge>
                  <Badge variant="default" size="lg">Grande</Badge>
                </Row>
                <Row gh={8}>
                  <Badge variant="secondary" size="sm">Pequeno</Badge>
                  <Badge variant="secondary" size="default">Padrão</Badge>
                  <Badge variant="secondary" size="lg">Grande</Badge>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Badges com Ícones */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Badges com Ícones</Title>
              <Description>
                Badges que incluem ícones para melhor identificação visual.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Badge variant="default">Aprovado</Badge>
                  <Badge variant="secondary">Atenção</Badge>
                  <Badge variant="destructive">Erro</Badge>
                </Row>
                <Row gh={8}>
                  <Badge variant="outline">Informação</Badge>
                  <Badge variant="outline">Favorito</Badge>
                  <Badge variant="default">Curtido</Badge>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Badges como Contadores */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Badges como Contadores</Title>
              <Description>
                Badges usados para mostrar contadores e notificações.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={12}>
                  <Column gv={4}>
                    <Label>Notificações</Label>
                    <Badge variant="destructive">15</Badge>
                  </Column>
                  <Column gv={4}>
                    <Label>Mensagens</Label>
                    <Badge variant="default">8</Badge>
                  </Column>
                  <Column gv={4}>
                    <Label>Tarefas</Label>
                    <Badge variant="secondary">3</Badge>
                  </Column>
                </Row>
                <Row gh={12}>
                  <Column gv={4}>
                    <Label>Novos</Label>
                    <Badge variant="outline">12</Badge>
                  </Column>
                  <Column gv={4}>
                    <Label>Pendentes</Label>
                    <Badge variant="outline">5</Badge>
                  </Column>
                  <Column gv={4}>
                    <Label>Concluídas</Label>
                    <Badge variant="secondary">25</Badge>
                  </Column>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Badges em Contextos Reais */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Badges em Contextos Reais</Title>
              <Description>
                Exemplos de como usar badges em situações reais.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Status de Usuário</Title>
                <Row gh={12}>
                  <Column gv={4}>
                    <Label>Status</Label>
                    <Badge variant="default">Online</Badge>
                  </Column>
                  <Column gv={4}>
                    <Label>Plano</Label>
                    <Badge variant="secondary">Premium</Badge>
                  </Column>
                  <Column gv={4}>
                    <Label>Verificação</Label>
                    <Badge variant="outline">Verificado</Badge>
                  </Column>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Badges com Estados */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Badges com Estados</Title>
              <Description>
                Diferentes estados que um badge pode representar.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={8}>
                  <Badge variant="default">Ativo</Badge>
                  <Badge variant="secondary">Inativo</Badge>
                  <Badge variant="destructive">Bloqueado</Badge>
                  <Badge variant="outline">Pendente</Badge>
                </Row>
                <Row gh={8}>
                  <Badge variant="default">Aprovado</Badge>
                  <Badge variant="destructive">Rejeitado</Badge>
                  <Badge variant="secondary">Em análise</Badge>
                  <Badge variant="outline">Atenção</Badge>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Badges em Listas */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Badges em Listas</Title>
              <Description>
                Como usar badges em listas e itens.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={12}>
                  <Label>Item 1</Label>
                  <Badge variant="default">Novo</Badge>
                </Row>
                <Row gh={12}>
                  <Label>Item 2</Label>
                  <Badge variant="destructive">Urgente</Badge>
                </Row>
                <Row gh={12}>
                  <Label>Item 3</Label>
                  <Badge variant="outline">Opcional</Badge>
                </Row>
                <Row gh={12}>
                  <Label>Item 4</Label>
                  <Badge variant="secondary">Concluído</Badge>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Exemplos Práticos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Exemplos Práticos</Title>
              <Description>
                Exemplos de uso real do componente Badge.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Dashboard de Notificações</Title>
                <Column gv={8}>
                  <Row gh={12}>
                    <Column gv={4}>
                      <Label>Email</Label>
                      <Badge variant="destructive">5</Badge>
                    </Column>
                    <Column gv={4}>
                      <Label>Push</Label>
                      <Badge variant="default">12</Badge>
                    </Column>
                    <Column gv={4}>
                      <Label>SMS</Label>
                      <Badge variant="secondary">2</Badge>
                    </Column>
                  </Row>
                  <Row gh={12}>
                                         <Column gv={4}>
                       <Label>Importantes</Label>
                       <Badge variant="destructive">3</Badge>
                     </Column>
                     <Column gv={4}>
                       <Label>Lidas</Label>
                       <Badge variant="outline">8</Badge>
                     </Column>
                     <Column gv={4}>
                       <Label>Arquivadas</Label>
                       <Badge variant="secondary">15</Badge>
                     </Column>
                  </Row>
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no componente Badge.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>variant: default | secondary | destructive | outline</Label>
                <Description>Estilo visual do badge</Description>

                <Label>size: sm | default | lg</Label>
                <Description>Tamanho do badge (padrão: default)</Description>

                <Label>children: React.ReactNode</Label>
                <Description>Conteúdo do badge</Description>

                <Label>style: ViewStyle</Label>
                <Description>Estilos adicionais do React Native</Description>

                <Label>testID: string</Label>
                <Description>ID para testes automatizados</Description>

                <Label>accessibilityLabel: string</Label>
                <Description>Label para acessibilidade</Description>
              </Column>
            </Card>
          </Column>

          {/* Casos de Uso */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Casos de Uso Recomendados</Title>
              <Description>
                Quando e como usar o componente Badge.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>Status</Label>
                <Description>Indicar status de itens ou usuários</Description>

                <Label>Contadores</Label>
                <Description>Mostrar quantidade de itens ou notificações</Description>

                <Label>Notificações</Label>
                <Description>Alertar sobre novas informações</Description>

                <Label>Labels</Label>
                <Description>Identificar categorias ou tipos</Description>

                <Label>Estados</Label>
                <Description>Mostrar estados como ativo, inativo, pendente</Description>

                <Label>Prioridades</Label>
                <Description>Indicar nível de importância ou urgência</Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}