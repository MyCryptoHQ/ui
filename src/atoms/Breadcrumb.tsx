import type { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Box, Icon } from '.';
import { InlineBody } from './Typography';

export const BreadcrumbIcon = styled.span``;

const RawBreadcrumb: FunctionComponent = ({ children, ...props }) => (
  <Box as="li" display="inline-flex" mr="3" alignItems="center" {...props}>
    <InlineBody color="link" fontWeight="bold" mr="3" lineHeight="16px">
      {children}
    </InlineBody>
    <BreadcrumbIcon>
      <Icon type="arrow" width="9px" height="15px" verticalAlign="middle" />
    </BreadcrumbIcon>
  </Box>
);

export const Breadcrumb = styled(RawBreadcrumb)``;
