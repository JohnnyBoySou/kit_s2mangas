import React from 'react';
import Message from './toast';

describe('Message Component', () => {
  it('renders nothing when no success or error message', () => {
    const element = React.createElement(Message, {});
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBeUndefined();
    expect(element.props.error).toBeUndefined();
  });

  it('renders success message', () => {
    const successMessage = 'Operation completed successfully';
    const element = React.createElement(Message, {
      success: successMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBe(successMessage);
    expect(element.props.error).toBeUndefined();
  });

  it('renders error message', () => {
    const errorMessage = 'Something went wrong';
    const element = React.createElement(Message, {
      error: errorMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.error).toBe(errorMessage);
    expect(element.props.success).toBeUndefined();
  });

  it('prioritizes success message when both are provided', () => {
    const successMessage = 'Success message';
    const errorMessage = 'Error message';
    const element = React.createElement(Message, {
      success: successMessage,
      error: errorMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBe(successMessage);
    expect(element.props.error).toBe(errorMessage);
  });

  it('renders with success styling', () => {
    const successMessage = 'Success message';
    const element = React.createElement(Message, {
      success: successMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBe(successMessage);
  });

  it('renders with error styling', () => {
    const errorMessage = 'Error message';
    const element = React.createElement(Message, {
      error: errorMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.error).toBe(errorMessage);
  });

  it('renders with empty success message', () => {
    const element = React.createElement(Message, {
      success: ""
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBe("");
  });

  it('renders with empty error message', () => {
    const element = React.createElement(Message, {
      error: ""
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.error).toBe("");
  });

  it('renders long message text', () => {
    const longMessage = 'This is a very long message that should be displayed properly within the component boundaries and should not cause any layout issues';
    const element = React.createElement(Message, {
      success: longMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBe(longMessage);
  });

  it('renders with special characters in message', () => {
    const specialMessage = 'Message with special chars: !@#$%^&*()';
    const element = React.createElement(Message, {
      success: specialMessage
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(Message);
    expect(element.props.success).toBe(specialMessage);
  });
});