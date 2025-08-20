import React, { useState, forwardRef, useMemo } from "react";
import Input from "../input/input";
import { theme } from "../../../../core/src/theme";

export interface Issue {
  id: string;
  title: string;
  description?: string;
  severity?: "low" | "medium" | "high" | "critical";
  status?: "open" | "in-progress" | "resolved" | "closed";
  tags?: string[];
  createdAt?: Date;
  assignee?: string;
}

interface SearchIssuesProps {
  issues?: Issue[];
  placeholder?: string;
  onSearch?: (query: string) => void;
  onSelectIssue?: (issue: Issue) => void;
  showSuggestions?: boolean;
  maxSuggestions?: number;
  filterBy?: (keyof Issue)[];
  containerStyle?: React.CSSProperties;
  suggestionStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  testID?: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
}

const SearchIssues = forwardRef<HTMLInputElement, SearchIssuesProps>(
  (
    {
      issues = [],
      placeholder = "Procurar por issues...",
      onSearch,
      onSelectIssue,
      showSuggestions = true,
      maxSuggestions = 5,
      filterBy = ["title", "description", "tags"],
      containerStyle,
      suggestionStyle,
      inputStyle,
      testID = "search-issues",
      label = "Buscar Issues",
      helperText,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredIssues = useMemo(() => {
      if (!query.trim() || !issues.length) return [];

      const searchQuery = query.toLowerCase().trim();
      return issues
        .filter((issue) => {
          return filterBy.some((field) => {
            const value = issue[field];
            if (Array.isArray(value)) {
              // Handle tags array
              return value.some((tag) => 
                tag.toLowerCase().includes(searchQuery)
              );
            }
            if (typeof value === "string") {
              return value.toLowerCase().includes(searchQuery);
            }
            return false;
          });
        })
        .slice(0, maxSuggestions);
    }, [query, issues, filterBy, maxSuggestions]);

    const handleInputChange = (value: string) => {
      setQuery(value);
      setShowDropdown(value.length > 0 && showSuggestions);
      onSearch?.(value);
    };

    const handleSelectIssue = (issue: Issue) => {
      setQuery(issue.title);
      setShowDropdown(false);
      onSelectIssue?.(issue);
    };

    const handleInputFocus = () => {
      if (query.length > 0 && showSuggestions) {
        setShowDropdown(true);
      }
    };

    const handleInputBlur = () => {
      // Delay hiding dropdown to allow click on suggestions
      setTimeout(() => setShowDropdown(false), 200);
    };

    const getSeverityColor = (severity?: Issue["severity"]) => {
      switch (severity) {
        case "critical":
          return theme.color.destructive;
        case "high":
          return "#FF620A";
        case "medium":
          return "#FFB800";
        case "low":
          return theme.color.green;
        default:
          return theme.color.textGhost;
      }
    };

    const getStatusColor = (status?: Issue["status"]) => {
      switch (status) {
        case "open":
          return theme.color.primary;
        case "in-progress":
          return "#FFB800";
        case "resolved":
          return theme.color.green;
        case "closed":
          return theme.color.textGhost;
        default:
          return theme.color.textGhost;
      }
    };

    return (
      <div 
        style={{ 
          position: "relative", 
          width: "100%",
          ...containerStyle 
        }}
      >
        <Input
          {...props}
          ref={ref}
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          label={label}
          helperText={helperText}
          disabled={disabled}
          testID={testID}
          inputStyle={{
            paddingRight: "40px",
            ...inputStyle,
          }}
        />
        
        {/* Search Icon */}
        <div
          style={{
            position: "absolute",
            right: "12px",
            top: label ? "38px" : "12px",
            color: theme.color.textGhost,
            pointerEvents: "none",
          }}
        >
          🔍
        </div>

        {/* Suggestions Dropdown */}
        {showDropdown && filteredIssues.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: theme.color.background,
              border: `1px solid ${theme.color.borderPrimary}`,
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              maxHeight: "300px",
              overflowY: "auto",
              marginTop: "4px",
              ...suggestionStyle,
            }}
          >
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                onClick={() => handleSelectIssue(issue)}
                style={{
                  padding: "12px 16px",
                  borderBottom: `1px solid ${theme.color.borderGhost}`,
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = theme.color.ghost;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: theme.font.medium,
                    fontSize: theme.size.label,
                    color: theme.color.text,
                    marginBottom: "4px",
                  }}
                >
                  {issue.title}
                </div>
                
                {issue.description && (
                  <div
                    style={{
                      fontFamily: theme.font.book,
                      fontSize: theme.size.small,
                      color: theme.color.textGhost,
                      marginBottom: "8px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {issue.description}
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {issue.severity && (
                    <span
                      style={{
                        fontSize: theme.size.small,
                        color: getSeverityColor(issue.severity),
                        fontFamily: theme.font.book,
                        textTransform: "uppercase",
                      }}
                    >
                      {issue.severity}
                    </span>
                  )}
                  
                  {issue.status && (
                    <span
                      style={{
                        fontSize: theme.size.small,
                        color: getStatusColor(issue.status),
                        fontFamily: theme.font.book,
                        textTransform: "capitalize",
                      }}
                    >
                      {issue.status.replace("-", " ")}
                    </span>
                  )}

                  {issue.tags && issue.tags.length > 0 && (
                    <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                      {issue.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            fontSize: theme.size.small,
                            color: theme.color.textGhost,
                            backgroundColor: theme.color.ghost,
                            padding: "2px 6px",
                            borderRadius: "4px",
                            fontFamily: theme.font.book,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {issue.tags.length > 3 && (
                        <span
                          style={{
                            fontSize: theme.size.small,
                            color: theme.color.textGhost,
                            fontFamily: theme.font.book,
                          }}
                        >
                          +{issue.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {showDropdown && query.length > 0 && filteredIssues.length === 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: theme.color.background,
              border: `1px solid ${theme.color.borderPrimary}`,
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              marginTop: "4px",
              padding: "16px",
              textAlign: "center",
              ...suggestionStyle,
            }}
          >
            <div
              style={{
                fontFamily: theme.font.book,
                fontSize: theme.size.label,
                color: theme.color.textGhost,
              }}
            >
              Nenhuma issue encontrada para "{query}"
            </div>
          </div>
        )}
      </div>
    );
  },
);

SearchIssues.displayName = "SearchIssues";

export default SearchIssues;