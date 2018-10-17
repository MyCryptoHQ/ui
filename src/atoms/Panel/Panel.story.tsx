import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import Panel from '.';
import styled from '../../styled-components';
import Text from '../Text';

const TextWithoutMargin = styled(Text)`
  margin: 0;
`;

storiesOf('Atoms', module).add('Panel', () =>
  [{}, { basic: true }, { noPadding: true }].map((props, index) => (
    <Panel key={index} {...props}>
      <TextWithoutMargin>{faker.lorem.paragraphs()}</TextWithoutMargin>
    </Panel>
  )),
);
