import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Tooltip from "./tooltip";
import Button from "../button/button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de tooltip para mostrar informações contextuais ao usuário.",
      },
    },
  },
  argTypes: {
    content: {
      control: "text",
      description: "Conteúdo do tooltip",
    },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Posição do tooltip",
    },
    trigger: {
      control: "select",
      options: ["hover", "click", "focus"],
      description: "Trigger para mostrar o tooltip",
    },
    showDelay: {
      control: "number",
      description: "Delay para mostrar o tooltip (ms)",
    },
    hideDelay: {
      control: "number",
      description: "Delay para esconder o tooltip (ms)",
    },
    disabled: {
      control: "boolean",
      description: "Se o tooltip está desabilitado",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Tamanho do tooltip",
    },
    variant: {
      control: "select",
      options: ["dark", "light", "info", "warning", "error", "success"],
      description: "Variante visual",
    },
    maxWidth: {
      control: "number",
      description: "Largura máxima do tooltip",
    },
    showArrow: {
      control: "boolean",
      description: "Se deve mostrar a seta",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "Este é um tooltip padrão",
    children: <Button label="Hover me" />,
  },
};

export const Positions: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
        padding: "60px",
      }}
    >
      <Tooltip content="Tooltip no topo" position="top">
        <Button label="Top" />
      </Tooltip>
      <Tooltip content="Tooltip na direita" position="right">
        <Button label="Right" />
      </Tooltip>
      <Tooltip content="Tooltip embaixo" position="bottom">
        <Button label="Bottom" />
      </Tooltip>
      <Tooltip content="Tooltip na esquerda" position="left">
        <Button label="Left" />
      </Tooltip>
    </div>
  ),
};

export const Triggers: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <Tooltip content="Aparece no hover" trigger="hover">
        <Button label="Hover" />
      </Tooltip>
      <Tooltip content="Aparece no clique" trigger="click">
        <Button label="Click" />
      </Tooltip>
      <Tooltip content="Aparece no foco" trigger="focus">
        <Button label="Focus" />
      </Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <Tooltip content="Tooltip pequeno" size="small">
        <Button label="Small" />
      </Tooltip>
      <Tooltip content="Tooltip médio" size="medium">
        <Button label="Medium" />
      </Tooltip>
      <Tooltip content="Tooltip grande" size="large">
        <Button label="Large" />
      </Tooltip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "40px",
      }}
    >
      <Tooltip content="Tooltip escuro" variant="dark">
        <Button label="Dark" />
      </Tooltip>
      <Tooltip content="Tooltip claro" variant="light">
        <Button label="Light" />
      </Tooltip>
      <Tooltip content="Tooltip informativo" variant="info">
        <Button label="Info" />
      </Tooltip>
      <Tooltip content="Tooltip de aviso" variant="warning">
        <Button label="Warning" />
      </Tooltip>
      <Tooltip content="Tooltip de erro" variant="error">
        <Button label="Error" />
      </Tooltip>
      <Tooltip content="Tooltip de sucesso" variant="success">
        <Button label="Success" />
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <Tooltip content="Aparece rapidamente" showDelay={0} hideDelay={0}>
        <Button label="No Delay" />
      </Tooltip>
      <Tooltip content="Aparece com delay" showDelay={500} hideDelay={200}>
        <Button label="With Delay" />
      </Tooltip>
    </div>
  ),
};

export const WithoutArrow: Story = {
  args: {
    content: "Tooltip sem seta",
    showArrow: false,
    children: <Button label="No Arrow" />,
  },
};

export const Disabled: Story = {
  args: {
    content: "Este tooltip não aparece",
    disabled: true,
    children: <Button label="Disabled Tooltip" />,
  },
};

export const LongContent: Story = {
  args: {
    content:
      "Este é um tooltip com conteúdo muito longo que pode quebrar em múltiplas linhas para demonstrar como o componente lida com textos extensos.",
    maxWidth: 250,
    children: <Button label="Long Content" />,
  },
};

export const JSXContent: Story = {
  args: {
    content: (
      <div>
        <strong>Título do Tooltip</strong>
        <br />
        <span>Conteúdo com formatação</span>
        <br />
        <em>Texto em itálico</em>
      </div>
    ),
    children: <Button label="JSX Content" />,
  },
};

export const Interactive: Story = {
  render: () => {
    const [count, setCount] = React.useState(0);

    return (
      <div style={{ padding: "40px" }}>
        <Tooltip content={`Clicado ${count} vezes`} trigger="hover">
          <Button
            label={`Click me (${count})`}
            onClick={() => setCount(count + 1)}
          />
        </Tooltip>
      </div>
    );
  },
};

export const HelpIcon: Story = {
  render: () => (
    <div style={{ padding: "40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>Campo obrigatório</span>
        <Tooltip
          content="Este campo é obrigatório e deve ser preenchido antes de enviar o formulário."
          size="small"
          maxWidth={200}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#6c757d",
              color: "white",
              fontSize: "12px",
              cursor: "help",
            }}
          >
            ?
          </span>
        </Tooltip>
      </div>
    </div>
  ),
};

export const FormField: Story = {
  render: () => (
    <div style={{ padding: "40px", maxWidth: "300px" }}>
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}
        >
          Email
        </label>
        <Tooltip
          content="Digite um endereço de email válido"
          trigger="focus"
          position="right"
        >
          <input
            type="email"
            placeholder="seu@email.com"
            style={{
              width: "100%",
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          />
        </Tooltip>
      </div>
    </div>
  ),
};

export const StatusIndicator: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      <Tooltip content="Sistema funcionando normalmente" variant="success">
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#28a745",
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip content="Sistema com problemas" variant="warning">
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ffc107",
            cursor: "pointer",
          }}
        />
      </Tooltip>
      <Tooltip content="Sistema fora do ar" variant="error">
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#dc3545",
            cursor: "pointer",
          }}
        />
      </Tooltip>
    </div>
  ),
};
