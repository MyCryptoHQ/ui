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

export interface Table {
  head: any[];
  body: any[][];
  groups?: TableGroup[];
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
  min-width: 1rem;
  padding: 1rem 1rem 1rem 0;
`;

const TableHead = styled.tr`
  border-top: 1px solid ${props => props.theme.tableHeadBorder};
  border-bottom: 1px solid ${props => props.theme.tableHeadBorder};
  background: ${props => props.theme.tableHeadBackground};
` as any;

const TableHeading = styled(Typography)`
  ${sharedCellProperties}
  color: ${props => props.theme.headline}
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  cursor: ${(props: any) => (props.isSortable ? 'pointer' : 'inherit')}
` as any;

TableHeading.defaultProps = {
  as: 'th',
};

const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.tableHeadBorder};
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
  margin-left: 0.5rem;
`;

const TableCell = styled(Typography)`
  ${sharedCellProperties};
` as any;

TableCell.defaultProps = {
  as: 'td',
};

// const defaultColumnSort = (a: any, b: any): number =>
//   a.toString().localeCompare(b.toString());

// tslint:disable-next-line
// const noop = () => {};

class AbstractTable extends Component<Props> {
  public state: State = {
    collapsedGroups: {},
    sortedColumnDirection: ColumnDirections.Forward,
  };

  public componentDidMount() {
    this.verifyTableLayout();
  }

  public render() {
    const {
      head = [],
      body = [],
      groups = [],
      config = {},
      ...rest
    } = this.props;
    const { collapsedGroups, sortedColumnDirection } = this.state;

    return (
      <table {...rest}>
        <TableHead>
          {head.map((heading, index) => {
            const isSortableColumn =
              (config as TableConfig).sortableColumn === heading;

            return (
              <TableHeading
                key={index}
                onClick={this.toggleSortedColumnDirection}
                aria-role="button"
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
        <tbody>
          {/* Ungrouped rows are placed on top of grouped rows. */}
          {body.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <TableRow>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            </React.Fragment>
          ))}
          {groups.map(({ title, entries, offset = 0 }) => (
            <React.Fragment key={title}>
              <TableGroupHead
                onClick={this.toggleCollapseGroup.bind(this, title)}
                aria-role="button"
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
    const { head, body, groups } = this.props;
    const columnCount = head.length;

    if (columnCount === 0) {
      throw new Error(`A <Table /> must have at least one column.`);
    }

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
}

const Table = styled(AbstractTable)`
  border-collapse: collapse;
  border-spacing: 0;
`;

export default Table;
