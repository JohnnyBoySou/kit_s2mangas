import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from "./layout";

export default {
  title: "Components/Layout",
  parameters: {
    layout: "centered",
  },
};

// Column básico
export const ColumnBasic = {
  render: () => (
    <Column
      gap={16}
      style={{
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          padding: "12px",
          backgroundColor: "#007AFF",
          color: "white",
          borderRadius: "6px",
          textAlign: "center",
          fontFamily: "Font_Book",
        }}
      >
        Item 1
      </div>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "6px",
          textAlign: "center",
          fontFamily: "Font_Book",
        }}
      >
        Item 2
      </div>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#FF6B6B",
          color: "white",
          borderRadius: "6px",
          textAlign: "center",
          fontFamily: "Font_Book",
        }}
      >
        Item 3
      </div>
    </Column>
  ),
};

// Row básico
export const RowBasic = {
  render: () => (
    <Row
      gap={16}
      style={{
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          padding: "12px",
          backgroundColor: "#007AFF",
          color: "white",
          borderRadius: "6px",
          textAlign: "center",
          fontFamily: "Font_Book",
        }}
      >
        Item 1
      </div>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "6px",
          textAlign: "center",
          fontFamily: "Font_Book",
        }}
      >
        Item 2
      </div>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#FF6B6B",
          color: "white",
          borderRadius: "6px",
          textAlign: "center",
          fontFamily: "Font_Book",
        }}
      >
        Item 3
      </div>
    </Row>
  ),
};

// Column com diferentes alinhamentos
export const ColumnAlignments = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          flex-start
        </h4>
        <Column
          alignItems="flex-start"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            height: "200px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Column>
      </div>

      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          center
        </h4>
        <Column
          alignItems="center"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            height: "200px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Column>
      </div>

      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          flex-end
        </h4>
        <Column
          alignItems="flex-end"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            height: "200px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Column>
      </div>

      <div style={{ textAlign: "center" }}>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          stretch
        </h4>
        <Column
          alignItems="stretch"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            height: "200px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Column>
      </div>
    </div>
  ),
};

// Row com diferentes justificações
export const RowJustifications = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        minWidth: "600px",
      }}
    >
      <div>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          flex-start
        </h4>
        <Row
          justifyContent="flex-start"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Row>
      </div>

      <div>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          center
        </h4>
        <Row
          justifyContent="center"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Row>
      </div>

      <div>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          flex-end
        </h4>
        <Row
          justifyContent="flex-end"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Row>
      </div>

      <div>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          space-between
        </h4>
        <Row
          justifyContent="space-between"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Row>
      </div>

      <div>
        <h4
          style={{
            margin: "0 0 12px 0",
            fontFamily: "Font_Bold",
            fontSize: "14px",
          }}
        >
          space-around
        </h4>
        <Row
          justifyContent="space-around"
          gap={8}
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              padding: "8px",
              backgroundColor: "#007AFF",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 1
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 2
          </div>
          <div
            style={{
              padding: "8px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "4px",
              fontFamily: "Font_Book",
            }}
          >
            Item 3
          </div>
        </Row>
      </div>
    </div>
  ),
};

