import { theme } from "@s2mangas/core";

export default {
  title: "Design System/Colors",
  parameters: {
    layout: "centered",
  },
};

// Componente para exibir uma cor
const ColorSwatch = ({
  name,
  color,
  description,
}: {
  name: string;
  color: string;
  description?: string;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "16px",
      minWidth: "120px",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: color,
        borderRadius: "8px",
        border: "2px solid #333",
        marginBottom: "8px",
      }}
    />
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "Font_Bold",
          fontSize: "14px",
          color: "#ffffff",
          marginBottom: "4px",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: "Font_Book",
          fontSize: "12px",
          color: "#cccccc",
          marginBottom: "4px",
        }}
      >
        {color}
      </div>
      {description && (
        <div
          style={{
            fontFamily: "Font_Book",
            fontSize: "11px",
            color: "#999999",
            maxWidth: "100px",
          }}
        >
          {description}
        </div>
      )}
    </div>
  </div>
);

export const PrimaryColors = {
  render: () => (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h2
        style={{
          fontFamily: "Font_Bold",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Cores Principais
      </h2>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ColorSwatch
          name="Primary"
          color={theme.color.primary}
          description="Cor principal da marca"
        />
        <ColorSwatch
          name="Secondary"
          color={theme.color.secundary}
          description="Cor secundária"
        />
        <ColorSwatch
          name="Background"
          color={theme.color.background}
          description="Cor de fundo"
        />
        <ColorSwatch
          name="Destructive"
          color={theme.color.destructive}
          description="Ações destrutivas"
        />
        <ColorSwatch
          name="Ghost"
          color={theme.color.ghost}
          description="Elementos ghost"
        />
        <ColorSwatch
          name="Link"
          color={theme.color.link}
          description="Links e navegação"
        />
      </div>
    </div>
  ),
};

export const SemanticColors = {
  render: () => (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h2
        style={{
          fontFamily: "Font_Bold",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Cores Semânticas
      </h2>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ColorSwatch
          name="Alert"
          color={theme.color.alert}
          description="Alertas e notificações"
        />
        <ColorSwatch
          name="Warning"
          color={theme.color.warning}
          description="Avisos"
        />
        <ColorSwatch
          name="Success"
          color={theme.color.green}
          description="Sucesso e confirmação"
        />
        <ColorSwatch name="Error" color={theme.color.red} description="Erros" />
        <ColorSwatch
          name="Info"
          color={theme.color.blue}
          description="Informações"
        />
        <ColorSwatch
          name="Muted"
          color={theme.color.muted}
          description="Elementos desabilitados"
        />
      </div>
    </div>
  ),
};

export const TextColors = {
  render: () => (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h2
        style={{
          fontFamily: "Font_Bold",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Cores de Texto
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            backgroundColor: "#1a1a1a",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              fontFamily: "Font_Bold",
              fontSize: "18px",
              color: theme.color.title,
              marginBottom: "8px",
            }}
          >
            Title - {theme.color.title}
          </div>
          <div
            style={{
              fontFamily: "Font_Medium",
              fontSize: "16px",
              color: theme.color.label,
              marginBottom: "8px",
            }}
          >
            Label - {theme.color.label}
          </div>
          <div
            style={{
              fontFamily: "Font_Book",
              fontSize: "14px",
              color: theme.color.text,
              marginBottom: "8px",
            }}
          >
            Text - {theme.color.text}
          </div>
          <div
            style={{
              fontFamily: "Font_Book",
              fontSize: "14px",
              color: theme.color.textGhost,
              marginBottom: "8px",
            }}
          >
            Text Ghost - {theme.color.textGhost}
          </div>
          <div
            style={{
              fontFamily: "Font_Book",
              fontSize: "14px",
              color: theme.color.textPrimary,
              marginBottom: "8px",
            }}
          >
            Text Primary - {theme.color.textPrimary}
          </div>
          <div
            style={{
              fontFamily: "Font_Book",
              fontSize: "14px",
              color: theme.color.textSecondary,
            }}
          >
            Text Secondary - {theme.color.textSecondary}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const BorderColors = {
  render: () => (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h2
        style={{
          fontFamily: "Font_Bold",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Cores de Borda
      </h2>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ColorSwatch
          name="Border Primary"
          color={theme.color.borderPrimary}
          description="Bordas primárias"
        />
        <ColorSwatch
          name="Border Secondary"
          color={theme.color.borderSecondary}
          description="Bordas secundárias"
        />
        <ColorSwatch
          name="Border Destructive"
          color={theme.color.borderDestructive}
          description="Bordas de erro"
        />
        <ColorSwatch
          name="Border Ghost"
          color={theme.color.borderGhost}
          description="Bordas ghost"
        />
      </div>
    </div>
  ),
};

export const ColorPalette = {
  render: () => (
    <div style={{ padding: "20px", maxWidth: "1000px" }}>
      <h2
        style={{
          fontFamily: "Font_Bold",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Paleta Completa de Cores
      </h2>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ColorSwatch name="Primary" color={theme.color.primary} />
        <ColorSwatch name="Secondary" color={theme.color.secundary} />
        <ColorSwatch name="Background" color={theme.color.background} />
        <ColorSwatch name="Destructive" color={theme.color.destructive} />
        <ColorSwatch name="Ghost" color={theme.color.ghost} />
        <ColorSwatch name="Link" color={theme.color.link} />
        <ColorSwatch name="Blue" color={theme.color.blue} />
        <ColorSwatch name="Red" color={theme.color.red} />
        <ColorSwatch name="Green" color={theme.color.green} />
        <ColorSwatch name="Yellow" color={theme.color.yellow} />
        <ColorSwatch name="Orange" color={theme.color.orange} />
        <ColorSwatch name="Alert" color={theme.color.alert} />
        <ColorSwatch name="Warning" color={theme.color.warning} />
        <ColorSwatch name="Title" color={theme.color.title} />
        <ColorSwatch name="Label" color={theme.color.label} />
        <ColorSwatch name="Text Primary" color={theme.color.textPrimary} />
        <ColorSwatch name="Text Secondary" color={theme.color.textSecondary} />
        <ColorSwatch name="Text Ghost" color={theme.color.textGhost} />
        <ColorSwatch name="Text Link" color={theme.color.textLink} />
        <ColorSwatch name="Border Primary" color={theme.color.borderPrimary} />
        <ColorSwatch
          name="Border Secondary"
          color={theme.color.borderSecondary}
        />
        <ColorSwatch
          name="Border Destructive"
          color={theme.color.borderDestructive}
        />
        <ColorSwatch name="Border Ghost" color={theme.color.borderGhost} />
        <ColorSwatch name="True" color={theme.color.true} />
        <ColorSwatch name="False" color={theme.color.false} />
        <ColorSwatch name="Muted" color={theme.color.muted} />
        <ColorSwatch name="Active Text" color={theme.color.activeText} />
        <ColorSwatch name="Text" color={theme.color.text} />
      </div>
    </div>
  ),
};

export const ColorUsage = {
  render: () => (
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h2
        style={{
          fontFamily: "Font_Bold",
          fontSize: "24px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Exemplos de Uso das Cores
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* Botões */}
        <div>
          <h3
            style={{
              fontFamily: "Font_Bold",
              fontSize: "18px",
              marginBottom: "12px",
              color: "#ffffff",
            }}
          >
            Botões
          </h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              style={{
                backgroundColor: theme.color.primary,
                color: theme.color.textGhost,
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontFamily: "Font_Medium",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Primary
            </button>
            <button
              style={{
                backgroundColor: theme.color.secundary,
                color: theme.color.textGhost,
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontFamily: "Font_Medium",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Secondary
            </button>
            <button
              style={{
                backgroundColor: theme.color.destructive,
                color: theme.color.textGhost,
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontFamily: "Font_Medium",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Destructive
            </button>
            <button
              style={{
                backgroundColor: theme.color.ghost,
                color: theme.color.textGhost,
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontFamily: "Font_Medium",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Ghost
            </button>
          </div>
        </div>

        {/* Cards */}
        <div>
          <h3
            style={{
              fontFamily: "Font_Bold",
              fontSize: "18px",
              marginBottom: "12px",
              color: "#ffffff",
            }}
          >
            Cards
          </h3>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div
              style={{
                backgroundColor: theme.color.ghost,
                border: `1px solid ${theme.color.borderGhost}`,
                borderRadius: "12px",
                padding: "16px",
                minWidth: "200px",
              }}
            >
              <div
                style={{
                  fontFamily: "Font_Bold",
                  fontSize: "16px",
                  color: theme.color.title,
                  marginBottom: "8px",
                }}
              >
                Card Title
              </div>
              <div
                style={{
                  fontFamily: "Font_Book",
                  fontSize: "14px",
                  color: theme.color.text,
                  lineHeight: "1.4",
                }}
              >
                Este é um exemplo de card usando as cores do design system.
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div>
          <h3
            style={{
              fontFamily: "Font_Bold",
              fontSize: "18px",
              marginBottom: "12px",
              color: "#ffffff",
            }}
          >
            Indicadores de Status
          </h3>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: theme.color.green,
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontFamily: "Font_Medium",
                  fontSize: "14px",
                  color: theme.color.text,
                }}
              >
                Sucesso
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: theme.color.warning,
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontFamily: "Font_Medium",
                  fontSize: "14px",
                  color: theme.color.text,
                }}
              >
                Aviso
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: theme.color.destructive,
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontFamily: "Font_Medium",
                  fontSize: "14px",
                  color: theme.color.text,
                }}
              >
                Erro
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: theme.color.blue,
                  borderRadius: "50%",
                }}
              />
              <span
                style={{
                  fontFamily: "Font_Medium",
                  fontSize: "14px",
                  color: theme.color.text,
                }}
              >
                Info
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
