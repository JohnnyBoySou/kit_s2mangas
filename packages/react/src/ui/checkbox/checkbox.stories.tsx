import { useState } from "react";
import Checkbox from "./checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Estado do checkbox",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilitar o checkbox",
    },
    label: {
      control: { type: "text" },
      description: "Texto do label",
    },
    onChange: { action: "changed" },
  },
};

// Story básica
export const Default = {
  args: {
    label: "Checkbox padrão",
    checked: false,
    disabled: false,
  },
};

// Checkbox marcado
export const Checked = {
  args: {
    label: "Checkbox marcado",
    checked: true,
    disabled: false,
  },
};

// Checkbox desabilitado
export const Disabled = {
  args: {
    label: "Checkbox desabilitado",
    checked: false,
    disabled: true,
  },
};

// Checkbox desabilitado e marcado
export const DisabledChecked = {
  args: {
    label: "Checkbox desabilitado e marcado",
    checked: true,
    disabled: true,
  },
};

// Checkbox sem label
export const NoLabel = {
  args: {
    checked: false,
    disabled: false,
  },
};

// Checkbox com label longo
export const LongLabel = {
  args: {
    label:
      "Este é um checkbox com um label muito longo que pode quebrar em múltiplas linhas para demonstrar como o componente se comporta com textos extensos",
    checked: false,
    disabled: false,
  },
};

// Checkbox com label curto
export const ShortLabel = {
  args: {
    label: "Sim",
    checked: false,
    disabled: false,
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
      <Checkbox label="Checkbox desmarcado" checked={false} />
      <Checkbox label="Checkbox marcado" checked={true} />
      <Checkbox label="Checkbox desabilitado" checked={false} disabled={true} />
      <Checkbox
        label="Checkbox desabilitado e marcado"
        checked={true}
        disabled={true}
      />
    </div>
  ),
};

// Checkbox interativo
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
        <Checkbox
          label="Checkbox interativo"
          checked={checked}
          onChange={setChecked}
        />
        <p
          style={{
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
            margin: "0",
          }}
        >
          Estado: {checked ? "Marcado" : "Desmarcado"}
        </p>
      </div>
    );
  },
};

// Múltiplos checkboxes
export const MultipleCheckboxes = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const items = [
      { id: "item1", label: "Opção 1" },
      { id: "item2", label: "Opção 2" },
      { id: "item3", label: "Opção 3" },
      { id: "item4", label: "Opção 4" },
    ];

    const handleItemChange = (itemId: string, checked: boolean) => {
      if (checked) {
        setSelectedItems((prev) => [...prev, itemId]);
      } else {
        setSelectedItems((prev) => prev.filter((id) => id !== itemId));
      }
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
          Selecione as opções:
        </h3>

        {items.map((item) => (
          <Checkbox
            key={item.id}
            label={item.label}
            checked={selectedItems.includes(item.id)}
            onChange={(checked) => handleItemChange(item.id, checked)}
          />
        ))}

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
          <strong>Itens selecionados:</strong>{" "}
          {selectedItems.length > 0 ? selectedItems.join(", ") : "Nenhum"}
        </div>
      </div>
    );
  },
};

// Checkbox com "Selecionar todos"
export const SelectAll = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const items = [
      { id: "item1", label: "Item 1" },
      { id: "item2", label: "Item 2" },
      { id: "item3", label: "Item 3" },
      { id: "item4", label: "Item 4" },
      { id: "item5", label: "Item 5" },
    ];

    const allSelected =
      items.length > 0 && selectedItems.length === items.length;
    const someSelected =
      selectedItems.length > 0 && selectedItems.length < items.length;

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedItems(items.map((item) => item.id));
      } else {
        setSelectedItems([]);
      }
    };

    const handleItemChange = (itemId: string, checked: boolean) => {
      if (checked) {
        setSelectedItems((prev) => [...prev, itemId]);
      } else {
        setSelectedItems((prev) => prev.filter((id) => id !== itemId));
      }
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
          Lista de Itens
        </h3>

        <Checkbox
          label="Selecionar todos"
          checked={allSelected}
          onChange={handleSelectAll}
          style={{
            paddingBottom: "12px",
            borderBottom: "1px solid #e0e0e0",
            marginBottom: "8px",
          }}
        />

        {items.map((item) => (
          <Checkbox
            key={item.id}
            label={item.label}
            checked={selectedItems.includes(item.id)}
            onChange={(checked) => handleItemChange(item.id, checked)}
          />
        ))}

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
          <strong>Selecionados:</strong> {selectedItems.length} de{" "}
          {items.length}
        </div>
      </div>
    );
  },
};

// Checkbox com diferentes tamanhos de label
export const LabelSizes = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "300px",
      }}
    >
      <Checkbox label="Label normal" checked={false} />
      <Checkbox label="Label com texto médio" checked={false} />
      <Checkbox
        label="Label muito longo que pode quebrar em múltiplas linhas para demonstrar como o componente se comporta com textos extensos e complexos"
        checked={false}
      />
      <Checkbox label="A" checked={false} />
    </div>
  ),
};

// Checkbox com estados de loading (simulado)
export const LoadingStates = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "300px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox label="Carregando..." checked={false} disabled={true} />
        <span style={{ fontSize: "12px", color: "#666" }}>⏳</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox label="Processando..." checked={true} disabled={true} />
        <span style={{ fontSize: "12px", color: "#666" }}>🔄</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Checkbox label="Concluído" checked={true} disabled={false} />
        <span style={{ fontSize: "12px", color: "#28a745" }}>✅</span>
      </div>
    </div>
  ),
};

// Checkbox com validação
export const Validation = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
      setShowError(false);
    };

    const handleSubmit = () => {
      if (!checked) {
        setShowError(true);
      } else {
        alert("Formulário enviado com sucesso!");
      }
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
          Formulário com Validação
        </h3>

        <Checkbox
          label="Concordo com os termos e condições"
          checked={checked}
          onChange={handleChange}
          style={
            showError
              ? {
                  border: "1px solid #dc3545",
                  padding: "8px",
                  borderRadius: "4px",
                  backgroundColor: "#fff5f5",
                }
              : {}
          }
        />

        {showError && (
          <p
            style={{
              margin: "0",
              color: "#dc3545",
              fontSize: "12px",
              fontFamily: "Font_Book",
            }}
          >
            Você deve concordar com os termos para continuar.
          </p>
        )}

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            fontFamily: "Font_Medium",
            fontSize: "14px",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Enviar
        </button>
      </div>
    );
  },
};
