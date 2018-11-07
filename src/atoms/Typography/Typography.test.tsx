import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Typography from '.';

test('Typography', () => {
  const { getByText } = render(<Typography>Typography</Typography>);
  expect(getByText('Typography')).toHaveTextContent('Typography');
});
