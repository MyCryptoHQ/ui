import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon, { IconName, icons } from '.';
import Text from '../Text';

storiesOf('Atoms', module).add('Icon', () =>
  icons.map(({ iconName }) => (
    <Text key={iconName} as="span">
      <Icon
        key={iconName}
        icon={iconName as IconName}
        title={iconName}
        size="3x"
      />
    </Text>
  )),
);
