import React from 'react';
import { render } from 'react-testing-library';

import CollapsibleTable from './CollapsibleTable';

describe('StackedCard', () => {
  test('It renders', () => {
    const table = render(<CollapsibleTable />);

    expect(table).toBeTruthy();
  });
});
