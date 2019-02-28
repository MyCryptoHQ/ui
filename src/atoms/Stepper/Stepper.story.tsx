import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Button from '../Button';
import Panel from '../Panel';
import Stepper from './Stepper';

const StepOne = <Panel>Step One</Panel>;
const StepTwo = <Panel>Step Two</Panel>;
const StepThree = <Panel>Step Three</Panel>;

const steps = [StepOne, StepTwo, StepThree];

// tslint:disable-next-line: no-empty-interface
interface StepActionProps {}

interface StepActionState {
  step: number;
  total: number;
}

class StepAction extends Component<StepActionProps, StepActionState> {
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
      <Panel>
        <div className="ContentPanel-top">
          <Stepper current={step} total={total} />
        </div>
        <div className="ContentPanel-content">
          {steps[step]}
          <Button onClick={this.handleClickBack}>Back</Button>
          <Button onClick={this.handleClickNext}>Next</Button>
        </div>
      </Panel>
    );
  }
}

storiesOf('Atoms', module).add('Stepper', () => <StepAction />);
