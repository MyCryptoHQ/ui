import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '.';

storiesOf('Atoms', module).add('Button', () =>
  [{}, { disabled: true }, { large: true }].reduce(
    (children, props) => (
      <>
        {children} <Button {...props}>Button</Button>
      </>
    ),
    <></>,
  ),
);
