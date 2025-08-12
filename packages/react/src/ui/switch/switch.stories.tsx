import { useState } from "react";
import Switch from "./switch";

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Estado do switch",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilitar o switch",
    },
    onChange: { action: "changed" },
  },
};

// Story básica
export const Default = {
  args: {
    checked: false,
    disabled: false,
  },
};

// Switch ligado
export const Checked = {
  args: {
    checked: true,
    disabled: false,
  },
};

// Switch desabilitado
export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
};

// Switch desabilitado e ligado
export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
  },
};

// Comparação de estados
export const StateComparison = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "300px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch checked={false} />
        <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
          Switch desligado
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch checked={true} />
        <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
          Switch ligado
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch checked={false} disabled={true} />
        <span
          style={{ fontFamily: "Font_Book", fontSize: "14px", color: "#666" }}
        >
          Switch desabilitado
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch checked={true} disabled={true} />
        <span
          style={{ fontFamily: "Font_Book", fontSize: "14px", color: "#666" }}
        >
          Switch desabilitado e ligado
        </span>
      </div>
    </div>
  ),
};

// Switch interativo
export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minWidth: "300px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={checked} onChange={setChecked} />
          <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
            Switch Interativo
          </span>
        </div>

        <p
          style={{
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
            margin: "0",
          }}
        >
          Estado: {checked ? "Ligado" : "Desligado"}
        </p>
      </div>
    );
  },
};

// Múltiplos switches
export const MultipleSwitches = {
  render: () => {
    const [switches, setSwitches] = useState({
      notifications: false,
      darkMode: true,
      autoSave: false,
      sound: true,
    });

    const handleSwitchChange = (key: string, value: boolean) => {
      setSwitches((prev) => ({ ...prev, [key]: value }));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minWidth: "300px",
        }}
      >
        <h3
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Configurações
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
            Notificações
          </span>
          <Switch
            checked={switches.notifications}
            onChange={(value) => handleSwitchChange("notifications", value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
            Modo Escuro
          </span>
          <Switch
            checked={switches.darkMode}
            onChange={(value) => handleSwitchChange("darkMode", value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
            Salvar Automaticamente
          </span>
          <Switch
            checked={switches.autoSave}
            onChange={(value) => handleSwitchChange("autoSave", value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>Som</span>
          <Switch
            checked={switches.sound}
            onChange={(value) => handleSwitchChange("sound", value)}
          />
        </div>

        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          <strong>Configurações ativas:</strong>{" "}
          {Object.keys(switches)
            .filter((key) => switches[key as keyof typeof switches])
            .join(", ") || "Nenhuma"}
        </div>
      </div>
    );
  },
};

// Switch com descrição
export const WithDescription = {
  render: () => {
    const [switches, setSwitches] = useState({
      email: false,
      push: true,
      sms: false,
    });

    const handleSwitchChange = (key: string, value: boolean) => {
      setSwitches((prev) => ({ ...prev, [key]: value }));
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minWidth: "400px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: "0 0 4px 0",
                fontFamily: "Font_Bold",
                fontSize: "14px",
              }}
            >
              Notificações por Email
            </h4>
            <p
              style={{
                margin: "0",
                fontFamily: "Font_Book",
                fontSize: "12px",
                color: "#666",
              }}
            >
              Receba atualizações importantes por email
            </p>
          </div>
          <Switch
            checked={switches.email}
            onChange={(value) => handleSwitchChange("email", value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: "0 0 4px 0",
                fontFamily: "Font_Bold",
                fontSize: "14px",
              }}
            >
              Notificações Push
            </h4>
            <p
              style={{
                margin: "0",
                fontFamily: "Font_Book",
                fontSize: "12px",
                color: "#666",
              }}
            >
              Receba notificações instantâneas no navegador
            </p>
          </div>
          <Switch
            checked={switches.push}
            onChange={(value) => handleSwitchChange("push", value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: "0 0 4px 0",
                fontFamily: "Font_Bold",
                fontSize: "14px",
              }}
            >
              Notificações SMS
            </h4>
            <p
              style={{
                margin: "0",
                fontFamily: "Font_Book",
                fontSize: "12px",
                color: "#666",
              }}
            >
              Receba mensagens de texto no seu celular
            </p>
          </div>
          <Switch
            checked={switches.sms}
            onChange={(value) => handleSwitchChange("sms", value)}
          />
        </div>
      </div>
    );
  },
};

// Switch com validação
export const WithValidation = {
  render: () => {
    const [agreed, setAgreed] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
      if (!agreed) {
        setShowError(true);
      } else {
        alert("Formulário enviado com sucesso!");
        setShowError(false);
      }
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          minWidth: "400px",
        }}
      >
        <h3
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Termos e Condições
        </h3>

        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <Switch
            checked={agreed}
            onChange={(value) => {
              setAgreed(value);
              setShowError(false);
            }}
          />
          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: "0",
                fontFamily: "Font_Book",
                fontSize: "14px",
                lineHeight: "1.4",
              }}
            >
              Concordo com os{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                termos e condições
              </span>
              e a{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                política de privacidade
              </span>
              .
            </p>
            {showError && (
              <p
                style={{
                  margin: "8px 0 0 0",
                  color: "#dc3545",
                  fontSize: "12px",
                  fontFamily: "Font_Book",
                }}
              >
                Você deve concordar com os termos para continuar.
              </p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontFamily: "Font_Medium",
            fontSize: "14px",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Continuar
        </button>
      </div>
    );
  },
};

// Switch em card
export const InCard = {
  render: () => {
    const [settings, setSettings] = useState({
      wifi: true,
      bluetooth: false,
      airplane: false,
    });

    const handleSettingChange = (key: string, value: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    };

    return (
      <div
        style={{
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          backgroundColor: "white",
          minWidth: "350px",
        }}
      >
        <h3
          style={{
            margin: "0 0 20px 0",
            fontFamily: "Font_Bold",
            fontSize: "18px",
          }}
        >
          Configurações do Dispositivo
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "20px" }}>📶</div>
              <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
                Wi-Fi
              </span>
            </div>
            <Switch
              checked={settings.wifi}
              onChange={(value) => handleSettingChange("wifi", value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "20px" }}>🔵</div>
              <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
                Bluetooth
              </span>
            </div>
            <Switch
              checked={settings.bluetooth}
              onChange={(value) => handleSettingChange("bluetooth", value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ fontSize: "20px" }}>✈️</div>
              <span style={{ fontFamily: "Font_Book", fontSize: "14px" }}>
                Modo Avião
              </span>
            </div>
            <Switch
              checked={settings.airplane}
              onChange={(value) => handleSettingChange("airplane", value)}
            />
          </div>
        </div>
      </div>
    );
  },
};
