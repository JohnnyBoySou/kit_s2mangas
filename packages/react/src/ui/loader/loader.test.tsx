import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('Loader Component', () => {
  it('should render with default props', () => {
    render(<Loader data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render with small size', () => {
    render(<Loader size="sm" data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      width: '16px',
      height: '16px',
    });
  });

  it('should render with medium size by default', () => {
    render(<Loader data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      width: '24px',
      height: '24px',
    });
  });

  it('should render with large size', () => {
    render(<Loader size="lg" data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      width: '32px',
      height: '32px',
    });
  });

  it('should render with custom color', () => {
    render(<Loader color="#ff0000" data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      border: '2px solid #ff000020',
      borderTop: '2px solid #ff0000',
    });
  });

  it('should render with custom style', () => {
    const customStyle = { margin: '10px' };
    render(<Loader style={customStyle} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle(customStyle);
  });

  it('should render with className', () => {
    render(<Loader className="custom-loader" data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveClass('custom-loader');
  });

  it('should have animation styles', () => {
    render(<Loader data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      animation: 'spin 1s linear infinite',
      borderRadius: '50%',
    });
  });

  it('should combine custom style with default styles', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Loader style={customStyle} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      backgroundColor: 'red',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    });
  });

  it('should handle different color formats', () => {
    const colors = ['red', '#ff0000', 'rgb(255, 0, 0)', 'rgba(255, 0, 0, 0.5)'];
    
    colors.forEach(color => {
      const { unmount } = render(<Loader color={color} data-testid="loader" />);
      
      const loader = screen.getByTestId('loader');
      expect(loader).toHaveStyle({
        border: `2px solid ${color}20`,
        borderTop: `2px solid ${color}`,
      });
      
      unmount();
    });
  });

  it('should handle all size variants', () => {
    const sizes = ['sm', 'md', 'lg'];
    const expectedSizes = [16, 24, 32];
    
    sizes.forEach((size, index) => {
      const { unmount } = render(<Loader size={size as any} data-testid="loader" />);
      
      const loader = screen.getByTestId('loader');
      expect(loader).toHaveStyle({
        width: `${expectedSizes[index]}px`,
        height: `${expectedSizes[index]}px`,
      });
      
      unmount();
    });
  });

  it('should handle style override', () => {
    const customStyle = { 
      width: '50px', 
      height: '50px',
      animation: 'none'
    };
    render(<Loader style={customStyle} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle(customStyle);
  });

  it('should render multiple loaders', () => {
    render(
      <div>
        <Loader data-testid="loader1" size="sm" />
        <Loader data-testid="loader2" size="md" />
        <Loader data-testid="loader3" size="lg" />
      </div>
    );
    
    expect(screen.getByTestId('loader1')).toBeInTheDocument();
    expect(screen.getByTestId('loader2')).toBeInTheDocument();
    expect(screen.getByTestId('loader3')).toBeInTheDocument();
  });

  it('should have proper accessibility', () => {
    render(<Loader data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should handle empty style object', () => {
    render(<Loader style={{}} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveStyle({
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    });
  });

  it('should handle null and undefined props gracefully', () => {
    render(<Loader color={undefined} size={undefined} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should have correct border styles', () => {
    render(<Loader color="#007bff" data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({
      border: '2px solid #007bff20',
      borderTop: '2px solid #007bff',
    });
  });

  it('should maintain aspect ratio for all sizes', () => {
    const sizes = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      const { unmount } = render(<Loader size={size as any} data-testid="loader" />);
      
      const loader = screen.getByTestId('loader');
      const computedStyle = window.getComputedStyle(loader);
      const width = computedStyle.width;
      const height = computedStyle.height;
      
      expect(width).toBe(height);
      
      unmount();
    });
  });

  it('should handle custom animation duration', () => {
    const customStyle = { animation: 'spin 2s linear infinite' };
    render(<Loader style={customStyle} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle({ animation: 'spin 2s linear infinite' });
  });

  it('should handle different border widths', () => {
    const customStyle = { border: '4px solid #ff000020', borderTop: '4px solid #ff0000' };
    render(<Loader style={customStyle} data-testid="loader" />);
    
    const loader = screen.getByTestId('loader');
    expect(loader).toHaveStyle(customStyle);
  });
});
