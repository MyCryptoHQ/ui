import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'Typography';
import Icon, { icons } from './Icon';

storiesOf('Atoms', module).add('Icon', () => (
  <Typography>
    {Object.keys(icons).map(icon => (
      <Icon key={icon} icon={icon as keyof typeof icons} />
    ))}
  </Typography>
));
