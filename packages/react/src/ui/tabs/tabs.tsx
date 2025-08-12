import React, { useState, useEffect } from "react";
import { theme } from "@s2mangas/core";

interface TabsProps {
  value?: string;
  setValue: (value: string) => void;
  values: string[];
  testID?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({
  value,
  setValue,
  values,
  testID,
  className,
  style,
}) => {
  const [selectedTab, setSelectedTab] = useState(value || values[0] || "");

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTab(value);
    }
  }, [value]);

  const handleTabClick = (tab: string) => {
    const newValue = selectedTab === tab ? "" : tab;
    setSelectedTab(newValue);
    setValue(newValue);
  };

  const containerStyles: React.CSSProperties = {
    backgroundColor: "#252525",
    padding: "4px",
    borderRadius: "100px",
    borderTop: "1px solid #303030",
    borderLeft: "1px solid #303030",
    borderRight: "1px solid #252525",
    display: "flex",
    overflowX: "auto",
    gap: "8px",
    ...style,
  };

  const tabStyles: React.CSSProperties = {
    backgroundColor: "#202020",
    borderRadius: "100px",
    padding: "12px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    whiteSpace: "nowrap",
    fontFamily: "Font_Book",
    fontSize: "16px",
    color: "#D1D1D1",
    transform: "scale(0.95)",
  };

  const selectedTabStyles: React.CSSProperties = {
    ...tabStyles,
    backgroundColor: "#fff",
    color: "#202020",
    fontFamily: "Font_Medium",
    transform: "scale(1)",
  };

  return (
    <div data-testid={testID} className={className} style={containerStyles}>
      {values.map((tab: string) => {
        const isSelected = selectedTab === tab;

        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            style={isSelected ? selectedTabStyles : tabStyles}
            aria-selected={isSelected}
            role="tab"
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