// Layout complexo
export const ComplexLayout = {
  render: () => (
    <div
      style={{
        width: "800px",
        height: "600px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Row
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "16px 24px",
          backgroundColor: "#007AFF",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0, fontFamily: "Font_Bold", fontSize: "20px" }}>
          Dashboard
        </h1>
        <Row gap={12}>
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            Perfil
          </div>
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            Configurações
          </div>
        </Row>
      </Row>

      {/* Main Content */}
      <Row style={{ height: "calc(100% - 72px)" }}>
        {/* Sidebar */}
        <Column
          gap={8}
          style={{
            width: "200px",
            padding: "16px",
            backgroundColor: "#f8f9fa",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              padding: "12px",
              backgroundColor: "#e9ecef",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            📊 Dashboard
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#e9ecef",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            👥 Usuários
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#e9ecef",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            📦 Produtos
          </div>
          <div
            style={{
              padding: "12px",
              backgroundColor: "#e9ecef",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            📈 Relatórios
          </div>
        </Column>

        {/* Content Area */}
        <Column
          gap={16}
          style={{
            flex: 1,
            padding: "24px",
            backgroundColor: "white",
          }}
        >
          {/* Stats Row */}
          <Row gap={16}>
            <div
              style={{
                flex: 1,
                padding: "20px",
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0", fontFamily: "Font_Bold" }}>
                1,234
              </h3>
              <p style={{ margin: 0, fontFamily: "Font_Book" }}>
                Usuários Ativos
              </p>
            </div>
            <div
              style={{
                flex: 1,
                padding: "20px",
                backgroundColor: "#FF6B6B",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0", fontFamily: "Font_Bold" }}>
                567
              </h3>
              <p style={{ margin: 0, fontFamily: "Font_Book" }}>Vendas Hoje</p>
            </div>
            <div
              style={{
                flex: 1,
                padding: "20px",
                backgroundColor: "#6f42c1",
                color: "white",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 8px 0", fontFamily: "Font_Bold" }}>
                89%
              </h3>
              <p style={{ margin: 0, fontFamily: "Font_Book" }}>Satisfação</p>
            </div>
          </Row>

          {/* Content Grid */}
          <Row gap={16} style={{ flex: 1 }}>
            <Column
              gap={12}
              style={{
                flex: 1,
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ margin: "0 0 12px 0", fontFamily: "Font_Bold" }}>
                Atividades Recentes
              </h3>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  fontFamily: "Font_Book",
                }}
              >
                Usuário João fez login
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  fontFamily: "Font_Book",
                }}
              >
                Nova venda registrada
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  fontFamily: "Font_Book",
                }}
              >
                Relatório gerado
              </div>
            </Column>

            <Column
              gap={12}
              style={{
                flex: 1,
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ margin: "0 0 12px 0", fontFamily: "Font_Bold" }}>
                Tarefas Pendentes
              </h3>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  fontFamily: "Font_Book",
                }}
              >
                Revisar relatórios
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  fontFamily: "Font_Book",
                }}
              >
                Atualizar sistema
              </div>
              <div
                style={{
                  padding: "8px",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  fontFamily: "Font_Book",
                }}
              >
                Responder emails
              </div>
            </Column>
          </Row>
        </Column>
      </Row>
    </div>
  ),
};

// Scroll Horizontal
export const HorizontalScroll = {
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <h3 style={{ margin: "0 0 16px 0", fontFamily: "Font_Bold" }}>
        Cards Horizontais
      </h3>
      <ScrollHorizontal gap={16} style={{ padding: "16px 0" }}>
        <div
          style={{
            minWidth: "200px",
            padding: "20px",
            backgroundColor: "#007AFF",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "Font_Book",
          }}
        >
          Card 1
        </div>
        <div
          style={{
            minWidth: "200px",
            padding: "20px",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "Font_Book",
          }}
        >
          Card 2
        </div>
        <div
          style={{
            minWidth: "200px",
            padding: "20px",
            backgroundColor: "#FF6B6B",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "Font_Book",
          }}
        >
          Card 3
        </div>
        <div
          style={{
            minWidth: "200px",
            padding: "20px",
            backgroundColor: "#6f42c1",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "Font_Book",
          }}
        >
          Card 4
        </div>
        <div
          style={{
            minWidth: "200px",
            padding: "20px",
            backgroundColor: "#fd7e14",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontFamily: "Font_Book",
          }}
        >
          Card 5
        </div>
      </ScrollHorizontal>
    </div>
  ),
};

// Scroll Vertical
export const VerticalScroll = {
  render: () => (
    <div style={{ maxWidth: "400px" }}>
      <h3 style={{ margin: "0 0 16px 0", fontFamily: "Font_Bold" }}>
        Lista Vertical
      </h3>
      <ScrollVertical
        gap={8}
        height="300px"
        style={{
          padding: "16px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "#f8f9fa",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              padding: "12px",
              backgroundColor: "white",
              borderRadius: "6px",
              fontFamily: "Font_Book",
              border: "1px solid #e0e0e0",
            }}
          >
            Item {i + 1} - Este é um item da lista com algum conteúdo
          </div>
        ))}
      </ScrollVertical>
    </div>
  ),
};

// Layout responsivo
export const ResponsiveLayout = {
  render: () => (
    <div
      style={{
        maxWidth: "800px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Row
        justifyContent="space-between"
        alignItems="center"
        style={{
          padding: "16px 24px",
          backgroundColor: "#007AFF",
          color: "white",
        }}
      >
        <h1 style={{ margin: 0, fontFamily: "Font_Bold", fontSize: "20px" }}>
          App Responsivo
        </h1>
        <Row gap={12}>
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "6px",
              fontFamily: "Font_Book",
            }}
          >
            Menu
          </div>
        </Row>
      </Row>

      {/* Content */}
      <Column gap={16} style={{ padding: "24px" }}>
        <h2 style={{ margin: 0, fontFamily: "Font_Bold" }}>
          Layout Responsivo
        </h2>
        <p style={{ margin: 0, fontFamily: "Font_Book", color: "#666" }}>
          Este layout se adapta a diferentes tamanhos de tela usando flexbox.
        </p>

        {/* Cards Grid */}
        <Row
          gap={16}
          style={{
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "8px",
              textAlign: "center",
              fontFamily: "Font_Book",
            }}
          >
            Card Flexível 1
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              backgroundColor: "#FF6B6B",
              color: "white",
              borderRadius: "8px",
              textAlign: "center",
              fontFamily: "Font_Book",
            }}
          >
            Card Flexível 2
          </div>
          <div
            style={{
              flex: "1 1 200px",
              padding: "20px",
              backgroundColor: "#6f42c1",
              color: "white",
              borderRadius: "8px",
              textAlign: "center",
              fontFamily: "Font_Book",
            }}
          >
            Card Flexível 3
          </div>
        </Row>
      </Column>
    </div>
  ),
};

