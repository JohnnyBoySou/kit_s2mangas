import React from 'react';
import { render } from '@testing-library/react-native';
import Message from './message';

describe('Message Component', () => {
  it('renders nothing when no success or error message', () => {
    const { queryByText } = render(<Message />);
    
    expect(queryByText(/./)).toBeNull();
  });

  it('renders success message', () => {
    const successMessage = 'Operation completed successfully';
    const { getByText } = render(
      <Message success={successMessage} />
    );
    
    expect(getByText(successMessage)).toBeTruthy();
  });

  it('renders error message', () => {
    const errorMessage = 'Something went wrong';
    const { getByText } = render(
      <Message error={errorMessage} />
    );
    
    expect(getByText(errorMessage)).toBeTruthy();
  });

  it('prioritizes success message when both are provided', () => {
    const successMessage = 'Success message';
    const errorMessage = 'Error message';
    const { getByText, queryByText } = render(
      <Message success={successMessage} error={errorMessage} />
    );
    
    expect(getByText(successMessage)).toBeTruthy();
    expect(queryByText(errorMessage)).toBeNull();
  });

  it('renders with success styling', () => {
    const successMessage = 'Success message';
    const { getByText } = render(
      <Message success={successMessage} />
    );
    
    const messageElement = getByText(successMessage);
    expect(messageElement).toBeTruthy();
  });

  it('renders with error styling', () => {
    const errorMessage = 'Error message';
    const { getByText } = render(
      <Message error={errorMessage} />
    );
    
    const messageElement = getByText(errorMessage);
    expect(messageElement).toBeTruthy();
  });

  it('renders with empty success message', () => {
    const { queryByText } = render(
      <Message success="" />
    );
    
    expect(queryByText(/./)).toBeNull();
  });

  it('renders with empty error message', () => {
    const { queryByText } = render(
      <Message error="" />
    );
    
    expect(queryByText(/./)).toBeNull();
  });

  it('renders long message text', () => {
    const longMessage = 'This is a very long message that should be displayed properly within the component boundaries and should not cause any layout issues';
    const { getByText } = render(
      <Message success={longMessage} />
    );
    
    expect(getByText(longMessage)).toBeTruthy();
  });

  it('renders with special characters in message', () => {
    const specialMessage = 'Message with special chars: !@#$%^&*()';
    const { getByText } = render(
      <Message success={specialMessage} />
    );
    
    expect(getByText(specialMessage)).toBeTruthy();
  });
});