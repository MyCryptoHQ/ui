import { storiesOf } from '@storybook/react';
import React from 'react';

import Typography from 'Typography';
import Icon, { IconName, icons } from './Icon';

storiesOf('Atoms', module).add('Icon', () =>
  icons.map(({ iconName }) => (
    <Typography key={iconName} as="span">
      <Icon
        key={iconName}
        icon={iconName as IconName}
        title={iconName}
        size="3x"
      />
    </Typography>
  )),
);
