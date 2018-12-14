import styled from '_styled-components';
import React, { Component } from 'react';

import { Icon } from 'atoms';
import Typography from 'Typography';

interface TableGroup {
  title: string;
  entries: any[][];
  offset?: number;
}

interface Props {
  head: any[];
  body: any[][];
  groups?: TableGroup[];
}

interface State {
  collapsedGroups: {
    [title: string]: true;
  };
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

const TableGroupHeadCaret = styled(Icon)`
  margin-left: 0.5rem;
`;

const TableCell = styled(Typography)`
  ${sharedCellProperties};
` as any;

TableCell.defaultProps = {
  as: 'td',
};

class AbstractTable extends Component<Props> {
  public state: State = {
    collapsedGroups: {},
  };

  public render() {
    const { head, body = [], groups = [], ...rest } = this.props;
    const { collapsedGroups } = this.state;

    return (
      <table {...rest}>
        <TableHead>
          {head.map((heading, index) => (
            <TableHeading key={index}>{heading}</TableHeading>
          ))}
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
                  <TableGroupHeadCaret
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

  private toggleCollapseGroup = (title: string) =>
    this.setState((prevState: State) => ({
      collapsedGroups: {
        ...prevState.collapsedGroups,
        [title]: !prevState.collapsedGroups[title],
      },
    }));
}

const Table = styled(AbstractTable)`
  border-collapse: collapse;
  border-spacing: 0;
`;

export default Table;
