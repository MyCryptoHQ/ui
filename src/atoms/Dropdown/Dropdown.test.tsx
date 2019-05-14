import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Dropdown from './Dropdown';

test('Dropdown', () => {
  const { container } = render(
    <Dropdown items={new Set(['Ethereum', 'Ropsten'])} />,
  );
  expect(container).toHaveTextContent('Ethereum');
  expect(container).toHaveTextContent('Ropsten');
});
