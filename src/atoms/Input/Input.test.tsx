import React from 'react';
import { render } from 'react-testing-library';

import Input from './Input';

function validator(value: string) {
  if (!['Ethereum', 'Ropsten'].includes(value)) {
    return 'Invalid selection, must choose Ethereum or Ropsten';
  }
}

test('Input', () => {
  render(<Input />);

  const { container, rerender } = render(<Input validator={validator} />);
  const input = container.querySelector('input')!;
  expect(input.checkValidity()).toBeTruthy();
  rerender(<Input validator={validator} value="Invalid" />);
  expect(input.checkValidity()).toBeFalsy();
  rerender(<Input validator={validator} value="Ethereum" />);
  expect(input.checkValidity()).toBeTruthy();
});
