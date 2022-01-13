export * from './Blockie';
export * from './Typography';
export * from './Address';
export * from './Button';
export * from './Badge';
export * from './Logo';
export * from './Container';
export * from './Breadcrumb';
export * from './Panel';
export * from './FooterSeparator';
export * from './Copyable';
export * from './Tag';
export * from './Textarea';

export { default as Icon } from './Icon';
export type { IconProps, IconType } from './Icon';
export { default as Spinner } from './Spinner';
export type { SpinnerProps } from './Spinner';

// Re-export as these should be used over the ones imported from rebass!
export { Box, Flex, Image, Link, Text } from 'rebass/styled-components';
export type {
  ImageProps,
  BoxProps,
  FlexProps,
  TextProps,
  HeadingProps
} from 'rebass/styled-components';

export { Label, Select } from '@rebass/forms/styled-components';
export type { LabelProps, SelectProps } from '@rebass/forms/styled-components';
