import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Link from '.';

test('Link', () => {
  const { getByText, rerender } = render(
    <Link href="https://example.com/">Link Text</Link>,
  );
  expect(getByText('Link Text')).toHaveTextContent('Link Text');
  const link = getByText('Link Text');
  expect(link).toHaveTextContent('Link Text');
  expect(link).toHaveAttribute('href', 'https://example.com/');

  rerender(<Link href="https://example.com/">Link Text</Link>);
});
