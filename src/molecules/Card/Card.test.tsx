import React from 'react';
import { render } from 'react-testing-library';

import Card from './Card';

describe('Card', () => {
  test('It renders', () => {
    const card = render(<Card />);

    expect(card).toBeTruthy();
  });
});
