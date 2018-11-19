import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Copyable from './Copyable';

navigator.clipboard = { ...navigator.clipboard, writeText: jest.fn() };

function truncate(text: string) {
  return `${text[0]}...`;
}

test('Copyable', () => {
  const { getByText } = render(
    <Copyable text="Copyable" truncate={truncate} />,
  );
  const copyable = getByText('C...');
  fireEvent.click(copyable);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copyable');
});
