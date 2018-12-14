import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button, Icon, Identicon } from 'atoms';
import { Copyable } from 'molecules';
import Table, { Table as TableType } from './Table';

const address = '0x80200997f095da94E404F7E0d581AAb1fFba9f7d';
const truncate = (text: string): string => text.substr(0, 6);
const accountTable: TableType = {
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
    [
      <Icon key={0} icon="eye" />,
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
        Spongebob's Life Savings
      </div>,
      <Copyable key={2} text={address} truncate={truncate} />,
      'Ethereum',
      '$1337.70',
    ],
  ],
  config: {
    sortableColumn: 'Label',
  },
};
const recentTransactionsTable: TableType = {
  head: ['', 'Date', 'From Address', 'To Address', 'Amount'],
  body: [],
  groups: [
    {
      title: 'Pending',
      entries: [
        [
          <img key={0} src="https://placehold.it/50x50" alt="Example" />,
          '01/01',
          <Copyable key={2} text={address} truncate={truncate} />,
          <Copyable key={3} text={address} truncate={truncate} />,
          '42.69 OMG',
        ],
        [
          <img key={0} src="https://placehold.it/50x50" alt="Example" />,
          '01/02',
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
          '12/01',
          <Copyable key={2} text={address} truncate={truncate} />,
          <Copyable key={3} text={address} truncate={truncate} />,
          '13.37 OMG',
        ],
        [
          <img key={0} src="https://placehold.it/50x50" alt="Example" />,
          '12/02',
          <Copyable key={2} text={address} truncate={truncate} />,
          <Copyable key={3} text={address} truncate={truncate} />,
          '13.37 OMG',
        ],
      ],
      offset: 1,
    },
  ],
  config: {
    sortableColumn: 'Date',
  },
};
const addressBookTable: TableType = {
  head: ['', 'Label', 'Address', 'Notes', ''],
  body: [
    [
      <Icon key={0} icon="star" style={{ marginLeft: '1rem' }} />,
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
        Bob
      </div>,
      <Copyable key={2} text={address} truncate={truncate} />,
      'This is the main Bob.',
      <Button key={4} basic={true}>
        <Icon icon="times-circle" />
      </Button>,
    ],
    [
      <Icon key={0} icon="star" style={{ marginLeft: '1rem' }} />,
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
        Bob
      </div>,
      <Copyable key={2} text={address} truncate={truncate} />,
      'This is the other Bob.',
      <Button key={4} basic={true}>
        <Icon icon="times-circle" />
      </Button>,
    ],
    [
      <Icon key={0} icon="star" style={{ marginLeft: '1rem' }} />,
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
        Craig
      </div>,
      <Copyable key={2} text={address} truncate={truncate} />,
      'This is Craig.',
      <Button key={4} basic={true}>
        <Icon icon="times-circle" />
      </Button>,
    ],
  ],
  config: {
    sortableColumn: 'Label',
  },
};

storiesOf('Molecules', module).add('Table', () =>
  [accountTable, recentTransactionsTable, addressBookTable].map(
    (tableData, index) => (
      <div key={index} style={{ marginBottom: '3rem' }}>
        <Table {...tableData} />
      </div>
    ),
  ),
);
