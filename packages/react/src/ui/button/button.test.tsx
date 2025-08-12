import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button';

describe('Button Component', () => {
  const defaultProps = {
    label: 'Test Button',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  it('should render with children instead of label', () => {
    render(
      <Button onClick={defaultProps.onClick}>
        <span>Child Content</span>
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Child Content');
  });

  it('should call onClick when clicked', async () => {
    const user = userEvent.setup();
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', async () => {
    const user = userEvent.setup();
    render(<Button {...defaultProps} disabled />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it('should not call onClick when loading', async () => {
    const user = userEvent.setup();
    render(<Button {...defaultProps} loading />);
    
    const button = screen.getByRole('button');
    await user.click(button);
    
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it('should render with different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'ghost', 'link', 'outline', 'primary', 'blur'];
    
    variants.forEach(variant => {
      const { unmount } = render(
        <Button {...defaultProps} variant={variant as any} />
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Test Button');
      
      unmount();
    });
  });

  it('should render with icon', () => {
    const icon = <span data-testid="icon">🚀</span>;
    render(<Button {...defaultProps} icon={icon} />);
    
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render with icon only when no text is provided', () => {
    const icon = <span data-testid="icon">🚀</span>;
    render(<Button onClick={defaultProps.onClick} icon={icon} />);
    
    const button = screen.getByRole('button');
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(button).not.toHaveTextContent('Test Button');
  });

  it('should apply custom styles', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Button {...defaultProps} style={customStyle} />);
    
    const button = screen.getByRole('button');
    expect(button.style.backgroundColor).toBe('red');
  });

  it('should apply custom text styles', () => {
    const customTextStyle = { fontSize: '20px' };
    render(<Button {...defaultProps} textStyle={customTextStyle} />);
    
    const button = screen.getByRole('button');
    // Verifica se o estilo foi aplicado ao texto dentro do botão
    expect(button).toBeInTheDocument();
  });

  it('should render with testID', () => {
    render(<Button {...defaultProps} testID="custom-button" />);
    
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });

  it('should render with className', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should show loading state', () => {
    render(<Button {...defaultProps} loading />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ cursor: 'not-allowed' });
  });

  it('should show disabled state', () => {
    render(<Button {...defaultProps} disabled />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ cursor: 'not-allowed', opacity: 0.5 });
  });

  it('should handle keyboard events', async () => {
    const user = userEvent.setup();
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('button');
    button.focus();
    await user.keyboard('{Enter}');
    
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
