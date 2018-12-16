import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Panel from './Panel';

test('Panel', () => {
  const { getByText, rerender } = render(<Panel>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  rerender(<Panel basic={true}>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  rerender(<Panel isPlaceholder={true}>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  const handleClick = jest.fn();
  rerender(<Panel onClick={handleClick}>Panel</Panel>);
  expect(getByText('Panel')).toHaveTextContent('Panel');
  fireEvent.click(getByText('Panel'));
  expect(handleClick).toHaveBeenCalled();
});
