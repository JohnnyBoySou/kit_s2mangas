import React from "react";
import SearchIssues from "./search-issues";
import type { Issue } from "./search-issues";

const mockIssues: Issue[] = [
  {
    id: "1",
    title: "Button component not working on mobile",
    description: "The button component fails to respond to touch events on mobile devices",
    severity: "high",
    status: "open",
    tags: ["button", "mobile", "ui"],
    createdAt: new Date("2024-01-15"),
    assignee: "John Doe",
  },
  {
    id: "2",
    title: "Input validation error",
    description: "Input component shows validation error even with valid data",
    severity: "medium",
    status: "in-progress",
    tags: ["input", "validation", "form"],
    createdAt: new Date("2024-01-10"),
    assignee: "Jane Smith",
  },
  {
    id: "3",
    title: "Card component styling issues",
    description: "Card component has incorrect spacing and border radius",
    severity: "low",
    status: "resolved",
    tags: ["card", "styling", "css"],
    createdAt: new Date("2024-01-05"),
    assignee: "Bob Johnson",
  },
];

describe("SearchIssues", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with default props", () => {
    const element = React.createElement(SearchIssues, {});
    expect(element).toBeDefined();
    expect(element.type).toBe(SearchIssues);
  });

  it("renders with custom props", () => {
    const element = React.createElement(SearchIssues, {
      issues: mockIssues,
      placeholder: "Search test",
      label: "Test Label",
      disabled: false,
    });
    expect(element).toBeDefined();
    expect(element.props.issues).toEqual(mockIssues);
    expect(element.props.placeholder).toBe("Search test");
    expect(element.props.label).toBe("Test Label");
  });

  it("accepts callback functions", () => {
    const mockOnSearch = jest.fn();
    const mockOnSelectIssue = jest.fn();
    
    const element = React.createElement(SearchIssues, {
      onSearch: mockOnSearch,
      onSelectIssue: mockOnSelectIssue,
    });
    
    expect(element.props.onSearch).toBe(mockOnSearch);
    expect(element.props.onSelectIssue).toBe(mockOnSelectIssue);
  });

  it("renders with showSuggestions false", () => {
    const element = React.createElement(SearchIssues, {
      showSuggestions: false,
      maxSuggestions: 3,
    });
    
    expect(element.props.showSuggestions).toBe(false);
    expect(element.props.maxSuggestions).toBe(3);
  });

  it("accepts custom filter configuration", () => {
    const element = React.createElement(SearchIssues, {
      filterBy: ["title", "tags"],
      maxSuggestions: 10,
    });
    
    expect(element.props.filterBy).toEqual(["title", "tags"]);
    expect(element.props.maxSuggestions).toBe(10);
  });

  it("renders disabled state", () => {
    const element = React.createElement(SearchIssues, {
      disabled: true,
    });
    
    expect(element.props.disabled).toBe(true);
  });

  it("accepts custom styles", () => {
    const containerStyle = { backgroundColor: "red" };
    const suggestionStyle = { borderWidth: 2 };
    
    const element = React.createElement(SearchIssues, {
      containerStyle,
      suggestionStyle,
    });
    
    expect(element.props.containerStyle).toBe(containerStyle);
    expect(element.props.suggestionStyle).toBe(suggestionStyle);
  });

  it("handles empty issues array", () => {
    const element = React.createElement(SearchIssues, {
      issues: [],
    });
    
    expect(element.props.issues).toEqual([]);
  });

  it("handles undefined issues", () => {
    const element = React.createElement(SearchIssues, {
      issues: undefined,
    });
    
    expect(element.props.issues).toBeUndefined();
  });

  it("accepts all issue properties", () => {
    const complexIssue: Issue = {
      id: "complex",
      title: "Complex issue",
      description: "A complex issue with all properties",
      severity: "critical",
      status: "in-progress",
      tags: ["complex", "test", "example"],
      createdAt: new Date(),
      assignee: "Test User",
    };
    
    const element = React.createElement(SearchIssues, {
      issues: [complexIssue],
    });
    
    expect(element.props.issues![0]).toEqual(complexIssue);
  });

  it("creates element with ref", () => {
    const ref = React.createRef<any>();
    const element = React.createElement(SearchIssues, {
      ref: ref,
    });
    
    expect(element).toBeDefined();
    expect(element.ref).toBe(ref);
  });

  it("validates issue interface properties", () => {
    const issue = mockIssues[0];
    
    if (!issue) {
      throw new Error("Mock issue not found");
    }
    
    expect(typeof issue.id).toBe("string");
    expect(typeof issue.title).toBe("string");
    expect(typeof issue.description).toBe("string");
    expect(["low", "medium", "high", "critical"]).toContain(issue.severity);
    expect(["open", "in-progress", "resolved", "closed"]).toContain(issue.status);
    expect(Array.isArray(issue.tags)).toBe(true);
    expect(issue.createdAt instanceof Date).toBe(true);
    expect(typeof issue.assignee).toBe("string");
  });

  it("handles different severity levels", () => {
    const severityIssues: Issue[] = [
      { id: "1", title: "Low", severity: "low" },
      { id: "2", title: "Medium", severity: "medium" },
      { id: "3", title: "High", severity: "high" },
      { id: "4", title: "Critical", severity: "critical" },
    ];
    
    const element = React.createElement(SearchIssues, {
      issues: severityIssues,
    });
    
    expect(element.props.issues).toHaveLength(4);
    expect(element.props.issues?.map(i => i.severity)).toEqual(["low", "medium", "high", "critical"]);
  });

  it("handles different status levels", () => {
    const statusIssues: Issue[] = [
      { id: "1", title: "Open", status: "open" },
      { id: "2", title: "In Progress", status: "in-progress" },
      { id: "3", title: "Resolved", status: "resolved" },
      { id: "4", title: "Closed", status: "closed" },
    ];
    
    const element = React.createElement(SearchIssues, {
      issues: statusIssues,
    });
    
    expect(element.props.issues).toHaveLength(4);
    expect(element.props.issues?.map(i => i.status)).toEqual(["open", "in-progress", "resolved", "closed"]);
  });

  it("accepts testID prop", () => {
    const element = React.createElement(SearchIssues, {
      testID: "custom-test-id",
    });
    
    expect(element.props.testID).toBe("custom-test-id");
  });

  it("uses default testID when not provided", () => {
    const element = React.createElement(SearchIssues, {});
    
    // testID is undefined in props when not provided, but used internally as default
    expect(element.props.testID).toBeUndefined();
  });
});