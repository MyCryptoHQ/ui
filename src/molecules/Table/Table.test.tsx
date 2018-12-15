import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import Table, { TableData } from './Table';

const generateTableData = (): TableData => ({
  head: ['Foo', 'Bar', 'Baz'],
  body: [['A', 'B', 'C']],
});

test('Table - can render', () => {
  const data = generateTableData();
  const table = render(<Table {...data} />);

  expect(table).toBeTruthy();
});

test('Table - throws applicable errors', () => {
  // Bad column count.
  const badColumnCountTableData = generateTableData();

  badColumnCountTableData.head = [];
  badColumnCountTableData.body = [];

  expect(() => render(<Table {...badColumnCountTableData} />)).toThrow();

  // Duplicate headings.
  const duplicateHeadingTableData = generateTableData();

  duplicateHeadingTableData.head[1] = 'Foo';

  expect(() => render(<Table {...duplicateHeadingTableData} />)).toThrow();

  // Unbalanced row.
  const unbalancedRowTableData = generateTableData();

  unbalancedRowTableData.head.pop();

  expect(() => render(<Table {...unbalancedRowTableData} />)).toThrow();

  // Untitled group.
  const untitledGroupTableData = generateTableData();

  untitledGroupTableData.groups = [
    {
      title: '',
      entries: [['D', 'E', 'F']],
    },
  ];

  expect(() => render(<Table {...untitledGroupTableData} />)).toThrow();

  // Unbalanced group row.
  const unbalancedGroupRowTableData = generateTableData();

  unbalancedGroupRowTableData.groups = [
    {
      title: 'Derp',
      entries: [['D', 'E']],
    },
  ];

  expect(() => render(<Table {...unbalancedGroupRowTableData} />)).toThrow();

  // Bad group offset.
  const badOffsetTableData = generateTableData();

  badOffsetTableData.groups = [
    {
      title: 'Derp',
      entries: [['D', 'E', 'F']],
      offset: 3,
    },
  ];

  expect(() => render(<Table {...badOffsetTableData} />)).toThrow();

  // Nonexistent sortable column.
  const nonexistentSortableColumnTableData = generateTableData();

  nonexistentSortableColumnTableData.config = {
    sortableColumn: 'Wow',
  };

  expect(() =>
    render(<Table {...nonexistentSortableColumnTableData} />),
  ).toThrow();

  // Unused hidden heading.
  const unusedHiddenHeadingTableData = generateTableData();

  unusedHiddenHeadingTableData.config = {
    hiddenHeadings: ['Hmm'],
  };

  expect(() => render(<Table {...unusedHiddenHeadingTableData} />)).toThrow();
});
