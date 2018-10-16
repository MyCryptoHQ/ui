import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon, { IconName, icons } from '.';
import Text from '../Text';

const InlineText = Text.withComponent('span');

storiesOf('Atoms', module).add('Icon', () =>
  icons.map(({ iconName }) => (
    <InlineText key={iconName}>
      <Icon
        key={iconName}
        icon={iconName as IconName}
        title={iconName}
        size="3x"
      />
    </InlineText>
  )),
);
