import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Dropdown from './Dropdown';

test('Dropdown', () => {
  render(<Dropdown items={new Set(['Ethereum', 'Ropsten'])} />);
});
