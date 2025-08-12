import React from "react";
import { render, screen, act } from "@testing-library/react";
import Avatar from "./avatar";

describe("Avatar", () => {
  it("should render with default props", () => {
    render(<Avatar name="João Silva" />);
    const avatar = screen.getByText("JS");
    expect(avatar).toBeInTheDocument();
  });

  it("should render with image when src is provided", () => {
    render(<Avatar src="https://example.com/avatar.jpg" name="João Silva" />);
    const img = screen.getByAltText("João Silva");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("should render initials when no src is provided", () => {
    render(<Avatar name="João Silva" />);
    const avatar = screen.getByText("JS");
    expect(avatar).toBeInTheDocument();
  });

  it("should render initials for single name", () => {
    render(<Avatar name="João" />);
    const avatar = screen.getByText("J");
    expect(avatar).toBeInTheDocument();
  });

  it("should render question mark when no name is provided", () => {
    render(<Avatar />);
    const avatar = screen.getByText("?");
    expect(avatar).toBeInTheDocument();
  });

  it("should apply different sizes", () => {
    const { rerender } = render(<Avatar name="João Silva" size="sm" />);
    let avatar = screen.getByText("JS").parentElement;
    expect(avatar).toHaveStyle({ width: "32px", height: "32px" });

    rerender(<Avatar name="João Silva" size="lg" />);
    avatar = screen.getByText("JS").parentElement;
    expect(avatar).toHaveStyle({ width: "64px", height: "64px" });
  });

  it("should apply custom styles", () => {
    const customStyle = { border: "2px solid red" };
    render(<Avatar name="João Silva" style={customStyle} />);
    const avatar = screen.getByText("JS").parentElement;
    expect(avatar).toHaveStyle(customStyle);
  });

  it("should handle image error and show fallback", async () => {
    render(<Avatar src="invalid-url" name="João Silva" />);
    const img = screen.getByAltText("João Silva");

    // Simula erro na imagem
    await act(async () => {
      img.dispatchEvent(new Event("error"));
    });

    expect(screen.getByText("JS")).toBeInTheDocument();
  });

  it("should call onError when image fails to load", async () => {
    const onError = jest.fn();
    render(<Avatar src="invalid-url" name="João Silva" onError={onError} />);
    const img = screen.getByAltText("João Silva");

    await act(async () => {
      img.dispatchEvent(new Event("error"));
    });

    expect(onError).toHaveBeenCalled();
  });

  it("should call onLoad when image loads successfully", async () => {
    const onLoad = jest.fn();
    render(
      <Avatar
        src="https://example.com/avatar.jpg"
        name="João Silva"
        onLoad={onLoad}
      />,
    );
    const img = screen.getByAltText("João Silva");

    await act(async () => {
      img.dispatchEvent(new Event("load"));
    });

    expect(onLoad).toHaveBeenCalled();
  });

  it("should render with testID", () => {
    render(<Avatar name="João Silva" testID="test-avatar" />);
    const avatar = screen.getByTestId("test-avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<Avatar name="João Silva" className="custom-avatar" />);
    const avatar = screen.getByText("JS").parentElement;
    expect(avatar).toHaveClass("custom-avatar");
  });

  it("should handle multiple word names correctly", () => {
    render(<Avatar name="João Pedro Silva Santos" />);
    const avatar = screen.getByText("JP");
    expect(avatar).toBeInTheDocument();
  });

  it("should handle empty string name", () => {
    render(<Avatar name="" />);
    const avatar = screen.getByText("?");
    expect(avatar).toBeInTheDocument();
  });

  it("should handle special characters in name", () => {
    render(<Avatar name="José-Maria" />);
    const avatar = screen.getByText("J");
    expect(avatar).toBeInTheDocument();
  });

  it("should handle names with hyphens as separate words", () => {
    render(<Avatar name="José Maria" />);
    const avatar = screen.getByText("JM");
    expect(avatar).toBeInTheDocument();
  });
});
