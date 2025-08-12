import Divider from "./divider";

export default {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Orientação do divider",
    },
    color: {
      control: { type: "color" },
      description: "Cor do divider",
    },
    thickness: {
      control: { type: "number", min: 1, max: 20 },
      description: "Espessura do divider",
    },
  },
};

// Story básica
export const Default = {
  args: {
    orientation: "horizontal",
    color: "#e0e0e0",
    thickness: 1,
  },
};

// Divider horizontal
export const Horizontal = {
  args: {
    orientation: "horizontal",
    color: "#e0e0e0",
    thickness: 1,
  },
};

// Divider vertical
export const Vertical = {
  args: {
    orientation: "vertical",
    color: "#e0e0e0",
    thickness: 1,
  },
  render: (args: any) => (
    <div
      style={{
        height: "100px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <span>Texto</span>
      <Divider {...args} />
      <span>Texto</span>
    </div>
  ),
};

// Divider grosso
export const Thick = {
  args: {
    orientation: "horizontal",
    color: "#e0e0e0",
    thickness: 4,
  },
};

// Divider fino
export const Thin = {
  args: {
    orientation: "horizontal",
    color: "#e0e0e0",
    thickness: 1,
  },
};

// Divider colorido
export const Colored = {
  args: {
    orientation: "horizontal",
    color: "#007AFF",
    thickness: 2,
  },
};

// Divider com cor personalizada
export const CustomColor = {
  args: {
    orientation: "horizontal",
    color: "#FF6B6B",
    thickness: 3,
  },
};

// Comparação de espessuras
export const ThicknessComparison = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "400px",
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Espessura: 1px
        </p>
        <Divider thickness={1} />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Espessura: 2px
        </p>
        <Divider thickness={2} />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Espessura: 4px
        </p>
        <Divider thickness={4} />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Espessura: 8px
        </p>
        <Divider thickness={8} />
      </div>
    </div>
  ),
};

// Comparação de cores
export const ColorComparison = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "400px",
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Cor padrão
        </p>
        <Divider color="#e0e0e0" />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Azul
        </p>
        <Divider color="#007AFF" />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Vermelho
        </p>
        <Divider color="#FF6B6B" />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Verde
        </p>
        <Divider color="#28a745" />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Roxo
        </p>
        <Divider color="#6f42c1" />
      </div>
    </div>
  ),
};

// Divider com texto
export const WithText = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        minWidth: "400px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Divider style={{ flex: 1 }} />
        <span
          style={{ fontFamily: "Font_Medium", fontSize: "14px", color: "#666" }}
        >
          OU
        </span>
        <Divider style={{ flex: 1 }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Divider style={{ flex: 1 }} />
        <span
          style={{ fontFamily: "Font_Medium", fontSize: "14px", color: "#666" }}
        >
          Continuar com
        </span>
        <Divider style={{ flex: 1 }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Divider style={{ flex: 1 }} />
        <span
          style={{ fontFamily: "Font_Medium", fontSize: "14px", color: "#666" }}
        >
          Seção
        </span>
        <Divider style={{ flex: 1 }} />
      </div>
    </div>
  ),
};

// Divider em layout
export const InLayout = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "400px",
      }}
    >
      <div>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Seção 1
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo da primeira seção.
        </p>
      </div>

      <Divider />

      <div>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Seção 2
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo da segunda seção.
        </p>
      </div>

      <Divider />

      <div>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Seção 3
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo da terceira seção.
        </p>
      </div>
    </div>
  ),
};

// Divider vertical em layout
export const VerticalInLayout = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        minHeight: "200px",
        gap: "16px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Coluna Esquerda
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo da coluna esquerda.
        </p>
      </div>

      <Divider orientation="vertical" />

      <div style={{ flex: 1 }}>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Coluna Direita
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo da coluna direita.
        </p>
      </div>
    </div>
  ),
};

// Divider com espaçamento
export const WithSpacing = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        minWidth: "400px",
      }}
    >
      <div>
        <h3
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Título da Seção
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo da seção com espaçamento adequado.
        </p>
      </div>

      <Divider style={{ margin: "16px 0" }} />

      <div>
        <h3
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Próxima Seção
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Outro conteúdo com espaçamento consistente.
        </p>
      </div>
    </div>
  ),
};

// Divider decorativo
export const Decorative = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        minWidth: "400px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "24px",
          }}
        >
          Título Principal
        </h2>
        <Divider
          color="#007AFF"
          thickness={3}
          style={{ width: "60px", margin: "0 auto" }}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "18px",
          }}
        >
          Subtítulo
        </h3>
        <Divider
          color="#FF6B6B"
          thickness={2}
          style={{ width: "40px", margin: "0 auto" }}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          Seção Menor
        </h4>
        <Divider
          color="#28a745"
          thickness={1}
          style={{ width: "30px", margin: "0 auto" }}
        />
      </div>
    </div>
  ),
};

// Divider em cards
export const InCards = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "800px",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Card 1
        </h3>
        <p
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo do primeiro card.
        </p>
        <Divider style={{ margin: "16px 0" }} />
        <button
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            fontFamily: "Font_Medium",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Ação
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Card 2
        </h3>
        <p
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Conteúdo do segundo card.
        </p>
        <Divider style={{ margin: "16px 0" }} />
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontFamily: "Font_Medium",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Aceitar
          </button>
          <button
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontFamily: "Font_Medium",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  ),
};

// Divider com gradiente (simulado)
export const Gradient = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "400px",
      }}
    >
      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Gradiente azul para vermelho
        </p>
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #007AFF, #FF6B6B)",
            borderRadius: "2px",
          }}
        />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Gradiente verde para roxo
        </p>
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #28a745, #6f42c1)",
            borderRadius: "2px",
          }}
        />
      </div>

      <div>
        <p
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
          }}
        >
          Gradiente laranja para rosa
        </p>
        <div
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #fd7e14, #e83e8c)",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  ),
};
