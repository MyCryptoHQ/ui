import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import { Typography } from '../../index';
import Accordion from './Accordion';

const ACCORDION_ITEMS = [
  {
    title: 'Is Compound safe?',
    component: <Typography>Foo bar</Typography>,
  },
];

test('Accordion', () => {
  const { getByText, rerender } = render(<Accordion items={ACCORDION_ITEMS} />);
  expect(
    getByText('Is Compound safe?').parentNode!.nextSibling,
  ).toHaveTextContent('Foo bar');

  rerender(<Accordion items={[]} />);
});
