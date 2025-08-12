import React, { useState, useRef, useEffect } from "react";
import { theme } from '@s2mangas/core';

interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface SelectProps {
	options: SelectOption[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	error?: boolean;
	style?: React.CSSProperties;
	testID?: string;
	className?: string;
	label?: string;
	required?: boolean;
}

const Select: React.FC<SelectProps> = ({ 
	options, 
	value, 
	onChange, 
	placeholder = "Selecione uma opção",
	disabled = false,
	error = false,
	style,
	testID,
	className,
	label,
	required = false
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
		options.find(opt => opt.value === value) || null
	);
	const selectRef = useRef<HTMLDivElement>(null);

	// Fecha o select quando clica fora
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Atualiza a opção selecionada quando o value muda
	useEffect(() => {
		const option = options.find(opt => opt.value === value);
		setSelectedOption(option || null);
	}, [value, options]);

	const handleSelect = (option: SelectOption) => {
		if (option.disabled) return;
		
		setSelectedOption(option);
		setIsOpen(false);
		onChange?.(option.value);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (disabled) return;

		switch (event.key) {
			case 'Enter':
			case ' ':
				event.preventDefault();
				setIsOpen(!isOpen);
				break;
			case 'Escape':
				setIsOpen(false);
				break;
			case 'ArrowDown':
				event.preventDefault();
				if (!isOpen) {
					setIsOpen(true);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (isOpen) {
					setIsOpen(false);
				}
				break;
		}
	};

	// Estilos do contêiner
	const containerStyles: React.CSSProperties = {
		position: "relative",
		width: "100%",
		...style,
	};

	// Estilos do label
	const labelStyles: React.CSSProperties = {
		fontFamily: theme.font.medium,
		fontSize: theme.size.label,
		color: theme.color.text,
		marginBottom: "8px",
		display: "block",
	};

	// Estilos do select
	const selectStyles: React.CSSProperties = {
		width: "100%",
		minHeight: "48px",
		padding: "12px 16px",
		borderRadius: "12px",
		border: `2px solid ${error ? theme.color.destructive : disabled ? theme.color.ghost : theme.color.borderGhost}`,
		backgroundColor: disabled ? theme.color.ghost : theme.color.background,
		color: disabled ? theme.color.textGhost : theme.color.text,
		fontFamily: theme.font.medium,
		fontSize: theme.size.label,
		cursor: disabled ? "not-allowed" : "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		opacity: disabled ? 0.5 : 1,
		transition: "all 0.2s ease-in-out",
		...(isOpen && !disabled && {
			border: `2px solid ${theme.color.primary}`,
			boxShadow: `0 0 0 3px ${theme.color.primary}20`,
		}),
	};

	// Estilos do dropdown
	const dropdownStyles: React.CSSProperties = {
		position: "absolute",
		top: "100%",
		left: 0,
		right: 0,
		backgroundColor: theme.color.background,
		border: `2px solid ${theme.color.borderGhost}`,
		borderRadius: "12px",
		marginTop: "4px",
		maxHeight: "200px",
		overflowY: "auto",
		zIndex: 1000,
		boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
		display: isOpen ? "block" : "none",
	};

	// Estilos das opções
	const optionStyles: React.CSSProperties = {
		padding: "12px 16px",
		cursor: "pointer",
		transition: "background-color 0.2s ease-in-out",
		borderBottom: `1px solid ${theme.color.borderGhost}`,
	};

	const selectedOptionStyles: React.CSSProperties = {
		...optionStyles,
		backgroundColor: theme.color.primary + "20",
		color: theme.color.primary,
	};

	const disabledOptionStyles: React.CSSProperties = {
		...optionStyles,
		opacity: 0.5,
		cursor: "not-allowed",
	};

	return (
		<div 
			ref={selectRef}
			data-testid={testID}
			style={containerStyles}
			className={className}
		>
			{label && (
				<label style={labelStyles}>
					{label}
					{required && <span style={{ color: theme.color.destructive }}> *</span>}
				</label>
			)}
			
			<div
				style={selectStyles}
				onClick={() => !disabled && setIsOpen(!isOpen)}
				onKeyDown={handleKeyDown}
				tabIndex={disabled ? -1 : 0}
				role="combobox"
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				aria-label={label || "Select option"}
			>
				<span style={{ 
					color: selectedOption ? theme.color.text : theme.color.textGhost 
				}}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke={theme.color.textGhost}
					strokeWidth="2"
					style={{
						transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
						transition: "transform 0.2s ease-in-out",
					}}
				>
					<polyline points="6,9 12,15 18,9" />
				</svg>
			</div>

			<div style={dropdownStyles} role="listbox">
				{options.map((option) => (
					<div
						key={option.value}
						style={
							option.disabled
								? disabledOptionStyles
								: option.value === selectedOption?.value
								? selectedOptionStyles
								: optionStyles
						}
						onClick={() => handleSelect(option)}
						role="option"
						aria-selected={option.value === selectedOption?.value}
						aria-disabled={option.disabled}
					>
						{option.label}
					</div>
				))}
			</div>
		</div>
	);
};

export default Select;
