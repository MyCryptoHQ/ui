import type { FunctionComponent } from 'react';
import type { DefaultTheme } from 'styled-components';

import type { IconType, TextProps } from '../atoms';
import { Body, Flex, Icon } from '../atoms';
import { omitMarginProps } from '../utils';

export type InlineMessageType = keyof DefaultTheme['colors']['banner'];

export interface InlineMessageProps {
  type: InlineMessageType;
}

const icons: { [key in InlineMessageType]: IconType } = {
  success: 'checkmark',
  info: 'info',
  action: 'waiting',
  warning: 'info',
  error: 'alert'
};

export const InlineMessage: FunctionComponent<InlineMessageProps & TextProps> = ({
  type,
  children,
  ...props
}) => (
  <Flex display="inline-flex" {...props}>
    <Icon type={icons[type]} fill={`banner.${type}`} mr="1" minWidth="15px" />
    <Body color={`banner.${type}`} as="span" verticalAlign="middle" {...omitMarginProps(props)}>
      {children}
    </Body>
  </Flex>
);
