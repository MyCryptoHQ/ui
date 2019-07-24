import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Tooltip from './Tooltip';

test('Tooltip', () => {
  const { getByText, queryByText } = render(
    <Tooltip tooltip="Hello world!">
      <div>Hover here!</div>
    </Tooltip>,
  );
  const hoverable = getByText('Hover here!');
  expect(queryByText('Hello world!')).toBeNull();
  fireEvent.mouseOver(hoverable);
  expect(queryByText('Hello world!')).toBeTruthy();
  fireEvent.mouseOut(hoverable);
  expect(queryByText('Hello world!')).toBeNull();
});
