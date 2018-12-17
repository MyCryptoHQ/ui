import React from 'react';
import { render } from 'react-testing-library';

import { TableData } from 'molecules';
import CollapsibleTable from './CollapsibleTable';

const generateTableData = (): TableData => ({
  head: ['Foo', 'Bar', 'Baz'],
  body: [['A', 'B', 'C']],
});

describe('StackedCard', () => {
  test('It renders', () => {
    const table = render(<CollapsibleTable {...generateTableData()} />);

    expect(table).toBeTruthy();
  });
});
