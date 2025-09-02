import React from 'react'
import { X } from 'lucide-react'
import { theme } from '@s2mangas/core'

export interface ChipProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  removable?: boolean
  onRemove?: () => void
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ 
    children, 
    variant = 'default', 
    size = 'md', 
    removable = false, 
    onRemove, 
    className, 
    disabled = false,
    style,
    ...props 
  }, ref) => {
    
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: theme.color.primary + '20',
            color: theme.color.primary,
          }
        case 'secondary':
          return {
            backgroundColor: theme.color.secondary + '20',
            color: theme.color.secondary,
          }
        case 'success':
          return {
            backgroundColor: '#10b98120',
            color: '#059669',
          }
        case 'warning':
          return {
            backgroundColor: '#f59e0b20',
            color: '#d97706',
          }
        case 'error':
          return {
            backgroundColor: '#ef444420',
            color: '#dc2626',
          }
        default:
          return {
            backgroundColor: theme.color.background,
            color: theme.color.text,
          }
      }
    }

    const getSizeStyles = () => {
      switch (size) {
        case 'sm':
          return {
            padding: '4px 8px',
            fontSize: '12px',
            gap: '4px',
          }
        case 'lg':
          return {
            padding: '8px 16px',
            fontSize: '16px',
            gap: '6px',
          }
        default:
          return {
            padding: '6px 12px',
            fontSize: theme.size.label,
            gap: '4px',
          }
      }
    }

    const getRemoveButtonSize = () => {
      switch (size) {
        case 'sm':
          return { width: '12px', height: '12px' }
        case 'lg':
          return { width: '20px', height: '20px' }
        default:
          return { width: '16px', height: '16px' }
      }
    }

    const chipStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: '9999px',
      fontFamily: theme.font.book,
      fontWeight: '500',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'default',
      opacity: disabled ? 0.5 : 1,
      transition: 'all 0.2s ease-in-out',
      outline: 'none',
      ...getSizeStyles(),
      ...getVariantStyles(),
      ...style,
    }

    const removeButtonStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '4px',
      padding: '2px',
      border: 'none',
      borderRadius: '50%',
      background: 'transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.2s ease-in-out',
      outline: 'none',
      ...getRemoveButtonSize(),
    }

    const handleRemoveClick = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (onRemove && !disabled) {
        onRemove()
      }
    }

    const handleRemoveMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
      }
    }

    const handleRemoveMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.style.backgroundColor = 'transparent'
    }

    return (
      <div
        ref={ref}
        style={chipStyle}
        className={className}
        {...props}
      >
        <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {children}
        </span>
        {removable && !disabled && (
          <button
            type="button"
            onClick={handleRemoveClick}
            onMouseEnter={handleRemoveMouseEnter}
            onMouseLeave={handleRemoveMouseLeave}
            style={removeButtonStyle}
            aria-label="Remover"
          >
            <X style={{ width: '100%', height: '100%' }} />
          </button>
        )}
      </div>
    )
  }
)

Chip.displayName = 'Chip'

export default Chip
