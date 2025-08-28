import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchIssues, { Issue } from "./search-issues";

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
  {
    id: "4",
    title: "Critical security vulnerability in auth",
    description: "Authentication system has a serious security flaw",
    severity: "critical",
    status: "open",
    tags: ["security", "auth", "critical"],
    createdAt: new Date("2024-01-20"),
    assignee: "Alice Wilson",
  },
];

describe("SearchIssues", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with default props", () => {
    render(<SearchIssues />);
    
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Procurar por issues...")).toBeInTheDocument();
    expect(screen.getByText("🔍")).toBeInTheDocument();
  });

  it("renders with custom label and placeholder", () => {
    render(
      <SearchIssues 
        label="Search for Problems" 
        placeholder="Type to search problems..."
      />
    );
    
    expect(screen.getByText("Search for Problems")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type to search problems...")).toBeInTheDocument();
  });

  it("calls onSearch when input value changes", () => {
    const mockOnSearch = jest.fn();
    render(<SearchIssues onSearch={mockOnSearch} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "button" } });
    
    expect(mockOnSearch).toHaveBeenCalledWith("button");
  });

  it("filters issues based on title", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "button" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("Button component not working on mobile")).toBeInTheDocument();
    });
    
    expect(screen.queryByText("Input validation error")).not.toBeInTheDocument();
  });

  it("filters issues based on description", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "validation" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("Input validation error")).toBeInTheDocument();
    });
  });

  it("filters issues based on tags", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "mobile" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("Button component not working on mobile")).toBeInTheDocument();
    });
  });

  it("shows no results message when no issues match", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "nonexistent" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText('Nenhuma issue encontrada para "nonexistent"')).toBeInTheDocument();
    });
  });

  it("calls onSelectIssue when an issue is clicked", async () => {
    const mockOnSelectIssue = jest.fn();
    render(<SearchIssues issues={mockIssues} onSelectIssue={mockOnSelectIssue} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "button" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("Button component not working on mobile")).toBeInTheDocument();
    });
    
    fireEvent.click(screen.getByText("Button component not working on mobile"));
    
    expect(mockOnSelectIssue).toHaveBeenCalledWith(mockIssues[0]);
  });

  it("updates input value when an issue is selected", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "button" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("Button component not working on mobile")).toBeInTheDocument();
    });
    
    fireEvent.click(screen.getByText("Button component not working on mobile"));
    
    expect(input.value).toBe("Button component not working on mobile");
  });

  it("limits the number of suggestions shown", async () => {
    render(<SearchIssues issues={mockIssues} maxSuggestions={2} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "issue" } }); // Should match multiple issues
    fireEvent.focus(input);
    
    await waitFor(() => {
      const issueElements = screen.getAllByText(/issue/i);
      // Count only the issue titles, not all text containing "issue"
      const issueTitles = issueElements.filter(element => 
        element.textContent?.includes("component") || 
        element.textContent?.includes("validation") ||
        element.textContent?.includes("styling")
      );
      expect(issueTitles.length).toBeLessThanOrEqual(2);
    });
  });

  it("shows suggestions only when showSuggestions is true", async () => {
    render(<SearchIssues issues={mockIssues} showSuggestions={false} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "button" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.queryByText("Button component not working on mobile")).not.toBeInTheDocument();
    });
  });

  it("displays severity with correct styling", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "security" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      const severityElement = screen.getAllByText("critical")[0]; // First occurrence is the severity
      expect(severityElement).toBeInTheDocument();
      expect(severityElement).toHaveStyle({ color: "rgb(231, 76, 60)" }); // Critical color
    });
  });

  it("displays status with correct styling", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "validation" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("in progress")).toBeInTheDocument();
    });
  });

  it("displays tags with correct styling", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "button" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("button")).toBeInTheDocument();
      expect(screen.getByText("mobile")).toBeInTheDocument();
      expect(screen.getByText("ui")).toBeInTheDocument();
    });
  });

  it("limits displayed tags and shows count", async () => {
    const issueWithManyTags: Issue = {
      id: "5",
      title: "Issue with many tags",
      tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
      severity: "low",
      status: "open",
    };
    
    render(<SearchIssues issues={[issueWithManyTags]} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "many" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("tag1")).toBeInTheDocument();
      expect(screen.getByText("tag2")).toBeInTheDocument();
      expect(screen.getByText("tag3")).toBeInTheDocument();
      expect(screen.getByText("+2")).toBeInTheDocument();
    });
  });

  it("can be disabled", () => {
    render(<SearchIssues disabled />);
    
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("accepts custom filter fields", async () => {
    render(<SearchIssues issues={mockIssues} filterBy={["title"]} />);
    
    const input = screen.getByRole("textbox");
    // Search by description content that only exists in description, not title
    fireEvent.change(input, { target: { value: "touch events" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.queryByText("Button component not working on mobile")).not.toBeInTheDocument();
    });
  });

  it("hides dropdown on blur", async () => {
    render(<SearchIssues issues={mockIssues} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "button" } });
    fireEvent.focus(input);
    
    await waitFor(() => {
      expect(screen.getByText("Button component not working on mobile")).toBeInTheDocument();
    });
    
    fireEvent.blur(input);
    
    await waitFor(() => {
      expect(screen.queryByText("Button component not working on mobile")).not.toBeInTheDocument();
    }, { timeout: 300 });
  });

  it("handles empty issues array", () => {
    render(<SearchIssues issues={[]} />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "search" } });
    fireEvent.focus(input);
    
    expect(screen.queryByText("search")).not.toBeInTheDocument();
  });

  it("handles undefined issues", () => {
    render(<SearchIssues />);
    
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "search" } });
    fireEvent.focus(input);
    
    expect(screen.queryByText("search")).not.toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<SearchIssues ref={ref} />);
    
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("applies custom styles", () => {
    render(
      <SearchIssues 
        containerStyle={{ backgroundColor: "red" }}
        suggestionStyle={{ border: "2px solid blue" }}
      />
    );
    
    // Check if component renders without errors with custom styles
    expect(screen.getByTestId("search-issues")).toBeInTheDocument();
  });
});