import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Button from '.';

test('Button', () => {
  const handleClick = jest.fn();
  const { getByText, rerender } = render(
    <Button onClick={handleClick}>Button</Button>,
  );
  const button = getByText('Button');
  expect(button).toHaveAttribute('type', 'button');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
  rerender(<Button large={true} />);
});
