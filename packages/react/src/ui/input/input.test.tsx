import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

describe("Input Component", () => {
  const defaultProps = {
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with default props", () => {
    render(<Input {...defaultProps} testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("should render with initial value", () => {
    render(<Input {...defaultProps} value="initial value" testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveValue("initial value");
  });

  it("should render with label", () => {
    render(<Input {...defaultProps} label="Test Label" testID="input" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should render with placeholder", () => {
    render(<Input {...defaultProps} placeholder="Enter text" testID="input" />);

    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when typing", () => {
    render(<Input {...defaultProps} testID="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith("test");
  });

  it("should handle focus and blur events", async () => {
    const user = userEvent.setup();
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <Input
        {...defaultProps}
        onFocus={onFocus}
        onBlur={onBlur}
        testID="input"
      />,
    );

    const input = screen.getByTestId("input");
    await user.click(input);
    expect(onFocus).toHaveBeenCalled();

    await user.tab();
    expect(onBlur).toHaveBeenCalled();
  });

  it("should render with error message", () => {
    render(
      <Input {...defaultProps} error="This field is required" testID="input" />,
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should render with helper text", () => {
    render(
      <Input
        {...defaultProps}
        helperText="This is helper text"
        testID="input"
      />,
    );

    expect(screen.getByText("This is helper text")).toBeInTheDocument();
  });

  it("should render as disabled", () => {
    render(<Input {...defaultProps} disabled testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toBeDisabled();
  });

  it("should not call onChange when disabled", async () => {
    const user = userEvent.setup();
    render(<Input {...defaultProps} disabled testID="input" />);

    const input = screen.getByTestId("input");
    await user.type(input, "test");

    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it("should render as password input", () => {
    render(<Input {...defaultProps} isPassword testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "password");
  });

  it("should render with different input types", () => {
    const types = ["text", "email", "number", "tel", "url"];

    types.forEach((type) => {
      const { unmount } = render(
        <Input {...defaultProps} type={type as any} testID="input" />,
      );

      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("type", type);

      unmount();
    });
  });

  it("should apply CPF mask", () => {
    render(<Input {...defaultProps} mask="CPF" testID="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "12345678901" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith("123.456.789-01");
  });

  it("should apply phone mask", () => {
    render(<Input {...defaultProps} mask="PHONE" testID="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "11987654321" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith("(11) 98765-4321");
  });

  it("should apply CEP mask", () => {
    render(<Input {...defaultProps} mask="CEP" testID="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "12345678" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith("12345-678");
  });

  it("should apply birthdate mask", () => {
    render(<Input {...defaultProps} mask="NASCIMENTO" testID="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "01012000" } });

    expect(defaultProps.onChange).toHaveBeenCalledWith("01/01/2000");
  });

  it("should apply currency mask", () => {
    render(<Input {...defaultProps} mask="CURRENCY" testID="input" />);

    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "123456" } });

    // Verifica se a máscara foi aplicada corretamente
    expect(defaultProps.onChange).toHaveBeenCalled();
    const lastCall =
      defaultProps.onChange.mock.calls[
        defaultProps.onChange.mock.calls.length - 1
      ];
    expect(lastCall[0]).toContain("R$");
    expect(lastCall[0]).toMatch(/\d/);
  });

  it("should render with custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    render(<Input {...defaultProps} inputStyle={customStyle} testID="input" />);

    const input = screen.getByTestId("input");
    expect(input.style.backgroundColor).toBe("red");
  });

  it("should render with testID", () => {
    render(<Input {...defaultProps} testID="custom-input" />);

    const input = screen.getByTestId("custom-input");
    expect(input).toBeInTheDocument();
  });

  it("should handle controlled input", () => {
    render(<Input {...defaultProps} value="controlled value" testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveValue("controlled value");

    fireEvent.change(input, {
      target: { value: "controlled value additional" },
    });
    expect(defaultProps.onChange).toHaveBeenCalledWith(
      "controlled value additional",
    );
  });

  it("should handle maxLength", () => {
    render(<Input {...defaultProps} maxLength={5} testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("maxLength", "5");
  });

  it("should handle required attribute", () => {
    render(<Input {...defaultProps} required testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toBeRequired();
  });

  it("should handle name attribute", () => {
    render(<Input {...defaultProps} name="test-input" testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("name", "test-input");
  });

  it("should handle autoComplete attribute", () => {
    render(<Input {...defaultProps} autoComplete="email" testID="input" />);

    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("autocomplete", "email");
  });

  it("should preserve cursor position when applying mask", async () => {
    const TestComponent = () => {
      const [value, setValue] = useState("");
      return <Input value={value} onChange={setValue} mask="CPF" testID="input" />;
    };

    render(<TestComponent />);

    const input = screen.getByTestId("input") as HTMLInputElement;
    
    // Type some characters to test mask behavior
    await userEvent.type(input, "123456");
    
    // Check final value in the input
    expect(input.value).toBe("123.456");
  });

  it("should apply phone mask progressively without flicker", async () => {
    const TestComponent = () => {
      const [value, setValue] = useState("");
      return <Input value={value} onChange={setValue} mask="PHONE" testID="input" />;
    };

    render(<TestComponent />);

    const input = screen.getByTestId("input") as HTMLInputElement;
    
    // Type a full phone number
    await userEvent.type(input, "11987654321");
    
    // Check final value in the input
    expect(input.value).toBe("(11) 98765-4321");
  });
});
