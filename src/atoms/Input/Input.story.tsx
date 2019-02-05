import { storiesOf } from '@storybook/react';
import React, { ChangeEvent, Component } from 'react';

import { ExtractProps, Omit } from 'src/types';
import Typography from 'src/Typography';
import Input from './Input';

class ControlledInput extends Component<
  Omit<ExtractProps<typeof Input>, 'ref'>
> {
  public state = { value: '' };

  public handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => this.setState({ value });

  public render() {
    const { value } = this.state;
    return <Input value={value} onChange={this.handleChange} {...this.props} />;
  }
}

function validator(value: string) {
  if (!['Ethereum', 'Ropsten'].includes(value)) {
    return 'Invalid selection, must choose Ethereum or Ropsten';
  }
}

storiesOf('Atoms', module).add('Input', () =>
  Object.entries({
    'To Address': (
      <Input
        icon="copy"
        placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        iconSide="right"
      />
    ),
    Network: <ControlledInput validator={validator} />,
  }).map(([label, element]) => (
    <Typography as="label" key={label}>
      {label}
      <br />
      {element}
      <br />
    </Typography>
  )),
);
