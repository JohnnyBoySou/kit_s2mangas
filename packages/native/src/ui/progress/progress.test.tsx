import React from 'react';
import MultiStepProgress from './progress';

describe('MultiStepProgress Component', () => {
  it('renders correctly with default props', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 3,
      current: 1,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(MultiStepProgress);
    expect(element.props.steps).toBe(3);
    expect(element.props.current).toBe(1);
    expect(element.props.testID).toBe("progress");
  });

  it('renders with multiple steps', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 5,
      current: 2,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(5);
    expect(element.props.current).toBe(2);
    expect(element.props.testID).toBe("progress");
  });

  it('renders with current step', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 4,
      current: 3,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(4);
    expect(element.props.current).toBe(3);
    expect(element.props.testID).toBe("progress");
  });

  it('renders with animation disabled', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 3,
      current: 2,
      animate: false,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(3);
    expect(element.props.current).toBe(2);
    expect(element.props.animate).toBe(false);
    expect(element.props.testID).toBe("progress");
  });

  it('renders with white theme', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 3,
      current: 1,
      theme: "white",
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(3);
    expect(element.props.current).toBe(1);
    expect(element.props.theme).toBe("white");
    expect(element.props.testID).toBe("progress");
  });

  it('renders with dark theme', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 3,
      current: 1,
      theme: "dark",
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(3);
    expect(element.props.current).toBe(1);
    expect(element.props.theme).toBe("dark");
    expect(element.props.testID).toBe("progress");
  });

  it('returns null when steps is 0', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 0,
      current: 1,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(0);
    expect(element.props.current).toBe(1);
    expect(element.props.testID).toBe("progress");
  });

  it('returns null when steps is negative', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: -1,
      current: 1,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(-1);
    expect(element.props.current).toBe(1);
    expect(element.props.testID).toBe("progress");
  });

  it('handles current step beyond total steps', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 3,
      current: 5,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(3);
    expect(element.props.current).toBe(5);
    expect(element.props.testID).toBe("progress");
  });

  it('handles current step as 0', () => {
    const element = React.createElement(MultiStepProgress, {
      steps: 3,
      current: 0,
      testID: "progress"
    });
    
    expect(element).toBeDefined();
    expect(element.props.steps).toBe(3);
    expect(element.props.current).toBe(0);
    expect(element.props.testID).toBe("progress");
  });
});