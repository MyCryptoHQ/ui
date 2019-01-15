import { storiesOf } from '@storybook/react';
import React from 'react';

import { icons } from 'src/atoms';
import Button from './Button';

storiesOf('Atoms', module).add('Button', () =>
  [
    {},
    { large: true },
    { secondary: true },
    { basic: true },
    { icon: 'copy' as keyof typeof icons },
  ].map((props, index) => (
    <React.StrictMode key={index}>
      <Button {...props}>Button</Button>{' '}
    </React.StrictMode>
  )),
);
