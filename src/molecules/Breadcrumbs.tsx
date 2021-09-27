import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Box } from '../atoms';
import { Breadcrumb, BreadcrumbIcon } from '../atoms/Breadcrumb';

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

export const Breadcrumbs: FunctionComponent = ({ children }) => (
  <BreadcrumbsContainer as="ol" mx="0" px="0">
    {children}
  </BreadcrumbsContainer>
);
