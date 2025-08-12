import { render, screen } from "@testing-library/react";
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from "./layout";

describe("Layout Components", () => {
  const defaultProps = {
    children: "Layout Content",
  };

  describe("Column Component", () => {
    it("should render with default props", () => {
      render(<Column {...defaultProps} />);

      const column = screen.getByText("Layout Content");
      expect(column).toBeInTheDocument();
      expect(column.closest("div")).toBeInTheDocument();
    });

    it("should render with flex column styles", () => {
      render(<Column {...defaultProps} />);

      const column = screen.getByText("Layout Content").closest("div");
      expect(column).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "0px",
      });
    });

    it("should render with custom gap", () => {
      render(<Column {...defaultProps} gap={16} />);

      const column = screen.getByText("Layout Content").closest("div");
      expect(column).toHaveStyle({ gap: "16px" });
    });

    it("should render with custom alignItems", () => {
      render(<Column {...defaultProps} alignItems="center" />);

      const column = screen.getByText("Layout Content").closest("div");
      expect(column).toHaveStyle({ alignItems: "center" });
    });

    it("should render with custom justifyContent", () => {
      render(<Column {...defaultProps} justifyContent="space-between" />);

      const column = screen.getByText("Layout Content").closest("div");
      expect(column).toHaveStyle({ justifyContent: "space-between" });
    });

    it("should render with custom style", () => {
      const customStyle = { backgroundColor: "red" };
      render(<Column {...defaultProps} style={customStyle} />);

      const column = screen.getByText("Layout Content").closest("div");
      expect(column).not.toBeNull();
      expect(column!.style.backgroundColor).toBe("red");
    });

    it("should render with className", () => {
      render(<Column {...defaultProps} className="custom-column" />);

      const column = screen.getByText("Layout Content").closest("div");
      expect(column).toHaveClass("custom-column");
    });
  });

  describe("Row Component", () => {
    it("should render with default props", () => {
      render(<Row {...defaultProps} />);

      const row = screen.getByText("Layout Content");
      expect(row).toBeInTheDocument();
      expect(row.closest("div")).toBeInTheDocument();
    });

    it("should render with flex row styles", () => {
      render(<Row {...defaultProps} />);

      const row = screen.getByText("Layout Content").closest("div");
      expect(row).toHaveStyle({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0px",
      });
    });

    it("should render with custom gap", () => {
      render(<Row {...defaultProps} gap={20} />);

      const row = screen.getByText("Layout Content").closest("div");
      expect(row).toHaveStyle({ gap: "20px" });
    });

    it("should render with custom alignItems", () => {
      render(<Row {...defaultProps} alignItems="flex-end" />);

      const row = screen.getByText("Layout Content").closest("div");
      expect(row).toHaveStyle({ alignItems: "flex-end" });
    });

    it("should render with custom justifyContent", () => {
      render(<Row {...defaultProps} justifyContent="space-around" />);

      const row = screen.getByText("Layout Content").closest("div");
      expect(row).toHaveStyle({ justifyContent: "space-around" });
    });

    it("should render with custom style", () => {
      const customStyle = { backgroundColor: "blue" };
      render(<Row {...defaultProps} style={customStyle} />);

      const row = screen.getByText("Layout Content").closest("div");
      expect(row).not.toBeNull();
      expect(row!.style.backgroundColor).toBe("blue");
    });

    it("should render with className", () => {
      render(<Row {...defaultProps} className="custom-row" />);

      const row = screen.getByText("Layout Content").closest("div");
      expect(row).toHaveClass("custom-row");
    });
  });

  describe("Main Component", () => {
    it("should render with default props", () => {
      render(<Main {...defaultProps} />);

      const main = screen.getByText("Layout Content");
      expect(main).toBeInTheDocument();
      expect(main.tagName).toBe("MAIN");
    });

    it("should render with main styles", () => {
      render(<Main {...defaultProps} />);

      const main = screen.getByText("Layout Content");
      expect(main).toHaveStyle({
        flex: 1,
        backgroundColor: expect.any(String),
      });
    });

    it("should render with custom style", () => {
      const customStyle = { backgroundColor: "green" };
      render(<Main style={customStyle}>Layout Content</Main>);

      const main = screen.getByText("Layout Content");
      expect(main.style.backgroundColor).toBe("green");
    });

    it("should render with className", () => {
      render(<Main {...defaultProps} className="custom-main" />);

      const main = screen.getByText("Layout Content");
      expect(main).toHaveClass("custom-main");
    });
  });

  describe("ScrollHorizontal Component", () => {
    it("should render with default props", () => {
      render(<ScrollHorizontal {...defaultProps} />);

      const scroll = screen.getByText("Layout Content");
      expect(scroll).toBeInTheDocument();
      expect(scroll.closest("div")).toBeInTheDocument();
    });

    it("should render with horizontal scroll styles", () => {
      render(<ScrollHorizontal {...defaultProps} />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0px",
        overflowX: "auto",
        overflowY: "hidden",
      });
    });

    it("should render with custom gap", () => {
      render(<ScrollHorizontal {...defaultProps} gap={12} />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ gap: "12px" });
    });

    it("should render with custom alignItems", () => {
      render(<ScrollHorizontal {...defaultProps} alignItems="stretch" />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ alignItems: "stretch" });
    });

    it("should render with custom justifyContent", () => {
      render(<ScrollHorizontal {...defaultProps} justifyContent="center" />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ justifyContent: "center" });
    });

    it("should render with custom style", () => {
      const customStyle = { backgroundColor: "yellow" };
      render(<ScrollHorizontal {...defaultProps} style={customStyle} />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).not.toBeNull();
      expect(scroll!.style.backgroundColor).toBe("yellow");
    });

    it("should render with className", () => {
      render(
        <ScrollHorizontal {...defaultProps} className="custom-scroll-h" />,
      );

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveClass("custom-scroll-h");
    });
  });

  describe("ScrollVertical Component", () => {
    it("should render with default props", () => {
      render(<ScrollVertical {...defaultProps} />);

      const scroll = screen.getByText("Layout Content");
      expect(scroll).toBeInTheDocument();
      expect(scroll.closest("div")).toBeInTheDocument();
    });

    it("should render with vertical scroll styles", () => {
      render(<ScrollVertical {...defaultProps} />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "0px",
        overflowX: "hidden",
        overflowY: "auto",
      });
    });

    it("should render with custom height", () => {
      render(<ScrollVertical {...defaultProps} height="300px" />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ height: "300px" });
    });

    it("should render with custom maxHeight", () => {
      render(<ScrollVertical {...defaultProps} maxHeight="500px" />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ maxHeight: "500px" });
    });

    it("should render with custom gap", () => {
      render(<ScrollVertical {...defaultProps} gap={8} />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ gap: "8px" });
    });

    it("should render with custom alignItems", () => {
      render(<ScrollVertical {...defaultProps} alignItems="center" />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ alignItems: "center" });
    });

    it("should render with custom justifyContent", () => {
      render(
        <ScrollVertical {...defaultProps} justifyContent="space-between" />,
      );

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveStyle({ justifyContent: "space-between" });
    });

    it("should render with custom style", () => {
      const customStyle = { backgroundColor: "purple" };
      render(<ScrollVertical {...defaultProps} style={customStyle} />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).not.toBeNull();
      expect(scroll!.style.backgroundColor).toBe("purple");
    });

    it("should render with className", () => {
      render(<ScrollVertical {...defaultProps} className="custom-scroll-v" />);

      const scroll = screen.getByText("Layout Content").closest("div");
      expect(scroll).toHaveClass("custom-scroll-v");
    });
  });

  describe("All Layout Components Together", () => {
    it("should render all components in the same document", () => {
      render(
        <div>
          <Column>Column Content</Column>
          <Row>Row Content</Row>
          <Main>Main Content</Main>
          <ScrollHorizontal>Scroll H Content</ScrollHorizontal>
          <ScrollVertical>Scroll V Content</ScrollVertical>
        </div>,
      );

      expect(screen.getByText("Column Content")).toBeInTheDocument();
      expect(screen.getByText("Row Content")).toBeInTheDocument();
      expect(screen.getByText("Main Content")).toBeInTheDocument();
      expect(screen.getByText("Scroll H Content")).toBeInTheDocument();
      expect(screen.getByText("Scroll V Content")).toBeInTheDocument();
    });

    it("should handle complex children structure", () => {
      render(
        <Column>
          <Row>
            <div data-testid="nested-content">Nested Content</div>
          </Row>
        </Column>,
      );

      expect(screen.getByTestId("nested-content")).toBeDefined();
    });

    it("should handle empty children", () => {
      render(
        <div>
          <Column>{null}</Column>
          <Row>{null}</Row>
          <Main>{null}</Main>
          <ScrollHorizontal>{null}</ScrollHorizontal>
          <ScrollVertical>{null}</ScrollVertical>
        </div>,
      );

      // Verifica se os elementos estão presentes (6 elementos: 5 divs + 1 main)
      expect(screen.getAllByRole("generic")).toHaveLength(6);
      expect(screen.getByRole("main")).toBeInTheDocument();
    });
  });
});
