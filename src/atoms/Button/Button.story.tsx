import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '.';

storiesOf('Atoms', module).add('Button', () => (
  <>
    <Button>Button</Button> <Button disabled={true}>Button</Button>{' '}
    <Button large={true}>Button</Button>
  </>
));
