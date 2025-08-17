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
} from '@s2mangas/native';

export default function InputsScreen() {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [cpfValue, setCpfValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [cepValue, setCepValue] = useState('');
  const [birthdateValue, setBirthdateValue] = useState('');
  const [currencyValue, setCurrencyValue] = useState('');

  return (
    <Main>
      <ScrollVertical>
        <Column gv={16} ph={24} pv={44}>
          <Title>Inputs - Documentação</Title>
          <Description>
            Componente Input do @s2mangas/native com todas as suas variantes e
            propriedades.
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
                  onChangeText={setTextValue}
                  label="Nome"
                />
                <Input
                  placeholder="Digite seu email..."
                  value={emailValue}
                  onChangeText={setEmailValue}
                  keyboardType="email-address"
                />
                <Input
                  placeholder="Digite sua senha..."
                  value={passwordValue}
                  onChangeText={setPasswordValue}
                  secure
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
                  onChangeText={setSearchValue}
                />
                <Input
                  placeholder="Digite seu email..."
                  value={emailValue}
                  onChangeText={setEmailValue}
                  keyboardType="email-address"
                />
                <Input
                  placeholder="Digite sua senha..."
                  value={passwordValue}
                  onChangeText={setPasswordValue}
                  secure
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
                  onChangeText={setTextValue}
                />
                <Input
                  placeholder="Input desabilitado"
                  value="Valor fixo"
                  disabled
                />
                <Input
                  placeholder="Input com erro"
                  value={textValue}
                  onChangeText={setTextValue}
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
                <Input placeholder="Número" keyboardType="numeric" />
                <Input placeholder="URL" keyboardType="url" />
                <Input placeholder="Decimal" keyboardType="decimal-pad" />
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
                  onChangeText={setEmailValue}
                  keyboardType="email-address"
                  error={
                    emailValue && !emailValue.includes('@')
                      ? 'Email inválido'
                      : undefined
                  }
                />
                <Input
                  placeholder="Senha (mínimo 6 caracteres)"
                  value={passwordValue}
                  onChangeText={setPasswordValue}
                  secure
                  error={
                    passwordValue && passwordValue.length < 6
                      ? 'Senha muito curta'
                      : undefined
                  }
                />
              </Column>
            </Card>
          </Column>

          {/* Inputs com Máscara */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Inputs com Máscara</Title>
              <Description>
                Inputs que formatam automaticamente a entrada do usuário usando
                as máscaras do core.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input
                  placeholder="CPF (000.000.000-00)"
                  value={cpfValue}
                  onChangeText={setCpfValue}
                  mask="CPF"
                  keyboardType="numeric"
                />
                <Input
                  placeholder="Telefone ((00) 00000-0000)"
                  value={phoneValue}
                  onChangeText={setPhoneValue}
                  mask="PHONE"
                  keyboardType="phone-pad"
                />
                <Input
                  placeholder="CEP (00000-000)"
                  value={cepValue}
                  onChangeText={setCepValue}
                  mask="CEP"
                  keyboardType="numeric"
                />
                <Input
                  placeholder="Data de Nascimento (DD/MM/AAAA)"
                  value={birthdateValue}
                  onChangeText={setBirthdateValue}
                  mask="NASCIMENTO"
                  keyboardType="numeric"
                />
                <Input
                  placeholder="Valor (R$ 0,00)"
                  value={currencyValue}
                  onChangeText={setCurrencyValue}
                  mask="CURRENCY"
                  keyboardType="numeric"
                />
              </Column>
            </Card>
          </Column>

          {/* InputBig com Máscaras */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>InputBig com Máscaras</Title>
              <Description>
                Componente InputBig também suporta as máscaras do core.
              </Description>
            </Column>
            <Card pv={16} ph={16}>
              <Column gv={12}>
                <Input
                  placeholder="Digite seu CPF..."
                  value={cpfValue}
                  onChangeText={setCpfValue}
                  mask="CPF"
                  label="CPF"
                />
                <Input
                  placeholder="Digite seu telefone..."
                  value={phoneValue}
                  onChangeText={setPhoneValue}
                  mask="PHONE"
                  label="Telefone"
                  iconLeft="Phone"
                  required
                />
                <Input
                  placeholder="Digite seu CEP..."
                  value={cepValue}
                  onChangeText={setCepValue}
                  mask="CEP"
                  label="CEP"
                  keyboardType="numeric"
                />
                <Input
                  placeholder="Digite sua data de nascimento..."
                  value={birthdateValue}
                  onChangeText={setBirthdateValue}
                  mask="NASCIMENTO"
                  label="Data de Nascimento"
                  iconRight="Calendar"
                  required
                  keyboardType="numeric"
                />
                
                {/* Exemplo com ref */}
                <Column gv={8}>
                  <Input
                    placeholder="Clique no botão para focar..."
                    value={textValue}
                    onChangeText={setTextValue}
                    label="Input com Ref"
                  />
                </Column>
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
                onChangeText={setTextValue}
              />
            </Card>
          </Column>

          {/* Propriedades do Componente */}
          <Column gv={12}>
            <Column gv={6} mv={12}>
              <Title level={2}>Propriedades Disponíveis</Title>
              <Description>
                Lista completa das propriedades que podem ser usadas no
                componente Input.
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
                <Description>
                  Tipo de teclado (email, numeric, phone-pad, etc.)
                </Description>

                <Label>secureTextEntry: boolean</Label>
                <Description>Oculta o texto digitado (para senhas)</Description>

                <Label>editable: boolean</Label>
                <Description>Permite ou não edição do input</Description>

                <Label>error: string</Label>
                <Description>Mensagem de erro a ser exibida</Description>

                <Label>maxLength: number</Label>
                <Description>
                  Número máximo de caracteres permitidos
                </Description>

                <Label>
                  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters'
                </Label>
                <Description>
                  Configuração de capitalização automática
                </Description>

                <Label>autoCorrect: boolean</Label>
                <Description>
                  Habilita ou desabilita correção automática
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
