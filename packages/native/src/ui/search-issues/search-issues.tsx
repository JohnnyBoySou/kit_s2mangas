import { useState, useMemo, forwardRef, useImperativeHandle, useRef } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import type { ViewStyle } from "react-native";
import Input from "../input/input";
import type { InputBigRef } from "../input/input";
import { Column, Row } from "../layout/layout";
import { theme } from "@s2mangas/core";

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

export type SearchIssuesRef = {
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

interface SearchIssuesProps {
  issues?: Issue[];
  placeholder?: string;
  onSearch?: (query: string) => void;
  onSelectIssue?: (issue: Issue) => void;
  showSuggestions?: boolean;
  maxSuggestions?: number;
  filterBy?: (keyof Issue)[];
  containerStyle?: ViewStyle;
  suggestionStyle?: ViewStyle;
  testID?: string;
  label?: string;
  helperText?: string;
  disabled?: boolean;
}

const SearchIssues = forwardRef<SearchIssuesRef, SearchIssuesProps>(
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
      testID = "search-issues",
      label = "Buscar Issues",
      helperText,
      disabled = false,
    },
    ref,
  ) => {
    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const inputRef = useRef<InputBigRef>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        inputRef.current?.clear();
        setQuery("");
        setShowDropdown(false);
      },
    }), []);

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
      // Delay hiding dropdown to allow selection
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
          return "#10B981";
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
          return "#10B981";
        case "closed":
          return theme.color.textGhost;
        default:
          return theme.color.textGhost;
      }
    };

    return (
      <View style={[{ position: "relative", width: "100%" }, containerStyle]}>
        <View style={{ position: "relative" }}>
          <Input
            ref={inputRef}
            value={query}
            onChangeText={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder={placeholder}
            label={label}
            helperText={helperText}
            disabled={disabled}
            testID={testID}
            iconRight="Search"
          />
        </View>

        {/* Suggestions Dropdown */}
        {showDropdown && filteredIssues.length > 0 && (
          <View
            style={[
              {
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: theme.color.background,
                borderWidth: 1,
                borderColor: theme.color.borderPrimary,
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 8,
                zIndex: 1000,
                maxHeight: 300,
                marginTop: 4,
              },
              suggestionStyle,
            ]}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {filteredIssues.map((issue, index) => (
                <Pressable
                  key={issue.id}
                  onPress={() => handleSelectIssue(issue)}
                  style={({ pressed }) => [
                    {
                      padding: 12,
                      borderBottomWidth: index < filteredIssues.length - 1 ? 1 : 0,
                      borderBottomColor: theme.color.borderGhost,
                      backgroundColor: pressed ? theme.color.ghost : "transparent",
                    },
                  ]}
                >
                  <Column style={{ gap: 4 }}>
                    <Text
                      style={{
                        fontFamily: theme.font.medium,
                        fontSize: 16,
                        color: theme.color.text,
                        lineHeight: 20,
                      }}
                      numberOfLines={2}
                    >
                      {issue.title}
                    </Text>
                    
                    {issue.description && (
                      <Text
                        style={{
                          fontFamily: theme.font.book,
                          fontSize: 14,
                          color: theme.color.textGhost,
                          lineHeight: 18,
                        }}
                        numberOfLines={2}
                      >
                        {issue.description}
                      </Text>
                    )}

                    <Row style={{ alignItems: "center", flexWrap: "wrap", marginTop: 4 }}>
                      {issue.severity && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: getSeverityColor(issue.severity),
                            fontFamily: theme.font.book,
                            textTransform: "uppercase",
                            marginRight: 8,
                          }}
                        >
                          {issue.severity}
                        </Text>
                      )}
                      
                      {issue.status && (
                        <Text
                          style={{
                            fontSize: 12,
                            color: getStatusColor(issue.status),
                            fontFamily: theme.font.book,
                            textTransform: "capitalize",
                            marginRight: 8,
                          }}
                        >
                          {issue.status.replace("-", " ")}
                        </Text>
                      )}

                      {issue.tags && issue.tags.length > 0 && (
                        <Row style={{ flexWrap: "wrap" }}>
                          {issue.tags.slice(0, 3).map((tag, tagIndex) => (
                            <View
                              key={tagIndex}
                              style={{
                                backgroundColor: theme.color.ghost,
                                paddingHorizontal: 6,
                                paddingVertical: 2,
                                borderRadius: 4,
                                marginRight: 4,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 11,
                                  color: theme.color.textGhost,
                                  fontFamily: theme.font.book,
                                }}
                              >
                                {tag}
                              </Text>
                            </View>
                          ))}
                          {issue.tags.length > 3 && (
                            <Text
                              style={{
                                fontSize: 11,
                                color: theme.color.textGhost,
                                fontFamily: theme.font.book,
                              }}
                            >
                              +{issue.tags.length - 3}
                            </Text>
                          )}
                        </Row>
                      )}
                    </Row>
                  </Column>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}

        {/* No Results */}
        {showDropdown && query.length > 0 && filteredIssues.length === 0 && (
          <View
            style={[
              {
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: theme.color.background,
                borderWidth: 1,
                borderColor: theme.color.borderPrimary,
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 8,
                zIndex: 1000,
                marginTop: 4,
                padding: 16,
                alignItems: "center",
              },
              suggestionStyle,
            ]}
          >
            <Text
              style={{
                fontFamily: theme.font.book,
                fontSize: 16,
                color: theme.color.textGhost,
                textAlign: "center",
              }}
            >
              Nenhuma issue encontrada para "{query}"
            </Text>
          </View>
        )}
      </View>
    );
  },
);

SearchIssues.displayName = "SearchIssues";

export default SearchIssues;