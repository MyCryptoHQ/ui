import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Avatar from './Avatar';

test('Panel', () => {
  const { getByAltText } = render(<Avatar src="/stevebrule.jpg">Panel</Avatar>);
  const avatar = getByAltText('Avatar');

  expect(avatar.getAttribute('src')).toBe('/stevebrule.jpg');
});
