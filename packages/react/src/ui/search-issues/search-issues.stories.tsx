import { useState } from "react";
import SearchIssues, { Issue } from "./search-issues";

export default {
  title: "Components/SearchIssues",
  component: SearchIssues,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder do campo de busca",
    },
    label: {
      control: { type: "text" },
      description: "Label do campo de busca",
    },
    helperText: {
      control: { type: "text" },
      description: "Texto de ajuda",
    },
    showSuggestions: {
      control: { type: "boolean" },
      description: "Exibir sugestões",
    },
    maxSuggestions: {
      control: { type: "number", min: 1, max: 20 },
      description: "Número máximo de sugestões",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desabilitar componente",
    },
    onSearch: { action: "searched" },
    onSelectIssue: { action: "issue selected" },
  },
};

const mockIssues: Issue[] = [
  {
    id: "1",
    title: "Button component not working on mobile",
    description: "The button component fails to respond to touch events on mobile devices. This issue affects all button variants and sizes.",
    severity: "high",
    status: "open",
    tags: ["button", "mobile", "ui", "touch"],
    createdAt: new Date("2024-01-15"),
    assignee: "John Doe",
  },
  {
    id: "2",
    title: "Input validation error",
    description: "Input component shows validation error even with valid data. This happens specifically with email and phone number validations.",
    severity: "medium",
    status: "in-progress",
    tags: ["input", "validation", "form", "email"],
    createdAt: new Date("2024-01-10"),
    assignee: "Jane Smith",
  },
  {
    id: "3",
    title: "Card component styling issues",
    description: "Card component has incorrect spacing and border radius on certain screen sizes.",
    severity: "low",
    status: "resolved",
    tags: ["card", "styling", "css", "responsive"],
    createdAt: new Date("2024-01-05"),
    assignee: "Bob Johnson",
  },
  {
    id: "4",
    title: "Critical security vulnerability in auth",
    description: "Authentication system has a serious security flaw that could allow unauthorized access.",
    severity: "critical",
    status: "open",
    tags: ["security", "auth", "critical", "vulnerability"],
    createdAt: new Date("2024-01-20"),
    assignee: "Alice Wilson",
  },
  {
    id: "5",
    title: "Performance issues with large datasets",
    description: "Components become slow when rendering large amounts of data.",
    severity: "medium",
    status: "open",
    tags: ["performance", "dataset", "optimization"],
    createdAt: new Date("2024-01-18"),
    assignee: "Charlie Brown",
  },
  {
    id: "6",
    title: "Dark theme inconsistencies",
    description: "Some components don't follow the dark theme correctly.",
    severity: "low",
    status: "closed",
    tags: ["theme", "dark-mode", "design"],
    createdAt: new Date("2024-01-12"),
    assignee: "Diana Prince",
  },
  {
    id: "7",
    title: "Modal accessibility improvements needed",
    description: "Modal component lacks proper ARIA attributes and keyboard navigation support.",
    severity: "medium",
    status: "in-progress",
    tags: ["modal", "accessibility", "aria", "keyboard"],
    createdAt: new Date("2024-01-14"),
    assignee: "Eddie Murphy",
  },
  {
    id: "8",
    title: "Icon component missing SVG support",
    description: "Icon component only supports PNG and JPG formats, SVG support is needed.",
    severity: "low",
    status: "open",
    tags: ["icon", "svg", "format", "enhancement"],
    createdAt: new Date("2024-01-16"),
    assignee: "Fiona Green",
  },
];

// Story básica
export const Default = {
  args: {
    issues: mockIssues,
    placeholder: "Procurar por issues...",
    label: "Buscar Issues",
  },
};

// Sem sugestões
export const WithoutSuggestions = {
  args: {
    issues: mockIssues,
    showSuggestions: false,
    placeholder: "Busca simples sem sugestões",
    label: "Busca Simples",
  },
};

// Limitando sugestões
export const LimitedSuggestions = {
  args: {
    issues: mockIssues,
    maxSuggestions: 3,
    placeholder: "Máximo 3 sugestões",
    label: "Busca Limitada",
  },
};

// Componente desabilitado
export const Disabled = {
  args: {
    issues: mockIssues,
    disabled: true,
    placeholder: "Campo desabilitado",
    label: "Busca Desabilitada",
  },
};

// Com texto de ajuda
export const WithHelperText = {
  args: {
    issues: mockIssues,
    placeholder: "Digite para buscar...",
    label: "Buscar Issues",
    helperText: "Digite pelo menos 2 caracteres para ver as sugestões",
  },
};

// Filtro customizado (apenas título)
export const TitleOnlyFilter = {
  args: {
    issues: mockIssues,
    filterBy: ["title"],
    placeholder: "Buscar apenas por título",
    label: "Busca por Título",
    helperText: "Busca apenas no título das issues",
  },
};

