import React, {
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import { Input } from 'src/atoms';
import { InputProps } from 'src/atoms/Input/Input';
import Omit from 'src/Omit';
import Theme from 'src/Theme';

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
