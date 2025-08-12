import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

export interface TooltipProps {
  /** Conteúdo do tooltip */
  content: React.ReactNode;
  /** Elemento que ativa o tooltip */
  children: React.ReactNode;
  /** Posição do tooltip */
  position?: "top" | "bottom" | "left" | "right";
  /** Trigger para mostrar o tooltip */
  trigger?: "hover" | "click" | "focus";
  /** Delay para mostrar o tooltip (ms) */
  showDelay?: number;
  /** Delay para esconder o tooltip (ms) */
  hideDelay?: number;
  /** Se o tooltip está desabilitado */
  disabled?: boolean;
  /** Tamanho do tooltip */
  size?: "small" | "medium" | "large";
  /** Variante visual */
  variant?: "dark" | "light" | "info" | "warning" | "error" | "success";
  /** Largura máxima do tooltip */
  maxWidth?: number;
  /** Se deve mostrar a seta */
  showArrow?: boolean;
  /** ID para testes */
  testID?: string;
  /** Classe CSS customizada */
  className?: string;
  /** Estilos inline customizados */
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  trigger = "hover",
  showDelay = 200,
  hideDelay = 100,
  disabled = false,
  size = "medium",
  variant = "dark",
  maxWidth = 200,
  showArrow = true,
  testID,
  className,
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<number>(0);
  const hideTimeoutRef = useRef<number>(0);

  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          fontSize: "12px",
          padding: "4px 8px",
          borderRadius: "4px",
        };
      case "large":
        return {
          fontSize: "16px",
          padding: "12px 16px",
          borderRadius: "8px",
        };
      default:
        return {
          fontSize: "14px",
          padding: "8px 12px",
          borderRadius: "6px",
        };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "light":
        return {
          backgroundColor: "#ffffff",
          color: "#495057",
          border: "1px solid #dee2e6",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        };
      case "info":
        return {
          backgroundColor: "#17a2b8",
          color: "#ffffff",
          border: "none",
        };
      case "warning":
        return {
          backgroundColor: "#ffc107",
          color: "#212529",
          border: "none",
        };
      case "error":
        return {
          backgroundColor: "#dc3545",
          color: "#ffffff",
          border: "none",
        };
      case "success":
        return {
          backgroundColor: "#28a745",
          color: "#ffffff",
          border: "none",
        };
      default: // dark
        return {
          backgroundColor: "#343a40",
          color: "#ffffff",
          border: "none",
        };
    }
  };

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) {
      // Fallback position when refs are not available
      setTooltipPosition({ top: 0, left: 0 });
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top = triggerRect.top + scrollTop - tooltipRect.height - 8;
        left =
          triggerRect.left +
          scrollLeft +
          (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + scrollTop + 8;
        left =
          triggerRect.left +
          scrollLeft +
          (triggerRect.width - tooltipRect.width) / 2;
        break;
      case "left":
        top =
          triggerRect.top +
          scrollTop +
          (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left + scrollLeft - tooltipRect.width - 8;
        break;
      case "right":
        top =
          triggerRect.top +
          scrollTop +
          (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + scrollLeft + 8;
        break;
    }

    // Ajustar para manter dentro da viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 0) left = 8;
    if (left + tooltipRect.width > viewportWidth)
      left = viewportWidth - tooltipRect.width - 8;
    if (top < scrollTop) top = scrollTop + 8;
    if (top + tooltipRect.height > scrollTop + viewportHeight)
      top = scrollTop + viewportHeight - tooltipRect.height - 8;

    setTooltipPosition({ top, left });
  };

  const showTooltip = () => {
    if (disabled) return;

    if (hideTimeoutRef.current) {
      window.clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = 0;
    }

    if (showDelay > 0) {
      showTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, showDelay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      window.clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = 0;
    }

    if (hideDelay > 0) {
      hideTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
    } else {
      setIsVisible(false);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      showTooltip();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      hideTooltip();
    }
  };

  const handleClick = () => {
    if (trigger === "click") {
      if (isVisible) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  };

  const handleFocus = () => {
    if (trigger === "focus") {
      showTooltip();
    }
  };

  const handleBlur = () => {
    if (trigger === "focus") {
      hideTooltip();
    }
  };

  useLayoutEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible, position]);

  useEffect(() => {
    const handleResize = () => {
      if (isVisible) {
        calculatePosition();
      }
    };

    const handleScroll = () => {
      if (isVisible) {
        calculatePosition();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [isVisible]);

  const sizeStyles = getSizeStyles();
  const variantStyles = getVariantStyles();

  const getArrowStyles = (): React.CSSProperties => {
    const arrowSize = 6;
    const arrowColor = variantStyles.backgroundColor;

    const baseArrowStyles: React.CSSProperties = {
      position: "absolute",
      width: 0,
      height: 0,
      borderStyle: "solid",
    };

    switch (position) {
      case "top":
        return {
          ...baseArrowStyles,
          top: "100%",
          left: "50%",
          marginLeft: `-${arrowSize}px`,
          borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
          borderColor: `${arrowColor} transparent transparent transparent`,
        };
      case "bottom":
        return {
          ...baseArrowStyles,
          bottom: "100%",
          left: "50%",
          marginLeft: `-${arrowSize}px`,
          borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
          borderColor: `transparent transparent ${arrowColor} transparent`,
        };
      case "left":
        return {
          ...baseArrowStyles,
          top: "50%",
          left: "100%",
          marginTop: `-${arrowSize}px`,
          borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
          borderColor: `transparent transparent transparent ${arrowColor}`,
        };
      case "right":
        return {
          ...baseArrowStyles,
          top: "50%",
          right: "100%",
          marginTop: `-${arrowSize}px`,
          borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
          borderColor: `transparent ${arrowColor} transparent transparent`,
        };
      default:
        return {};
    }
  };

  const tooltipStyles: React.CSSProperties = {
    position: "absolute",
    top: tooltipPosition.top,
    left: tooltipPosition.left,
    maxWidth: `${maxWidth}px`,
    zIndex: 1000,
    pointerEvents: "none",
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transition: "opacity 0.2s ease, visibility 0.2s ease",
    ...sizeStyles,
    ...variantStyles,
    ...style,
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ display: "inline-block" }}
        className={className}
      >
        {children}
      </div>

      {/* Portal para o tooltip */}
      {typeof document !== "undefined" && isVisible && (
        <div
          ref={tooltipRef}
          data-testid={testID}
          style={tooltipStyles}
          role="tooltip"
          aria-hidden={!isVisible}
          className={`tooltip-${position} tooltip-${size} tooltip-${variant} ${className || ""}`.trim()}
        >
          {content}
          {showArrow && (
            <div data-testid="tooltip-arrow" style={getArrowStyles()} />
          )}
        </div>
      )}
    </>
  );
};

export default Tooltip;
