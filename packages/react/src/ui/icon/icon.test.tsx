import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "./icon";

// Mock do lucide-react
jest.mock("lucide-react", () => ({
  Home: ({ size, color, strokeWidth, className }: any) => (
    <svg
      data-testid="home-icon"
      width={size}
      height={size}
      className={className}
      style={{ color }}
      data-stroke-width={strokeWidth}
    >
      <path d="home-icon-path" />
    </svg>
  ),
  User: ({ size, color, strokeWidth, className }: any) => (
    <svg
      data-testid="user-icon"
      width={size}
      height={size}
      className={className}
      style={{ color }}
      data-stroke-width={strokeWidth}
    >
      <path d="user-icon-path" />
    </svg>
  ),
  Settings: ({ size, color, strokeWidth, className }: any) => (
    <svg
      data-testid="settings-icon"
      width={size}
      height={size}
      className={className}
      style={{ color }}
      data-stroke-width={strokeWidth}
    >
      <path d="settings-icon-path" />
    </svg>
  ),
}));

describe("Icon Component", () => {
  it("should render with default props", () => {
    render(<Icon name="Home" testID="icon" />);

    const icon = screen.getByTestId("icon");
    const svgIcon = screen.getByTestId("home-icon");

    expect(icon).toBeInTheDocument();
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveAttribute("width", "24");
    expect(svgIcon).toHaveAttribute("height", "24");
    expect(svgIcon).toHaveAttribute("data-stroke-width", "1.5");
  });

  it("should render with custom size", () => {
    render(<Icon name="Home" size={32} testID="icon" />);

    const svgIcon = screen.getByTestId("home-icon");
    expect(svgIcon).toHaveAttribute("width", "32");
    expect(svgIcon).toHaveAttribute("height", "32");
  });

  it("should render with custom color", () => {
    render(<Icon name="Home" color="#ff0000" testID="icon" />);

    const svgIcon = screen.getByTestId("home-icon");
    expect(svgIcon).toHaveStyle({ color: "#ff0000" });
  });

  it("should render with custom strokeWidth", () => {
    render(<Icon name="Home" strokeWidth={2} testID="icon" />);

    const svgIcon = screen.getByTestId("home-icon");
    expect(svgIcon).toHaveAttribute("data-stroke-width", "2");
  });

  it("should render as button when onClick is provided", () => {
    const mockOnClick = jest.fn();
    render(<Icon name="Home" onClick={mockOnClick} testID="icon" />);

    const button = screen.getByTestId("icon");
    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveAttribute("type", "button");
  });

  it("should call onClick when clicked", () => {
    const mockOnClick = jest.fn();
    render(<Icon name="Home" onClick={mockOnClick} testID="icon" />);

    const button = screen.getByTestId("icon");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when disabled", () => {
    const mockOnClick = jest.fn();
    render(<Icon name="Home" onClick={mockOnClick} disabled testID="icon" />);

    const button = screen.getByTestId("icon");
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });

  it("should render as span when no onClick is provided", () => {
    render(<Icon name="Home" testID="icon" />);

    const span = screen.getByTestId("icon");
    expect(span.tagName).toBe("SPAN");
  });

  it("should render with accessibility props", () => {
    render(
      <Icon
        name="Home"
        testID="icon"
        aria-label="Home icon"
        aria-describedby="home-description"
        role="img"
        title="Navigate to home"
      />,
    );

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("aria-label", "Home icon");
    expect(icon).toHaveAttribute("aria-describedby", "home-description");
    expect(icon).toHaveAttribute("role", "img");
    expect(icon).toHaveAttribute("title", "Navigate to home");
  });

  it("should render with custom style", () => {
    const customStyle = { backgroundColor: "red", margin: "10px" };
    render(<Icon name="Home" style={customStyle} testID="icon" />);

    const icon = screen.getByTestId("icon");
    expect(icon.tagName).toBe("SPAN");
    expect(icon.style.backgroundColor).toBe("red");
    expect(icon.style.margin).toBe("10px");
  });

  it("should render with custom className", () => {
    render(<Icon name="Home" className="custom-icon" testID="icon" />);

    const svgIcon = screen.getByTestId("home-icon");
    expect(svgIcon).toHaveClass("custom-icon");
  });

  it("should have correct cursor styles", () => {
    // Icon without onClick
    const { rerender } = render(<Icon name="Home" testID="icon-span" />);
    const spanIcon = screen.getByTestId("icon-span");
    expect(spanIcon).toHaveStyle({ cursor: "default" });

    // Icon with onClick
    rerender(<Icon name="Home" onClick={() => {}} testID="icon-button" />);
    const buttonIcon = screen.getByTestId("icon-button");
    expect(buttonIcon).toHaveStyle({ cursor: "pointer" });

    // Icon with onClick but disabled
    rerender(
      <Icon name="Home" onClick={() => {}} disabled testID="icon-disabled" />,
    );
    const disabledIcon = screen.getByTestId("icon-disabled");
    expect(disabledIcon).toHaveStyle({ cursor: "not-allowed" });
  });

  it("should have correct opacity when disabled", () => {
    render(<Icon name="Home" onClick={() => {}} disabled testID="icon" />);

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveStyle({ opacity: "0.5" });
  });

  it("should render different icon types", () => {
    const { rerender } = render(<Icon name="Home" testID="icon" />);
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();

    rerender(<Icon name="User" testID="icon" />);
    expect(screen.getByTestId("user-icon")).toBeInTheDocument();

    rerender(<Icon name="Settings" testID="icon" />);
    expect(screen.getByTestId("settings-icon")).toBeInTheDocument();
  });

  it("should have default aria-label when not provided", () => {
    render(<Icon name="Home" testID="icon" />);

    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("aria-label", "Home icon");
  });

  it("should have button aria-label when onClick is provided", () => {
    render(<Icon name="Home" onClick={() => {}} testID="icon" />);

    const button = screen.getByTestId("icon");
    expect(button).toHaveAttribute("aria-label", "Home button");
  });
});
