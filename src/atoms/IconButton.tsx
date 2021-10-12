import type { FunctionComponent } from 'react';

import { Button } from './Button';
import type { IconType } from './Icon';
import { Icon } from './Icon';

export interface IconButtonProps {
  icon: IconType;
  fill?: string;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({ icon, fill, children }) => (
  <Button variant="clear" p={children ? '3' : undefined}>
    <Icon type={icon} fill={fill} width="22px" mr={children ? '3' : undefined} />
    {children}
  </Button>
);
