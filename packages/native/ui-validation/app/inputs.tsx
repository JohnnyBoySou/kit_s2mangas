import { useState } from 'react';

import {
  Input,
  Column,
  Title,
  Label,
  Description,
  Divider,
  Main,
  Card,
  ScrollVertical,
} from 's2mangas-native';

export default function InputsScreen() {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

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
          <Title>Inputs - Documentação</Title>
          <Description>
            Componente Input do @s2mangas/native com todas as suas variantes e propriedades.
          </Description>

          <Divider />

          {/* Inputs Básicos */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Inputs Básicos</Title>
              <Description>
                Inputs com diferentes tipos e estilos básicos.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input 
                  placeholder="Digite seu nome..." 
                  value={textValue}
                  onChange={setTextValue}
                />
                <Input 
                  placeholder="Digite seu email..." 
                  value={emailValue}
                  onChange={setEmailValue}
                  keyboardType="email-address"
                />
                <Input 
                  placeholder="Digite sua senha..." 
                  value={passwordValue}
                  onChange={setPasswordValue}
                  isPassword
                />
              </Column>
            </Card>
          </Column>

          {/* Inputs com Ícones */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Inputs com Ícones</Title>
              <Description>
                Inputs que incluem ícones para melhor UX.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input 
                  placeholder="Pesquisar..." 
                  value={searchValue}
                  onChange={setSearchValue}
                />
                <Input 
                  placeholder="Digite seu email..." 
                  value={emailValue}
                  onChange={setEmailValue}
                  keyboardType="email-address"
                />
                <Input 
                  placeholder="Digite sua senha..." 
                  value={passwordValue}
                  onChange={setPasswordValue}
                  isPassword
                />
              </Column>
            </Card>
          </Column>

          {/* Estados dos Inputs */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Estados dos Inputs</Title>
              <Description>
                Diferentes estados que um input pode ter.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input 
                  placeholder="Input normal" 
                  value={textValue}
                  onChange={setTextValue}
                />
                <Input 
                  placeholder="Input desabilitado" 
                  value="Valor fixo"
                  disabled
                />
                <Input 
                  placeholder="Input com erro" 
                  value={textValue}
                  onChange={setTextValue}
                  error="Este campo é obrigatório"
                />
              </Column>
            </Card>
          </Column>

          {/* Tipos de Teclado */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Tipos de Teclado</Title>
              <Description>
                Diferentes tipos de teclado para diferentes tipos de entrada.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input 
                  placeholder="Número de telefone" 
                  keyboardType="phone-pad"
                />
                <Input 
                  placeholder="Número" 
                  keyboardType="numeric"
                />
                <Input 
                  placeholder="URL" 
                  keyboardType="url"
                />
                <Input 
                  placeholder="Decimal" 
                  keyboardType="decimal-pad"
                />
              </Column>
            </Card>
          </Column>

          {/* Inputs com Validação */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Inputs com Validação</Title>
              <Description>
                Exemplos de inputs com validação em tempo real.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input 
                  placeholder="Email obrigatório" 
                  value={emailValue}
                  onChange={setEmailValue}
                  keyboardType="email-address"
                  error={emailValue && !emailValue.includes('@') ? 'Email inválido' : undefined}
                />
                <Input 
                  placeholder="Senha (mínimo 6 caracteres)" 
                  value={passwordValue}
                  onChange={setPasswordValue}
                  isPassword
                  error={passwordValue && passwordValue.length < 6 ? 'Senha muito curta' : undefined}
                />
              </Column>
            </Card>
          </Column>

          {/* Inputs com Máscara */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Inputs com Máscara</Title>
              <Description>
                Inputs que formatam automaticamente a entrada do usuário.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input 
                  placeholder="CPF (000.000.000-00)" 
                  keyboardType="numeric"
                  maxLength={14}
                />
                <Input 
                  placeholder="Telefone ((00) 00000-0000)" 
                  keyboardType="phone-pad"
                  maxLength={15}
                />
                <Input 
                  placeholder="CEP (00000-000)" 
                  keyboardType="numeric"
                  maxLength={9}
                />
              </Column>
            </Card>
          </Column>

          {/* Controle de Tema */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Controle de Tema</Title>
              <Description>
                Teste como os inputs se comportam em diferentes temas.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Input 
                placeholder="Input com tema adaptativo" 
                value={textValue}
                onChange={setTextValue}
              />
            </Card>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no componente Input.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={8}>
                <Label>placeholder: string</Label>
                <Description>Texto de placeholder do input</Description>

                <Label>value: string</Label>
                <Description>Valor atual do input</Description>

                <Label>onChange: (text: string) = void</Label>
                <Description>Função chamada quando o texto muda</Description>

                <Label>icon: string</Label>
                <Description>Nome do ícone a ser exibido</Description>

                <Label>keyboardType: KeyboardTypeOptions</Label>
                <Description>Tipo de teclado (email, numeric, phone-pad, etc.)</Description>

                <Label>secureTextEntry: boolean</Label>
                <Description>Oculta o texto digitado (para senhas)</Description>

                <Label>editable: boolean</Label>
                <Description>Permite ou não edição do input</Description>

                <Label>error: string</Label>
                <Description>Mensagem de erro a ser exibida</Description>

                <Label>maxLength: number</Label>
                <Description>Número máximo de caracteres permitidos</Description>

                <Label>autoCapitalize: 'none' | 'sentences' | 'words' | 'characters'</Label>
                <Description>Configuração de capitalização automática</Description>

                <Label>autoCorrect: boolean</Label>
                <Description>Habilita ou desabilita correção automática</Description>
              </Column>
            </Card>
          </Column>

          <Divider />
        </Column>
      </ScrollVertical>
    </Main>
  );
}
