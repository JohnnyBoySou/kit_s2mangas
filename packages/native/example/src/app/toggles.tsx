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
  Toggle,
  Switch,
  CheckBox,
} from '@s2mangas/native';

export default function TogglesScreen() {
  const [toggleValue, setToggleValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValue, setCheckBoxValue] = useState(false);
  const [multipleCheckBoxes, setMultipleCheckBoxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleToggleChange = (value: boolean) => {
    setToggleValue(value);
    return value;
  };

  const handleSwitchChange = (value: boolean) => {
    setSwitchValue(value);
  };

  const handleCheckBoxChange = (value: boolean) => {
    setCheckBoxValue(value);
  };

  const handleMultipleCheckBoxChange = (key: string, value: boolean) => {
    setMultipleCheckBoxes(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Main>
      <ScrollVertical>
        <Column gv={16} ph={24} pv={44}>
          <Title>Controles Interativos - Documentação</Title>
          <Description>
            Componentes de toggle, switch e checkbox do @s2mangas/native com
            todas as suas variantes e propriedades.
          </Description>

          <Divider />

          {/* Componente Toggle */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componente Toggle</Title>
              <Description>
                Componente de toggle com animação suave e feedback visual.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16}>
                  <Toggle value={toggleValue} setValue={handleToggleChange} />
                  <Label>Toggle: {toggleValue ? 'Ligado' : 'Desligado'}</Label>
                </Row>
                <Row gh={16}>
                  <Toggle value={true} setValue={() => {}} />
                  <Label>Toggle Ligado (Desabilitado)</Label>
                </Row>
                <Row gh={16}>
                  <Toggle value={false} setValue={() => {}} />
                  <Label>Toggle Desligado (Desabilitado)</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Componente Switch */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componente Switch</Title>
              <Description>
                Componente de switch com design nativo e animações.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16}>
                  <Switch value={switchValue} setValue={handleSwitchChange} />
                  <Label>Switch: {switchValue ? 'Ligado' : 'Desligado'}</Label>
                </Row>
                <Row gh={16}>
                  <Switch value={true} setValue={() => {}} />
                  <Label>Switch Ligado (Desabilitado)</Label>
                </Row>
                <Row gh={16}>
                  <Switch value={false} setValue={() => {}} />
                  <Label>Switch Desligado (Desabilitado)</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Comparação Toggle vs Switch */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Toggle vs Switch</Title>
              <Description>
                Comparação entre os componentes Toggle e Switch.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16}>
                  <Toggle value={toggleValue} setValue={handleToggleChange} />
                  <Label>Toggle</Label>
                </Row>
                <Row gh={16}>
                  <Switch value={switchValue} setValue={handleSwitchChange} />
                  <Label>Switch</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Componente CheckBox */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Componente CheckBox</Title>
              <Description>
                Componente de checkbox para seleção única ou múltipla.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16}>
                  <CheckBox
                    value={checkboxValue}
                    setValue={handleCheckBoxChange}
                  />
                  <Label>
                    CheckBox: {checkboxValue ? 'Marcado' : 'Desmarcado'}
                  </Label>
                </Row>
                <Row gh={16}>
                  <CheckBox value={true} setValue={() => {}} />
                  <Label>CheckBox Marcado (Desabilitado)</Label>
                </Row>
                <Row gh={16}>
                  <CheckBox value={false} setValue={() => {}} />
                  <Label>CheckBox Desmarcado (Desabilitado)</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Componente Switch - Exemplos Adicionais */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Switch - Exemplos Adicionais</Title>
              <Description>
                Mais exemplos de uso do componente Switch.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16} align="center">
                  <Switch value={switchValue} setValue={handleSwitchChange} />
                  <Label>
                    Switch Interativo: {switchValue ? 'Ligado' : 'Desligado'}
                  </Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={true} setValue={() => {}} />
                  <Label>Switch Sempre Ligado (Desabilitado)</Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={false} setValue={() => {}} />
                  <Label>Switch Sempre Desligado (Desabilitado)</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Comparação Toggle vs Switch */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Toggle vs Switch - Comparação</Title>
              <Description>
                Comparação detalhada entre os componentes Toggle e Switch.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16} align="center">
                  <Toggle value={toggleValue} setValue={handleToggleChange} />
                  <Label>Toggle - Design Customizado</Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={switchValue} setValue={handleSwitchChange} />
                  <Label>Switch - Design Nativo</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Múltiplos CheckBoxes */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Múltiplos CheckBoxes</Title>
              <Description>
                Exemplo de uso com múltiplos checkboxes.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16} align="center">
                  <CheckBox
                    value={multipleCheckBoxes.option1}
                    setValue={value =>
                      handleMultipleCheckBoxChange('option1', value)
                    }
                  />
                  <Label>Opção 1</Label>
                </Row>
                <Row gh={16} align="center">
                  <CheckBox
                    value={multipleCheckBoxes.option2}
                    setValue={value =>
                      handleMultipleCheckBoxChange('option2', value)
                    }
                  />
                  <Label>Opção 2</Label>
                </Row>
                <Row gh={16} align="center">
                  <CheckBox
                    value={multipleCheckBoxes.option3}
                    setValue={value =>
                      handleMultipleCheckBoxChange('option3', value)
                    }
                  />
                  <Label>Opção 3</Label>
                </Row>
                <Description>
                  Selecionados:{' '}
                  {Object.values(multipleCheckBoxes).filter(Boolean).length} de
                  3
                </Description>
              </Column>
            </Card>
          </Column>

          {/* Estados dos Componentes */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Estados dos Componentes</Title>
              <Description>
                Diferentes estados que os componentes podem ter.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Row gh={16} align="center">
                  <Toggle value={true} setValue={() => {}} />
                  <Label>Toggle Ligado (Desabilitado)</Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={false} setValue={() => {}} />
                  <Label>Switch Desligado (Desabilitado)</Label>
                </Row>
                <Row gh={16} align="center">
                  <CheckBox value={true} setValue={() => {}} />
                  <Label>CheckBox Marcado (Desabilitado)</Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={false} setValue={() => {}} />
                  <Label>Switch Desligado (Desabilitado)</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Exemplos Práticos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Exemplos Práticos</Title>
              <Description>
                Exemplos de uso real dos componentes de controle.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Title level={3}>Configurações de Notificação</Title>
                <Row gh={16} align="center">
                  <Toggle value={toggleValue} setValue={handleToggleChange} />
                  <Label>Notificações Push</Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={switchValue} setValue={handleSwitchChange} />
                  <Label>Notificações por Email</Label>
                </Row>
                <Row gh={16} align="center">
                  <CheckBox
                    value={checkboxValue}
                    setValue={handleCheckBoxChange}
                  />
                  <Label>Receber promoções</Label>
                </Row>
                <Row gh={16} align="center">
                  <Switch value={switchValue} setValue={handleSwitchChange} />
                  <Label>Concordo com os termos</Label>
                </Row>
              </Column>
            </Card>
          </Column>

          {/* Propriedades dos Componentes */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas nos
                componentes de controle.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>value: boolean</Label>
                <Description>
                  Estado atual do componente (ligado/desligado)
                </Description>

                <Label>setValue: (value: boolean) = void</Label>
                <Description>Função chamada quando o valor muda</Description>

                <Label>disabled: boolean</Label>
                <Description>
                  Desabilita a interação com o componente
                </Description>

                <Label>style: ViewStyle</Label>
                <Description>Estilos adicionais do React Native</Description>

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
              <Description>Quando usar cada tipo de componente.</Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>Toggle</Label>
                <Description>
                  Para configurações simples (ligar/desligar)
                </Description>

                <Label>Switch</Label>
                <Description>
                  Para configurações nativas e preferências
                </Description>

                <Label>CheckBox</Label>
                <Description>Para seleções múltiplas e listas</Description>

                <Label>Switch</Label>
                <Description>
                  Para confirmações e aceitação de termos
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
