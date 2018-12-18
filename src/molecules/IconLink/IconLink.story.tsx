import { storiesOf } from '@storybook/react';
import React from 'react';

import IconLink from './IconLink';

storiesOf('Molecules', module).add('IconLink', () =>
  [{}, { href: 'https://example.com/' }].map((props, index) => (
    <React.Fragment key={index}>
      Address <IconLink icon="copy" {...props} />
    </React.Fragment>
  )),
);
