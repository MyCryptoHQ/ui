import styled from '_styled-components';
import React, { Component, DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import Theme from 'Theme';
import Typography from 'Typography';

//#region Table
class AbstractTable extends Component {
  public componentDidMount() {
    this.validateTableLayout();
  }

  public render() {
    const { children, ...rest } = this.props;

    return <div {...rest}>{children}</div>;
  }

  private getTransformedTableLayout = (): { head: string[]; body: any[][] } => {
    const { children } = this.props;
    const head: any[] = [];
    const body: any[] = [];

    React.Children.forEach(children, (column: any, columnIndex) => {
      const { children: cells } = column.props;

      if (columnIndex === 0) {
        const dataCount = React.Children.count(cells) - 1;

        Array.from({ length: dataCount }, () => body.push([]));
      }

      React.Children.forEach(cells, (cell: any, cellIndex) => {
        const { children: cellInner } = cell.props;
        const cellContents = cellInner || '';

        if (cellIndex === 0) {
          // Table.Heading
          head.push(cellContents);
        } else {
          // Table.Data
          body[cellIndex - 1].push(cellContents);
        }
      });
    });

    return { head, body };
  };

  private validateTableLayout = () => {
    const { head, body } = this.getTransformedTableLayout();

    body.forEach((row, index) => {
      if (row.length !== head.length) {
        throw new Error(
          `Imbalance in <Table> in row ${index} -- each column must have a header and each row must have the same number of data cells.`,
        );
      }
    });
  };
}

const Table = styled(AbstractTable)`
  display: flex;
` as any;
//#endregion

//#region Table Heading
const TableHeading = styled(Typography)`
  display: flex;
  align-items: center;
  min-height: 3.125rem;
  margin: 0;
  padding: 0 1rem 0 0;
  border-top: 2px solid ${props => props.theme.actionPanelBorder};
  border-bottom: 2px solid ${props => props.theme.actionPanelBorder};
  background: ${props => props.theme.tableHeaderBackground};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Theme
>;

Table.Heading = TableHeading;
//#endregion

//#region Table Column
const TableColumn = styled.div`` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Theme
>;

Table.Column = TableColumn;
//#endregion

//#region Table Data
const TableData = styled(Typography)`
  display: flex;
  align-items: center;
  min-height: 3.125rem;
  margin: 0;
  padding: 0 1rem 0 0;
  font-size: 16px;
  border-bottom: 1px solid ${props => props.theme.actionPanelBorder};
` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Theme
>;

Table.Data = TableData;
//#endregion

export default Table;
