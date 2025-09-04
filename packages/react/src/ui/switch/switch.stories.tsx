import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Switch from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Estado do switch",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilitar o switch",
    },
    onChange: {
      action: "switch changed",
    },
    style: {
      control: { type: "object" },
    },
    className: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "Font_Book",
          fontSize: "14px",
        }}
      >
        <Switch checked={checked} onChange={setChecked} />
        <span>Estado: {checked ? "Ligado" : "Desligado"}</span>
      </div>
    );
  },
};

export const WithCustomStyle: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Switch
          checked={checked}
          onChange={setChecked}
          style={{
            border: "2px solid #007AFF",
            borderRadius: "30px",
            padding: "2px",
            backgroundColor: "#1a1a1a",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        />

        <p
          style={{
            fontSize: "12px",
            color: "#666",
            textAlign: "center",
            fontFamily: "Font_Book",
            margin: 0,
          }}
        >
          Switch com estilo customizado
        </p>
      </div>
    );
  },
};

export const MultipleStates: Story = {
  render: () => {
    const [state1, setState1] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(true);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          fontFamily: "Font_Book",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={state1} onChange={setState1} />
          <span>Notificações: {state1 ? "Ativadas" : "Desativadas"}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={state2} onChange={setState2} />
          <span>Modo escuro: {state2 ? "Ativado" : "Desativado"}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={state3} onChange={setState3} />
          <span>Auto-save: {state3 ? "Ativado" : "Desativado"}</span>
        </div>
      </div>
    );
  },
};

export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      notifications: true,
      newsletter: false,
      publicProfile: false,
      twoFactor: true,
    });

    const updateField = (field: keyof typeof formData) => (value: boolean) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          fontFamily: "Font_Book",
          fontSize: "14px",
          minWidth: "300px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", color: "#333" }}>
          Configurações da Conta
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <Switch
            checked={formData.notifications}
            onChange={updateField("notifications")}
          />
          <span>Receber notificações</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <Switch
            checked={formData.newsletter}
            onChange={updateField("newsletter")}
          />
          <span>Newsletter semanal</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <Switch
            checked={formData.publicProfile}
            onChange={updateField("publicProfile")}
          />
          <span>Perfil público</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          <Switch
            checked={formData.twoFactor}
            onChange={updateField("twoFactor")}
          />
          <span>Autenticação de dois fatores</span>
        </div>

        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#e9ecef",
            borderRadius: "6px",
            fontSize: "12px",
            color: "#666",
          }}
        >
          <strong>Estado atual:</strong>
          <br />
          {JSON.stringify(formData, null, 2)}
        </div>
      </div>
    );
  },
};

export const DisabledStates: Story = {
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
          fontFamily: "Font_Book",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={false} disabled={true} />
          <span style={{ color: "#999" }}>Desabilitado (Off)</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={true} disabled={true} />
          <span style={{ color: "#999" }}>Desabilitado (On)</span>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#666",
            textAlign: "center",
            margin: 0,
            marginTop: "8px",
          }}
        >
          Switches desabilitados não podem ser alterados
        </p>
      </div>
    );
  },
};

export const WithTestID: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Switch
        checked={checked}
        onChange={setChecked}
        testID="switch-component"
      />
    );
  },
};

export const SizeVariations: Story = {
  render: () => {
    const [small, setSmall] = useState(false);
    const [medium, setMedium] = useState(true);
    const [large, setLarge] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          fontFamily: "Font_Book",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch
            checked={small}
            onChange={setSmall}
            style={{
              width: "32px",
              height: "18px",
            }}
          />
          <span>Pequeno</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={medium} onChange={setMedium} />
          <span>Médio (padrão)</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch
            checked={large}
            onChange={setLarge}
            style={{
              width: "56px",
              height: "30px",
            }}
          />
          <span>Grande</span>
        </div>
      </div>
    );
  },
};
