import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import List from './List';

test('List', () => {
  const children = ['Foo', 'Bar', 'Baz'];

  const { container, rerender } = render(<List>{children}</List>);
  for (const item of children) {
    expect(container).toHaveTextContent(item);
  }
  expect(container.querySelector('ul')).toBeTruthy();
  expect(container.querySelector('li')).toBeTruthy();

  rerender(<List ordered={true}>{children}</List>);
  expect(container.querySelector('ol')).toBeTruthy();
  expect(container.querySelector('li')).toBeTruthy();

  rerender(<List basic={true}>{children}</List>);
  expect(container.querySelector('section')).toBeTruthy();
  expect(container.querySelector('div')).toBeTruthy();

  rerender(<List group={true}>{children}</List>);
  expect(container.querySelector('section')).toBeTruthy();
  expect(container.querySelector('div')).toBeTruthy();

  rerender(<List inline={true}>{children}</List>);
  expect(container.querySelector('ul')).toBeTruthy();
  expect(container.querySelector('li')).toBeTruthy();
});
