import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import {
  CollapsibleTable,
  CollapsibleTableData,
  transformRowToCards,
  transformTableToCards,
} from './CollapsibleTable';

const generateTableData = (): CollapsibleTableData => ({
  head: ['Foo', 'Bar', 'Baz'],
  body: [['A', 'B', 'C']],
  config: {
    primaryColumn: 'Foo',
  },
});

describe('transformRowToCards', () => {
  test('It correctly transforms a table row into StackedCard data', () => {
    const head = ['Foo', 'Bar', 'Baz'];
    const row = ['A', 'B', 'C'];
    const primaryColumnIndex = 0;
    const iconColumns = ['Baz'];

    expect(
      transformRowToCards(row, head, primaryColumnIndex, iconColumns),
    ).toEqual({
      heading: 'A',
      entries: [['Bar', 'B']],
      icons: ['C'],
    });
  });
});

describe('transformTableToCards', () => {
  test('It correctly transforms a table into StackedCard data (no groups)', () => {
    const head = ['Foo', 'Bar', 'Baz'];
    const body = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    ];
    const config = {
      primaryColumn: 'Foo',
      iconColumns: ['Baz'],
    };

    expect(
      transformTableToCards({
        head,
        body,
        config,
      }),
    ).toEqual([
      {
        heading: 'A',
        entries: [['Bar', 'B']],
        icons: ['C'],
      },
      {
        heading: 'D',
        entries: [['Bar', 'E']],
        icons: ['F'],
      },
    ]);
  });

  test('It correctly transforms a table into StackedCard data (groups, not collapsed)', () => {
    const head = ['Foo', 'Bar', 'Baz'];
    const body = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    ];
    const groups = [
      {
        title: 'Derp',
        entries: [['G', 'H', 'I']],
      },
    ];
    const config = {
      primaryColumn: 'Foo',
      iconColumns: ['Baz'],
    };

    expect(
      transformTableToCards({
        head,
        body,
        groups,
        config,
      }),
    ).toEqual([
      {
        heading: 'A',
        entries: [['Bar', 'B']],
        icons: ['C'],
      },
      {
        heading: 'D',
        entries: [['Bar', 'E']],
        icons: ['F'],
      },
      'Derp',
      {
        heading: 'G',
        entries: [['Bar', 'H']],
        icons: ['I'],
      },
    ]);
  });

  test('It correctly transforms a table into StackedCard data (groups, collapsed)', () => {
    const head = ['Foo', 'Bar', 'Baz'];
    const body = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    ];
    const groups = [
      {
        title: 'Derp',
        entries: [['G', 'H', 'I']],
      },
    ];
    const config = {
      primaryColumn: 'Foo',
      iconColumns: ['Baz'],
    };
    const collapsedGroups = {
      Derp: true,
    };

    expect(
      transformTableToCards(
        {
          head,
          body,
          groups,
          config,
        },
        collapsedGroups,
      ),
    ).toEqual([
      {
        heading: 'A',
        entries: [['Bar', 'B']],
        icons: ['C'],
      },
      {
        heading: 'D',
        entries: [['Bar', 'E']],
        icons: ['F'],
      },
      'Derp',
    ]);
  });
});

describe('CollapsibleTable', () => {
  test('It renders in Desktop mode', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
    });

    const { getByText } = render(
      <CollapsibleTable breakpoint={450} {...generateTableData()} />,
    );

    // In Desktop mode, the primaryColumn exists in the table head.
    expect(getByText('Foo')).toBeTruthy();
    expect(getByText('A')).toBeTruthy();
  });

  test('It renders in Mobile mode', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
    });

    const { queryByText } = render(
      <CollapsibleTable breakpoint={450} {...generateTableData()} />,
    );

    // In Mobile mode, the primaryColumn does not show the heading, only the value.
    expect(queryByText('Foo')).toBeFalsy();
    expect(queryByText('A')).toBeTruthy();
  });

  test('It correctly renders icons', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
    });

    const data = generateTableData();

    data.config.iconColumns = ['Baz'];

    const { getByText } = render(
      <CollapsibleTable breakpoint={450} {...data} />,
    );
    const cIcon = getByText('C');

    // Icons are rendered inside of a <div />
    expect(cIcon.nodeName).toEqual('DIV');
  });

  test('It correctly renders groups', () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
    });

    const data = generateTableData();

    data.groups = [
      {
        title: 'Derp',
        entries: [['D', 'E', 'F']],
      },
    ];

    const { queryByText, getByRole } = render(
      <CollapsibleTable breakpoint={450} {...data} />,
    );
    const groupHeading = getByRole('button');

    expect(groupHeading.textContent).toContain('Derp');
    expect(queryByText('D')).toBeTruthy();
    expect(queryByText('E')).toBeTruthy();
    expect(queryByText('F')).toBeTruthy();

    fireEvent.click(groupHeading);
    expect(queryByText('D')).toBeFalsy();
    expect(queryByText('E')).toBeFalsy();
    expect(queryByText('F')).toBeFalsy();
  });

  describe('Resizing', () => {
    test('Desktop-to-Mobile', () => {
      window.matchMedia = jest.fn().mockReturnValue({
        matches: false,
      });

      const { queryByText } = render(
        <CollapsibleTable breakpoint={450} {...generateTableData()} />,
      );

      expect(queryByText('Foo')).toBeTruthy();

      window.matchMedia = jest.fn().mockReturnValue({
        matches: true,
      });

      window.dispatchEvent(new Event('resize'));

      expect(queryByText('Foo')).toBeFalsy();
    });

    test('Mobile-to-Desktop', () => {
      window.matchMedia = jest.fn().mockReturnValue({
        matches: true,
      });

      const { queryByText } = render(
        <CollapsibleTable breakpoint={450} {...generateTableData()} />,
      );

      expect(queryByText('Foo')).toBeFalsy();

      window.matchMedia = jest.fn().mockReturnValue({
        matches: false,
      });

      window.dispatchEvent(new Event('resize'));

      expect(queryByText('Foo')).toBeTruthy();
    });
  });
});
