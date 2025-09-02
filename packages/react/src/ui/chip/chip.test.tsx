import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chip from './chip';

describe('Chip', () => {
  it('should render children correctly', () => {
    render(<Chip>Test Chip</Chip>);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('should apply correct variant styles', () => {
    const { rerender } = render(<Chip variant="primary">Primary Chip</Chip>);
    const chip = screen.getByText('Primary Chip').parentElement;
    expect(chip).toHaveStyle({ backgroundColor: expect.stringContaining('20') });

    rerender(<Chip variant="error">Error Chip</Chip>);
    const errorChip = screen.getByText('Error Chip').parentElement;
    expect(errorChip).toHaveStyle({ color: '#dc2626' });
  });

  it('should apply correct size styles', () => {
    const { rerender } = render(<Chip size="sm">Small Chip</Chip>);
    const chip = screen.getByText('Small Chip').parentElement;
    expect(chip).toHaveStyle({ padding: '4px 8px', fontSize: '12px' });

    rerender(<Chip size="lg">Large Chip</Chip>);
    const largeChip = screen.getByText('Large Chip').parentElement;
    expect(largeChip).toHaveStyle({ padding: '8px 16px', fontSize: '16px' });
  });

  it('should render remove button when removable is true', () => {
    render(<Chip removable>Removable Chip</Chip>);
    expect(screen.getByRole('button', { name: 'Remover' })).toBeInTheDocument();
  });

  it('should not render remove button when removable is false', () => {
    render(<Chip removable={false}>Non-removable Chip</Chip>);
    expect(screen.queryByRole('button', { name: 'Remover' })).not.toBeInTheDocument();
  });

  it('should call onRemove when remove button is clicked', () => {
    const onRemove = jest.fn();
    render(<Chip removable onRemove={onRemove}>Removable Chip</Chip>);
    
    const removeButton = screen.getByRole('button', { name: 'Remover' });
    fireEvent.click(removeButton);
    
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('should apply disabled styles when disabled is true', () => {
    render(<Chip disabled>Disabled Chip</Chip>);
    const chip = screen.getByText('Disabled Chip').parentElement;
    expect(chip).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
  });

  it('should not render remove button when disabled', () => {
    render(<Chip removable disabled>Disabled Removable Chip</Chip>);
    expect(screen.queryByRole('button', { name: 'Remover' })).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Chip className="custom-class">Custom Chip</Chip>);
    const chip = screen.getByText('Custom Chip').parentElement;
    expect(chip).toHaveClass('custom-class');
  });

  it('should apply custom style', () => {
    render(<Chip style={{ backgroundColor: 'red' }}>Styled Chip</Chip>);
    const chip = screen.getByText('Styled Chip').parentElement;
    expect(chip).toHaveStyle({ backgroundColor: 'red' });
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Chip ref={ref}>Ref Chip</Chip>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should stop propagation when remove button is clicked', () => {
    const onRemove = jest.fn();
    const onChipClick = jest.fn();
    
    render(
      <div onClick={onChipClick}>
        <Chip removable onRemove={onRemove}>Removable Chip</Chip>
      </div>
    );
    
    const removeButton = screen.getByRole('button', { name: 'Remover' });
    fireEvent.click(removeButton);
    
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onChipClick).not.toHaveBeenCalled();
  });
});
