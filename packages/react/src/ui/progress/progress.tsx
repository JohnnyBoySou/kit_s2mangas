import React from 'react';

export interface ProgressProps {
	/** Valor atual do progresso (0-100) */
	value: number;
	/** Valor máximo do progresso */
	max?: number;
	/** Tamanho da barra de progresso */
	size?: 'small' | 'medium' | 'large';
	/** Variante visual */
	variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
	/** Se deve mostrar o texto do progresso */
	showText?: boolean;
	/** Texto customizado do progresso */
	text?: string;
	/** Se deve mostrar a porcentagem */
	showPercentage?: boolean;
	/** Se a barra é indeterminada (loading) */
	indeterminate?: boolean;
	/** Se a barra tem bordas arredondadas */
	rounded?: boolean;
	/** Se a barra tem animação */
	animated?: boolean;
	/** ID para testes */
	testID?: string;
	/** Classe CSS customizada */
	className?: string;
	/** Estilos inline customizados */
	style?: React.CSSProperties;
}

const Progress: React.FC<ProgressProps> = ({
	value,
	max = 100,
	size = 'medium',
	variant = 'default',
	showText = false,
	text,
	showPercentage = false,
	indeterminate = false,
	rounded = true,
	animated = false,
	testID,
	className,
	style,
}) => {
	// Normalizar o valor entre 0 e 100
	const normalizedValue = Math.min(Math.max((value / max) * 100, 0), 100);
	const percentage = Math.round(normalizedValue);

	const getSizeStyles = () => {
		switch (size) {
			case 'small':
				return {
					height: '4px',
					fontSize: '12px',
				};
			case 'large':
				return {
					height: '12px',
					fontSize: '16px',
				};
			default:
				return {
					height: '8px',
					fontSize: '14px',
				};
		}
	};

	const getVariantStyles = () => {
		switch (variant) {
			case 'success':
				return {
					backgroundColor: '#28a745',
				};
			case 'warning':
				return {
					backgroundColor: '#ffc107',
				};
			case 'error':
				return {
					backgroundColor: '#dc3545',
				};
			case 'info':
				return {
					backgroundColor: '#17a2b8',
				};
			default:
				return {
					backgroundColor: '#007bff',
				};
		}
	};

	const sizeStyles = getSizeStyles();
	const variantStyles = getVariantStyles();

	const containerStyles: React.CSSProperties = {
		width: '100%',
		backgroundColor: '#e9ecef',
		borderRadius: rounded ? '4px' : '0',
		overflow: 'hidden',
		position: 'relative',
		...sizeStyles,
		...style,
	};

	const barStyles: React.CSSProperties = {
		height: '100%',
		transition: indeterminate ? 'none' : 'width 0.3s ease',
		width: indeterminate ? '100%' : `${normalizedValue}%`,
		...variantStyles,
	};

	if (indeterminate) {
		barStyles.background = `linear-gradient(
			90deg,
			transparent 0%,
			${variantStyles.backgroundColor} 50%,
			transparent 100%
		)`;
		barStyles.backgroundSize = '200% 100%';
		barStyles.animation = 'progress-indeterminate 2s infinite linear';
	}

	if (animated && !indeterminate) {
		barStyles.backgroundImage = `linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.15) 25%,
			transparent 25%,
			transparent 50%,
			rgba(255, 255, 255, 0.15) 50%,
			rgba(255, 255, 255, 0.15) 75%,
			transparent 75%,
			transparent
		)`;
		barStyles.backgroundSize = '1rem 1rem';
		barStyles.animation = 'progress-stripes 1s linear infinite';
	}

	// Adicionar estilos de animação ao head se não existirem
	React.useEffect(() => {
		const styleId = 'progress-animations';
		if (!document.getElementById(styleId)) {
			const style = document.createElement('style');
			style.id = styleId;
			style.textContent = `
				@keyframes progress-indeterminate {
					0% { background-position: 200% 0; }
					100% { background-position: -200% 0; }
				}
				@keyframes progress-stripes {
					0% { background-position: 0 0; }
					100% { background-position: 1rem 0; }
				}
			`;
			document.head.appendChild(style);
		}
	}, []);

	const textContent = text || (showPercentage ? `${percentage}%` : '');

	return (
		<div className="progress-container">
			<div
				data-testid={testID}
				className={`progress ${className || ''}`}
				style={containerStyles}
				role="progressbar"
				aria-valuenow={indeterminate ? undefined : value}
				aria-valuemin={0}
				aria-valuemax={max}
				aria-label={text || `${percentage}% complete`}
			>
				<div
					className="progress-bar"
					style={barStyles}
					data-testid={testID ? `${testID}-bar` : undefined}
				/>
			</div>
			
			{(showText || showPercentage || text) && (
				<div
					className="progress-text"
					style={{
						marginTop: '4px',
						fontSize: sizeStyles.fontSize,
						color: '#495057',
						textAlign: 'center',
					}}
					data-testid={testID ? `${testID}-text` : undefined}
				>
					{textContent}
				</div>
			)}
		</div>
	);
};

export default Progress;