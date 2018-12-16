import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Drawer from './Drawer';

test('Drawer', () => {
  const { getByText, getByAltText } = render(
    <Drawer footer="Footer" headerIcon="eye">
      Drawer
    </Drawer>,
  );
  const button = getByAltText('exit-button');
  fireEvent.click(button);
  expect(getByText('Drawer')).toHaveTextContent('Drawer');
});
