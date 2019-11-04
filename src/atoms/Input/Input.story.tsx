import { storiesOf } from '@storybook/react';
import React, {
  ChangeEvent,
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import Omit from '../../Omit';
import Theme from '../../Theme';
import Typography from '../../Typography';
import Panel from '../Panel';
import Input, { InputProps } from './Input';

class ControlledInput extends Component<
  InputProps<any> &
    Omit<
      ThemedOuterStyledProps<
        DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >,
        Theme
      >,
      'ref'
    >,
  {
    value: string;
  }
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

const testComponent = ({ icon }: { icon: string }) => (
  <img alt="ETH" src={icon} />
);

storiesOf('Atoms', module).add('Input', () => (
  <Panel>
    {Object.entries({
      'From Address': (
        <Input
          icon="add"
          placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
        />
      ),
      'To Address': (
        <Input
          icon="add"
          placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
          iconSide="right"
        />
      ),
      Network: <ControlledInput validator={validator} />,
      Amount: (
        <Input
          icon="https://cdn.mycryptoapi.com/v1/icons/eth.svg"
          placeholder="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520"
          iconSide="right"
          iconComponent={testComponent}
        />
      ),
    }).map(([label, element]) => (
      <Typography as="label" key={label}>
        {label}
        <br />
        {element}
        <br />
      </Typography>
    ))}
  </Panel>
));
