import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Copyable from './Copyable';

navigator.clipboard = { ...navigator.clipboard, writeText: jest.fn() };

test('Copyable', () => {
  const { getByText } = render(<Copyable>Copyable</Copyable>);
  const copyable = getByText('Copyable');
  expect(copyable).toHaveTextContent('Copyable');
  fireEvent.click(copyable);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copyable');
});
