import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { Switch } from 'src/atoms';
storiesOf('Atoms', module).add('Switch', () =>
  [
    {
      handleChange: () => console.log('change detected'),
      labelLeft: 'On',
      labelRight: 'Off',
      checked: true,
    },
  ].map((props, index) => (
    <Fragment key={index}>
      <Switch {...props} />
    </Fragment>
  )),
);
