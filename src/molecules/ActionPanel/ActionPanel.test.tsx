import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import ActionPanel from '.';

test('ActionPanel', () => {
  const { getByText } = render(
    <ActionPanel action="View Example" href="https://example.com/">
      ActionPanel
    </ActionPanel>,
  );
  expect(getByText('ActionPanel')).toHaveTextContent('ActionPanel');
  const link = getByText('View Example');
  expect(link).toHaveTextContent('View Example');
  expect(link).toHaveAttribute('href', 'https://example.com/');
});
