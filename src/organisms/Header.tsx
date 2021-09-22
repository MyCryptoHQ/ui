import type { ComponentType, FunctionComponent } from 'react';
import styled from 'styled-components';

import { Box, Container, Flex } from '../atoms';

export interface HeaderProps {
  leftComponents?: ComponentType[];
  centerComponents?: ComponentType[];
  rightComponents?: ComponentType[];
}

export const HeaderWrapper = styled(Flex).attrs({ alignItems: 'center' })``;
export const HeaderSection = styled(Flex).attrs({ justifyContent: 'center', flex: '1' })`
  :first-child > ${HeaderWrapper} {
    margin-right: auto;
  }

  :last-child > ${HeaderWrapper} {
    margin-left: auto;
  }
`;

export const Header: FunctionComponent<HeaderProps> = ({
  leftComponents,
  centerComponents,
  rightComponents
}) => (
  <Box backgroundColor="header.background">
    <Container display="flex" flexDirection="column" justifyContent="center" minHeight="90px">
      <Flex>
        <HeaderSection>
          <HeaderWrapper mx="-16px">
            {leftComponents?.map((component, index) => (
              <Box key={`left-${index}`}>{component}</Box>
            ))}
          </HeaderWrapper>
        </HeaderSection>
        <HeaderSection>
          <HeaderWrapper>
            {centerComponents?.map((component, index) => (
              <Box key={`center-${index}`}>{component}</Box>
            ))}
          </HeaderWrapper>
        </HeaderSection>
        <HeaderSection>
          <HeaderWrapper mr="-16px">
            {rightComponents?.map((component, index) => (
              <Box key={`right-${index}`}>{component}</Box>
            ))}
          </HeaderWrapper>
        </HeaderSection>
      </Flex>
    </Container>
  </Box>
);
