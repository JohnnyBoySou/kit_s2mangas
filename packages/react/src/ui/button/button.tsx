import React from "react";
import { theme } from '@s2mangas/core';

interface ButtonProps {
	label?: string;
	onClick?: () => void;
	variant?: "default" | "secondary" | "destructive" | "ghost" | "link" | "outline" | "primary" | "blur";
	style?: React.CSSProperties;
	textStyle?: React.CSSProperties;
	loading?: boolean;
	icon?: React.ReactNode;
	disabled?: boolean;
	testID?: string;
	children?: React.ReactNode;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
	label, 
	onClick, 
	variant = "default", 
	style, 
	textStyle, 
	loading = false, 
	icon, 
	disabled, 
	testID,
	children,
	className
}) => {
	const displayText = label || children;

	// Estilos do contêiner
	const containerStyles: React.CSSProperties = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "18px",
		height: "48px",
		paddingLeft: "16px",
		paddingRight: "16px",
		border: "none",
		cursor: disabled || loading ? "not-allowed" : "pointer",
		opacity: disabled ? 0.5 : 1,
		...(variant === "default" && { backgroundColor: theme.color.background }),
		...(variant === "secondary" && { backgroundColor: theme.color.muted }),
		...(variant === "destructive" && { backgroundColor: theme.color.destructive }),
		...(variant === "ghost" && { 
			backgroundColor: theme.color.ghost, 
			borderColor: theme.color.borderGhost, 
			borderWidth: "1px",
			borderStyle: "solid"
		}),
		...(variant === "link" && { backgroundColor: "transparent" }),
		...(variant === "outline" && { 
			backgroundColor: "transparent", 
			borderWidth: "1px", 
			borderColor: theme.color.borderPrimary,
			borderStyle: "solid"
		}),
		...(variant === "primary" && { backgroundColor: theme.color.primary }),
		...(variant === "blur" && { 
			borderColor: theme.color.textGhost + "20", 
			borderWidth: "1px",
			borderStyle: "solid"
		}),
		...(icon && !displayText && { 
			width: "48px", 
			paddingLeft: "0px", 
			paddingRight: "0px", 
			justifyContent: "center", 
			alignItems: "center" 
		}),
		...style,
	};

	// Estilos do texto
	const textStyles: React.CSSProperties = {
		textAlign: "center",
		fontFamily: theme.font.bold,
		color: variant === "blur" ? theme.color.textGhost : 
		       variant === "default" ? theme.color.text : 
		       variant === "secondary" ? theme.color.text : 
		       variant === "destructive" ? theme.color.textGhost : 
		       variant === "ghost" ? theme.color.textGhost : 
		       variant === "link" ? theme.color.link : 
		       variant === "outline" ? theme.color.textGhost : 
		       variant === "primary" ? theme.color.textGhost : 
		       theme.color.text,
		fontSize: theme.size.label,
		letterSpacing: "-0.2px",
		margin: 0,
		...textStyle,
	};

	// Renderiza o botão
	return (
		<button 
			data-testid={testID} 
			onClick={onClick} 
			disabled={loading || disabled} 
			style={containerStyles}
			className={className}
		>
			{loading ? (
				<div style={{ 
					width: "18px", 
					height: "18px", 
					border: `2px solid ${theme.color.text}`, 
					borderTop: `2px solid transparent`, 
					borderRadius: "50%", 
					animation: "spin 1s linear infinite" 
				}} />
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						...(icon && !displayText && { width: "100%", height: "100%" }),
					}}
				>
					{icon ? (
						<div
							style={{
								marginRight: displayText ? "6px" : "-2px",
								...(icon && !displayText && { 
									width: "100%", 
									height: "100%", 
									justifyContent: "center", 
									alignItems: "center" 
								}),
							}}
						>
							{icon}
						</div>
					) : null}
					{displayText ? (
						<span style={textStyles}>
							{displayText}
						</span>
					) : null}
				</div>
			)}
		</button>
	);
};

export default Button;
