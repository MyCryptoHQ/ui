import type { FunctionComponent } from 'react';
import styled from 'styled-components';
import type { SpaceProps } from 'styled-system';

import { Box } from '.';

const steps = ['#EF4747', '#FA873F', '#FFD166', '#7BBE34'];

export interface PasswordStrengthProps extends SpaceProps {
  strength: number;
}

const SBox = styled(Box)`
  transition: width 1s ease-in-out;
  width: ${(props) => `${((props.strength + 1) / steps.length) * 100}%`};
  background-color: ${(props) => `${steps[props.strength]}`};
`;

export const PasswordStrength: FunctionComponent<PasswordStrengthProps> = ({
  strength,
  ...props
}) => (
  <Box variant="passwordBar" height="10px" {...props}>
    <SBox variant="passwordBar" height="10px" strength={strength} />
  </Box>
);
