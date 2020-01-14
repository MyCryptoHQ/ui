/* eslint import/no-unassigned-import: "off" */
import 'mutationobserver-shim';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Tooltip from './Tooltip';

test('Tooltip', () => {
  jest.useFakeTimers();
  const tooltip = 'Hello world!';
  const { container, queryByText } = render(
    <Tooltip tooltip={tooltip}>
      <div>Hover here!</div>
    </Tooltip>,
  );
  expect(queryByText(tooltip)).toBeNull();
  fireEvent.mouseEnter(container.firstChild as HTMLElement);
  jest.advanceTimersByTime(100); // wait for Tooltip to show
  expect(queryByText(tooltip)).toBeTruthy();
  fireEvent.mouseLeave(container.firstChild as HTMLElement);
  jest.advanceTimersByTime(300); // wait for Tooltip to hide
  expect(queryByText(tooltip)).toBeNull();
});
