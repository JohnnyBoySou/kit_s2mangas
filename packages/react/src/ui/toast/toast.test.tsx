import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Toast from './toast';

describe('Toast Component', () => {
  it('renders nothing when no success or error message', () => {
    render(<Toast />);
    
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders success message', () => {
    const successMessage = 'Operation completed successfully';
    render(<Toast success={successMessage} />);
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(successMessage)).toBeInTheDocument();
  });

  it('renders error message', () => {
    const errorMessage = 'Something went wrong';
    render(<Toast error={errorMessage} />);
    
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('prioritizes success message when both are provided', () => {
    const successMessage = 'Success message';
    const errorMessage = 'Error message';
    render(<Toast success={successMessage} error={errorMessage} />);
    
    expect(screen.getByText(successMessage)).toBeInTheDocument();
    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
  });

  it('renders with success styling', () => {
    const successMessage = 'Success message';
    render(<Toast success={successMessage} />);
    
    const toast = screen.getByRole('alert');
    expect(toast).toHaveStyle({ backgroundColor: '#00c48c' });
  });

  it('renders with error styling', () => {
    const errorMessage = 'Error message';
    render(<Toast error={errorMessage} />);
    
    const toast = screen.getByRole('alert');
    expect(toast).toHaveStyle({ backgroundColor: '#ff3d71' });
  });

  it('renders with empty success message', () => {
    render(<Toast success="" />);
    
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders with empty error message', () => {
    render(<Toast error="" />);
    
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('renders long message text', () => {
    const longMessage = 'This is a very long message that should be displayed properly within the component boundaries and should not cause any layout issues';
    render(<Toast success={longMessage} />);
    
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });

  it('renders with special characters in message', () => {
    const specialMessage = 'Message with special chars: !@#$%^&*()';
    render(<Toast success={specialMessage} />);
    
    expect(screen.getByText(specialMessage)).toBeInTheDocument();
  });

  it('renders with custom testID', () => {
    render(<Toast success="Test message" testID="test-toast" />);
    
    expect(screen.getByTestId('test-toast')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    render(<Toast success="Test message" className="custom-toast" />);
    
    expect(document.querySelector('.custom-toast')).toBeInTheDocument();
  });

  it('renders with custom style', () => {
    const customStyle = { border: '2px solid red' };
    render(<Toast success="Test message" style={customStyle} />);
    
    const toast = screen.getByRole('alert');
    expect(toast).toHaveStyle(customStyle);
  });

  it('shows check icon for success message', () => {
    render(<Toast success="Success message" />);
    
    const checkIcon = screen.getByText('✓');
    expect(checkIcon).toBeInTheDocument();
  });

  it('shows X icon for error message', () => {
    render(<Toast error="Error message" />);
    
    const xIcon = screen.getByText('✕');
    expect(xIcon).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Toast success="Test message" />);
    
    const toast = screen.getByRole('alert');
    expect(toast).toHaveAttribute('aria-live', 'assertive');
  });
});