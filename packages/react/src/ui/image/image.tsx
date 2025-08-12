import React from "react";
import { theme } from '@s2mangas/core';

interface ImageProps {
	src: string;
	alt?: string;
	width?: number | string;
	height?: number | string;
	objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
	borderRadius?: number | string;
	style?: React.CSSProperties;
	testID?: string;
	className?: string;
	lazy?: boolean;
	fallback?: string;
	onError?: () => void;
	onLoad?: () => void;
	onClick?: () => void;
}

const Image: React.FC<ImageProps> = ({ 
	src, 
	alt, 
	width, 
	height, 
	objectFit = "cover",
	borderRadius,
	style, 
	testID,
	className,
	lazy = false,
	fallback,
	onError,
	onLoad,
	onClick
}) => {
	const [imageError, setImageError] = React.useState(false);
	const [imageLoaded, setImageLoaded] = React.useState(false);
	const [currentSrc, setCurrentSrc] = React.useState(src);

	// Atualiza a fonte quando src muda
	React.useEffect(() => {
		setCurrentSrc(src);
		setImageError(false);
		setImageLoaded(false);
	}, [src]);

	// Estilos do contêiner
	const containerStyles: React.CSSProperties = {
		position: "relative",
		overflow: "hidden",
		...(width && { width: typeof width === 'number' ? `${width}px` : width }),
		...(height && { height: typeof height === 'number' ? `${height}px` : height }),
		...(borderRadius && { 
			borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius 
		}),
		...(onClick && { cursor: "pointer" }),
		...style,
	};

	// Estilos da imagem
	const imageStyles: React.CSSProperties = {
		width: "100%",
		height: "100%",
		objectFit,
		display: imageLoaded && !imageError ? "block" : "none",
		transition: "opacity 0.3s ease-in-out",
	};

	// Estilos do fallback
	const fallbackStyles: React.CSSProperties = {
		width: "100%",
		height: "100%",
		backgroundColor: theme.color.muted,
		alignItems: "center",
		justifyContent: "center",
		display: (!currentSrc || imageError || !imageLoaded) ? "flex" : "none",
	};

	// Estilos do placeholder de carregamento
	const loadingStyles: React.CSSProperties = {
		width: "100%",
		height: "100%",
		backgroundColor: theme.color.ghost,
		alignItems: "center",
		justifyContent: "center",
		display: (currentSrc && !imageError && !imageLoaded) ? "flex" : "none",
	};

	const handleImageError = () => {
		setImageError(true);
		if (fallback && currentSrc !== fallback) {
			setCurrentSrc(fallback);
			setImageError(false);
		} else {
			onError?.();
		}
	};

	const handleImageLoad = () => {
		setImageLoaded(true);
		onLoad?.();
	};

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div 
			data-testid={testID}
			style={containerStyles}
			className={className}
			onClick={handleClick}
		>
			{/* Placeholder de carregamento */}
			<div style={loadingStyles}>
				<div style={{
					width: "24px",
					height: "24px",
					border: `2px solid ${theme.color.muted}`,
					borderTop: `2px solid ${theme.color.primary}`,
					borderRadius: "50%",
					animation: "spin 1s linear infinite"
				}} />
			</div>

			{/* Imagem principal */}
			{currentSrc && (
				<img
					src={currentSrc}
					alt={alt || "Image"}
					style={imageStyles}
					loading={lazy ? "lazy" : "eager"}
					onError={handleImageError}
					onLoad={handleImageLoad}
				/>
			)}

			{/* Fallback */}
			<div style={fallbackStyles}>
				<svg 
					width="48" 
					height="48" 
					viewBox="0 0 24 24" 
					fill="none" 
					stroke={theme.color.textGhost}
					strokeWidth="1.5"
				>
					<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
					<circle cx="8.5" cy="8.5" r="1.5" />
					<polyline points="21,15 16,10 5,21" />
				</svg>
			</div>
		</div>
	);
};

export default Image;
