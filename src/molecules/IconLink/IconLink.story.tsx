import { storiesOf } from '@storybook/react';
import React from 'react';

import IconLink from './IconLink';

import Typography from '../../Typography';

storiesOf('Molecules', module).add('IconLink', () =>
  [{}, { href: 'https://example.com/' }].map((props, index) => (
    <Typography key={index}>
      Address <IconLink icon="copy" {...props} />
    </Typography>
  )),
);
