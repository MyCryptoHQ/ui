import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Panel from '.';

test('Panel', () => {
  const { getByText, rerender } = render(<Panel>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  rerender(<Panel basic={true}>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
});
