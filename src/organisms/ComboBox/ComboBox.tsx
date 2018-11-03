import React, {
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';
import Input from '../../atoms/Input';
import Panel from '../../atoms/Panel';
import Theme from '../../Theme';

let datalistId = 0;

export class ComboBox extends Component<
  { items: Set<string | number> } & ThemedOuterStyledProps<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, any>,
    Theme
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
        <Input list={this.datalistId} {...rest} />
        <Panel as="datalist" id={this.datalistId}>
          {filteredItems.map(item => (
            <option key={item} value={item} />
          ))}
        </Panel>
      </>
    );
  }
}

export default ComboBox;
