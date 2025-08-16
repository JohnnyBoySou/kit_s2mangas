import React from "react";
import { Text, Pressable, ViewStyle, TextStyle, ActivityIndicator, View } from "react-native";
import { theme } from '@s2mangas/core';

export interface ButtonProps {
	label?: string;
	onPress?: () => void;
	variant?: "default" | "secondary" | "destructive" | "ghost" | "link" | "outline" | "primary" | "blur";
	style?: ViewStyle;
	textStyle?: TextStyle;
	loading?: boolean;
	icon?: React.ReactNode;
	disabled?: boolean;
	testID?: string;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
	label, 
	onPress, 
	variant = "default", 
	style, 
	textStyle, 
	loading = false, 
	icon, 
	disabled, 
	testID,
	children 
}) => {
	const displayText = label || children;

	// Função para converter ReactNode para string de forma segura
	const getAccessibilityLabel = (text: React.ReactNode): string => {
		if (typeof text === 'string') {
			return text;
		}
		if (typeof text === 'number') {
			return text.toString();
		}
		if (React.isValidElement(text)) {
			// Se for um elemento React, tenta extrair o texto dos children
			const children = text.props?.children;
			if (typeof children === 'string') {
				return children;
			}
			if (typeof children === 'number') {
				return children.toString();
			}
		}
		// Fallback para casos complexos
		return 'Button';
	};

	// Estilos do contêiner
	const containerStyles: ViewStyle = {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 18,
		height: 48,
		paddingHorizontal: 16,
		...(variant === "default" && { backgroundColor: theme.color.background }),
		...(variant === "secondary" && { backgroundColor: theme.color.muted }),
		...(variant === "destructive" && { backgroundColor: theme.color.destructive }),
		...(variant === "ghost" && { backgroundColor: theme.color.ghost, borderColor: theme.color.borderGhost, borderTopLeftColor: theme.color.ghost, borderBottomColor: theme.color.ghost, borderWidth: 1 }),
		...(variant === "link" && { backgroundColor: "transparent" }),
		...(variant === "outline" && { backgroundColor: "transparent", borderWidth: 1, borderColor: theme.color.borderPrimary }),
		...(variant === "primary" && { backgroundColor: theme.color.primary }),
		...(variant === "blur" && { borderColor: theme.color.textGhost + "20", borderTopLeftColor: theme.color.textGhost + "20", borderBottomColor: theme.color.textGhost + "20", borderWidth: 1 }),
		...(icon && !displayText && { width: 48, paddingHorizontal: 0, justifyContent: "center", alignItems: "center" }),
		...style,
	};

	// Estilos do texto
	const textStyles: TextStyle = {
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
		letterSpacing: -0.2,
		...textStyle,
	};

	// Renderiza o botão
	return (
		<Pressable 
			testID={testID} 
			onPress={onPress} 
			accessible={true} 
			accessibilityLabel={getAccessibilityLabel(displayText)} 
			accessibilityRole="button" 
			disabled={loading || disabled} 
			style={[containerStyles, { opacity: disabled ? 0.5 : 1 }]}
		>
			{loading ? (
				<ActivityIndicator color={theme.color.text} size={18} />
			) : (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						...(icon && !displayText && { width: "100%", height: "100%" }),
					}}
				>
					{icon ? (
						<View
							style={{
								marginRight: displayText ? 6 : -2,
								...(icon && !displayText && { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }),
							}}
						>
							{icon}
						</View>
					) : null}
					{displayText ? (
						<Text style={textStyles}>
							{displayText}
						</Text>
					) : null}
				</View>
			)}
		</Pressable>
	);
};

export default Button;
