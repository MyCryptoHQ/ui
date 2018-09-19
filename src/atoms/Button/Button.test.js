import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import Button from '.';

test('Button', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button className="extra" onClick={handleClick}>
      Accept Cookies
    </Button>
  );
  const button = getByText('Accept Cookies');
  expect(button).toHaveAttribute('class', 'button extra');
  expect(button).toHaveAttribute('type', 'button');
  expect(button).toHaveTextContent('Accept Cookies');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
