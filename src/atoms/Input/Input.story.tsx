import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from '.';

storiesOf('Atoms', module).add('Input', () => (
  <Input placeholder="New address" />
));
