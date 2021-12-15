import type { TextareaProps as RebassTextareaProps } from '@rebass/forms/styled-components';
import { Textarea as RebassTextarea } from '@rebass/forms/styled-components';
import type { FunctionComponent } from 'react';

export type TextareaProps = RebassTextareaProps & { hasError?: boolean };

export const Textarea: FunctionComponent<TextareaProps> = ({
  hasError,
  ...props
}: TextareaProps) => (
  <RebassTextarea {...props} sx={{ borderColor: hasError ? 'error' : undefined }} />
);
