import type { FunctionComponent } from 'react';
import type { ButtonProps } from 'rebass/styled-components';

import { Button } from './Button';
import type { IconType } from './Icon';
import { Icon } from './Icon';

export interface IconButtonProps {
  icon: IconType;
  fill?: string;
}

export const IconButton: FunctionComponent<IconButtonProps & ButtonProps> = ({
  icon,
  fill,
  children,
  ...props
}) => (
  <Button variant="clear" p={children ? '3' : undefined} {...props}>
    <Icon type={icon} fill={fill} width="22px" mr={children ? '3' : undefined} />
    {children}
  </Button>
);
