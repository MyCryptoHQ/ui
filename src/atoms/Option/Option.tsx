import { borderRadius as borderRadiusHelper, padding } from 'polished';

import styled from '../../styled-components';
import { borderRadius, scale } from '../../Theme';
import Typography from '../../Typography';

export const Option = styled(Typography)`
  background: ${props => props.theme.controlBackground};
  cursor: pointer;
  margin: 0;
  ${padding(scale(-1), scale(1))};

  :hover {
    background-color: ${props => props.theme.optionHoverBackground};
  }

  :first-child {
    ${borderRadiusHelper('top', borderRadius)};
  }

  :last-child {
    ${borderRadiusHelper('bottom', borderRadius)};
  }
`;

export default Option;
