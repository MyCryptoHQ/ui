import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Option from './Option';

export default class OptionPreview extends Component<
  {},
  {
    selected: number;
  }
> {
  public state = { selected: 0 };

  public render() {
    const { selected } = this.state;

    return [1, 2, 3].map(n => (
      <Option key={n} selected={n === selected} onClick={this.handleSelect(n)}>
        Click Here for Option 0{n}
      </Option>
    ));
  }

  private readonly handleSelect = (selected: number) => () =>
    this.setState({ selected });
}

storiesOf('Atoms', module).add('Option', () => <OptionPreview />);
