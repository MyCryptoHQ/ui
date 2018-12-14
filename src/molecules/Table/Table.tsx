import styled from '_styled-components';
import React, { Component } from 'react';

import { Icon } from 'atoms';
import Typography from 'Typography';

export interface TableGroup {
  title: string;
  entries: any[][];
  offset?: number;
}

export interface TableConfig {
  sortableColumn: string | null;
  sortFunction?(a: any, b: any): number;
}

export interface TableContent {
  body: any[][];
  groups?: TableGroup[];
}

export interface Table extends TableContent {
  head: any[];
  config?: TableConfig;
}

export enum ColumnDirections {
  Forward,
  Reverse,
}

type Props = Table;

interface State {
  collapsedGroups: {
    [title: string]: true;
  };
  sortedColumnDirection: ColumnDirections;
}

const sharedCellProperties = `
  min-width: 1em;
  padding: 1em 1em 1em 0;
`;

const TableHead = styled.tr`
  border-top: 0.0625em solid ${props => props.theme.tableHeadBorder};
  border-bottom: 0.0625em solid ${props => props.theme.tableHeadBorder};
  background: ${props => props.theme.tableHeadBackground};
` as any;

const TableHeading = styled(Typography)`
  ${sharedCellProperties}
  color: ${props => props.theme.headline};
  text-align: left;
  font-size: 0.875em;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  cursor: ${(props: any) => (props.isSortable ? 'pointer' : 'inherit')}
` as any;

TableHeading.defaultProps = {
  as: 'th',
};

const TableRow = styled.tr`
  border-bottom: 0.0625em solid ${props => props.theme.tableHeadBorder};
` as any;

const TableGroupHead = styled(TableRow)`
  text-transform: uppercase;
  cursor: pointer;
`;

TableGroupHead.defaultProps = {
  as: TableRow,
  basic: true,
};

const TableCaret = styled(Icon)`
  margin-left: 0.5em;
`;

const TableCell = styled(Typography)`
  ${sharedCellProperties};
` as any;

TableCell.defaultProps = {
  as: 'td',
};

const defaultColumnSort = (a: any, b: any): number =>
  a.toString().localeCompare(b.toString());

const getSortedRows = (
  head: any[],
  body: any[][],
  config: TableConfig,
  sortedColumnDirection: ColumnDirections,
): any[][] => {
  const { sortableColumn, sortFunction = defaultColumnSort } = config;
  // Determine which column to order.
  const sortableColumnIndex = head.indexOf(sortableColumn);
  // Create an array containing the data from each row in the specified column.
  const sortableColumnEntries = body.map(row => row[sortableColumnIndex]);
  // Rearrange that array based on the selected sort.
  const sortedColumnEntries = [...sortableColumnEntries].sort(sortFunction);
  // Translate the new order into the indexes of the original order to determine the change.
  const sortedColumnIndices = sortedColumnEntries.map(sortedEntry =>
    sortableColumnEntries.indexOf(sortedEntry),
  );
  // Potentially reverse the new order depending on the sort direction.
  const finalSortedColumnIndices =
    sortedColumnDirection === ColumnDirections.Forward
      ? sortedColumnIndices
      : sortedColumnIndices.reverse();
  // Apply the new order to all of the rows.
  const sortedRows = finalSortedColumnIndices.map(index => body[index]);

  return sortedRows;
};

class AbstractTable extends Component<Props> {
  public static defaultProps = {
    head: [],
    body: [],
    groups: [],
  };

  public state: State = {
    collapsedGroups: {},
    sortedColumnDirection: ColumnDirections.Forward,
  };

  public componentDidMount() {
    this.verifyTableLayout();
  }

