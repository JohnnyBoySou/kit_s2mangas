import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './card';

describe('Card Component', () => {
  const defaultProps = {
    children: 'Card Content',
  };

  it('should render with default props', () => {
    render(<Card {...defaultProps} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card.tagName).toBe('DIV');
  });

  it('should render with custom children', () => {
    render(
      <Card data-testid="card">
        <h1>Title</h1>
        <p>Description</p>
      </Card>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('should render with custom style', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    render(<Card {...defaultProps} style={customStyle} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle(customStyle);
  });

  it('should render with className', () => {
    render(<Card {...defaultProps} className="custom-card" data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-card');
  });

  it('should render with custom padding', () => {
    render(<Card {...defaultProps} padding={24} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ padding: '24px' });
  });

  it('should render with custom margin', () => {
    render(<Card {...defaultProps} margin={8} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ margin: '8px' });
  });

  it('should render with custom border radius', () => {
    render(<Card {...defaultProps} borderRadius={20} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ borderRadius: '20px' });
  });

  it('should render with custom background color', () => {
    render(<Card {...defaultProps} backgroundColor="#ff0000" data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  it('should render with shadow by default', () => {
    render(<Card {...defaultProps} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' });
  });

  it('should render without shadow when shadow is false', () => {
    render(<Card {...defaultProps} shadow={false} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ boxShadow: 'none' });
  });

  it('should handle onClick when provided', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Card {...defaultProps} onClick={onClick} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    await user.click(card);
    
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have pointer cursor when onClick is provided', () => {
    const onClick = jest.fn();
    render(<Card {...defaultProps} onClick={onClick} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ cursor: 'pointer' });
  });

  it('should have default cursor when onClick is not provided', () => {
    render(<Card {...defaultProps} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ cursor: 'default' });
  });

  it('should have transition styles', () => {
    render(<Card {...defaultProps} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({ transition: 'all 0.2s ease' });
  });

  it('should combine custom style with default styles', () => {
    const customStyle = { border: '1px solid black' };
    render(<Card {...defaultProps} style={customStyle} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({
      border: '1px solid black',
      borderRadius: '12px',
      padding: '16px',
      margin: '0px',
    });
  });

  it('should handle complex children structure', () => {
    render(
      <Card data-testid="card">
        <div data-testid="header">Header</div>
        <div data-testid="content">Content</div>
        <div data-testid="footer">Footer</div>
      </Card>
    );
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should handle empty children', () => {
    render(<Card data-testid="card">{''}</Card>);
    
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('should handle zero values for numeric props', () => {
    render(
      <Card 
        {...defaultProps} 
        padding={0} 
        margin={0} 
        borderRadius={0} 
        data-testid="card"
      />
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({
      padding: '0px',
      margin: '0px',
      borderRadius: '0px',
    });
  });

  it('should handle negative values for numeric props', () => {
    render(
      <Card 
        {...defaultProps} 
        padding={-10} 
        margin={-5} 
        borderRadius={-2} 
        data-testid="card"
      />
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle({
      padding: '-10px',
      margin: '-5px',
      borderRadius: '-2px',
    });
  });

  it('should handle multiple clicks', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Card {...defaultProps} onClick={onClick} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    await user.click(card);
    await user.click(card);
    await user.click(card);
    
    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it('should be focusable when onClick is provided', () => {
    const onClick = jest.fn();
    render(<Card {...defaultProps} onClick={onClick} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  it('should not be focusable when onClick is not provided', () => {
    render(<Card {...defaultProps} data-testid="card" />);
    
    const card = screen.getByTestId('card');
    expect(card).not.toHaveAttribute('tabindex');
  });
});
