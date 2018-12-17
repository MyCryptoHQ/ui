import React from 'react';
import { render } from 'react-testing-library';

import CollapsibleTable, { CollapsibleTableData } from './CollapsibleTable';

const generateTableData = (): CollapsibleTableData => ({
  head: ['Foo', 'Bar', 'Baz'],
  body: [['A', 'B', 'C']],
  config: {
    primaryColumn: 'Foo',
  },
});

describe('StackedCard', () => {
  beforeEach(() => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
    });
  });

  test('It renders', () => {
    const table = render(<CollapsibleTable {...generateTableData()} />);

    expect(table).toBeTruthy();
  });
});
