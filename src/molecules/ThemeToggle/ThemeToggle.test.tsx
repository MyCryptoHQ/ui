import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import { ThemeToggle } from './ThemeToggle';

test('ThemeToggle', () => {
  const handleClick = jest.fn();
  const { getByLabelText } = render(
    <ThemeToggle handleChange={handleClick} labelLeft="On" />,
  );
  const Toggle = getByLabelText('On');
  fireEvent.click(Toggle);
  expect(handleClick).toHaveBeenCalled();
});
