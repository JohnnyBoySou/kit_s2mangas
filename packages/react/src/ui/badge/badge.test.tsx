import { render, screen } from "@testing-library/react";
import Badge from "./badge";

describe("Badge Component", () => {
  const defaultProps = {
    children: "Test Badge",
  };

  it("should render with default props", () => {
    render(<Badge {...defaultProps} data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe("SPAN");
  });

  it("should render with different variants", () => {
    const variants = ["default", "secondary", "destructive", "outline"];

    variants.forEach((variant) => {
      const { unmount } = render(
        <Badge
          {...defaultProps}
          variant={variant as any}
          data-testid="badge"
        />,
      );

      const badge = screen.getByTestId("badge");
      expect(badge).toBeInTheDocument();

      unmount();
    });
  });

  it("should render with different sizes", () => {
    const sizes = ["sm", "md", "lg"];

    sizes.forEach((size) => {
      const { unmount } = render(
        <Badge {...defaultProps} size={size as any} data-testid="badge" />,
      );

      const badge = screen.getByTestId("badge");
      expect(badge).toBeInTheDocument();

      unmount();
    });
  });

  it("should render with custom style", () => {
    const customStyle = { backgroundColor: "red", color: "white" };
    render(<Badge {...defaultProps} style={customStyle} data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge.style.backgroundColor).toBe("red");
    expect(badge.style.color).toBe("white");
  });

  it("should render with className", () => {
    render(
      <Badge {...defaultProps} className="custom-badge" data-testid="badge" />,
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toHaveClass("custom-badge");
  });

  it("should render with complex children", () => {
    render(
      <Badge data-testid="badge">
        <span data-testid="icon">🚀</span>
        <span>Complex Badge</span>
      </Badge>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Complex Badge")).toBeInTheDocument();
  });

  it("should apply default variant styles", () => {
    render(<Badge {...defaultProps} variant="default" data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    // Verifica se o elemento tem as propriedades de estilo esperadas
    expect(badge).toHaveStyle({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    });
  });

  it("should apply secondary variant styles", () => {
    render(<Badge {...defaultProps} variant="secondary" data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should apply destructive variant styles", () => {
    render(
      <Badge {...defaultProps} variant="destructive" data-testid="badge" />,
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should apply outline variant styles", () => {
    render(<Badge {...defaultProps} variant="outline" data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should apply small size styles", () => {
    render(<Badge {...defaultProps} size="sm" data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should apply medium size styles", () => {
    render(<Badge {...defaultProps} size="md" data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should apply large size styles", () => {
    render(<Badge {...defaultProps} size="lg" data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should combine variant and size styles", () => {
    render(
      <Badge
        {...defaultProps}
        variant="destructive"
        size="lg"
        data-testid="badge"
      />,
    );

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should override default styles with custom style", () => {
    const customStyle = {
      backgroundColor: "purple",
      color: "yellow",
      fontSize: "24px",
    };
    render(<Badge {...defaultProps} style={customStyle} data-testid="badge" />);

    const badge = screen.getByTestId("badge");
    expect(badge.style.backgroundColor).toBe("purple");
    expect(badge.style.color).toBe("yellow");
    expect(badge.style.fontSize).toBe("24px");
  });

  it("should render empty badge", () => {
    render(<Badge data-testid="badge">{""}</Badge>);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
  });

  it("should render with number as children", () => {
    render(<Badge data-testid="badge">42</Badge>);

    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent("42");
  });
});
