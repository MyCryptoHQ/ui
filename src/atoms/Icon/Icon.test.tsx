import React from 'react';
import { render } from 'react-testing-library';

import Icon, { icons } from './Icon';

test('Icon', () => {
  for (const icon of Object.keys(icons)) {
    render(<Icon icon={icon as keyof typeof icons} />);
  }
});
