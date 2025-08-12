import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title, HeadTitle, Label, SubLabel, Description, U } from './text';

describe('Text Components', () => {
  const defaultProps = {
    children: 'Test Text',
  };

  describe('Title Component', () => {
    it('should render with default props', () => {
      render(<Title {...defaultProps} />);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Test Text');
    });

    it('should render with custom style', () => {
      const customStyle = { color: 'red', fontSize: '24px' };
      render(<Title {...defaultProps} style={customStyle} />);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveStyle(customStyle);
    });

    it('should render with className', () => {
      render(<Title {...defaultProps} className="custom-title" />);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveClass('custom-title');
    });

    it('should render with complex children', () => {
      render(
        <Title>
          <span data-testid="icon">🚀</span>
          <span>Complex Title</span>
        </Title>
      );
      
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Complex Title')).toBeInTheDocument();
    });
  });

  describe('HeadTitle Component', () => {
    it('should render with default props', () => {
      render(<HeadTitle {...defaultProps} />);
      
      const headTitle = screen.getByRole('heading', { level: 2 });
      expect(headTitle).toBeInTheDocument();
      expect(headTitle).toHaveTextContent('Test Text');
    });

    it('should render with custom style', () => {
      const customStyle = { color: 'blue', fontSize: '20px' };
      render(<HeadTitle {...defaultProps} style={customStyle} />);
      
      const headTitle = screen.getByRole('heading', { level: 2 });
      expect(headTitle).toHaveStyle(customStyle);
    });

    it('should render with className', () => {
      render(<HeadTitle {...defaultProps} className="custom-headtitle" />);
      
      const headTitle = screen.getByRole('heading', { level: 2 });
      expect(headTitle).toHaveClass('custom-headtitle');
    });
  });

  describe('Label Component', () => {
    it('should render with default props', () => {
      render(<Label {...defaultProps} />);
      
      const label = screen.getByText('Test Text');
      expect(label).toBeInTheDocument();
      expect(label.tagName).toBe('SPAN');
    });

    it('should render with custom style', () => {
      const customStyle = { color: 'green', fontWeight: 'bold' };
      render(<Label {...defaultProps} style={customStyle} />);
      
      const label = screen.getByText('Test Text');
      expect(label).toHaveStyle(customStyle);
    });

    it('should render with className', () => {
      render(<Label {...defaultProps} className="custom-label" />);
      
      const label = screen.getByText('Test Text');
      expect(label).toHaveClass('custom-label');
    });
  });

  describe('SubLabel Component', () => {
    it('should render with default props', () => {
      render(<SubLabel {...defaultProps} />);
      
      const subLabel = screen.getByText('Test Text');
      expect(subLabel).toBeInTheDocument();
      expect(subLabel.tagName).toBe('SPAN');
    });

    it('should render with custom style', () => {
      const customStyle = { color: 'purple', fontStyle: 'italic' };
      render(<SubLabel {...defaultProps} style={customStyle} />);
      
      const subLabel = screen.getByText('Test Text');
      expect(subLabel).toHaveStyle(customStyle);
    });

    it('should render with className', () => {
      render(<SubLabel {...defaultProps} className="custom-sublabel" />);
      
      const subLabel = screen.getByText('Test Text');
      expect(subLabel).toHaveClass('custom-sublabel');
    });
  });

  describe('Description Component', () => {
    it('should render with default props', () => {
      render(<Description {...defaultProps} />);
      
      const description = screen.getByText('Test Text');
      expect(description).toBeInTheDocument();
      expect(description.tagName).toBe('P');
    });

    it('should render with custom style', () => {
      const customStyle = { color: 'orange', lineHeight: '2' };
      render(<Description {...defaultProps} style={customStyle} />);
      
      const description = screen.getByText('Test Text');
      expect(description).toHaveStyle(customStyle);
    });

    it('should render with className', () => {
      render(<Description {...defaultProps} className="custom-description" />);
      
      const description = screen.getByText('Test Text');
      expect(description).toHaveClass('custom-description');
    });

    it('should render with long text', () => {
      const longText = 'This is a very long description text that should be properly rendered by the Description component. It contains multiple sentences and should test the component\'s ability to handle longer content.';
      render(<Description>{longText}</Description>);
      
      const description = screen.getByText(longText);
      expect(description).toBeInTheDocument();
    });
  });

  describe('U Component', () => {
    it('should render with default props', () => {
      render(<U {...defaultProps} />);
      
      const underline = screen.getByText('Test Text');
      expect(underline).toBeInTheDocument();
      expect(underline.tagName).toBe('SPAN');
    });

    it('should render with custom style', () => {
      const customStyle = { color: 'red', textDecorationColor: 'blue' };
      render(<U {...defaultProps} style={customStyle} />);
      
      const underline = screen.getByText('Test Text');
      expect(underline).toHaveStyle(customStyle);
    });

    it('should render with className', () => {
      render(<U {...defaultProps} className="custom-underline" />);
      
      const underline = screen.getByText('Test Text');
      expect(underline).toHaveClass('custom-underline');
    });

    it('should have underline decoration', () => {
      render(<U {...defaultProps} />);
      
      const underline = screen.getByText('Test Text');
      expect(underline).toHaveStyle({ textDecoration: 'underline' });
    });
  });

  describe('All Text Components Together', () => {
    it('should render all components in the same document', () => {
      render(
        <div>
          <Title>Title Text</Title>
          <HeadTitle>HeadTitle Text</HeadTitle>
          <Label>Label Text</Label>
          <SubLabel>SubLabel Text</SubLabel>
          <Description>Description Text</Description>
          <U>Underline Text</U>
        </div>
      );
      
      expect(screen.getByText('Title Text')).toBeInTheDocument();
      expect(screen.getByText('HeadTitle Text')).toBeInTheDocument();
      expect(screen.getByText('Label Text')).toBeInTheDocument();
      expect(screen.getByText('SubLabel Text')).toBeInTheDocument();
      expect(screen.getByText('Description Text')).toBeInTheDocument();
      expect(screen.getByText('Underline Text')).toBeInTheDocument();
    });

    it('should handle empty children', () => {
      render(
        <div>
          <Title>{null}</Title>
          <HeadTitle>{null}</HeadTitle>
          <Label>{null}</Label>
          <SubLabel>{null}</SubLabel>
          <Description>{null}</Description>
          <U>{null}</U>
        </div>
      );
      
      // Todos os componentes devem renderizar mesmo com children vazios
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });
  });
});
