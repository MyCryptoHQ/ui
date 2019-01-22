import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import ActionPanel from './ActionPanel';

test('ActionPanel', () => {
  const { getByText, rerender } = render(
    <ActionPanel action="View Example">ActionPanel</ActionPanel>,
  );
  expect(getByText('ActionPanel')).toHaveTextContent('ActionPanel');

  rerender(
    <ActionPanel action="View Example" noPadding={true}>
      ActionPanel
    </ActionPanel>,
  );
});
