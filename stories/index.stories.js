import { storiesOf } from '@storybook/react';
import React from 'react';
import Example from '../src';

storiesOf('Atoms', module).add('Button', () => (
  <div>
    <h1>react-loading-button Demo</h1>
    <Example />
  </div>
));
storiesOf('Molecules', module).add('Placeholder');
storiesOf('Organisms', module).add('Placeholder');
