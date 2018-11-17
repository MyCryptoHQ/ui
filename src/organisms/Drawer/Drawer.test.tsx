import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Drawer from './Drawer';

test('Drawer', () => {
  const { getByText } = render(<Drawer>Drawer</Drawer>);
  expect(getByText('Drawer')).toHaveTextContent('Drawer');
});
