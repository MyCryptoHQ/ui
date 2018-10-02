import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';

storiesOf('Atoms', module).add('Icon', () => (
  <>
    <Icon icon={{ prefix: 'far', iconName: 'eye' }} size="3x" />
    <Icon icon="exclamation-triangle" size="3x" />
    <Icon icon="question-circle" size="3x" />
    <Icon icon="shield-alt" size="3x" />
  </>
));
