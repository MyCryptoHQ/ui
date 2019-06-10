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
  title?: ReactNode;
  value?: number;
  onChange?(value: number): void;
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

const Relative = styled.div`
  position: relative;
`;

const PositionedDataList = styled(DataList)<{
  height: number;
  open: boolean;
  width?: number;
}>`
  position: absolute;
  top: ${props => props.height}px;
  transform: scaleY(${props => (props.open ? 1 : 0)});
  transform-origin: top;
  transition: transform ${transitionDuration};
  ${props => props.width && `width: ${props.width}px`};
  z-index: 1;
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
    height?: number;
    open: boolean;
    selected?: number;
    width?: number;
  }
> {
  public state = {
    height: undefined,
    open: false,
    selected: undefined,
    width: undefined,
  };

  private readonly ref = createRef<HTMLDivElement>();

  public componentDidMount() {
    addEventListener('mousedown', this.handleClickOutside);

    // istanbul ignore else
    if (this.ref.current) {
      const { height, width } = this.ref.current.getBoundingClientRect();
      this.setState({ height, width });
    }
  }

  public componentWillUnmount() {
    removeEventListener('mousedown', this.handleClickOutside);
  }

  public render() {
    const { children, items, title, value, ...rest } = this.props;
    const { height, open, selected, width } = this.state;

    const selectedIndex = value !== undefined ? value : selected;
    const selectedItem =
      items && selectedIndex !== undefined && Array.from(items)[selectedIndex];

    return (
      <div ref={this.ref}>
        <Relative>
          <DropdownButton open={open} onClick={this.handleClick} {...rest}>
            {title || selectedItem}
            <ChevronIcon icon={open ? 'chevronUp' : 'chevronDown'} />
          </DropdownButton>

          <PositionedDataList
            height={(height || 0) + 7}
            open={open}
            width={width}
          >
            {items
              ? Array.from(items).map((item, index) => (
                  <Option
                    key={index}
                    selected={index === selectedIndex}
                    onClick={this.handleChange(index)}
                  >
                    {item}
                  </Option>
                ))
              : children}
          </PositionedDataList>
        </Relative>
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

  private readonly handleChange = (selected: number) => () => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(selected);
    } else {
      this.setState({ open: false, selected });
    }
  };
}

export default Dropdown;
