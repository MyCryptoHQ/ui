import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import Link from '.';

storiesOf('Atoms', module).add('Link', () => (
  <Link href="#">{faker.lorem.paragraphs()}</Link>
));
