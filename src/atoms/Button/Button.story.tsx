import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '.';

storiesOf('Atoms', module).add(
  'Button',
  withInfo()(() => <Button>Accept Cookies</Button>),
);
