import styled from '_styled-components';
import React, { Component } from 'react';

import { Button, Icon } from 'atoms';
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

const TableHead = styled.tr`
  border-top: 1px solid #e8eaed;
  border-bottom: 1px solid #e8eaed;
  background: #fafcfc;
` as any;

const TableHeading = styled(Typography)`
  min-width: 1rem;
  padding: 15px 1rem 15px 0;
  text-align: left;
  text-transform: uppercase;
` as any;

TableHeading.defaultProps = {
  as: 'th',
};

const TableRow = styled.tr`
  border-bottom: 1px solid #e8eaed;
` as any;

const TableCell = styled(Typography)`
  min-width: 1rem;
  padding: 15px 1rem 15px 0;
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
              <Button
                as={TableRow}
                basic={true}
                onClick={this.toggleCollapseGroup.bind(this, title)}
                style={{
                  textTransform: 'uppercase',
                }}
              >
                {Array.from({ length: offset }, (_, index) => (
                  <td key={index} />
                ))}
                <TableHeading colSpan={head.length - offset}>
                  {title}
                  <Icon
                    icon={collapsedGroups[title] ? 'caret-up' : 'caret-down'}
                    style={{
                      marginLeft: '0.5rem',
                    }}
                  />
                </TableHeading>
              </Button>
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
