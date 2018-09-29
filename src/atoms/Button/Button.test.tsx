import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Button from '.';

test('Button', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Button</Button>);
  const button = getByText('Button');
  expect(button).toHaveAttribute('type', 'button');
  expect(button).toHaveTextContent('Button');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
