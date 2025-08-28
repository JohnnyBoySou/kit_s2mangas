import React, { useState, useRef, useEffect } from "react";
import Icon from "../icon/icon";

export interface DropdownItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  disabled?: boolean;
  closeOnItemClick?: boolean;
  testID?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  position = "bottom-left",
  disabled = false,
  closeOnItemClick = true,
  testID,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: DropdownItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick();
    }
    if (closeOnItemClick && !item.disabled) {
      setIsOpen(false);
    }
  };

  const getDropdownPosition = () => {
    const baseStyles = {
      position: "absolute" as const,
      zIndex: 1000,
      minWidth: "200px",
    };

    switch (position) {
      case "bottom-left":
        return { ...baseStyles, top: "100%", left: 0, marginTop: "4px" };
      case "bottom-right":
        return { ...baseStyles, top: "100%", right: 0, marginTop: "4px" };
      case "top-left":
        return { ...baseStyles, bottom: "100%", left: 0, marginBottom: "4px" };
      case "top-right":
        return { ...baseStyles, bottom: "100%", right: 0, marginBottom: "4px" };
      default:
        return { ...baseStyles, top: "100%", left: 0, marginTop: "4px" };
    }
  };

  return (
    <div
      ref={dropdownRef}
      data-testid={testID}
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        ...style,
      }}
    >
      <div
        onClick={handleTriggerClick}
        style={{
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {trigger}
      </div>

      {isOpen && (
        <div
          style={{
            ...getDropdownPosition(),
            backgroundColor: "white",
            border: "1px solid #e9ecef",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "4px 0",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {items.map((item, index) => (
            <React.Fragment key={item.id}>
              {item.divider ? (
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#e9ecef",
                    margin: "4px 0",
                  }}
                />
              ) : (
                <div
                  onClick={() => handleItemClick(item)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    cursor: item.disabled ? "not-allowed" : "pointer",
                    backgroundColor: "transparent",
                    color: item.disabled ? "#999" : "#333",
                    fontSize: "14px",
                    fontFamily: "Font_Book",
                    transition: "background-color 0.2s",
                    opacity: item.disabled ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!item.disabled) {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {item.icon && (
                    <Icon
                      name={item.icon as any}
                      size={16}
                      color={item.disabled ? "#999" : "#666"}
                    />
                  )}
                  <span>{item.label}</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
