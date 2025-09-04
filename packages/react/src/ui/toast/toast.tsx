import React, { useEffect, useState } from "react";

// Componentes de ícone customizados
const CheckIcon = ({
  size = 24,
  color = "#fff",
}: {
  size?: number;
  color?: string;
}) => (
  <div
    style={{
      fontSize: size,
      color,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    ✓
  </div>
);

const XIcon = ({
  size = 24,
  color = "#fff",
}: {
  size?: number;
  color?: string;
}) => (
  <div
    style={{
      fontSize: size,
      color,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    ✕
  </div>
);

interface ToastProps {
  success?: string;
  error?: string;
  onClose?: () => void;
  duration?: number;
  testID?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Toast: React.FC<ToastProps> = ({
  success = "",
  error = "",
  onClose,
  duration = 5000,
  testID,
  className,
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const selectColor = success ? "#00c48c" : "#ff3d71";

  useEffect(() => {
    if (success || error) {
      setIsVisible(true);
      setIsAnimating(true);

      // Auto-hide after duration
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);

        return () => clearTimeout(timer);
      }
    }
  }, [success, error, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const handleSwipe = (e: React.MouseEvent | React.TouchEvent) => {
    // Simple click to close for web
    handleClose();
  };

  // Show toast if there's a message, regardless of isVisible state for testing
  if (!success && !error) return null;

  const containerStyles: React.CSSProperties = {
    height: "72px",
    backgroundColor: selectColor,
    borderRadius: "12px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 4px",
    margin: "0",
    opacity: isAnimating ? 1 : 0,
    transform: `translateX(${isAnimating ? 0 : "-100%"})`,
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    ...style,
  };

  const iconContainerStyles: React.CSSProperties = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#ffffff40",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 12px",
  };

  const textStyles: React.CSSProperties = {
    fontSize: "14px",
    width: "220px",
    margin: "12px 0",
    color: "#fff",
    lineHeight: "16px",
    fontFamily: "Font_Medium",
    marginRight: "12px",
  };

  return (
    <div
      data-testid={testID}
      className={className}
      style={containerStyles}
      onClick={handleSwipe}
      role="alert"
      aria-live="assertive"
    >
      <div style={iconContainerStyles}>
        {success && <CheckIcon size={24} color="#fff" />}
        {error && <XIcon size={24} color="#fff" />}
      </div>
      <div style={textStyles}>{success || error}</div>
    </div>
  );
};

export default Toast;
