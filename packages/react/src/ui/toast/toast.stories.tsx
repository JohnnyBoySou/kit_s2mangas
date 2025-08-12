import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Toast from "./toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    success: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    duration: {
      control: { type: "number" },
    },
    onClose: {
      action: "closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    success: "Operação realizada com sucesso!",
    duration: 0, // Disable auto-hide for story
  },
};

export const Error: Story = {
  args: {
    error: "Ocorreu um erro ao processar a solicitação.",
    duration: 0, // Disable auto-hide for story
  },
};

export const LongSuccessMessage: Story = {
  args: {
    success:
      "Esta é uma mensagem de sucesso muito longa que pode ocupar mais espaço no toast para testar como o componente se comporta com textos extensos.",
    duration: 0,
  },
};

export const LongErrorMessage: Story = {
  args: {
    error:
      "Esta é uma mensagem de erro muito longa que pode ocupar mais espaço no toast para testar como o componente se comporta com textos extensos e quebras de linha.",
    duration: 0,
  },
};

export const WithCustomDuration: Story = {
  args: {
    success: "Esta mensagem desaparecerá em 2 segundos",
    duration: 2000,
  },
};

export const WithCustomStyle: Story = {
  args: {
    success: "Toast com estilo customizado",
    duration: 0,
    style: {
      border: "2px solid #fff",
      boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
      transform: "scale(1.1)",
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [toastType, setToastType] = useState<"success" | "error" | null>(
      null,
    );
    const [message, setMessage] = useState("");

    const showSuccess = () => {
      setMessage("Sucesso! Operação concluída.");
      setToastType("success");
    };

    const showError = () => {
      setMessage("Erro! Algo deu errado.");
      setToastType("error");
    };

    const handleClose = () => {
      setToastType(null);
      setMessage("");
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={showSuccess}
            style={{
              padding: "8px 16px",
              backgroundColor: "#00c48c",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "Font_Medium",
            }}
          >
            Mostrar Sucesso
          </button>
          <button
            onClick={showError}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ff3d71",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "Font_Medium",
            }}
          >
            Mostrar Erro
          </button>
        </div>

        {toastType && (
          <Toast
            success={toastType === "success" ? message : ""}
            error={toastType === "error" ? message : ""}
            onClose={handleClose}
            duration={0}
          />
        )}
      </div>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "300px",
      }}
    >
      <Toast success="Primeira operação concluída!" duration={0} />
      <Toast error="Erro na segunda operação" duration={0} />
      <Toast success="Terceira operação bem-sucedida" duration={0} />
    </div>
  ),
};

export const AutoHide: Story = {
  args: {
    success: "Esta mensagem desaparecerá automaticamente em 3 segundos",
    duration: 3000,
  },
};

export const ClickToClose: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        {visible ? (
          <Toast
            success="Clique no toast para fechá-lo"
            duration={0}
            onClose={() => setVisible(false)}
          />
        ) : (
          <button
            onClick={() => setVisible(true)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007AFF",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontFamily: "Font_Medium",
            }}
          >
            Mostrar Toast Novamente
          </button>
        )}
      </div>
    );
  },
};
