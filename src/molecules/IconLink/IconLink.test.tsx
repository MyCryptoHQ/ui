import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import IconLink from './IconLink';

test('IconLink', () => {
  const handleClick = jest.fn();
  const { container, rerender } = render(
    <IconLink href="https://example.com/" icon="copy" />,
  );
  const iconLink = container.querySelector('a');
  expect(iconLink).toHaveAttribute('href', 'https://example.com/');

  rerender(<IconLink icon="copy" handleClick={handleClick} />);
  const iconButton = container.querySelector('button')!;
  expect(iconButton).toHaveAttribute('type', 'button');
  fireEvent.click(iconButton);
  expect(handleClick).toHaveBeenCalled();
});
