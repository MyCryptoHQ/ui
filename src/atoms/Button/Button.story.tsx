import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import Button from './Button';

storiesOf('Atoms', module).add('Button', () =>
  [{}, { large: true }, { secondary: true }, { basic: true }].map(
    (props, index) => (
      <Fragment key={index}>
        <Button {...props}>Button</Button>{' '}
      </Fragment>
    ),
  ),
);
