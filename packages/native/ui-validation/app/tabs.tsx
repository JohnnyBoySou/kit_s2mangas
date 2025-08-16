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
  Tabs,
  Badge,
  Button,
} from 's2mangas-native';

export default function TabsScreen() {
  const [activeTab, setActiveTab] = useState('Início');
  const [categoryTab, setCategoryTab] = useState('Todos');
  const [statusTab, setStatusTab] = useState('Ativo');

  const mainTabs = ['Início', 'Perfil', 'Configurações'];
  const categoryTabs = ['Todos', 'Favoritos', 'Recentes', 'Arquivados'];
  const statusTabs = ['Ativo', 'Inativo', 'Pendente', 'Bloqueado'];

  return (
    <Main>
      <ScrollVertical>
        <Column
          gv={16}
          ph={24}
          pv={44}
        >
          <Title>Componente Tabs - Documentação</Title>
          <Description>
            Componente Tabs do @s2mangas/native com todas as suas variantes e propriedades.
          </Description>

          <Divider />

          {/* Componente Tabs Básico */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tabs Básico</Title>
              <Description>
                Componente de abas para organizar conteúdo em seções.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Tabs
                  values={mainTabs}
                  value={activeTab}
                  onChange={setActiveTab}
                />
                <Column gv={12} pv={16}>
                  {activeTab === 'Início' && (
                    <Column gv={8}>
                      <Title level={3}>Conteúdo da Aba Início</Title>
                      <Description>
                        Este é o conteúdo da primeira aba. Aqui você pode exibir
                        informações principais ou dashboard.
                      </Description>
                      <Button variant="primary" size="sm">
                        Ação Principal
                      </Button>
                    </Column>
                  )}
                  {activeTab === 'Perfil' && (
                    <Column gv={8}>
                      <Title level={3}>Conteúdo da Aba Perfil</Title>
                      <Description>
                        Esta aba contém informações do perfil do usuário.
                      </Description>
                      <Row gh={8}>
                        <Badge variant="default">Ativo</Badge>
                        <Badge variant="secondary">Verificado</Badge>
                      </Row>
                    </Column>
                  )}
                  {activeTab === 'Configurações' && (
                    <Column gv={8}>
                      <Title level={3}>Conteúdo da Aba Configurações</Title>
                      <Description>
                        Configurações e preferências do usuário.
                      </Description>
                      <Row gh={8}>
                        <Badge variant="outline">Beta</Badge>
                        <Badge variant="destructive">Importante</Badge>
                      </Row>
                    </Column>
                  )}
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Tabs com Diferentes Conteúdos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tabs com Categorias</Title>
              <Description>
                Tabs para filtrar conteúdo por categorias.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Tabs
                  values={categoryTabs}
                  value={categoryTab}
                  onChange={setCategoryTab}
                />
                <Column gv={12} pv={16}>
                  <Description>
                    Aba selecionada: <Label>{categoryTab}</Label>
                  </Description>
                  <Row gh={8}>
                    <Badge variant="default">{categoryTab}</Badge>
                    <Badge variant="secondary">Filtro Ativo</Badge>
                  </Row>
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Tabs com Estados */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tabs com Estados</Title>
              <Description>
                Tabs para mostrar diferentes estados de itens.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Tabs
                  values={statusTabs}
                  value={statusTab}
                  onChange={setStatusTab}
                />
                <Column gv={12} pv={16}>
                  <Description>
                    Status selecionado: <Label>{statusTab}</Label>
                  </Description>
                  <Row gh={8}>
                    {statusTab === 'Ativo' && <Badge variant="default">Ativo</Badge>}
                    {statusTab === 'Inativo' && <Badge variant="secondary">Inativo</Badge>}
                    {statusTab === 'Pendente' && <Badge variant="outline">Pendente</Badge>}
                    {statusTab === 'Bloqueado' && <Badge variant="destructive">Bloqueado</Badge>}
                  </Row>
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Tabs com Conteúdo Dinâmico */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tabs com Conteúdo Dinâmico</Title>
              <Description>
                Tabs que mostram conteúdo diferente baseado na seleção.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Tabs
                  values={['Dados', 'Gráficos', 'Relatórios']}
                  value={activeTab}
                  onChange={setActiveTab}
                />
                <Column gv={12} pv={16}>
                  {activeTab === 'Dados' && (
                    <Column gv={8}>
                      <Title level={3}>Visualização de Dados</Title>
                      <Description>
                        Aqui você pode exibir tabelas, listas ou dados brutos.
                      </Description>
                      <Row gh={8}>
                        <Badge variant="default">1.234 registros</Badge>
                        <Badge variant="secondary">Atualizado hoje</Badge>
                      </Row>
                    </Column>
                  )}
                  {activeTab === 'Gráficos' && (
                    <Column gv={8}>
                      <Title level={3}>Visualização de Gráficos</Title>
                      <Description>
                        Área para exibir gráficos e visualizações.
                      </Description>
                      <Row gh={8}>
                        <Badge variant="outline">5 gráficos</Badge>
                        <Badge variant="default">Interativo</Badge>
                      </Row>
                    </Column>
                  )}
                  {activeTab === 'Relatórios' && (
                    <Column gv={8}>
                      <Title level={3}>Relatórios</Title>
                      <Description>
                        Seção para relatórios e análises.
                      </Description>
                      <Row gh={8}>
                        <Badge variant="destructive">3 pendentes</Badge>
                        <Badge variant="secondary">12 concluídos</Badge>
                      </Row>
                    </Column>
                  )}
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Tabs com Acessibilidade */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tabs com Acessibilidade</Title>
              <Description>
                Tabs configurados com propriedades de acessibilidade.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Tabs
                  values={['Navegação', 'Conteúdo', 'Ações']}
                  value={activeTab}
                  onChange={setActiveTab}
                  testID="accessible-tabs"
                  accessibilityRole="button"
                  accessibilityLabel="Navegação por abas"
                  accessibilityHint="Toque para alternar entre as abas"
                />
                <Column gv={12} pv={16}>
                  <Description>
                    Tabs configurados com suporte completo à acessibilidade,
                    incluindo testID, accessibilityRole, accessibilityLabel e accessibilityHint.
                  </Description>
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Tabs em Diferentes Contextos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tabs em Diferentes Contextos</Title>
              <Description>
                Exemplos de uso do componente Tabs em diferentes situações.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Filtros de Produtos</Title>
                <Tabs
                  values={['Todos', 'Eletrônicos', 'Roupas', 'Livros']}
                  value={categoryTab}
                  onChange={setCategoryTab}
                />
                <Column gv={8} pv={12}>
                  <Description>
                    Filtro ativo: {categoryTab}
                  </Description>
                </Column>

                <Title level={3}>Status de Pedidos</Title>
                <Tabs
                  values={['Pendentes', 'Em Processo', 'Enviados', 'Entregues']}
                  value={statusTab}
                  onChange={setStatusTab}
                />
                <Column gv={8} pv={12}>
                  <Description>
                    Status selecionado: {statusTab}
                  </Description>
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Exemplos Práticos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Exemplos Práticos</Title>
              <Description>
                Exemplos de uso real do componente Tabs.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Dashboard de Usuário</Title>
                <Tabs
                  values={['Visão Geral', 'Atividades', 'Configurações']}
                  value={activeTab}
                  onChange={setActiveTab}
                />
                <Column gv={12} pv={16}>
                  {activeTab === 'Visão Geral' && (
                    <Column gv={8}>
                      <Row gh={12}>
                        <Column gv={4}>
                          <Label>Status</Label>
                          <Badge variant="default">Online</Badge>
                        </Column>
                        <Column gv={4}>
                          <Label>Plano</Label>
                          <Badge variant="secondary">Premium</Badge>
                        </Column>
                      </Row>
                      <Description>
                        Visão geral das informações principais do usuário.
                      </Description>
                    </Column>
                  )}
                  {activeTab === 'Atividades' && (
                    <Column gv={8}>
                      <Description>
                        Histórico de atividades e ações do usuário.
                      </Description>
                      <Row gh={8}>
                        <Badge variant="outline">15 atividades</Badge>
                        <Badge variant="default">Hoje</Badge>
                      </Row>
                    </Column>
                  )}
                  {activeTab === 'Configurações' && (
                    <Column gv={8}>
                      <Description>
                        Configurações e preferências do usuário.
                      </Description>
                      <Button variant="outline" size="sm">
                        Editar Perfil
                      </Button>
                    </Column>
                  )}
                </Column>
              </Column>
            </Card>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no componente Tabs.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>values: string[]</Label>
                <Description>Array de strings representando as abas disponíveis</Description>

                <Label>value: string</Label>
                <Description>Valor da aba atualmente selecionada</Description>

                <Label>onChange: (value: string) = void</Label>
                <Description>Função chamada quando uma aba é selecionada</Description>

                <Label>testID: string</Label>
                <Description>ID para testes automatizados</Description>

                <Label>accessibilityRole: button | text</Label>
                <Description>Papel de acessibilidade do componente</Description>

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
                Quando e como usar o componente Tabs.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>Navegação Principal</Label>
                <Description>Organizar conteúdo em seções principais</Description>

                <Label>Filtros</Label>
                <Description>Filtrar conteúdo por categoria ou tipo</Description>

                <Label>Configurações</Label>
                <Description>Agrupar configurações relacionadas</Description>

                <Label>Dashboards</Label>
                <Description>Diferentes visões de dados</Description>

                <Label>Status</Label>
                <Description>Mostrar diferentes estados de itens</Description>

                <Label>Perfis</Label>
                <Description>Alternar entre diferentes perfis ou modos</Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}