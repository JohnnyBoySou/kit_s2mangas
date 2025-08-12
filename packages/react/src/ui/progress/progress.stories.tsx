import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Progress from "./progress";
import Button from "../button/button";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de barra de progresso para mostrar o andamento de tarefas.",
      },
    },
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Valor atual do progresso (0-100)",
    },
    max: {
      control: "number",
      description: "Valor máximo do progresso",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Tamanho da barra de progresso",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
      description: "Variante visual",
    },
    showText: {
      control: "boolean",
      description: "Se deve mostrar o texto do progresso",
    },
    text: {
      control: "text",
      description: "Texto customizado do progresso",
    },
    showPercentage: {
      control: "boolean",
      description: "Se deve mostrar a porcentagem",
    },
    indeterminate: {
      control: "boolean",
      description: "Se a barra é indeterminada (loading)",
    },
    rounded: {
      control: "boolean",
      description: "Se a barra tem bordas arredondadas",
    },
    animated: {
      control: "boolean",
      description: "Se a barra tem animação",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithPercentage: Story = {
  args: {
    value: 75,
    showPercentage: true,
  },
};

export const WithCustomText: Story = {
  args: {
    value: 60,
    text: "Carregando...",
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
      }}
    >
      <div>
        <h4>Small</h4>
        <Progress value={30} size="small" showPercentage />
      </div>
      <div>
        <h4>Medium</h4>
        <Progress value={60} size="medium" showPercentage />
      </div>
      <div>
        <h4>Large</h4>
        <Progress value={90} size="large" showPercentage />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
      }}
    >
      <div>
        <h4>Default</h4>
        <Progress value={50} variant="default" showPercentage />
      </div>
      <div>
        <h4>Success</h4>
        <Progress value={100} variant="success" text="Concluído!" />
      </div>
      <div>
        <h4>Warning</h4>
        <Progress value={75} variant="warning" text="Atenção" />
      </div>
      <div>
        <h4>Error</h4>
        <Progress value={25} variant="error" text="Erro" />
      </div>
      <div>
        <h4>Info</h4>
        <Progress value={60} variant="info" text="Processando" />
      </div>
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    value: 0,
    indeterminate: true,
    text: "Carregando...",
  },
};

export const Animated: Story = {
  args: {
    value: 70,
    animated: true,
    showPercentage: true,
  },
};

export const NotRounded: Story = {
  args: {
    value: 45,
    rounded: false,
    showPercentage: true,
  },
};

export const DifferentValues: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
      }}
    >
      <div>
        <h4>0%</h4>
        <Progress value={0} showPercentage />
      </div>
      <div>
        <h4>25%</h4>
        <Progress value={25} showPercentage />
      </div>
      <div>
        <h4>50%</h4>
        <Progress value={50} showPercentage />
      </div>
      <div>
        <h4>75%</h4>
        <Progress value={75} showPercentage />
      </div>
      <div>
        <h4>100%</h4>
        <Progress value={100} showPercentage variant="success" />
      </div>
    </div>
  ),
};

export const CustomMax: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
      }}
    >
      <div>
        <h4>25 de 50</h4>
        <Progress value={25} max={50} text="25/50" />
      </div>
      <div>
        <h4>150 de 200</h4>
        <Progress value={150} max={200} text="150/200" />
      </div>
      <div>
        <h4>7 de 10</h4>
        <Progress value={7} max={10} text="7/10" />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(false);

    const startProgress = () => {
      setIsLoading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    };

    const reset = () => {
      setProgress(0);
      setIsLoading(false);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "300px",
        }}
      >
        <Progress
          value={progress}
          showPercentage
          variant={progress === 100 ? "success" : "default"}
          text={progress === 100 ? "Concluído!" : undefined}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            label="Iniciar"
            onClick={startProgress}
            disabled={isLoading}
          />
          <Button label="Reset" onClick={reset} variant="outline" />
        </div>
      </div>
    );
  },
};

export const FileUpload: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [isUploading, setIsUploading] = React.useState(false);

    const simulateUpload = () => {
      setIsUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + Math.random() * 10;
        });
      }, 200);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "400px",
        }}
      >
        <h4>Upload de Arquivo</h4>
        <div
          style={{
            border: "2px dashed #ccc",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f8f9fa",
          }}
        >
          <p>arquivo.pdf (2.5 MB)</p>
          {isUploading ? (
            <Progress
              value={uploadProgress}
              variant="info"
              text={`Enviando... ${Math.round(uploadProgress)}%`}
              animated
            />
          ) : uploadProgress === 100 ? (
            <Progress value={100} variant="success" text="Upload concluído!" />
          ) : (
            <Button label="Fazer Upload" onClick={simulateUpload} />
          )}
        </div>
      </div>
    );
  },
};

export const MultipleProgress: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "350px",
      }}
    >
      <h4>Status do Sistema</h4>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span>CPU</span>
          <span>45%</span>
        </div>
        <Progress value={45} variant="info" size="small" />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span>Memória</span>
          <span>78%</span>
        </div>
        <Progress value={78} variant="warning" size="small" />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span>Disco</span>
          <span>92%</span>
        </div>
        <Progress value={92} variant="error" size="small" />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span>Rede</span>
          <span>23%</span>
        </div>
        <Progress value={23} variant="success" size="small" />
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "300px",
      }}
    >
      <div>
        <h4>Carregamento Indeterminado</h4>
        <Progress value={0} indeterminate text="Conectando..." />
      </div>

      <div>
        <h4>Carregamento com Progresso</h4>
        <Progress value={65} animated text="Baixando dados..." />
      </div>

      <div>
        <h4>Processamento Completo</h4>
        <Progress
          value={100}
          variant="success"
          text="Processamento concluído!"
        />
      </div>
    </div>
  ),
};
