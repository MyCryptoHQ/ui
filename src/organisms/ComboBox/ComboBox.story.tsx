import { storiesOf } from '@storybook/react';
import React, { ChangeEvent, Component } from 'react';

import { Panel } from 'src/atoms';
import { ExtractProps } from 'src/types';
import Typography from 'src/Typography';
import ComboBox from './ComboBox';

class ControlledComboBox extends Component<ExtractProps<typeof ComboBox>> {
  public state = { value: '' };

  public handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => this.setState({ value });

  public render() {
    const { value } = this.state;
    return (
      <ComboBox value={value} onChange={this.handleChange} {...this.props} />
    );
  }
}

function validator(value: string) {
  if (!['Ethereum', 'Ropsten'].includes(value)) {
    return 'Invalid selection, must choose Ethereum or Ropsten';
  }
}

storiesOf('Organisms', module).add('ComboBox', () => (
  <Panel>
    {Object.entries({
      'Enter a fruit': (
        <ComboBox
          items={new Set(['apple', 'pear', 'orange', 'grape', 'banana'])}
        />
      ),
      Network: (
        <ControlledComboBox
          items={new Set(['Ethereum', 'Ropsten'])}
          validator={validator}
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
