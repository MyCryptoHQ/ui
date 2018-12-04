import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import { Switch } from 'atoms';
test('Switch', () => {
  const handleClick = jest.fn();
  const { getByLabelText } = render(
    <Switch handleChange={handleClick} labelLeft="On" />,
  );
  const Toggle = getByLabelText('On');
  fireEvent.click(Toggle);
  expect(handleClick).toHaveBeenCalled();
});
