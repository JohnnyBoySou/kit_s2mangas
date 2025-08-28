import React, { useState } from "react";

export default function Tabs({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = React.Children.toArray(children);

    return (
        <div className="tabs-container">
            <div className="tabs-header" style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            padding: "6px 12px",
                            borderRadius: "6px",
                            border: "1px solid #ddd",
                            backgroundColor: index === activeIndex ? "#303030" : "#909090",
                            cursor: "pointer",
                        }}
                    >
                        {tab.props.label}
                    </button>
                ))}
            </div>
            <div className="tabs-content">{tabs[activeIndex]}</div>
        </div>
    );
}
