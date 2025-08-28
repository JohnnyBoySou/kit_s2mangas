import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./tabs";

describe("Tabs Component", () => {
  const mockSetValue = jest.fn();
  const testValues = ["Tab 1", "Tab 2", "Tab 3"];

  beforeEach(() => {
    mockSetValue.mockClear();
  });

  it("renders correctly with default props", () => {
    render(<Tabs setValue={mockSetValue} values={testValues} />);

    testValues.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument();
    });
  });

  it("renders with selected value", () => {
    render(<Tabs value="Tab 2" setValue={mockSetValue} values={testValues} />);

    const selectedTab = screen.getByText("Tab 2");
    expect(selectedTab).toBeInTheDocument();
    expect(selectedTab).toHaveAttribute("aria-selected", "true");
  });

  it("calls setValue when tab is clicked", () => {
    render(<Tabs setValue={mockSetValue} values={testValues} />);

    const firstTab = screen.getByText("Tab 1");
    fireEvent.click(firstTab);

    // When no value is provided, first tab is selected by default
    // Clicking it should deselect it
    expect(mockSetValue).toHaveBeenCalledWith("");
  });

  it("deselects tab when already selected tab is clicked", () => {
    render(<Tabs value="Tab 2" setValue={mockSetValue} values={testValues} />);

    const selectedTab = screen.getByText("Tab 2");
    fireEvent.click(selectedTab);

    expect(mockSetValue).toHaveBeenCalledWith("");
  });

  it("renders with custom testID", () => {
    render(<Tabs setValue={mockSetValue} values={testValues} testID="tabs" />);

    const tabsContainer = screen.getByTestId("tabs");
    expect(tabsContainer).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(
      <Tabs
        setValue={mockSetValue}
        values={testValues}
        className="custom-tabs"
      />,
    );

    const tabsContainer = document.querySelector(".custom-tabs");
    expect(tabsContainer).toBeInTheDocument();
  });

  it("renders with custom style", () => {
    const customStyle = { backgroundColor: "red" };
    render(
      <Tabs setValue={mockSetValue} values={testValues} style={customStyle} />,
    );

    const tabsContainer = screen.getByText("Tab 1").parentElement;
    expect(tabsContainer?.style.backgroundColor).toBe("red");
  });

  it("renders with empty values array", () => {
    render(<Tabs setValue={mockSetValue} values={[]} />);

    // Should not render any tabs
    testValues.forEach((tab) => {
      expect(screen.queryByText(tab)).not.toBeInTheDocument();
    });
  });

  it("renders with single value", () => {
    render(<Tabs setValue={mockSetValue} values={["Single Tab"]} />);

    expect(screen.getByText("Single Tab")).toBeInTheDocument();
    expect(screen.queryByText("Tab 1")).not.toBeInTheDocument();
  });

  it("selects first tab by default when no value is provided", () => {
    render(<Tabs setValue={mockSetValue} values={testValues} />);

    const firstTab = screen.getByText("Tab 1");
    expect(firstTab).toHaveAttribute("aria-selected", "true");
  });

  it("handles multiple tab clicks correctly", () => {
    render(<Tabs setValue={mockSetValue} values={testValues} />);

    const firstTab = screen.getByText("Tab 1");
    const secondTab = screen.getByText("Tab 2");

    // First tab is selected by default, clicking it deselects
    fireEvent.click(firstTab);
    expect(mockSetValue).toHaveBeenCalledWith("");

    // Clicking second tab selects it
    fireEvent.click(secondTab);
    expect(mockSetValue).toHaveBeenCalledWith("Tab 2");

    expect(mockSetValue).toHaveBeenCalledTimes(2);
  });

  it("has proper accessibility attributes", () => {
    render(<Tabs setValue={mockSetValue} values={testValues} />);

    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(testValues.length);

    tabs.forEach((tab) => {
      expect(tab).toHaveAttribute("aria-selected");
    });
  });
});
