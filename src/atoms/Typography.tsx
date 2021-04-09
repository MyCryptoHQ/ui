import type { FunctionComponent } from 'react';

import type { TextProps } from '@atoms';
import { Text } from '@atoms';

export const Heading: FunctionComponent<TextProps> = ({ children, as = 'h1', ...props }) => (
  <Text as={as} variant="heading" {...props}>
    {children}
  </Text>
);

export const SubHeading: FunctionComponent<TextProps> = ({ children, as = 'h2', ...props }) => (
  <Text as={as} variant="subHeading" {...props}>
    {children}
  </Text>
);

export const Body: FunctionComponent<TextProps> = ({ children, as = 'p', ...props }) => (
  <Text as={as} variant="body" {...props}>
    {children}
  </Text>
);

export const Code: FunctionComponent<TextProps> = ({ children, as = 'p', ...props }) => (
  <Text as={as} variant="code" {...props}>
    {children}
  </Text>
);
