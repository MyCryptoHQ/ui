import { storiesOf } from '@storybook/react';
import React from 'react';

import Table from './Table';

storiesOf('Molecules', module).add('Table', () =>
  [{}].map((props, index) => {
    return (
      <Table key={index}>
        <Table.Column>
          <Table.Heading />
          <Table.Data>
            <img src="https://placehold.it/20x20" alt="Placeholder" />
          </Table.Data>
          <Table.Data>
            <img src="https://placehold.it/20x20" alt="Placeholder" />
          </Table.Data>
        </Table.Column>
        <Table.Column>
          <Table.Heading>Label</Table.Heading>
          <Table.Data>Spongebob and Patrick's Life Savings</Table.Data>
          <Table.Data>More Moola Since I'm Rich</Table.Data>
        </Table.Column>
        <Table.Column>
          <Table.Heading>Address</Table.Heading>
          <Table.Data>0xC9a...F198</Table.Data>
          <Table.Data>0xC9a...F198</Table.Data>
        </Table.Column>
        <Table.Column>
          <Table.Heading>Network</Table.Heading>
          <Table.Data>Ethereum</Table.Data>
          <Table.Data>Ethereum Classic</Table.Data>
        </Table.Column>
        <Table.Column>
          <Table.Heading>Node</Table.Heading>
          <Table.Data>
            <select value="Infura">
              <option value="">Select a node</option>
              <option value="Infura">Infura</option>
            </select>
          </Table.Data>
          <Table.Data>
            <select value="Infura">
              <option value="">Select a node</option>
              <option value="Infura">MyCrypto</option>
            </select>
          </Table.Data>
        </Table.Column>
        <Table.Column>
          <Table.Heading />
          <Table.Data>
            <img src="https://placehold.it/20x20" alt="Placeholder" />
          </Table.Data>
          <Table.Data>
            <img src="https://placehold.it/20x20" alt="Placeholder" />
          </Table.Data>
        </Table.Column>
      </Table>
    );
  }),
);
