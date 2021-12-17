import type { InputProps as FormInputProps } from '@rebass/forms/styled-components';
import { Input as FormInput } from '@rebass/forms/styled-components';
import type { FunctionComponent } from 'react';

import type { IconType } from '../atoms';
import { Flex, Icon } from '../atoms';

export interface InputProps {
  hasError?: boolean;
  variant?: 'default' | 'simple';
  icon?: IconType;
}

export const Input: FunctionComponent<InputProps & FormInputProps> = ({
  variant = 'default',
  hasError,
  icon,
  ...props
}) => (
  <Flex
    variant={`input.${variant}`}
    sx={{ position: 'relative', borderColor: hasError ? 'error' : undefined }}>
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
    <FormInput {...props} sx={{ textIndent: icon ? '30px' : '0', border: 'none' }} />
  </Flex>
);
