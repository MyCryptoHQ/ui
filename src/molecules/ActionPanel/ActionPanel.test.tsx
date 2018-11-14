import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import ActionPanel from './ActionPanel';

test('ActionPanel', () => {
  const { getByText, rerender } = render(
    <ActionPanel action="View Example" href="https://example.com/">
      ActionPanel
    </ActionPanel>,
  );
  expect(getByText('ActionPanel')).toHaveTextContent('ActionPanel');
  const link = getByText('View Example');
  expect(link).toHaveTextContent('View Example');
  expect(link).toHaveAttribute('href', 'https://example.com/');

  rerender(
    <ActionPanel
      action="View Example"
      href="https://example.com/"
      noPadding={true}
    >
      ActionPanel
    </ActionPanel>,
  );
});
