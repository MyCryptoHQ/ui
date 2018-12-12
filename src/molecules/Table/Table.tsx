import styled from '_styled-components';
import React, { Component } from 'react';

interface TableGroup {
  title: string;
  entries: any[][];
}

interface Props {
  head: any[];
  body: any[][];
  groups?: TableGroup[];
}

const TableHead = styled.tr`
  border-top: 1px solid #e8eaed;
  border-bottom: 1px solid #e8eaed;
  background: #fafcfc;
  text-transform: uppercase;
` as any;

const TableHeading = styled.th`
  min-width: 3rem;
  padding: 20px 0;
  text-align: left;
` as any;

const TableRow = styled.tr`
  border-bottom: 1px solid #e8eaed;
` as any;

const TableCell = styled.td`
  min-width: 5rem;
  padding: 15px 0;
` as any;

class AbstractTable extends Component<Props> {
  public render() {
    const { head, body = [], groups = [], ...rest } = this.props;

    return (
      <table {...rest}>
        <TableHead>
          {head.map((heading, index) => (
            <TableHeading key={index}>{heading}</TableHeading>
          ))}
        </TableHead>
        <tbody>
          {body.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
          {groups.map(group => (
            <React.Fragment key={group.title}>
              <TableHead>
                <TableHeading colSpan={head.length}>{group.title}</TableHeading>
              </TableHead>
              {group.entries.map((row, rowIndex) => (
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
}

const Table = styled(AbstractTable)`
  border-collapse: collapse;
  border-spacing: 0;
`;

export default Table;
