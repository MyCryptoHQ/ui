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
  const { rerender } = render(<Input value="" validator={validator} />);
  rerender(<Input value="Invalid" validator={validator} />);
  rerender(<Input value="Ethereum" validator={validator} />);
});
