import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Dropdown from './Dropdown';

test('Dropdown', () => {
  const items = new Set(['Ethereum', 'Ropsten']);
  const handleChange = jest.fn();
  const { getByText } = render(
    <Dropdown items={items} onChange={handleChange} />,
  );
  fireEvent.click(getByText('Ethereum'));
  expect(handleChange).toHaveBeenCalledWith(0);
});
