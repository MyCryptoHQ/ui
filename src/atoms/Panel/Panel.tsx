import { padding, size } from 'polished';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import {
  StyledComponentClass,
  ThemedOuterStyledProps,
} from 'styled-components';

import Omit from '../../Omit';
import styled from '../../styled-components';
import Theme, { borderRadiusLarge, scale } from '../../Theme';

// Use an empty styled component instead of a plain section tag so components
// like List can change tags with the as prop.
const BasicPanel = styled.section``;

interface StyledPanelProps {
  noPadding?: boolean;
  isPlaceholder?: boolean;
}

const StyledPanel = styled(BasicPanel)<StyledPanelProps>`
  background: ${props =>
    props.isPlaceholder
      ? props.theme.panelBackgroundDark
      : props.theme.panelBackground};
  border-radius: ${borderRadiusLarge};
  box-shadow: ${props =>
    !props.isPlaceholder && '0 0.1875em 0.375em 0 #00000012'};
  margin-bottom: ${scale(0)};
  ${props => !props.noPadding && padding(scale(1), scale(2))};
`;

const InteractivePanel = styled(StyledPanel)`
  border: none;
  box-shadow: 0 0 0 0.0625em rgba(0, 0, 0, 0.03),
    0 0.0625em 0 0 rgba(0, 0, 0, 0.05), 0 0.0625em 0.1875em 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: ${scale(0)};
  ${size(scale(6))};

  :focus {
    border: 0.125em solid #027796;
  }

  :active {
    opacity: 0.65;
  }
` as StyledComponentClass<
  StyledPanelProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
  Theme
>;

InteractivePanel.defaultProps = { as: 'button', type: 'button' };

export interface PanelProps extends StyledPanelProps {
  basic?: boolean;
}

export function Panel({
  basic,
  noPadding,
  isPlaceholder,
  onClick,
  ...rest
}: PanelProps &
  Omit<
    ThemedOuterStyledProps<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      Theme
    >,
    'ref'
  >) {
  if (basic) {
    return <BasicPanel {...rest} />;
  } else if (onClick) {
    return (
      <InteractivePanel
        noPadding={noPadding}
        isPlaceholder={isPlaceholder}
        onClick={onClick}
        tabIndex={0}
        {...rest}
      />
    );
  } else {
    return (
      <StyledPanel
        noPadding={noPadding}
        isPlaceholder={isPlaceholder}
        {...rest}
      />
    );
  }
}

export default Panel;
