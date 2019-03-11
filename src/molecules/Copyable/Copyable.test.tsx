import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Copyable from './Copyable';

// @ts-ignore
navigator.clipboard = { writeText: jest.fn() };

function truncate(text: string) {
  return `${text[0]}...`;
}

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

test('Copyable', async () => {
  const { getByText, rerender } = render(
    <Copyable text="Copyable" truncate={truncate} />,
  );
  let copyable = getByText('C...');
  fireEvent.click(copyable);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copyable');
  rerender(<Copyable text="Copyable" />);
  copyable = getByText('Copyable');
  fireEvent.click(copyable);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copyable');
  // Allow setTimeout to play out.
  await sleep(1000);
});
