import { padding } from 'polished';
import React, {
  ClassAttributes,
  Component,
  createRef,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import DataList from '../../atoms/DataList';
import Icon from '../../atoms/Icon';
import Option from '../../atoms/Option';
import Omit from '../../Omit';
import styled from '../../styled-components';
import Theme, { borderRadius, scale, transitionDuration } from '../../Theme';
import Typography from '../../Typography';

export interface DropdownProps {
  items?: Set<ReactNode>;
  value?: ReactNode;
  onChange?(value: ReactNode): void;
}

const DropdownButton = styled(Typography)<{ open: boolean }>`
  appearance: none;
  background: ${props => props.theme.controlBackground};
  border: 0.125em solid ${props => props.theme.controlBorder};
  border-radius: ${borderRadius};
  ${props =>
    props.open &&
    'box-shadow: 0 0.4375em 0.625em 0.3125em rgba(50, 50, 93, 0.1), 0 0.1875em 0.375em 0 rgba(0, 0, 0, 0.07)'};
  cursor: pointer;
  margin: 0;
  min-height: 1.5em;
  ${padding(scale(-1), scale(0))};

  :focus {
    outline: none;
    box-shadow: ${props => props.theme.outline};
  }
`;

const ChevronIcon = styled(Icon)`
  float: right;
`;

const PositionedDataList = styled(DataList)<{ open: boolean; width?: number }>`
  position: absolute;
  transform: scaleY(${props => (props.open ? 1 : 0)});
  transform-origin: top;
  transition: transform ${transitionDuration};
  ${props => props.width && `width: ${props.width}px`};
`;

export class Dropdown extends Component<
  DropdownProps &
    Omit<
      ThemedOuterStyledProps<
        ClassAttributes<HTMLParagraphElement> &
          HTMLAttributes<HTMLParagraphElement> & {
            muted?: boolean;
            as?: string;
          },
        Theme
      >,
      'ref'
    >,
  {
    open: boolean;
    selected?: ReactNode;
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
    addEventListener('mousedown', this.handleClickOutside);

    // istanbul ignore else
    if (this.ref.current) {
      const { width } = this.ref.current.getBoundingClientRect();
      this.setState({ width });
    }
  }

  public componentWillUnmount() {
    removeEventListener('mousedown', this.handleClickOutside);
  }

  public render() {
    const { children, items, value, ...rest } = this.props;
    const { open, selected, width } = this.state;

    return (
      <div ref={this.ref}>
        <DropdownButton open={open} onClick={this.handleClick} {...rest}>
          {value || selected}
          <ChevronIcon icon={open ? 'chevronUp' : 'chevronDown'} />
        </DropdownButton>

        <PositionedDataList open={open} width={width}>
          {items
            ? Array.from(items).map((item, index) => (
                <Option
                  key={index}
                  selected={item === (value || selected)}
                  onClick={this.handleChange(item)}
                >
                  {item}
                </Option>
              ))
            : children}
        </PositionedDataList>
      </div>
    );
  }

  private readonly handleClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  };

  private readonly handleClickOutside = (event: MouseEvent) => {
    if (
      !(
        this.ref.current &&
        this.ref.current.contains(event.target as Node | null)
      )
    ) {
      this.setState({ open: false });
    }
  };

  private readonly handleChange = (selected: ReactNode) => () => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(selected);
    } else {
      this.setState({ open: false, selected });
    }
  };
}

export default Dropdown;
