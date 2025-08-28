import React from "react";
import { theme } from "@s2mangas/core";

interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Title: React.FC<TextProps> = ({ children, style, className }) => (
  <h1
    style={{
      fontFamily: theme.font.bold,
      fontSize: theme.size.title,
      color: theme.color.text,
      margin: 0,
      lineHeight: 1.2,
      ...style,
    }}
    className={className}
  >
    {children}
  </h1>
);

export const HeadTitle: React.FC<TextProps> = ({
  children,
  style,
  className,
}) => (
  <h2
    style={{
      fontFamily: theme.font.bold,
      fontSize: theme.size.headtitle,
      color: theme.color.text,
      margin: 0,
      lineHeight: 1.3,
      ...style,
    }}
    className={className}
  >
    {children}
  </h2>
);

export const Label: React.FC<TextProps> = ({ children, style, className }) => (
  <span
    style={{
      fontFamily: theme.font.medium,
      fontSize: theme.size.label,
      color: theme.color.text,
      margin: 0,
      lineHeight: 1.4,
      ...style,
    }}
    className={className}
  >
    {children}
  </span>
);

export const SubLabel: React.FC<TextProps> = ({
  children,
  style,
  className,
}) => (
  <span
    style={{
      fontFamily: theme.font.medium,
      fontSize: theme.size.sublabel,
      color: theme.color.textGhost,
      margin: 0,
      lineHeight: 1.4,
      ...style,
    }}
    className={className}
  >
    {children}
  </span>
);

export const Description: React.FC<TextProps> = ({
  children,
  style,
  className,
}) => (
  <p
    style={{
      fontFamily: theme.font.book,
      fontSize: theme.size.small,
      color: theme.color.textGhost,
      margin: 0,
      lineHeight: 1.5,
      ...style,
    }}
    className={className}
  >
    {children}
  </p>
);

export const U: React.FC<TextProps> = ({ children, style, className }) => (
  <span
    style={{
      fontFamily: theme.font.book,
      fontSize: theme.size.small,
      color: theme.color.text,
      textDecoration: "underline",
      margin: 0,
      lineHeight: 1.5,
      ...style,
    }}
    className={className}
  >
    {children}
  </span>
);
