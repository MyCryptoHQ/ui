import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Button from '.';

test('Button', () => {
  const handleClick = jest.fn();
  const { container } = render(<Button onClick={handleClick}>Button</Button>);
  const button = container.firstChild as HTMLElement;
  expect(button).toHaveAttribute('type', 'button');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
  render(<Button large={true} />);
});
