import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon, { IconName, icons } from '.';

storiesOf('Atoms', module).add('Icon', () => (
  <>
    {icons.map(({ iconName }) => (
      <Icon
        key={iconName}
        icon={iconName as IconName}
        title={iconName}
        size="3x"
      />
    ))}
  </>
));
