import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { TestIds } from './Stepper';
import StepperStory, { steps } from './Stepper.story';

describe('Stepper', () => {
  it('should render', () => {
    const { getByTestId } = render(<StepperStory />);
    expect(getByTestId('stepper')).toBeVisible();
  });

  it('verifies that stepper is correct length', () => {
    const { getByTestId } = render(<StepperStory />);
    const stepperLength = steps.length - 1;
    const containsStepper = getByTestId(`${TestIds.STEPPER_CONTAINER}`);
    const lastStep = getByTestId(
      `${TestIds.STEPPER_STYLED_PREFIX}-${stepperLength}`,
    );
    expect(containsStepper).toContainElement(lastStep);
  });

  it('verifies that stepper starts at 0', () => {
    const { getByTestId } = render(<StepperStory />);
    const containsStepper = getByTestId(TestIds.STEPPER_CONTAINER);
    const activeStep = getByTestId(`${TestIds.ACTIVE_STEP_INDEX_PREFIX}-0`);
    expect(containsStepper).toContainElement(activeStep);
  });

  it('verifies that stepper moves to position 1', () => {
    const { getByTestId, getByText } = render(<StepperStory />);
    fireEvent.click(getByText('Next'));
    const containsStepper = getByTestId(TestIds.STEPPER_CONTAINER);
    const activeStep = getByTestId(`${TestIds.ACTIVE_STEP_INDEX_PREFIX}-1`);
    expect(containsStepper).toContainElement(activeStep);
  });

  it('verifies that stepper move back to 0', () => {
    const { getByTestId, getByText } = render(<StepperStory />);
    fireEvent.click(getByText('Back'));
    const containsStepper = getByTestId(TestIds.STEPPER_CONTAINER);
    const activeStep = getByTestId(`${TestIds.ACTIVE_STEP_INDEX_PREFIX}-0`);
    expect(containsStepper).toContainElement(activeStep);
  });
});
