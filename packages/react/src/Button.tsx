import * as React from "react";
import { tokens } from "@s2mangas/core";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { "aria-label"?: string };

export const Button: React.FC<Props> = ({ children, disabled, ...rest }) => (
  <button 
    {...rest} 
    disabled={disabled} 
    style={{ 
      background: tokens.colors.primary, 
      color: tokens.colors.contrastText, 
      border: 0, 
      padding: "10px 14px", 
      borderRadius: 8, 
      cursor: disabled ? "not-allowed" : "pointer" 
    }} 
    aria-disabled={disabled || undefined}
  >
    {children}
  </button>
);
