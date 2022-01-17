import type { FunctionComponent } from 'react';
import type { DefaultTheme } from 'styled-components';
import type { SpaceProps } from 'styled-system';

import type { IconType } from '../atoms';
import { Body, Flex, Icon } from '../atoms';

export type InlineMessageType = keyof DefaultTheme['colors']['banner'];

export interface InlineMessageProps extends SpaceProps {
  type: InlineMessageType;
}

const icons: { [key in InlineMessageType]: IconType } = {
  success: 'checkmark',
  info: 'info',
  action: 'waiting',
  warning: 'info',
  error: 'alert'
};

export const InlineMessage: FunctionComponent<InlineMessageProps> = ({
  type,
  children,
  ...props
}) => (
  <Flex display="inline-flex" {...props}>
    <Icon type={icons[type]} fill={`banner.${type}`} mr="1" />
    <Body color={`banner.${type}`} as="span" verticalAlign="middle" {...props}>
      {children}
    </Body>
  </Flex>
);
