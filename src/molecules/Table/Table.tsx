import styled from '_styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { StyledComponentClass } from 'styled-components';

import Theme from 'Theme';
import Typography from 'Typography';

//#region Table
const Table = styled.div`
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
