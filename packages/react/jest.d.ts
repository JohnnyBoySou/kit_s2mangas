/// <reference types="@testing-library/jest-dom" />

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveTextContent(text: string): R;
      toHaveStyle(style: object): R;
      toHaveClass(className: string): R;
      toBeChecked(): R;
      toBeDisabled(): R;
      toBeRequired(): R;
      toHaveValue(value: string): R;
      toHaveAttribute(attr: string, value?: string): R;
    }
  }
}

export {};
