import type { FunctionComponent } from 'react';
import type { ButtonProps as RebassButtonProps } from 'rebass/styled-components';
import { Button as RebassButton, Flex } from 'rebass/styled-components';

import { Spinner } from './Spinner';

interface OwnProps {
  compact?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
}

export type ButtonProps = OwnProps & RebassButtonProps;

export const Button: FunctionComponent<ButtonProps> = ({
  compact = false,
  loading = false,
  disabled = false,
  fullwidth = false,
  children,
  ...props
}) => (
  <RebassButton
    p={compact ? '0.625rem 2rem' : undefined}
    pl={loading ? '1.5rem' : undefined}
    fontSize={compact ? '0.9rem' : undefined}
    width={fullwidth ? '100%' : undefined}
    disabled={loading || disabled}
    {...props}>
    <Flex variant="horizontal-center">
      {loading && <Spinner color="loadingSpinner" mr="1" />}
      {children}
    </Flex>
  </RebassButton>
);
