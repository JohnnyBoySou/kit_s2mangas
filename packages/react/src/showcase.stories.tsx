import type { Meta, StoryObj } from '@storybook/react'
import ShowcasePage from './showcase'

const meta: Meta<typeof ShowcasePage> = {
  title: 'Showcase/All Components',
  component: ShowcasePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Página que demonstra todos os componentes do design system S2Mangas em funcionamento.'
      }
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const AllComponents: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstração completa de todos os componentes disponíveis no design system, incluindo suas variantes, tamanhos e estados.'
      }
    }
  }
}