import React, { Component } from 'react';

import { Table, TableData } from 'molecules';

type Props = TableData;

export class AbstractCollapsibleTable extends Component<Props> {
  public render() {
    const { head, body, groups, config } = this.props;

    return <Table head={head} body={body} groups={groups} config={config} />;
  }
}

const CollapsibleTable = AbstractCollapsibleTable;

export default CollapsibleTable;
