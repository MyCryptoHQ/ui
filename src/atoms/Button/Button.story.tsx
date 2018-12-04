import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { IconName } from 'atoms';
import Button from './Button';

storiesOf('Atoms', module).add('Button', () =>
  [
    {},
    { large: true },
    { secondary: true },
    { basic: true },
    { icon: 'question-circle' as IconName },
  ].map((props, index) => (
    <Fragment key={index}>
      <Button {...props}>Button</Button>{' '}
    </Fragment>
  )),
);
