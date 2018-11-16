import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import IconLink from '.';

test('IconLink', () => {
  const handleClick = jest.fn();
  const { getByLabelText, rerender } = render(
    <IconLink
      href="https://example.com/"
      icon="shield-alt"
      aria-label="shield-button"
    />,
  );
  const iconLink = getByLabelText('shield-button');
  expect(iconLink).toHaveAttribute('href', 'https://example.com/');

  rerender(
    <IconLink
      icon="shield-alt"
      aria-label="shield-button"
      handleClick={handleClick}
    />,
  );
  const iconButton = getByLabelText('shield-button');
  expect(iconButton).toHaveAttribute('type', 'button');
  fireEvent.click(iconButton);
  expect(handleClick).toHaveBeenCalled();
});
