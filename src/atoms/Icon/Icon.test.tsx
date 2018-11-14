import React from 'react';
import { render } from 'react-testing-library';

import Icon, { IconName, icons } from './Icon';

test('Icon', () => {
  for (const { iconName } of icons) {
    render(<Icon icon={iconName as IconName} />);
  }
});