  public render() {
    const { head, config, ...rest } = this.props;
    const { collapsedGroups, sortedColumnDirection } = this.state;
    const { body, groups = [] } = this.getSortedLayout();

    return (
      <table {...rest}>
        <thead>
          <TableHead>
            {head.map((heading, index) => {
              const isSortableColumn =
                (config as TableConfig).sortableColumn === heading;

              return (
                <TableHeading
                  key={index}
                  onClick={this.toggleSortedColumnDirection}
                  role={isSortableColumn ? 'button' : ''}
                  isSortable={isSortableColumn}
                >
                  {heading}
                  {isSortableColumn && (
                    <TableCaret
                      icon={
                        sortedColumnDirection === ColumnDirections.Forward
                          ? 'caret-down'
                          : 'caret-up'
                      }
                    />
                  )}
                </TableHeading>
              );
            })}
          </TableHead>
        </thead>
        <tbody>
          {/* Ungrouped rows are placed on top of grouped rows. */}
          {body.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
          {groups.map(({ title, entries, offset = 0 }) => (
            <React.Fragment key={title}>
              <TableGroupHead
                onClick={this.toggleCollapseGroup.bind(this, title)}
                role="button"
              >
                {/* Enter ghost cells to facilitate the offset. */}
                {Array.from({ length: offset }, (_, index) => (
                  <td key={index} />
                ))}
                <TableHeading colSpan={head.length - offset}>
                  {title}
                  <TableCaret
                    icon={collapsedGroups[title] ? 'caret-up' : 'caret-down'}
                  />
                </TableHeading>
              </TableGroupHead>
              {/* Display group rows if not collapsed. */}
              {!collapsedGroups[title] &&
                entries.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }

  private verifyTableLayout = () => {
    const { head, body, groups, config } = this.props;
    const columnCount = head.length;

    if (columnCount === 0) {
      throw new Error('A <Table /> must have at least one column.');
    }

    const titleCounts = head.reduce((prev, next) => {
      prev[next] = prev[next] ? prev[next] + 1 : 1;
      return prev;
    }, {});

    Object.entries(titleCounts).forEach(([key, value]: any) => {
      if (key !== '' && value > 1) {
        throw new Error(
          `A <Table /> cannot have duplicate non-empty headings -- found multiple headings called "${key}".`,
        );
      }
    });

    body.forEach((row, index) => {
      if (row.length !== columnCount) {
        throw new Error(
          `Unbalanced row found in <Table /> at position ${index}.`,
        );
      }
    });

    if (groups) {
      groups.forEach(({ title, entries, offset }) => {
        if (!title || title === '') {
          throw new Error(
            `Untitled group in <Table /> -- all table groups must have a title.`,
          );
        }

        entries.forEach((row, index) => {
          if (row.length !== columnCount) {
            throw new Error(
              `Unbalanced row in group "${title}" found in <Table /> at position ${index}.`,
            );
          }
        });

        if (offset && offset > columnCount - 1) {
          throw new Error(`Bad offset in group "${title}" found in <Table />.`);
        }
      });
    }

    if (config) {
      const { sortableColumn } = config;

      if (sortableColumn) {
        const sortedColumnExists = head.includes(sortableColumn);

        if (!sortedColumnExists) {
          throw new Error(`Nonexistent sortable column provided to <Table />.`);
        }
      }
    }
  };

  private toggleCollapseGroup = (title: string) =>
    this.setState((prevState: State) => ({
      collapsedGroups: {
        ...prevState.collapsedGroups,
        [title]: !prevState.collapsedGroups[title],
      },
    }));

  private toggleSortedColumnDirection = () =>
    this.setState((prevState: State) => ({
      sortedColumnDirection:
        prevState.sortedColumnDirection === ColumnDirections.Forward
          ? ColumnDirections.Reverse
          : ColumnDirections.Forward,
    }));

  private getSortedLayout = (): TableContent => {
    const { head, body, groups = [], config } = this.props;
    const { sortedColumnDirection } = this.state;

    return config && config.sortableColumn
      ? {
          body: getSortedRows(head, body, config, sortedColumnDirection),
          groups: groups
            ? groups.map(group => ({
                ...group,
                entries: getSortedRows(
                  head,
                  group.entries,
                  config,
                  sortedColumnDirection,
                ),
              }))
            : [],
        }
      : { body, groups };
  };
}

const Table = styled(AbstractTable)`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export default Table;
