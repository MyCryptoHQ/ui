import 'jest-dom/extend-expect';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Table, {
  ColumnDirections,
  defaultColumnSort,
  getSortedRows,
  TableData,
} from './Table';

const generateTableData = (): TableData => ({
  head: ['Foo', 'Bar', 'Baz'],
  body: [['A', 'B', 'C']],
});

describe('Table', () => {
  test('It renders', () => {
    const data = generateTableData();
    const table = render(<Table {...data} />);

    expect(table).toBeTruthy();
  });

  test('It collapses groups', () => {
    const data = generateTableData();

    data.body = [];
    data.groups = [
      {
        title: 'Derp',
        entries: [['D', 'E', 'F']],
      },
    ];

    const { queryByText } = render(<Table {...data} />);

    expect(queryByText('F')).toBeTruthy();

    fireEvent.click(queryByText('Derp')!);

    expect(queryByText('F')).toBeNull();

    fireEvent.click(queryByText('Derp')!);

    expect(queryByText('F')).toBeTruthy();
  });

  test('It hides headings', () => {
    const data = generateTableData();

    data.config = {
      hiddenHeadings: ['Foo'],
    };

    const { getByText } = render(<Table {...data} />);

    expect(getByText('Foo')).toHaveStyle(
      'position: fixed; top: -9999em; left: -9999em;',
    );
  });

  describe('Column sorting', () => {
    test('It sorts columns using the default sortFunction', () => {
      const data = generateTableData();

      data.body.push(['B', 'B', 'C']);
      data.groups = [
        {
          title: 'Derp',
          entries: [['C', 'B', 'C']],
        },
      ];
      data.config = {
        sortableColumn: 'Foo',
      };

      const { getByTestId, getByText } = render(<Table {...data} />);

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('A');

      fireEvent.click(getByText('Bar'));

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('A');

      fireEvent.click(getByTestId('sortable-column-heading'));

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('B');

      fireEvent.click(getByTestId('sortable-column-heading'));

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('A');
    });

    test('It sorts columns with a custom sortFunction', () => {
      const data = generateTableData();

      data.head = ['Foo'];
      data.body = [
        [
          <div key={0}>
            <div>
              <div>A</div>
            </div>
          </div>,
        ],
        [
          <div key={0}>
            <div>
              <div>B</div>
            </div>
          </div>,
        ],
      ];
      data.config = {
        sortableColumn: 'Foo',
        sortFunction: (a: any, b: any): number => {
          const aText = a.props.children.props.children.props.children;
          const bText = b.props.children.props.children.props.children;

          return aText.localeCompare(bText);
        },
      };

      const { getByTestId } = render(<Table {...data} />);

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('A');

      fireEvent.click(getByTestId('sortable-column-heading'));

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('B');

      fireEvent.click(getByTestId('sortable-column-heading'));

      expect(getByTestId('ungrouped-0-0')).toHaveTextContent('A');
    });
  });

  describe('Error handling', () => {
    test('Bad column count', () => {
      const data = generateTableData();

      data.head = [];
      data.body = [];

      expect(() => render(<Table {...data} />)).toThrow(
        'A <Table /> must have at least one column.',
      );
    });

    test('Duplicate headings', () => {
      const data = generateTableData();

      data.head[1] = 'Foo';

      expect(() => render(<Table {...data} />)).toThrow(
        'A <Table /> cannot have duplicate non-empty headings -- found multiple headings called "Foo".',
      );
    });

    test('Unbalanced row', () => {
      const data = generateTableData();

      data.head.pop();

      expect(() => render(<Table {...data} />)).toThrow(
        `Unbalanced row found in <Table /> at position 0.`,
      );
    });

    test('Untitled group', () => {
      const data = generateTableData();

      data.groups = [
        {
          title: '',
          entries: [['D', 'E', 'F']],
        },
      ];

      expect(() => render(<Table {...data} />)).toThrow(
        `Untitled group in <Table /> -- all table groups must have a title.`,
      );
    });

    test('Unbalanced group row', () => {
      const data = generateTableData();

      data.groups = [
        {
          title: 'Derp',
          entries: [['D', 'E']],
        },
      ];

      expect(() => render(<Table {...data} />)).toThrow(
        `Unbalanced row in group "Derp" found in <Table /> at position 0.`,
      );
    });

    test('Bad group offset', () => {
      const data = generateTableData();

      data.groups = [
        {
          title: 'Derp',
          entries: [['D', 'E', 'F']],
          offset: 3,
        },
      ];

      expect(() => render(<Table {...data} />)).toThrow(
        `Bad offset in group "Derp" found in <Table />.`,
      );
    });

    test('Nonexistent sortable column', () => {
      const data = generateTableData();

      data.config = {
        sortableColumn: 'Wow',
      };

      expect(() => render(<Table {...data} />)).toThrow(
        `Nonexistent sortable column provided to <Table />.`,
      );
    });

    test('Unused hidden heading', () => {
      const data = generateTableData();

      data.config = {
        hiddenHeadings: ['Hmm'],
      };

      expect(() => render(<Table {...data} />)).toThrow(
        `Unused heading Hmm found in hiddenHeadings in <Table />`,
      );
    });
  });
});

describe('getSortedRows', () => {
  const head = ['A', 'B', 'C'];
  const body = [['FooA', 'Bar', 'Baz'], ['FooB', 'Bar', 'Baz']];
  const config = {
    sortableColumn: 'A',
    sortFunction: defaultColumnSort,
  };

  test('Forward direction', () => {
    const sorted = getSortedRows(head, body, config, ColumnDirections.Forward);

    expect(sorted).toEqual(body);
  });

  test('Reverse direction', () => {
    const sorted = getSortedRows(head, body, config, ColumnDirections.Reverse);

    expect(sorted).toEqual(body.reverse());
  });
});

describe('defaultColumnSort', () => {
  test('Happy path', () => {
    const columnA = <React.Fragment>Foo</React.Fragment>;
    const columnB = <React.Fragment>Bar</React.Fragment>;

    expect(defaultColumnSort(columnA, columnB)).toEqual(1);
  });

  test('Error case -- doubly nested', () => {
    const columnA = (
      <div>
        <div>Foo</div>
      </div>
    );
    const columnB = (
      <div>
        <div>Bar</div>
      </div>
    );

    expect(() => defaultColumnSort(columnA, columnB))
      .toThrow(`The default column sort of <Table /> expects either a string or a single-nested React element for cell contents.
    For anything else, provide a custom sortFunction in the config.`);
  });
});
