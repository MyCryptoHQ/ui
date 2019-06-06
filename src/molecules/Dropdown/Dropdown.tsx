import { padding } from 'polished';
import React, {
  Component,
  createRef,
  DetailedHTMLProps,
  SelectHTMLAttributes,
} from 'react';
import { StyledComponentClass } from 'styled-components';

import DataList from '../../atoms/DataList';
import Option from '../../atoms/Option';
import Omit from '../../Omit';
import styled from '../../styled-components';
import Theme, { borderRadius, scale, transitionDuration } from '../../Theme';
import Typography from '../../Typography';

export interface DropdownProps {
  items: Set<string | number>;
}

const DropdownButton = styled(Typography)`
  appearance: none;
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  cursor: pointer;
  margin: 0;
  min-height: 1.5em;
  ${padding(scale(-1), scale(0))};
  transition: border ${transitionDuration}, box-shadow ${transitionDuration};

  :focus {
    outline: none;
    box-shadow: ${props => props.theme.outline};
  }
` as StyledComponentClass<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  Theme
>;

const Relative = styled.div`
  position: relative;
`;

const Absolute = styled.div<{ width?: number }>`
  position: absolute;
  ${props => props.width && `width: ${props.width}px`};
`;

export class Dropdown extends Component<
  DropdownProps &
    Omit<
      DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      >,
      'ref'
    >,
  {
    open: boolean;
    selected?: string | number;
    width?: number;
  }
> {
  public state = {
    open: false,
    selected: undefined,
    width: undefined,
  };

  private readonly ref = createRef<HTMLDivElement>();

  public componentDidMount() {
    // istanbul ignore else
    if (this.ref.current) {
      const { width } = this.ref.current.getBoundingClientRect();
      this.setState({ width });
    }
  }

  public render() {
    const { items, value, ...rest } = this.props;
    const { open, selected, width } = this.state;

    return (
      <Relative>
        <div ref={this.ref}>
          <DropdownButton onClick={this.handleClick} {...rest}>
            {selected}
          </DropdownButton>
        </div>

        {open && (
          <Absolute width={width}>
            <DataList>
              {Array.from(items).map(item => (
                <Option
                  key={item}
                  selected={item === selected}
                  onClick={this.handleChange(item)}
                >
                  {item}
                </Option>
              ))}
            </DataList>
          </Absolute>
        )}
      </Relative>
    );
  }

  private readonly handleClick = () => this.setState({ open: true });

  private readonly handleChange = (selected: string | number) => () =>
    this.setState({ open: false, selected });
}

export default Dropdown;
