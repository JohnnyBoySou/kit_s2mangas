import React, { useState } from 'react';
import {
  Button,
  Input,
  Card,
  Badge,
  Loader,
  Divider,
  Column,
  Row,
  Main,
  ScrollVertical,
  Title,
  HeadTitle,
  Label,
  SubLabel,
  Description,
  Checkbox,
  Switch
} from './src/index';

function ExampleApp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Formulário enviado!');
    }, 2000);
  };

  return (
    <Main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Column gap={24}>
        <Title>Exemplo de Componentes React</Title>
        
        <Card>
          <Column gap={16}>
            <HeadTitle>Formulário de Exemplo</HeadTitle>
            
            <Input
              label="Email"
              value={email}
              onChange={setEmail}
              placeholder="Digite seu email"
              type="email"
            />
            
            <Input
              label="Senha"
              value={password}
              onChange={setPassword}
              placeholder="Digite sua senha"
              isPassword
            />
            
            <Row gap={16} alignItems="center">
              <Checkbox
                checked={agreed}
                onChange={setAgreed}
                label="Concordo com os termos"
              />
            </Row>
            
            <Row gap={16} alignItems="center">
              <Label>Notificações</Label>
              <Switch
                checked={notifications}
                onChange={setNotifications}
              />
            </Row>
            
            <Button
              variant="primary"
              onClick={handleSubmit}
              loading={loading}
              disabled={!email || !password || !agreed}
            >
              Enviar
            </Button>
          </Column>
        </Card>
        
        <Divider />
        
        <Card>
          <Column gap={16}>
            <HeadTitle>Componentes de Interface</HeadTitle>
            
            <Row gap={12} style={{ flexWrap: 'wrap' }}>
              <Badge variant="default">Primário</Badge>
              <Badge variant="secondary">Secundário</Badge>
              <Badge variant="destructive">Destrutivo</Badge>
              <Badge variant="outline">Outline</Badge>
            </Row>
            
            <Row gap={12}>
              <Button variant="default">Padrão</Button>
              <Button variant="primary">Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="outline">Outline</Button>
            </Row>
            
            <Row gap={12} alignItems="center">
              <Label>Carregando:</Label>
              <Loader size="sm" />
              <Loader size="md" />
              <Loader size="lg" />
            </Row>
          </Column>
        </Card>
        
        <Card>
          <Column gap={16}>
            <HeadTitle>Componentes de Texto</HeadTitle>
            
            <Title>Título Principal</Title>
            <HeadTitle>Subtítulo</HeadTitle>
            <Label>Rótulo</Label>
            <SubLabel>Sub rótulo</SubLabel>
            <Description>
              Esta é uma descrição de exemplo que demonstra como os componentes de texto funcionam.
            </Description>
          </Column>
        </Card>
        
        <Card>
          <Column gap={16}>
            <HeadTitle>Layout Components</HeadTitle>
            
            <Row gap={8} justifyContent="space-between">
              <Card padding={8} backgroundColor="#f0f0f0">Item 1</Card>
              <Card padding={8} backgroundColor="#f0f0f0">Item 2</Card>
              <Card padding={8} backgroundColor="#f0f0f0">Item 3</Card>
            </Row>
            
            <div style={{ height: '100px', border: '1px solid #ccc' }}>
              <ScrollVertical gap={8} maxHeight="100px">
                <div>Item de scroll 1</div>
                <div>Item de scroll 2</div>
                <div>Item de scroll 3</div>
                <div>Item de scroll 4</div>
                <div>Item de scroll 5</div>
                <div>Item de scroll 6</div>
              </ScrollVertical>
            </div>
          </Column>
        </Card>
      </Column>
    </Main>
  );
}

export default ExampleApp;
