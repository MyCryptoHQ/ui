import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';
import Panel from '.';
import styled from '../../styled-components';
import Text from '../Text';

const TextWithoutMargin = styled(Text)`
  margin: 0;
`;

storiesOf('Atoms', module).add('Panel', () => (
  <>
    <Panel>
      <TextWithoutMargin>{faker.lorem.paragraphs()}</TextWithoutMargin>
    </Panel>

    <Panel noPadding={true}>
      <TextWithoutMargin>{faker.lorem.paragraphs()}</TextWithoutMargin>
    </Panel>
  </>
));
