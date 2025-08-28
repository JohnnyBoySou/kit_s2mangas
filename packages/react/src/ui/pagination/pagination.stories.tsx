import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Pagination from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
O componente **Pagination** oferece uma interface completa para navegação entre páginas de conteúdo. 

## Características principais:

- **Navegação intuitiva**: Botões para primeira, anterior, próxima e última página
- **Páginas visíveis**: Controle do número máximo de páginas exibidas simultaneamente
- **Reticências inteligentes**: Indicação automática quando há mais páginas disponíveis
- **Múltiplas variantes**: Default, outlined e minimal para diferentes contextos visuais
- **Tamanhos flexíveis**: Small, medium e large para diferentes necessidades de espaço
- **Informações contextuais**: Opção de exibir "Página X de Y"
- **Acessibilidade**: Suporte completo a screen readers e navegação por teclado
- **Estado desabilitado**: Controle total sobre a interatividade

## Casos de uso:

- Tabelas com muitos registros
- Listagens de produtos ou artigos
- Resultados de busca
- Galerias de imagens
- Qualquer conteúdo que precise ser dividido em páginas

## Boas práticas:

- Use \`maxVisiblePages\` entre 5-7 para melhor usabilidade
- Ative \`showPageInfo\` em tabelas para contexto adicional
- Use \`showFirstLast\` quando há muitas páginas (>10)
- Escolha o tamanho apropriado para o contexto da interface
				`,
      },
    },
  },
  argTypes: {
    currentPage: {
      description: "Página atual (baseada em 1, não 0)",
      control: { type: "number", min: 1 },
      type: { name: "number", required: true },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    totalPages: {
      description: "Número total de páginas disponíveis",
      control: { type: "number", min: 1 },
      type: { name: "number", required: true },
      table: {
        type: { summary: "number" },
      },
    },
    onPageChange: {
      description:
        "Função chamada quando o usuário navega para uma página diferente",
      action: "page changed",
      type: { name: "function", required: true },
      table: {
        type: { summary: "(page: number) => void" },
      },
    },
    maxVisiblePages: {
      description: "Número máximo de botões de página visíveis simultaneamente",
      control: { type: "number", min: 3, max: 10 },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    showFirstLast: {
      description:
        "Exibe botões para navegar diretamente à primeira e última página",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showPageInfo: {
      description: 'Exibe informações textuais como "Página 3 de 10"',
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Desabilita toda a interação com a paginação",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    size: {
      description: "Tamanho dos botões e espaçamentos",
      control: { type: "select" },
      options: ["small", "medium", "large"],
      table: {
        type: { summary: "'small' | 'medium' | 'large'" },
        defaultValue: { summary: "'medium'" },
      },
    },
    variant: {
      description: "Estilo visual dos botões",
      control: { type: "select" },
      options: ["default", "outlined", "minimal"],
      table: {
        type: { summary: "'default' | 'outlined' | 'minimal'" },
        defaultValue: { summary: "'default'" },
      },
    },
    testID: {
      description: "Identificador para testes automatizados",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      description: "Classes CSS adicionais para customização",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    style: {
      description: "Estilos CSS inline para customização avançada",
      control: { type: "object" },
      table: {
        type: { summary: "React.CSSProperties" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com página atual no meio do intervalo.",
      },
    },
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação na última página.",
      },
    },
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com muitas páginas, mostrando reticências.",
      },
    },
  },
};

export const WithPageInfo: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    showPageInfo: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com informações de página visíveis.",
      },
    },
  },
};

export const WithoutFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    showFirstLast: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação sem botões de primeira/última página.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    size: "small",
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com tamanho pequeno.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    size: "large",
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com tamanho grande.",
      },
    },
  },
};

export const OutlinedVariant: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    variant: "outlined",
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com variante outlined.",
      },
    },
  },
};

export const MinimalVariant: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    variant: "minimal",
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com variante minimal.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação desabilitada.",
      },
    },
  },
};

export const LimitedVisiblePages: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    maxVisiblePages: 3,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com número limitado de páginas visíveis.",
      },
    },
  },
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com apenas uma página.",
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    className: "custom-pagination",
    style: {
      padding: "16px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      border: "1px solid #dee2e6",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Paginação com estilos customizados.",
      },
    },
  },
};

// Interactive Example
export const InteractiveExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 15;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h3>Paginação Interativa</h3>
          <p>Página atual: {currentPage}</p>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showPageInfo={true}
        />

        <div style={{ marginTop: "16px" }}>
          <button
            onClick={() => setCurrentPage(1)}
            style={{ marginRight: "8px", padding: "8px 16px" }}
          >
            Reset para página 1
          </button>
          <button
            onClick={() => setCurrentPage(Math.ceil(totalPages / 2))}
            style={{ padding: "8px 16px" }}
          >
            Ir para o meio
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo interativo onde você pode navegar entre as páginas.",
      },
    },
  },
};

// Table Pagination Example
export const TablePaginationExample: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h3>Exemplo com Tabela</h3>
          <p>
            Mostrando {startItem}-{endItem} de {totalItems} itens
          </p>
        </div>

        <div
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#f8f9fa" }}>
              <tr>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Nome
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.min(itemsPerPage, totalItems - startItem + 1) },
                (_, i) => {
                  const itemId = startItem + i;
                  return (
                    <tr key={itemId}>
                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #f1f3f4",
                        }}
                      >
                        {itemId}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #f1f3f4",
                        }}
                      >
                        Usuário {itemId}
                      </td>
                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #f1f3f4",
                        }}
                      >
                        usuario{itemId}@exemplo.com
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#6c757d", fontSize: "14px" }}>
            {totalItems} itens no total
          </span>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            variant="outlined"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo de uso com tabela paginada.",
      },
    },
  },
};

// Variants Showcase
export const VariantsShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3 style={{ marginBottom: "16px" }}>Default</h3>
        <Pagination currentPage={3} totalPages={8} onPageChange={() => {}} />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Outlined</h3>
        <Pagination
          currentPage={3}
          totalPages={8}
          variant="outlined"
          onPageChange={() => {}}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Minimal</h3>
        <Pagination
          currentPage={3}
          totalPages={8}
          variant="minimal"
          onPageChange={() => {}}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparação visual entre as diferentes variantes da paginação.",
      },
    },
  },
};

// Sizes Showcase
export const SizesShowcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3 style={{ marginBottom: "16px" }}>Small</h3>
        <Pagination
          currentPage={3}
          totalPages={8}
          size="small"
          onPageChange={() => {}}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Medium (Default)</h3>
        <Pagination
          currentPage={3}
          totalPages={8}
          size="medium"
          onPageChange={() => {}}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Large</h3>
        <Pagination
          currentPage={3}
          totalPages={8}
          size="large"
          onPageChange={() => {}}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparação visual entre os diferentes tamanhos da paginação.",
      },
    },
  },
};
