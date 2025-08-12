import React, { useEffect, useRef } from "react";
import Icon from "../icon/icon";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullscreen";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  testID?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  testID,
  className,
  style,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const getModalSize = () => {
    switch (size) {
      case "small":
        return { width: "400px", maxWidth: "90vw" };
      case "medium":
        return { width: "600px", maxWidth: "90vw" };
      case "large":
        return { width: "800px", maxWidth: "90vw" };
      case "fullscreen":
        return { width: "100vw", height: "100vh", maxWidth: "none" };
      default:
        return { width: "600px", maxWidth: "90vw" };
    }
  };

  if (!isOpen) return null;

  return (
    <div
      data-testid={testID}
      className={className}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: size === "fullscreen" ? "stretch" : "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: size === "fullscreen" ? 0 : "20px",
        ...style,
      }}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: "white",
          borderRadius: size === "fullscreen" ? 0 : "8px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          maxHeight: size === "fullscreen" ? "100vh" : "90vh",
          overflow: "hidden",
          ...getModalSize(),
        }}
      >
        {(title || showCloseButton) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #e9ecef",
              backgroundColor: "#f8f9fa",
            }}
          >
            {title && (
              <h2
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Font_Medium",
                  color: "#333",
                }}
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Fechar modal"
              >
                <Icon name="X" size={20} color="#666" />
              </button>
            )}
          </div>
        )}
        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
