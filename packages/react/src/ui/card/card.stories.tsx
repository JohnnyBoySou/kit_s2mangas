import Card from "./card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    padding: {
      control: { type: "number", min: 0, max: 100 },
      description: "Padding interno do card",
    },
    margin: {
      control: { type: "number", min: 0, max: 100 },
      description: "Margin externo do card",
    },
    borderRadius: {
      control: { type: "number", min: 0, max: 50 },
      description: "Raio das bordas",
    },
    backgroundColor: {
      control: { type: "color" },
      description: "Cor de fundo do card",
    },
    shadow: {
      control: { type: "boolean" },
      description: "Exibir sombra",
    },
    onClick: { action: "clicked" },
  },
};

// Story básica
export const Default = {
  args: {
    children: "Conteúdo do card",
    padding: 16,
    margin: 0,
    borderRadius: 12,
    shadow: true,
  },
};

// Card com conteúdo rico
export const WithContent = {
  args: {
    children: (
      <div>
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "18px",
          }}
        >
          Título do Card
        </h3>
        <p
          style={{
            margin: "0 0 16px 0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          Este é um exemplo de card com conteúdo mais rico, incluindo título,
          texto e botão.
        </p>
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
    ),
  },
};

// Card com imagem
export const WithImage = {
  args: {
    children: (
      <div>
        <img
          src="https://via.placeholder.com/300x200/007AFF/FFFFFF?text=Imagem"
          alt="Placeholder"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Card com Imagem
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Este card contém uma imagem e texto descritivo.
        </p>
      </div>
    ),
  },
};

// Card clicável
export const Clickable = {
  args: {
    children: (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎯</div>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Card Clicável
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "#666",
          }}
        >
          Clique para interagir
        </p>
      </div>
    ),
    onClick: () => alert("Card clicado!"),
  },
};

// Card sem sombra
export const NoShadow = {
  args: {
    children: "Card sem sombra",
    shadow: false,
  },
};

// Card com bordas arredondadas
export const Rounded = {
  args: {
    children: "Card com bordas muito arredondadas",
    borderRadius: 24,
  },
};

// Card com bordas quadradas
export const Square = {
  args: {
    children: "Card com bordas quadradas",
    borderRadius: 0,
  },
};

// Card com padding grande
export const LargePadding = {
  args: {
    children: "Card com padding grande",
    padding: 32,
  },
};

// Card com padding pequeno
export const SmallPadding = {
  args: {
    children: "Card com padding pequeno",
    padding: 8,
  },
};

// Card com cor personalizada
export const CustomColor = {
  args: {
    children: "Card com cor personalizada",
    backgroundColor: "#FF6B6B",
  },
};

// Card com margin
export const WithMargin = {
  args: {
    children: "Card com margin",
    margin: 16,
  },
};

// Comparação de estilos
export const StyleComparison = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "800px",
      }}
    >
      <Card>
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Padrão
        </h3>
        <p style={{ margin: "0", fontFamily: "Font_Book", fontSize: "14px" }}>
          Card com estilo padrão
        </p>
      </Card>

      <Card shadow={false}>
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Sem Sombra
        </h3>
        <p style={{ margin: "0", fontFamily: "Font_Book", fontSize: "14px" }}>
          Card sem sombra
        </p>
      </Card>

      <Card borderRadius={24}>
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
          }}
        >
          Arredondado
        </h3>
        <p style={{ margin: "0", fontFamily: "Font_Book", fontSize: "14px" }}>
          Card com bordas muito arredondadas
        </p>
      </Card>

      <Card backgroundColor="#FF6B6B">
        <h3
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "16px",
            color: "white",
          }}
        >
          Colorido
        </h3>
        <p
          style={{
            margin: "0",
            fontFamily: "Font_Book",
            fontSize: "14px",
            color: "white",
          }}
        >
          Card com cor personalizada
        </p>
      </Card>
    </div>
  ),
};

// Exemplos de uso real
export const UsageExamples = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "800px",
      }}
    >
      {/* Card de produto */}
      <Card>
        <div style={{ display: "flex", gap: "16px" }}>
          <img
            src="https://via.placeholder.com/80x80/007AFF/FFFFFF?text=Produto"
            alt="Produto"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div style={{ flex: 1 }}>
            <h3
              style={{
                margin: "0 0 8px 0",
                fontFamily: "Font_Bold",
                fontSize: "16px",
              }}
            >
              Produto Premium
            </h3>
            <p
              style={{
                margin: "0 0 12px 0",
                fontFamily: "Font_Book",
                fontSize: "14px",
                color: "#666",
              }}
            >
              Descrição do produto com detalhes importantes.
            </p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "Font_Bold",
                  fontSize: "18px",
                  color: "#007AFF",
                }}
              >
                R$ 99,90
              </span>
              <button
                style={{
                  backgroundColor: "#007AFF",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontFamily: "Font_Medium",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Card de notificação */}
      <Card
        backgroundColor="#FFF3CD"
        onClick={() => alert("Notificação clicada!")}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <div style={{ fontSize: "24px" }}>🔔</div>
          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: "0 0 4px 0",
                fontFamily: "Font_Bold",
                fontSize: "14px",
                color: "#856404",
              }}
            >
              Nova Notificação
            </h4>
            <p
              style={{
                margin: "0",
                fontFamily: "Font_Book",
                fontSize: "13px",
                color: "#856404",
              }}
            >
              Você tem uma nova mensagem importante para visualizar.
            </p>
          </div>
        </div>
      </Card>

      {/* Card de estatísticas */}
      <Card>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>📊</div>
          <h3
            style={{
              margin: "0 0 8px 0",
              fontFamily: "Font_Bold",
              fontSize: "24px",
            }}
          >
            1,234
          </h3>
          <p
            style={{
              margin: "0",
              fontFamily: "Font_Book",
              fontSize: "14px",
              color: "#666",
            }}
          >
            Visualizações hoje
          </p>
        </div>
      </Card>
    </div>
  ),
};

// Card com hover effect
export const WithHoverEffect = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        maxWidth: "600px",
      }}
    >
      <Card
        style={{
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onClick={() => alert("Card 1 clicado!")}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>🚀</div>
          <h3
            style={{ margin: "0", fontFamily: "Font_Bold", fontSize: "14px" }}
          >
            Card 1
          </h3>
        </div>
      </Card>

      <Card
        style={{
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onClick={() => alert("Card 2 clicado!")}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>⚡</div>
          <h3
            style={{ margin: "0", fontFamily: "Font_Bold", fontSize: "14px" }}
          >
            Card 2
          </h3>
        </div>
      </Card>

      <Card
        style={{
          cursor: "pointer",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onClick={() => alert("Card 3 clicado!")}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "8px" }}>🎯</div>
          <h3
            style={{ margin: "0", fontFamily: "Font_Bold", fontSize: "14px" }}
          >
            Card 3
          </h3>
        </div>
      </Card>
    </div>
  ),
};
