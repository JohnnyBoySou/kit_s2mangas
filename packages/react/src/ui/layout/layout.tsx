import React from "react";
import { theme } from "@s2mangas/core";

interface LayoutProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

interface ColumnProps extends LayoutProps {
  gap?: number;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
}

interface RowProps extends LayoutProps {
  gap?: number;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
}

interface ScrollProps extends LayoutProps {
  gap?: number;
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  height?: string | number;
  maxHeight?: string | number;
}

export const Column: React.FC<ColumnProps> = ({
  children,
  style,
  className,
  gap = 0,
  alignItems = "flex-start",
  justifyContent = "flex-start",
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems,
      justifyContent,
      gap: `${gap}px`,
      ...style,
    }}
    className={className}
  >
    {children}
  </div>
);

export const Row: React.FC<RowProps> = ({
  children,
  style,
  className,
  gap = 0,
  alignItems = "center",
  justifyContent = "flex-start",
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems,
      justifyContent,
      gap: `${gap}px`,
      ...style,
    }}
    className={className}
  >
    {children}
  </div>
);

export const Main: React.FC<LayoutProps> = ({ children, style, className }) => (
  <main
    style={{
      flex: 1,
      backgroundColor: theme.color.background,
      ...style,
    }}
    className={className}
  >
    {children}
  </main>
);

export const ScrollHorizontal: React.FC<ScrollProps> = ({
  children,
  style,
  className,
  gap = 0,
  alignItems = "center",
  justifyContent = "flex-start",
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems,
      justifyContent,
      gap: `${gap}px`,
      overflowX: "auto",
      overflowY: "hidden",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      ...style,
    }}
    className={className}
  >
    {children}
  </div>
);

export const ScrollVertical: React.FC<ScrollProps> = ({
  children,
  style,
  className,
  gap = 0,
  alignItems = "flex-start",
  justifyContent = "flex-start",
  height,
  maxHeight,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems,
      justifyContent,
      gap: `${gap}px`,
      overflowY: "auto",
      overflowX: "hidden",
      height,
      maxHeight,
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      ...style,
    }}
    className={className}
  >
    {children}
  </div>
);
