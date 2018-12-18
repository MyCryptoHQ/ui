import React, { Component } from 'react';

import { Input } from 'src/atoms';
import { ExtractProps, Omit } from 'src/types';

let datalistId = 0;

export class ComboBox extends Component<
  { items: Set<string | number> } & Omit<ExtractProps<typeof Input>, 'ref'>
> {
  public datalistId = `mycrypto-ui-${datalistId++}`;

  public render() {
    const { items, value, ...rest } = this.props;
    const filteredItems = Array.from(items).filter(
      item => !value || String(item).includes(String(value)),
    );

    return (
      <>
        <Input list={this.datalistId} {...rest} />
        <datalist id={this.datalistId}>
          {filteredItems.map(item => (
            <option key={item} value={item} />
          ))}
        </datalist>
      </>
    );
  }
}

export default ComboBox;
