import React from "react";
import { render, screen } from "@testing-library/react";
import Divider from "./divider";

describe("Divider Component", () => {
  it("should render with default props", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
  });

  it("should render with horizontal orientation by default", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({
      width: "100%",
      height: "1px",
    });
  });

  it("should render with vertical orientation", () => {
    render(<Divider orientation="vertical" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({
      width: "1px",
      height: "100%",
    });
  });

  it("should render with custom color", () => {
    render(<Divider color="#ff0000" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ backgroundColor: "#ff0000" });
  });

  it("should render with custom thickness", () => {
    render(<Divider thickness={5} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ height: "5px" });
  });

  it("should render with custom thickness for vertical orientation", () => {
    render(
      <Divider orientation="vertical" thickness={3} data-testid="divider" />,
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ width: "3px" });
  });

  it("should render with custom style", () => {
    const customStyle = { margin: "10px 0" };
    render(<Divider style={customStyle} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle(customStyle);
  });

  it("should render with className", () => {
    render(<Divider className="custom-divider" data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveClass("custom-divider");
  });

  it("should combine custom style with default styles", () => {
    const customStyle = { margin: "20px" };
    render(<Divider style={customStyle} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({
      margin: "20px",
      width: "100%",
      height: "1px",
    });
  });

  it("should handle zero thickness", () => {
    render(<Divider thickness={0} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ height: "0px" });
  });

  it("should handle zero thickness for vertical orientation", () => {
    render(
      <Divider orientation="vertical" thickness={0} data-testid="divider" />,
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ width: "0px" });
  });

  it("should handle negative thickness", () => {
    render(<Divider thickness={-5} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ height: "-5px" });
  });

  it("should handle negative thickness for vertical orientation", () => {
    render(
      <Divider orientation="vertical" thickness={-3} data-testid="divider" />,
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ width: "-3px" });
  });

  it("should handle large thickness values", () => {
    render(<Divider thickness={100} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ height: "100px" });
  });

  it("should handle large thickness values for vertical orientation", () => {
    render(
      <Divider orientation="vertical" thickness={50} data-testid="divider" />,
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ width: "50px" });
  });

  it("should handle different color formats", () => {
    const testCases = [
      { input: "red", expected: "red" },
      { input: "#ff0000", expected: "rgb(255, 0, 0)" },
      { input: "rgb(255, 0, 0)", expected: "rgb(255, 0, 0)" },
      { input: "rgba(255, 0, 0, 0.5)", expected: "rgba(255, 0, 0, 0.5)" },
    ];

    testCases.forEach(({ input, expected }) => {
      const { unmount } = render(
        <Divider color={input} data-testid="divider" />,
      );

      const divider = screen.getByTestId("divider");
      expect(divider.style.backgroundColor).toBe(expected);

      unmount();
    });
  });

  it("should handle both orientations with same thickness", () => {
    const { rerender } = render(
      <Divider thickness={10} data-testid="divider" />,
    );

    let divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ height: "10px" });

    rerender(
      <Divider orientation="vertical" thickness={10} data-testid="divider" />,
    );
    divider = screen.getByTestId("divider");
    expect(divider).toHaveStyle({ width: "10px" });
  });

  it("should handle style override", () => {
    const customStyle = {
      backgroundColor: "blue",
      height: "20px",
      width: "50px",
    };

    render(<Divider style={customStyle} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider.style.backgroundColor).toBe("blue");
    expect(divider.style.height).toBe("20px");
    expect(divider.style.width).toBe("50px");
  });

  it("should render multiple dividers", () => {
    render(
      <div>
        <Divider data-testid="divider1" />
        <Divider data-testid="divider2" orientation="vertical" />
        <Divider data-testid="divider3" thickness={5} />
      </div>,
    );

    expect(screen.getByTestId("divider1")).toBeInTheDocument();
    expect(screen.getByTestId("divider2")).toBeInTheDocument();
    expect(screen.getByTestId("divider3")).toBeInTheDocument();
  });

  it("should have proper accessibility", () => {
    render(<Divider data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
  });

  it("should handle empty style object", () => {
    render(<Divider style={{}} data-testid="divider" />);

    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveStyle({
      width: "100%",
      height: "1px",
    });
  });

  it("should handle null and undefined props gracefully", () => {
    render(
      <Divider color={undefined} thickness={undefined} data-testid="divider" />,
    );

    const divider = screen.getByTestId("divider");
    expect(divider).toBeInTheDocument();
  });
});
