import React, { useState } from 'react'
import { theme } from '@s2mangas/core'

// Importando componentes individuais
import Badge from './ui/badge/badge'
import Button from './ui/button/button'
import Card from './ui/card/card'
import Checkbox from './ui/checkbox/checkbox'
import Chip from './ui/chip/chip'
import Divider from './ui/divider/divider'
import Input from './ui/input/input'
import Loader from './ui/loader/loader'
import Switch from './ui/switch/switch'

// Importando subcomponentes de Text
import { Title, HeadTitle, Label, SubLabel, Description, U } from './ui/text/text'

// Importando subcomponentes de Layout
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from './ui/layout/layout'

const ShowcasePage: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [chips, setChips] = useState(['React', 'TypeScript', 'Design System'])

  const removeChip = (indexToRemove: number) => {
    setChips(prev => prev.filter((_, index) => index !== indexToRemove))
  }

  const showcaseStyle: React.CSSProperties = {
    fontFamily: theme.font.book,
    backgroundColor: '#000',
    minHeight: '100vh',
    padding: '20px',
  }

  const sectionStyle: React.CSSProperties = {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#101010',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: theme.color.title,
    borderBottom: `2px solid ${theme.color.primary}`,
    paddingBottom: '10px',
  }

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '15px',
    marginTop: '25px',
    color: theme.color.text,
  }

  return (
    <div style={showcaseStyle}>
      <Main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Title style={{ textAlign: 'center', marginBottom: '40px' }}>
          S2Mangas Design System Showcase
        </Title>

        {/* Text Components */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Text Components</h2>
          <Column gap={15}>
            <Title>Title - Título Principal</Title>
            <HeadTitle>HeadTitle - Título Secundário</HeadTitle>
            <Label>Label - Rótulo padrão</Label>
            <SubLabel>SubLabel - Rótulo secundário</SubLabel>
            <Description>
              Description - Este é um texto de descrição que fornece informações detalhadas sobre o conteúdo.
            </Description>
            <U>U - Texto sublinhado para destacar informações importantes</U>
          </Column>
        </div>

        {/* Layout Components */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Layout Components</h2>
          
          <h3 style={subtitleStyle}>Column Layout</h3>
          <Column gap={10} style={{ border: '1px dashed #ccc', padding: '15px', marginBottom: '20px' }}>
            <Label>Item 1 na coluna</Label>
            <Label>Item 2 na coluna</Label>
            <Label>Item 3 na coluna</Label>
          </Column>

          <h3 style={subtitleStyle}>Row Layout</h3>
          <Row gap={15} style={{ border: '1px dashed #ccc', padding: '15px', marginBottom: '20px' }}>
            <Badge variant="default">Badge 1</Badge>
            <Badge variant="secondary">Badge 2</Badge>
            <Badge variant="destructive">Badge 3</Badge>
          </Row>

          <h3 style={subtitleStyle}>Scroll Horizontal</h3>
          <ScrollHorizontal gap={10} style={{ border: '1px dashed #ccc', padding: '15px', marginBottom: '20px', maxWidth: '300px' }}>
            <Button variant="primary">Botão 1</Button>
            <Button variant="secondary">Botão 2</Button>
            <Button variant="outline">Botão 3</Button>
            <Button variant="ghost">Botão 4</Button>
            <Button variant="destructive">Botão 5</Button>
          </ScrollHorizontal>

          <h3 style={subtitleStyle}>Scroll Vertical</h3>
          <ScrollVertical gap={8} maxHeight="150px" style={{ border: '1px dashed #ccc', padding: '15px' }}>
            <Label>Item 1 - Linha de conteúdo</Label>
            <Label>Item 2 - Linha de conteúdo</Label>
            <Label>Item 3 - Linha de conteúdo</Label>
            <Label>Item 4 - Linha de conteúdo</Label>
            <Label>Item 5 - Linha de conteúdo</Label>
            <Label>Item 6 - Linha de conteúdo</Label>
            <Label>Item 7 - Linha de conteúdo</Label>
            <Label>Item 8 - Linha de conteúdo</Label>
          </ScrollVertical>
        </div>

        {/* Buttons */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Buttons</h2>
          
          <h3 style={subtitleStyle}>Variantes</h3>
          <Row gap={10} style={{ marginBottom: '15px', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>

          <h3 style={subtitleStyle}>Tamanhos</h3>
          <Row gap={10} alignItems="center" style={{ marginBottom: '15px' }}>
            <Button >Small</Button>
            <Button >Medium</Button>
            <Button>Large</Button>
          </Row>

          <h3 style={subtitleStyle}>Estados</h3>
          <Row gap={10} style={{ flexWrap: 'wrap' }}>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </Row>
        </div>

        {/* Chips */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Chips</h2>
          
          <Column gap={20}>
            <div>
              <h3 style={subtitleStyle}>Variantes</h3>
              <Row gap={8} style={{ flexWrap: 'wrap' }}>
                <Chip variant="default">Default</Chip>
                <Chip variant="primary">Primary</Chip>
                <Chip variant="secondary">Secondary</Chip>
                <Chip variant="success">Success</Chip>
                <Chip variant="warning">Warning</Chip>
                <Chip variant="error">Error</Chip>
              </Row>
            </div>

            <div>
              <h3 style={subtitleStyle}>Tamanhos</h3>
              <Row gap={10} alignItems="center">
                <Chip size="sm">Small</Chip>
                <Chip size="md">Medium</Chip>
                <Chip size="lg">Large</Chip>
              </Row>
            </div>

            <div>
              <h3 style={subtitleStyle}>Removable Tags</h3>
              <Row gap={8} style={{ flexWrap: 'wrap' }}>
                {chips.map((chip, index) => (
                  <Chip
                    key={chip}
                    variant={index % 2 === 0 ? 'primary' : 'secondary'}
                    removable
                    onRemove={() => removeChip(index)}
                  >
                    {chip}
                  </Chip>
                ))}
              </Row>
            </div>
          </Column>
        </div>

        {/* Badges */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Badges</h2>
          
          <Column gap={20}>
            <div>
              <h3 style={subtitleStyle}>Variantes</h3>
              <Row gap={8} style={{ flexWrap: 'wrap' }}>
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
              </Row>
            </div>

            <div>
              <h3 style={subtitleStyle}>Tamanhos</h3>
              <Row gap={10} alignItems="center">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </Row>
            </div>
          </Column>
        </div>


        {/* Cards */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Cards</h2>
          
          <Row gap={15} style={{ flexWrap: 'wrap' }}>
            <Card style={{ minWidth: '200px', flex: 1 }}>
              <Column gap={10}>
                <HeadTitle>Card Simples</HeadTitle>
                <Description>Este é um card básico com conteúdo.</Description>
              </Column>
            </Card>
            
            <Card style={{ minWidth: '200px', flex: 1 }}>
              <Column gap={15}>
                <HeadTitle>Card com Ações</HeadTitle>
                <Description>Card com botões de ação.</Description>
                <Row gap={10}>
                  <Button variant="primary">Confirmar</Button>
                  <Button variant="outline">Cancelar</Button>
                </Row>
              </Column>
            </Card>
          </Row>
        </div>

        {/* Loader */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Loader</h2>
          
          <h3 style={subtitleStyle}>Tamanhos</h3>
          <Row gap={30} alignItems="center">
            <Column alignItems="center" gap={5}>
              <Loader size="sm" />
              <SubLabel>Small</SubLabel>
            </Column>
            <Column alignItems="center" gap={5}>
              <Loader size="md" />
              <SubLabel>Medium</SubLabel>
            </Column>
            <Column alignItems="center" gap={5}>
              <Loader size="lg" />
              <SubLabel>Large</SubLabel>
            </Column>
          </Row>
        </div>

        {/* Dividers */}
        <div style={sectionStyle}>
          <h2 style={titleStyle}>Dividers</h2>
          
          <Column gap={20}>
            <Description>Texto acima do divisor</Description>
            <Divider />
            <Description>Texto abaixo do divisor</Description>
          </Column>
        </div>

      </Main>
    </div>
  )
}

export default ShowcasePage