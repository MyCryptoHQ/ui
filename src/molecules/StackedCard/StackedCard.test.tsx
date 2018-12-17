import React from 'react';
import { render } from 'react-testing-library';

import StackedCard from './StackedCard';

const generateCardData = () => ({
  heading: 'Derp',
  entries: [['Foo', 'Bar']],
});

describe('StackedCard', () => {
  test('It renders', () => {
    const card = render(<StackedCard {...generateCardData()} />);

    expect(card).toBeTruthy();
  });
});
