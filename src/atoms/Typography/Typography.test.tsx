import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Typography from '.';

test('Typography', () => {
  const { getByText, rerender } = render(<Typography>Typography</Typography>);
  expect(getByText('Typography')).toHaveTextContent('Typography');

  rerender(
    <Typography>
      <a href="https://example.com/">Link Text</a>
    </Typography>,
  );
  expect(getByText('Link Text')).toHaveTextContent('Link Text');
  const link = getByText('Link Text');
  expect(link).toHaveTextContent('Link Text');
  expect(link).toHaveAttribute('href', 'https://example.com/');
});