// Demonstração interativa
export const InteractiveDemo = {
  render: () => {
    const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    return (
      <div style={{ width: "600px", padding: "20px" }}>
        <SearchIssues
          issues={mockIssues}
          onSearch={setSearchQuery}
          onSelectIssue={setSelectedIssue}
          placeholder="Procurar por issues..."
          label="Demo Interativa"
          helperText="Selecione uma issue para ver os detalhes"
        />
        
        {searchQuery && (
          <div style={{ 
            marginTop: "16px", 
            padding: "12px", 
            backgroundColor: "#f8f9fa", 
            borderRadius: "8px",
            fontFamily: "Font_Book",
            fontSize: "14px"
          }}>
            <strong>Busca atual:</strong> "{searchQuery}"
          </div>
        )}

        {selectedIssue && (
          <div style={{ 
            marginTop: "16px", 
            padding: "16px", 
            backgroundColor: "#101010", 
            borderRadius: "8px",
            color: "#fff"
          }}>
            <h3 style={{ 
              margin: "0 0 8px 0", 
              color: "#ED274A",
              fontFamily: "Font_Bold"
            }}>
              Issue Selecionada
            </h3>
            <h4 style={{ 
              margin: "0 0 8px 0", 
              color: "#fff",
              fontFamily: "Font_Medium"
            }}>
              {selectedIssue.title}
            </h4>
            <p style={{ 
              margin: "0 0 12px 0", 
              color: "#ccc",
              fontFamily: "Font_Book"
            }}>
              {selectedIssue.description}
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ 
                padding: "4px 8px", 
                backgroundColor: selectedIssue.severity === "critical" ? "#e74c3c" : 
                                selectedIssue.severity === "high" ? "#FF620A" :
                                selectedIssue.severity === "medium" ? "#FFB800" : "#10B981",
                borderRadius: "4px",
                fontSize: "12px",
                textTransform: "uppercase",
                fontFamily: "Font_Book"
              }}>
                {selectedIssue.severity}
              </span>
              <span style={{ 
                padding: "4px 8px", 
                backgroundColor: "#303030",
                borderRadius: "4px",
                fontSize: "12px",
                textTransform: "capitalize",
                fontFamily: "Font_Book"
              }}>
                {selectedIssue.status?.replace("-", " ")}
              </span>
              <span style={{ 
                fontSize: "12px",
                color: "#ccc",
                fontFamily: "Font_Book"
              }}>
                Assignee: {selectedIssue.assignee}
              </span>
            </div>
            {selectedIssue.tags && selectedIssue.tags.length > 0 && (
              <div style={{ marginTop: "8px", display: "flex", gap: "4px", flexWrap: "wrap" }}>
                {selectedIssue.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "11px",
                      color: "#fff",
                      backgroundColor: "#404040",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontFamily: "Font_Book"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
};

// Comparação de severidades
export const SeverityComparison = {
  render: () => {
    const severityIssues = [
      { ...mockIssues[3], title: "Critical Issue Example" }, // critical
      { ...mockIssues[0], title: "High Priority Issue Example" }, // high  
      { ...mockIssues[1], title: "Medium Priority Issue Example" }, // medium
      { ...mockIssues[2], title: "Low Priority Issue Example" }, // low
    ];

    return (
      <div style={{ width: "500px" }}>
        <SearchIssues
          issues={severityIssues}
          placeholder="Buscar por severidade..."
          label="Exemplo de Severidades"
          helperText="Digite 'issue' para ver todas as severidades"
        />
      </div>
    );
  },
};

// Comparação de status
export const StatusComparison = {
  render: () => {
    const statusIssues = [
      { ...mockIssues[0], title: "Open Issue Example", status: "open" as const },
      { ...mockIssues[1], title: "In Progress Issue Example", status: "in-progress" as const },
      { ...mockIssues[2], title: "Resolved Issue Example", status: "resolved" as const },
      { ...mockIssues[5], title: "Closed Issue Example", status: "closed" as const },
    ];

    return (
      <div style={{ width: "500px" }}>
        <SearchIssues
          issues={statusIssues}
          placeholder="Buscar por status..."
          label="Exemplo de Status"
          helperText="Digite 'issue' para ver todos os status"
        />
      </div>
    );
  },
};

// Sem dados
export const EmptyState = {
  args: {
    issues: [],
    placeholder: "Nenhuma issue disponível",
    label: "Estado Vazio",
    helperText: "Não há issues para buscar",
  },
};

// Muitas tags
export const ManyTags = {
  render: () => {
    const issueWithManyTags: Issue = {
      id: "many-tags",
      title: "Issue with many tags to test overflow",
      description: "This issue has many tags to demonstrate how the component handles tag overflow.",
      severity: "medium",
      status: "open",
      tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
      createdAt: new Date(),
      assignee: "Test User",
    };

    return (
      <div style={{ width: "500px" }}>
        <SearchIssues
          issues={[issueWithManyTags]}
          placeholder="Buscar issue com muitas tags..."
          label="Muitas Tags"
          helperText="Digite 'tags' para ver o exemplo"
        />
      </div>
    );
  },
};

// Responsivo
export const ResponsiveDemo = {
  render: () => (
    <div style={{ 
      display: "grid", 
      gap: "20px",
      gridTemplateColumns: "1fr",
      maxWidth: "800px"
    }}>
      <div style={{ width: "300px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontFamily: "Font_Medium" }}>Mobile (300px)</h4>
        <SearchIssues
          issues={mockIssues.slice(0, 3)}
          placeholder="Busca mobile..."
          label="Versão Mobile"
        />
      </div>
      <div style={{ width: "500px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontFamily: "Font_Medium" }}>Tablet (500px)</h4>
        <SearchIssues
          issues={mockIssues.slice(0, 5)}
          placeholder="Busca tablet..."
          label="Versão Tablet"
        />
      </div>
      <div style={{ width: "700px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontFamily: "Font_Medium" }}>Desktop (700px)</h4>
        <SearchIssues
          issues={mockIssues}
          placeholder="Busca desktop..."
          label="Versão Desktop"
        />
      </div>
    </div>
  ),
};