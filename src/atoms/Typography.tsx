import React from 'react';

import type { HeadingProps, TextProps } from '.';
import { Text } from '.';

export const Heading = ({ children, as = 'h1', ...props }: HeadingProps) => (
  <Text as={as} variant="heading" {...props}>
    {children}
  </Text>
);

export const SubHeading = ({ children, as = 'h2', ...props }: TextProps) => (
  <Text as={as} variant="subHeading" {...props}>
    {children}
  </Text>
);

export const Body = ({ children, as = 'p', ...props }: TextProps) => (
  <Text as={as} variant="body" {...props}>
    {children}
  </Text>
);

export const Code = ({ children, as = 'p', ...props }: TextProps) => (
  <Text as={as} variant="body" fontFamily="mono" {...props}>
    {children}
  </Text>
);
