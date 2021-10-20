import type { InputProps as FormInputProps } from '@rebass/forms/styled-components';
import { Input as FormInput } from '@rebass/forms/styled-components';
import type { FunctionComponent } from 'react';

import type { IconType } from '.';
import { Flex, Icon } from '.';

export interface InputProps {
  variant?: 'default' | 'simple';
  icon?: IconType;
}

export const Input: FunctionComponent<InputProps & FormInputProps> = ({
  variant = 'default',
  icon,
  ...props
}) => (
  <Flex variant={`input.${variant}`} sx={{ position: 'relative' }}>
    {icon && (
      <Icon
        type={icon}
        width="20px"
        ml="18px"
        my="auto"
        sx={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          pointerEvents: 'none'
        }}
      />
    )}
    <FormInput {...props} sx={{ textIndent: icon ? '30px' : '0' }} />
  </Flex>
);
