import type { FunctionComponent } from 'react';
import type { ButtonProps as RebassButtonProps } from 'rebass/styled-components';
import { Button as RebassButton } from 'rebass/styled-components';

interface OwnProps {
  compact?: boolean;
}

export type ButtonProps = OwnProps & RebassButtonProps;

export const Button: FunctionComponent<ButtonProps> = ({ compact = false, children, ...props }) => (
  <RebassButton
    p={compact ? '0.625rem 2rem' : undefined}
    fontSize={compact ? '0.9rem' : undefined}
    {...props}>
    {children}
  </RebassButton>
);
