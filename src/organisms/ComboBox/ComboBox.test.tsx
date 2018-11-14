import React from 'react';
import { render } from 'react-testing-library';

import ComboBox from './ComboBox';

test('ComboBox', async () => {
  const { rerender } = render(<ComboBox items={new Set(['a', 'b', 'ab'])} />);
  rerender(<ComboBox items={new Set(['a', 'b', 'ab'])} value="a" />);
});
