import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '.';
import { ThemeProvider } from '../../styled-components';
import { light } from '../../theme';

storiesOf('Atoms', module).add(
  'Button',
  withInfo()(() => (
    <ThemeProvider theme={light}>
      <Button>Accept Cookies</Button>
    </ThemeProvider>
  )),
);
