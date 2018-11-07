import { storiesOf } from '@storybook/react';
import React from 'react';
import Link from '.';

storiesOf('Atoms', module).add('Link', () => (
  <Link href="https://example.com">Link Text</Link>
));
