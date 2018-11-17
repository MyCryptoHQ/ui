import { storiesOf } from '@storybook/react';
import React from 'react';

import IconLink from './IconLink';

storiesOf('Molecules', module).add('IconLink', () =>
  [
    { 'aria-label': 'shield-icon' },
    { href: 'https://example.com/', 'aria-label': 'shield-icon' },
  ].map((props, index) => (
    <React.Fragment key={index}>
      Address <IconLink {...props} icon="shield-alt" />
    </React.Fragment>
  )),
);
