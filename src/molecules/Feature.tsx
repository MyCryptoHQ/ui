import type { FunctionComponent, ReactNode } from 'react';

import type { FlexProps } from '../atoms';
import { Box, Flex, Image } from '../atoms';

export interface FeatureProps {
  icon: string;
  text: ReactNode;
}

export const Feature: FunctionComponent<FeatureProps & FlexProps> = ({ icon, text, ...props }) => (
  <Flex
    flexDirection="row"
    justifyContent={{ _: 'flex-start', md: 'flex-end' }}
    px="4"
    py="3"
    maxWidth={['100%', '315px']}
    height={{ _: 'auto', md: '80px' }}
    backgroundColor="feature.background"
    sx={{ borderRadius: 'feature' }}
    {...props}>
    <Box minWidth="80px">
      <Image src={icon} height="80px" mt="-35px" />
    </Box>
    <Flex flexDirection={{ _: 'row', md: 'column' }} pl="3">
      {text}
    </Flex>
  </Flex>
);
