import { storiesOf } from '@storybook/react';
import React from 'react';

import { Switch } from 'src/atoms';

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
    <React.StrictMode key={index}>
      <Switch {...props} />
    </React.StrictMode>
  )),
);
