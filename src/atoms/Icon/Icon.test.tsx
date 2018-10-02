import React from 'react';
import { render } from 'react-testing-library';
import Icon from '.';

test('Icon', () => {
  render(<Icon icon="shield-alt" />);
});
