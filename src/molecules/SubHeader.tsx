import type { FunctionComponent } from 'react';
import { Flex } from 'rebass/styled-components';

import type { FlexProps } from '../atoms';
import { Container } from '../atoms';

export type SubHeaderProps = FlexProps;

export const SubHeader: FunctionComponent<SubHeaderProps> = ({ children, ...props }) => (
  <Flex
    width="100%"
    minHeight="60px"
    backgroundColor="header.subHeader"
    alignItems="center"
    py="14px"
    {...props}>
    <Container>{children}</Container>
  </Flex>
);
