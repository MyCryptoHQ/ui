import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading from '.';

storiesOf('Atoms', module).add('Heading', () => (
  <>
    <Heading>Heading level 1</Heading>
    <Heading variant="h2">Heading level 2</Heading>
  </>
));
