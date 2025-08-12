import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tooltip from "./tooltip";

// Mock do componente Icon
jest.mock("../icon/icon", () => ({
  Icon: ({ name, ...props }: any) => (
    <span data-testid={`icon-${name}`} {...props} />
  ),
}));

describe("Tooltip", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders trigger element", () => {
    render(
      <Tooltip content="Tooltip content">
        <button>Trigger</button>
      </Tooltip>,
    );

    expect(screen.getByText("Trigger")).toBeInTheDocument();
  });

  it("shows tooltip on hover", async () => {
    render(
      <Tooltip content="Tooltip content" showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });
  });

  it("hides tooltip on mouse leave", async () => {
    render(
      <Tooltip content="Tooltip content" showDelay={0} hideDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    fireEvent.mouseLeave(trigger);

    await waitFor(() => {
      expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
    });
  });

  it("shows tooltip on focus", async () => {
    render(
      <Tooltip content="Tooltip content" trigger="focus" showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.focus(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });
  });

  it("hides tooltip on blur", async () => {
    render(
      <Tooltip
        content="Tooltip content"
        trigger="focus"
        showDelay={0}
        hideDelay={0}
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.focus(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    fireEvent.blur(trigger);

    await waitFor(() => {
      expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
    });
  });

  it("shows tooltip on click", async () => {
    render(
      <Tooltip content="Tooltip content" trigger="click" showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });
  });

  it("toggles tooltip on click", async () => {
    render(
      <Tooltip
        content="Tooltip content"
        trigger="click"
        showDelay={0}
        hideDelay={0}
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");

    // First click shows tooltip
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    // Second click hides tooltip
    fireEvent.click(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
    });
  });

  it("does not show tooltip when disabled", async () => {
    render(
      <Tooltip content="Tooltip content" disabled showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    // Fast-forward time to ensure tooltip doesn't appear
    act(() => {
      jest.advanceTimersByTime(50);
    });
    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
  });

  it("applies show delay", async () => {
    render(
      <Tooltip content="Tooltip content" showDelay={100}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    // Should not be visible immediately
    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });
  });

  it("applies hide delay", async () => {
    render(
      <Tooltip content="Tooltip content" hideDelay={100} showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    fireEvent.mouseLeave(trigger);

    // Should still be visible
    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    // Fast-forward time
    act(() => {
      jest.advanceTimersByTime(100);
    });

    await waitFor(() => {
      expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
    });
  });

  it("renders with different positions", async () => {
    const positions = ["top", "bottom", "left", "right"] as const;

    for (const position of positions) {
      const { unmount } = render(
        <Tooltip
          content="Tooltip content"
          position={position}
          showDelay={0}
          testID={`tooltip-${position}`}
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Trigger");
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.getByTestId(`tooltip-${position}`);
        expect(tooltip).toHaveClass(`tooltip-${position}`);
      });

      unmount();
    }
  });

  it("renders with different sizes", async () => {
    const sizes = ["small", "medium", "large"] as const;

    for (const size of sizes) {
      const { unmount } = render(
        <Tooltip
          content="Tooltip content"
          size={size}
          showDelay={0}
          testID={`tooltip-${size}`}
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Trigger");
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.getByTestId(`tooltip-${size}`);
        expect(tooltip).toHaveClass(`tooltip-${size}`);
      });

      unmount();
    }
  });

  it("renders with different variants", async () => {
    const variants = ["dark", "light", "info"] as const;

    for (const variant of variants) {
      const { unmount } = render(
        <Tooltip
          content="Tooltip content"
          variant={variant}
          showDelay={0}
          testID={`tooltip-${variant}`}
        >
          <button>Trigger</button>
        </Tooltip>,
      );

      const trigger = screen.getByText("Trigger");
      fireEvent.mouseEnter(trigger);

      await waitFor(() => {
        const tooltip = screen.getByTestId(`tooltip-${variant}`);
        expect(tooltip).toHaveClass(`tooltip-${variant}`);
      });

      unmount();
    }
  });

  it("renders arrow when showArrow is true", async () => {
    render(
      <Tooltip content="Tooltip content" showArrow showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByTestId("tooltip-arrow")).toBeInTheDocument();
    });
  });

  it("does not render arrow when showArrow is false", async () => {
    render(
      <Tooltip content="Tooltip content" showArrow={false} showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    expect(screen.queryByTestId("tooltip-arrow")).not.toBeInTheDocument();
  });

  it("applies maxWidth style", async () => {
    render(
      <Tooltip
        content="Tooltip content"
        maxWidth={200}
        showDelay={0}
        testID="tooltip"
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = screen.getByTestId("tooltip");
      expect(tooltip).toHaveAttribute("style");
      expect(tooltip.getAttribute("style")).toContain("200px");
    });
  });

  it("applies testID", async () => {
    render(
      <Tooltip
        content="Tooltip content"
        testID="custom-tooltip-id"
        showDelay={0}
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByTestId("custom-tooltip-id")).toBeInTheDocument();
    });
  });

  it("applies className", async () => {
    render(
      <Tooltip
        content="Tooltip content"
        className="custom-class"
        showDelay={0}
        testID="classed-tooltip"
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = screen.getByTestId("classed-tooltip");
      expect(tooltip).toHaveClass("custom-class");
    });
  });

  it("applies style", async () => {
    render(
      <Tooltip
        content="Tooltip content"
        style={{ border: "2px solid blue" }}
        showDelay={0}
        testID="styled-tooltip"
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      const tooltip = screen.getByTestId("styled-tooltip");
      expect(tooltip).toHaveAttribute("style");
      expect(tooltip.getAttribute("style")).toContain("blue");
    });
  });

  it("renders JSX content", async () => {
    render(
      <Tooltip
        content={
          <div>
            JSX <strong>content</strong>
          </div>
        }
        showDelay={0}
      >
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("JSX")).toBeInTheDocument();
      expect(screen.getByText("content")).toBeInTheDocument();
    });
  });

  it("cancels show timeout when hiding", async () => {
    render(
      <Tooltip content="Tooltip content" showDelay={100}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    // Fast-forward time
    jest.advanceTimersByTime(100);

    expect(screen.queryByText("Tooltip content")).not.toBeInTheDocument();
  });

  it("cancels hide timeout when showing", async () => {
    render(
      <Tooltip content="Tooltip content" hideDelay={100} showDelay={0}>
        <button>Trigger</button>
      </Tooltip>,
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("Tooltip content")).toBeInTheDocument();
    });

    fireEvent.mouseLeave(trigger);
    fireEvent.mouseEnter(trigger);

    // Fast-forward time
    jest.advanceTimersByTime(100);

    expect(screen.getByText("Tooltip content")).toBeInTheDocument();
  });
});
