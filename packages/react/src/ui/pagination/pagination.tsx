import React from "react";
import Icon from "../icon/icon";

export interface PaginationProps {
  /** Página atual (1-indexed) */
  currentPage: number;
  /** Total de páginas */
  totalPages: number;
  /** Callback chamado quando a página muda */
  onPageChange: (page: number) => void;
  /** Número máximo de páginas visíveis */
  maxVisiblePages?: number;
  /** Mostra botões de primeira/última página */
  showFirstLast?: boolean;
  /** Mostra informações de página (ex: "Página 1 de 10") */
  showPageInfo?: boolean;
  /** Desabilita a paginação */
  disabled?: boolean;
  /** Tamanho dos botões */
  size?: "small" | "medium" | "large";
  /** Variante visual */
  variant?: "default" | "outlined" | "minimal";
  /** ID para testes */
  testID?: string;
  /** Classe CSS customizada */
  className?: string;
  /** Estilos inline customizados */
  style?: React.CSSProperties;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  showFirstLast = true,
  showPageInfo = false,
  disabled = false,
  size = "medium",
  variant = "default",
  testID,
  className,
  style,
}) => {
  // Calcula quais páginas devem ser visíveis
  const getVisiblePages = (): number[] => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          button: {
            padding: "4px 8px",
            fontSize: "12px",
            minWidth: "28px",
            height: "28px",
          },
          icon: 12,
        };
      case "large":
        return {
          button: {
            padding: "12px 16px",
            fontSize: "16px",
            minWidth: "44px",
            height: "44px",
          },
          icon: 20,
        };
      default:
        return {
          button: {
            padding: "8px 12px",
            fontSize: "14px",
            minWidth: "36px",
            height: "36px",
          },
          icon: 16,
        };
    }
  };

  const getVariantStyles = (isActive: boolean = false) => {
    const baseStyles = {
      border: "none",
      borderRadius: "6px",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: isActive ? "600" : "400",
      opacity: disabled ? 0.5 : 1,
    };

    switch (variant) {
      case "outlined":
        return {
          ...baseStyles,
          backgroundColor: isActive ? "#007bff" : "transparent",
          color: isActive ? "white" : "#007bff",
          border: "1px solid #007bff",
        };
      case "minimal":
        return {
          ...baseStyles,
          backgroundColor: isActive ? "#f8f9fa" : "transparent",
          color: isActive ? "#007bff" : "#6c757d",
          border: "none",
        };
      default:
        return {
          ...baseStyles,
          backgroundColor: isActive ? "#007bff" : "#f8f9fa",
          color: isActive ? "white" : "#495057",
          border: "1px solid #dee2e6",
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const visiblePages = getVisiblePages();

  const handlePageChange = (page: number) => {
    if (!disabled && page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flexWrap: "wrap",
    ...style,
  };

  const buttonStyles = (isActive: boolean = false): React.CSSProperties => ({
    ...sizeStyles.button,
    ...getVariantStyles(isActive),
  });

  return (
    <div data-testid={testID} className={className} style={containerStyles}>
      {/* Botão Primeira Página */}
      {showFirstLast && totalPages > maxVisiblePages && (
        <button
          onClick={() => handlePageChange(1)}
          disabled={disabled || currentPage === 1}
          style={buttonStyles()}
          aria-label="Primeira página"
        >
          <Icon name="ChevronsLeft" size={sizeStyles.icon} />
        </button>
      )}

      {/* Botão Página Anterior */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
        style={buttonStyles()}
        aria-label="Página anterior"
      >
        <Icon name="ChevronLeft" size={sizeStyles.icon} />
      </button>

      {/* Reticências inicial */}
      {visiblePages[0] > 1 && (
        <span style={{ padding: "8px 4px", color: "#6c757d" }}>...</span>
      )}

      {/* Páginas visíveis */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={disabled}
          style={buttonStyles(page === currentPage)}
          aria-label={`Página ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {/* Reticências final */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <span style={{ padding: "8px 4px", color: "#6c757d" }}>...</span>
      )}

      {/* Botão Próxima Página */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
        style={buttonStyles()}
        aria-label="Próxima página"
      >
        <Icon name="ChevronRight" size={sizeStyles.icon} />
      </button>

      {/* Botão Última Página */}
      {showFirstLast && totalPages > maxVisiblePages && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={disabled || currentPage === totalPages}
          style={buttonStyles()}
          aria-label="Última página"
        >
          <Icon name="ChevronsRight" size={sizeStyles.icon} />
        </button>
      )}

      {/* Informações da página */}
      {showPageInfo && (
        <span
          style={{
            marginLeft: "16px",
            fontSize: sizeStyles.button.fontSize,
            color: "#6c757d",
          }}
        >
          Página {currentPage} de {totalPages}
        </span>
      )}
    </div>
  );
};

export default Pagination;
