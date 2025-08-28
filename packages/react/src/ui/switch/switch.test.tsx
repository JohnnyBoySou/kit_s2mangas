import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./switch";

describe("Switch Component", () => {
  const defaultProps = {
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    render(<Switch {...defaultProps} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("should render as checked when checked prop is true", () => {
    render(<Switch {...defaultProps} checked />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("should call onChange when clicked", async () => {
    const user = userEvent.setup();
    render(<Switch {...defaultProps} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it("should call onChange with false when unchecked switch is clicked", async () => {
    const user = userEvent.setup();
    render(<Switch {...defaultProps} checked />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  it("should not call onChange when disabled", async () => {
    const user = userEvent.setup();
    render(<Switch {...defaultProps} disabled />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it("should render as disabled", () => {
    render(<Switch {...defaultProps} disabled />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("should have disabled styles when disabled", () => {
    render(<Switch {...defaultProps} disabled />);

    const label = screen.getByRole("checkbox").closest("label");
    expect(label).toHaveStyle({ cursor: "not-allowed", opacity: 0.5 });
  });

  it("should have enabled styles when not disabled", () => {
    render(<Switch {...defaultProps} />);

    const label = screen.getByRole("checkbox").closest("label");
    expect(label).toHaveStyle({ cursor: "pointer", opacity: 1 });
  });

  it("should render with custom style", () => {
    const customStyle = { backgroundColor: "red" };
    render(<Switch {...defaultProps} style={customStyle} />);

    const label = screen.getByRole("checkbox").closest("label");
    expect(label?.style.backgroundColor).toBe("red");
  });

  it("should render with className", () => {
    render(<Switch {...defaultProps} className="custom-switch" />);

    const label = screen.getByRole("checkbox").closest("label");
    expect(label).toHaveClass("custom-switch");
  });

  it("should not respond to keyboard events when disabled", async () => {
    const user = userEvent.setup();
    render(<Switch {...defaultProps} disabled />);

    const checkbox = screen.getByRole("checkbox");
    checkbox.focus();
    await user.keyboard("{Space}");

    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it("should toggle state correctly", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Switch {...defaultProps} checked={false} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);

    // Simula a mudança de estado controlada
    rerender(<Switch {...defaultProps} checked={true} />);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  it("should handle controlled component correctly", async () => {
    const user = userEvent.setup();
    let isChecked = false;
    const handleChange = (checked: boolean) => {
      isChecked = checked;
    };

    const { rerender } = render(
      <Switch onChange={handleChange} checked={isChecked} />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(isChecked).toBe(true);

    rerender(<Switch onChange={handleChange} checked={isChecked} />);
    expect(checkbox).toBeChecked();
  });

  it("should have proper accessibility attributes", () => {
    render(<Switch {...defaultProps} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });

  it("should handle multiple rapid clicks", async () => {
    const user = userEvent.setup();
    let isChecked = false;
    const handleChange = (checked: boolean) => {
      isChecked = checked;
    };

    const { rerender } = render(
      <Switch onChange={handleChange} checked={isChecked} />,
    );

    const checkbox = screen.getByRole("checkbox");

    // Primeiro clique
    await user.click(checkbox);
    expect(isChecked).toBe(true);
    rerender(<Switch onChange={handleChange} checked={isChecked} />);

    // Segundo clique
    await user.click(checkbox);
    expect(isChecked).toBe(false);
    rerender(<Switch onChange={handleChange} checked={isChecked} />);

    // Terceiro clique
    await user.click(checkbox);
    expect(isChecked).toBe(true);
  });

  it("should work without onChange handler", async () => {
    const user = userEvent.setup();
    render(<Switch />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    // Não deve quebrar quando não há onChange
    expect(checkbox).toBeInTheDocument();
  });
});
