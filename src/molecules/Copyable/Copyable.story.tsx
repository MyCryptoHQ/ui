import { storiesOf } from '@storybook/react';
import React from 'react';
import Typography from 'src/Typography';
import styled from 'styled-components';
import Copyable from './Copyable';

const CopyableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

storiesOf('Molecules', module).add('Copyable', () => (
  <>
    <Typography>Copyable</Typography>
    <CopyableContainer>
      <Copyable
        copyable={true}
        text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
      />
      <Copyable
        copyable={true}
        truncate={true}
        text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
      />
      <Typography>Non-Copyable</Typography>
      <Copyable
        copyable={false}
        text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
      />
      <Copyable
        copyable={false}
        truncate={true}
        text="0x4bbeEB066D09B7AEd07bF39EE20460DFa261520"
      />
    </CopyableContainer>
  </>
));
