import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { Switch } from './Switch';

storiesOf('Atoms', module).add('Switch', () =>
  [
    {
      handleChange: () => console.log('change detected'),
      labelLeft: 'Off',
      labelRight: 'On',
      checked: true,
    },
    {
      greyable: true,
      handleChange: () => console.log('change detected'),
      labelLeft: 'Off',
      labelRight: 'On',
      checked: false,
    },
  ].map((props, index) => (
    <Fragment key={index}>
      <Switch {...props} />
    </Fragment>
  )),
);
