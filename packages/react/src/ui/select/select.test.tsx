import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Select from "./select";

const mockOptions = [
  { value: "option1", label: "Opção 1" },
  { value: "option2", label: "Opção 2" },
  { value: "option3", label: "Opção 3", disabled: true },
];

describe("Select", () => {
  it("should render with default props", () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveTextContent("Selecione uma opção");
  });

  it("should render with label", () => {
    render(<Select options={mockOptions} label="Escolha uma opção" />);
    const label = screen.getByText("Escolha uma opção");
    expect(label).toBeInTheDocument();
  });

  it("should render with required label", () => {
    render(<Select options={mockOptions} label="Escolha uma opção" required />);
    const requiredMark = screen.getByText("*");
    expect(requiredMark).toBeInTheDocument();
  });

  it("should open dropdown when clicked", () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");

    fireEvent.click(select);

    expect(screen.getByText("Opção 1")).toBeInTheDocument();
    expect(screen.getByText("Opção 2")).toBeInTheDocument();
    expect(screen.getByText("Opção 3")).toBeInTheDocument();
  });

  it("should select an option when clicked", () => {
    const onChange = jest.fn();
    render(<Select options={mockOptions} onChange={onChange} />);
    const select = screen.getByRole("combobox");

    fireEvent.click(select);
    fireEvent.click(screen.getByText("Opção 1"));

    expect(onChange).toHaveBeenCalledWith("option1");
    expect(select).toHaveTextContent("Opção 1");
  });

  it("should close dropdown when option is selected", () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");

    fireEvent.click(select);
    expect(screen.getByText("Opção 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Opção 1"));

    // Verifica se o dropdown está fechado através do aria-expanded
    expect(select).toHaveAttribute("aria-expanded", "false");
  });

  it("should not select disabled options", () => {
    const onChange = jest.fn();
    render(<Select options={mockOptions} onChange={onChange} />);
    const select = screen.getByRole("combobox");

    fireEvent.click(select);
    fireEvent.click(screen.getByText("Opção 3"));

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should display selected value", () => {
    render(<Select options={mockOptions} value="option2" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveTextContent("Opção 2");
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Select options={mockOptions} disabled />);
    const select = screen.getByRole("combobox");

    expect(select).toHaveAttribute("tabindex", "-1");
    expect(select).toHaveStyle({ cursor: "not-allowed" });
  });

  it("should show error state", () => {
    render(<Select options={mockOptions} error />);
    const select = screen.getByRole("combobox");

    expect(select).toHaveStyle({
      borderColor: expect.stringContaining("destructive"),
    });
  });

  it("should handle keyboard navigation", () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");

    // Enter opens dropdown
    fireEvent.keyDown(select, { key: "Enter" });
    expect(screen.getByText("Opção 1")).toBeInTheDocument();
    expect(select).toHaveAttribute("aria-expanded", "true");

    // Escape closes dropdown
    fireEvent.keyDown(select, { key: "Escape" });
    expect(select).toHaveAttribute("aria-expanded", "false");

    // Arrow down opens dropdown
    fireEvent.keyDown(select, { key: "ArrowDown" });
    expect(screen.getByText("Opção 1")).toBeInTheDocument();
    expect(select).toHaveAttribute("aria-expanded", "true");

    // Arrow up closes dropdown
    fireEvent.keyDown(select, { key: "ArrowUp" });
    expect(select).toHaveAttribute("aria-expanded", "false");
  });

  it("should close dropdown when clicking outside", async () => {
    render(<Select options={mockOptions} />);
    const select = screen.getByRole("combobox");

    fireEvent.click(select);
    expect(screen.getByText("Opção 1")).toBeInTheDocument();
    expect(select).toHaveAttribute("aria-expanded", "true");

    // Simula clique fora do componente
    fireEvent.mouseDown(document.body);

    // Aguarda o efeito do useEffect ser executado
    await waitFor(
      () => {
        expect(select).toHaveAttribute("aria-expanded", "false");
      },
      { timeout: 1000 },
    );
  });

  it("should render with custom placeholder", () => {
    render(<Select options={mockOptions} placeholder="Escolha uma opção" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveTextContent("Escolha uma opção");
  });

  it("should render with testID", () => {
    render(<Select options={mockOptions} testID="test-select" />);
    const select = screen.getByTestId("test-select");
    expect(select).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<Select options={mockOptions} className="custom-select" />);
    const select = document.querySelector(".custom-select");
    expect(select).toBeInTheDocument();
  });
});
