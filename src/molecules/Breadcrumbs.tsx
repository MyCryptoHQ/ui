import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import type { BoxProps } from '../atoms';
import { Box, Breadcrumb, BreadcrumbIcon } from '../atoms';

export const BreadcrumbsContainer = styled(Box)`
  ${Breadcrumb}:last-child {
    a,
    p,
    span {
      font-weight: 400;
    }

    ${BreadcrumbIcon} {
      display: none;
    }
  }
`;

export const Breadcrumbs: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <BreadcrumbsContainer as="ol" mx="0" px="0" {...props}>
    {children}
  </BreadcrumbsContainer>
);
