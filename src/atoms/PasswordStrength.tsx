import type { FunctionComponent } from 'react';

import type { BoxProps } from '.';
import { Box } from '.';

const steps = ['#EF4747', '#FA873F', '#FFD166', '#7BBE34'];

export interface PasswordStrengthProps extends BoxProps {
  strength: number;
}

export const PasswordStrength: FunctionComponent<PasswordStrengthProps> = ({
  strength,
  height = '10px',
  ...props
}) => (
  <Box variant="passwordBar" height={height} {...props}>
    <Box
      variant="passwordBar"
      height={height}
      width={`${Math.min(((strength + 1) / steps.length) * 100, 100)}%`}
      bg={steps[Math.min(strength, steps.length - 1)]}
    />
  </Box>
);
