import React, {
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

import { Input } from '../../atoms';
import { InputProps } from '../../atoms/Input/Input';
import Omit from '../../Omit';

let datalistId = 0;

export interface ComboBoxProps extends InputProps {
  items: Set<string | number>;
}

export class ComboBox extends Component<
  ComboBoxProps &
    Omit<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'ref'
    >
> {
  public datalistId = `mycrypto-ui-${datalistId++}`;

  public render() {
    const { items, value, ...rest } = this.props;

    return (
      <>
        <Input list={this.datalistId} value={value} {...rest} />
        <datalist id={this.datalistId}>
          {Array.from(items).map(item => (
            <option key={item} value={item} />
          ))}
        </datalist>
      </>
    );
  }
}

export default ComboBox;