// Main component
export const MainComponent = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "400px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 24px",
          backgroundColor: "#007AFF",
          color: "white",
          fontFamily: "Font_Bold",
        }}
      >
        Header da Aplicação
      </div>

      {/* Main Content */}
      <Main style={{ padding: "24px" }}>
        <h2 style={{ margin: "0 0 16px 0", fontFamily: "Font_Bold" }}>
          Conteúdo Principal
        </h2>
        <p style={{ margin: 0, fontFamily: "Font_Book", color: "#666" }}>
          Este é o conteúdo principal da aplicação. O componente Main ocupa todo
          o espaço disponível.
        </p>

        <Column gap={16} style={{ marginTop: "24px" }}>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              fontFamily: "Font_Book",
            }}
          >
            Seção 1 - Conteúdo adicional
          </div>
          <div
            style={{
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              fontFamily: "Font_Book",
            }}
          >
            Seção 2 - Mais conteúdo
          </div>
        </Column>
      </Main>
    </div>
  ),
};

// Nested layouts
export const NestedLayouts = {
  render: () => (
    <div
      style={{
        maxWidth: "800px",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <Column gap={0}>
        {/* Header */}
        <Row
          justifyContent="space-between"
          alignItems="center"
          style={{
            padding: "16px 24px",
            backgroundColor: "#007AFF",
            color: "white",
          }}
        >
          <h1 style={{ margin: 0, fontFamily: "Font_Bold", fontSize: "20px" }}>
            Layouts Aninhados
          </h1>
          <Row gap={12}>
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "6px",
                fontFamily: "Font_Book",
              }}
            >
              Ação 1
            </div>
            <div
              style={{
                padding: "8px 16px",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "6px",
                fontFamily: "Font_Book",
              }}
            >
              Ação 2
            </div>
          </Row>
        </Row>

        {/* Content */}
        <Row style={{ minHeight: "400px" }}>
          {/* Sidebar */}
          <Column
            gap={8}
            style={{
              width: "200px",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRight: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e9ecef",
                borderRadius: "6px",
                fontFamily: "Font_Book",
              }}
            >
              Menu 1
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e9ecef",
                borderRadius: "6px",
                fontFamily: "Font_Book",
              }}
            >
              Menu 2
            </div>
            <div
              style={{
                padding: "12px",
                backgroundColor: "#e9ecef",
                borderRadius: "6px",
                fontFamily: "Font_Book",
              }}
            >
              Menu 3
            </div>
          </Column>

          {/* Main Content */}
          <Column
            gap={16}
            style={{
              flex: 1,
              padding: "24px",
            }}
          >
            <h2 style={{ margin: 0, fontFamily: "Font_Bold" }}>
              Conteúdo Principal
            </h2>

            {/* Nested Row */}
            <Row gap={16}>
              <Column
                gap={8}
                style={{
                  flex: 1,
                  padding: "16px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ margin: "0 0 12px 0", fontFamily: "Font_Bold" }}>
                  Coluna 1
                </h3>
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Item 1
                </div>
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Item 2
                </div>
              </Column>

              <Column
                gap={8}
                style={{
                  flex: 1,
                  padding: "16px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ margin: "0 0 12px 0", fontFamily: "Font_Bold" }}>
                  Coluna 2
                </h3>
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Item 1
                </div>
                <div
                  style={{
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Item 2
                </div>
              </Column>
            </Row>

            {/* Nested Column */}
            <Column
              gap={8}
              style={{
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ margin: "0 0 12px 0", fontFamily: "Font_Bold" }}>
                Seção Inferior
              </h3>
              <Row gap={8}>
                <div
                  style={{
                    flex: 1,
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Sub-item 1
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Sub-item 2
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: "8px",
                    backgroundColor: "white",
                    borderRadius: "4px",
                    fontFamily: "Font_Book",
                  }}
                >
                  Sub-item 3
                </div>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </div>
  ),
};
