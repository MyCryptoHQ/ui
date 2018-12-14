import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, Icon, Identicon } from 'atoms';
import { Copyable } from 'molecules';
import Table from './Table';

interface TableGroup {
  title: string;
  entries: any[][];
  offset?: number;
}

interface TableData {
  head: any[];
  body: any[][];
  groups?: TableGroup[];
}

const address = '0x80200997f095da94E404F7E0d581AAb1fFba9f7d';
const truncate = (text: string): string => text.substr(0, 6);
const accountTable: TableData = {
  head: ['', 'Label', 'Address', 'Network', 'Value'],
  body: [
    [
      <Icon key={0} icon="star" />,
      <div
        key={1}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Identicon
          address={address}
          style={{
            width: '35px',
            height: '35px',
            marginRight: '1rem',
          }}
        />
        Squidward's Emergency Fund
      </div>,
      <Copyable key={2} text={address} truncate={truncate} />,
      'Ethereum',
      '$2,203.12',
    ],
  ],
};
const recentTransactionsTable: TableData = {
  head: ['', 'Date', 'From Address', 'To Address', 'Amount'],
  body: [],
  groups: [
    {
      title: 'Pending',
      entries: [
        [
          <img key={0} src="https://placehold.it/50x50" alt="Example" />,
          'Today',
          <Copyable key={2} text={address} truncate={truncate} />,
          <Copyable key={3} text={address} truncate={truncate} />,
          '42.69 OMG',
        ],
      ],
      offset: 1,
    },
    {
      title: 'Completed',
      entries: [
        [
          <img key={0} src="https://placehold.it/50x50" alt="Example" />,
          'Yesterday',
          <Copyable key={2} text={address} truncate={truncate} />,
          <Copyable key={3} text={address} truncate={truncate} />,
          '13.37 OMG',
        ],
      ],
      offset: 1,
    },
  ],
};
const addressBookTable: TableData = {
  head: ['', 'Label', 'Address', 'Notes', ''],
  body: [
    [
      <Icon key={0} icon="star" />,
      <div
        key={1}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Identicon
          address={address}
          style={{
            width: '35px',
            height: '35px',
            marginRight: '1rem',
          }}
        />
        Squidward's Emergency Fund
      </div>,
      <Copyable key={2} text={address} truncate={truncate} />,
      'Spongebob needs to leave Bikini Bottom',
      <Button key={4} basic={true}>
        <Icon icon="times-circle" />
      </Button>,
    ],
  ],
};

storiesOf('Molecules', module).add('Table', () =>
  [accountTable, recentTransactionsTable, addressBookTable].map(
    (tableData, index) => (
      <div key={index} style={{ marginBottom: '3rem' }}>
        <Table
          head={tableData.head}
          body={tableData.body}
          groups={tableData.groups}
        />
      </div>
    ),
  ),
);
