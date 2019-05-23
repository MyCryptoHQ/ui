import React, {
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import { Input } from '../../atoms';
import { InputProps } from '../../atoms/Input/Input';
import Omit from '../../Omit';
import Theme from '../../Theme';

let datalistId = 0;

export interface ComboBoxProps extends InputProps {
  items: Set<string | number>;
}

export class ComboBox extends Component<
  ComboBoxProps &
    Omit<
      ThemedOuterStyledProps<
        DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >,
        Theme
      >,
      'ref'
    >
> {
  public datalistId = `mycrypto-ui-${datalistId++}`;

  public render() {
    const { items, value, ...rest } = this.props;
    const filteredItems = Array.from(items).filter(
      item => !value || String(item).includes(String(value)),
    );

    return (
      <>
        <Input list={this.datalistId} value={value} {...rest} />
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
