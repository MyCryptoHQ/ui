import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Button from '../Button';
import Stepper from './Stepper';

const beforeStep = <h2>Start Stepping!</h2>;
const stepOne = <h2>Step One</h2>;
const stepTwo = <h2>Step Two</h2>;
const stepThree = <h2>Step Three</h2>;
const afterStep = <h2>All steps are done!</h2>;
const steps = [beforeStep, stepOne, stepTwo, stepThree, afterStep];

// tslint:disable-next-line: no-empty-interface
interface StepActionProps {}

interface StepActionState {
  step: number;
  total: number;
}

class Step extends Component<StepActionProps, StepActionState> {
  public state: StepActionState = { step: 0, total: steps.length };

  constructor(props: StepActionProps) {
    super(props);

    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  public handleClickBack() {
    this.setState(({ step }) => ({ step: step - 1 }));
  }

  public handleClickNext() {
    this.setState(({ step }) => ({ step: step + 1 }));
  }

  public render() {
    const { step, total } = this.state;

    return (
      <div>
        <div className="content-panel-top">
          <Stepper current={step} total={total - 2} />
          {steps[step]}
        </div>
        <div className="content-panel">
          {step > 0 ? (
            <Button onClick={this.handleClickNext}>Next</Button>
          ) : (
            <Button onClick={this.handleClickBack}>Back</Button> && (
              <Button onClick={this.handleClickNext}>Next</Button>
            )
          )}
        </div>
      </div>
    );
  }
}

storiesOf('Atoms', module).add('Stepper', () => <Step />);
