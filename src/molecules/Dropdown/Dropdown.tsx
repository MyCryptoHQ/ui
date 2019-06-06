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
`;

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

  private readonly parentRef = createRef<HTMLDivElement>();
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
      <div ref={this.parentRef}>
        <Relative>
          <div ref={this.ref}>
            <DropdownButton onClick={this.handleClick} {...rest}>
              {value || selected}
            </DropdownButton>
          </div>

          {open && (
            <Absolute width={width}>
              <DataList>
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
              </DataList>
            </Absolute>
          )}
        </Relative>
      </div>
    );
  }

  private readonly handleClick = () => this.setState({ open: true });

  private readonly handleClickOutside = (event: MouseEvent) => {
    if (
      !(
        this.parentRef.current &&
        this.parentRef.current.contains(event.target as Node | null)
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
