import { storiesOf } from '@storybook/react';
import React from 'react';
import IconLink from '.';

storiesOf('Molecules', module).add('IconLink', () => (
  <React.Fragment>
    Address <IconLink href="https://example.com/" icon="shield-alt" />
  </React.Fragment>
));
