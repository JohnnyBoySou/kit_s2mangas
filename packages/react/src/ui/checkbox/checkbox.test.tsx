import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './checkbox';

describe('Checkbox Component', () => {
  const defaultProps = {
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it('should render as checked when checked prop is true', () => {
    render(<Checkbox {...defaultProps} checked />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('should render with label', () => {
    render(<Checkbox {...defaultProps} label="Test Label" />);
    
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should call onChange when clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('should call onChange with false when checked checkbox is clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} checked />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  it('should call onChange when label is clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} label="Test Label" />);
    
    const label = screen.getByText('Test Label');
    await user.click(label);
    
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
  });

  it('should not call onChange when disabled', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} disabled />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('should not call onChange when disabled and label is clicked', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} disabled label="Test Label" />);
    
    const label = screen.getByText('Test Label');
    await user.click(label);
    
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('should render as disabled', () => {
    render(<Checkbox {...defaultProps} disabled />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('should have disabled styles when disabled', () => {
    render(<Checkbox {...defaultProps} disabled />);
    
    const label = screen.getByRole('checkbox').closest('label');
    expect(label).toHaveStyle({ cursor: 'not-allowed', opacity: 0.5 });
  });

  it('should have enabled styles when not disabled', () => {
    render(<Checkbox {...defaultProps} />);
    
    const label = screen.getByRole('checkbox').closest('label');
    expect(label).toHaveStyle({ cursor: 'pointer', opacity: 1 });
  });

  it('should render with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Checkbox {...defaultProps} style={customStyle} />);
    
    const label = screen.getByRole('checkbox').closest('label');
    expect(label).toHaveStyle(customStyle);
  });

  it('should render with className', () => {
    render(<Checkbox {...defaultProps} className="custom-checkbox" />);
    
    const label = screen.getByRole('checkbox').closest('label');
    expect(label).toHaveClass('custom-checkbox');
  });

  it('should not respond to keyboard events when disabled', async () => {
    const user = userEvent.setup();
    render(<Checkbox {...defaultProps} disabled />);
    
    const checkbox = screen.getByRole('checkbox');
    checkbox.focus();
    await user.keyboard('{Space}');
    
    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });

  it('should toggle state correctly', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Checkbox {...defaultProps} checked={false} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledWith(true);
    
    // Simula a mudança de estado controlada
    rerender(<Checkbox {...defaultProps} checked={true} />);
    expect(checkbox).toBeChecked();
    
    await user.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledWith(false);
  });

  it('should handle controlled component correctly', async () => {
    const user = userEvent.setup();
    let isChecked = false;
    const handleChange = (checked: boolean) => {
      isChecked = checked;
    };
    
    const { rerender } = render(
      <Checkbox onChange={handleChange} checked={isChecked} />
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(isChecked).toBe(true);
    
    rerender(<Checkbox onChange={handleChange} checked={isChecked} />);
    expect(checkbox).toBeChecked();
  });

  it('should have proper accessibility attributes', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('should handle multiple rapid clicks', async () => {
    const user = userEvent.setup();
    let isChecked = false;
    const handleChange = (checked: boolean) => {
      isChecked = checked;
    };
    
    const { rerender } = render(
      <Checkbox onChange={handleChange} checked={isChecked} />
    );
    
    const checkbox = screen.getByRole('checkbox');
    
    // Primeiro clique
    await user.click(checkbox);
    expect(isChecked).toBe(true);
    rerender(<Checkbox onChange={handleChange} checked={isChecked} />);
    
    // Segundo clique
    await user.click(checkbox);
    expect(isChecked).toBe(false);
    rerender(<Checkbox onChange={handleChange} checked={isChecked} />);
    
    // Terceiro clique
    await user.click(checkbox);
    expect(isChecked).toBe(true);
  });

  it('should work without onChange handler', async () => {
    const user = userEvent.setup();
    render(<Checkbox />);
    
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    
    // Não deve quebrar quando não há onChange
    expect(checkbox).toBeInTheDocument();
  });

  it('should render without label', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
  });

  it('should have correct styling when label is present', () => {
    render(<Checkbox {...defaultProps} label="Test Label" />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveStyle({ marginRight: '8px' });
  });

  it('should have correct styling when label is not present', () => {
    render(<Checkbox {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveStyle({ marginRight: '0' });
  });

  it('should handle long label text', () => {
    const longLabel = 'This is a very long label text that should be properly rendered by the Checkbox component';
    render(<Checkbox {...defaultProps} label={longLabel} />);
    
    expect(screen.getByText(longLabel)).toBeInTheDocument();
  });

  it('should handle special characters in label', () => {
    const specialLabel = 'Label with special chars: !@#$%^&*()_+-=[]{}|;:,.<>?';
    render(<Checkbox {...defaultProps} label={specialLabel} />);
    
    expect(screen.getByText(specialLabel)).toBeInTheDocument();
  });
});
