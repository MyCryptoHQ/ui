import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Address from './Address';

function truncate(text: string) {
  return `${text[0]}...`;
}

test('Copyable', () => {
  render(<Address address="Address" title="Address" truncate={truncate} />);
});
