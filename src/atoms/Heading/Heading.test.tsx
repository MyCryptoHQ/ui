import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Heading from '.';

test('Heading', () => {
  render(<Heading>Heading</Heading>);
  render(<Heading as="h2">Heading</Heading>);
});
