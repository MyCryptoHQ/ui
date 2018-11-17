import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Panel from './Panel';

test('Panel', () => {
  const { getByText, rerender } = render(<Panel>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  rerender(<Panel basic={true}>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  rerender(<Panel isPlaceholder={true}>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
});
