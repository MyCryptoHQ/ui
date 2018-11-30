import { storiesOf } from '@storybook/react';
import faker from 'faker';
import React from 'react';

import styled from 'src/styled-components';
import Typography from 'src/Typography';
import Panel from './Panel';

const TypographyWithoutMargin = styled(Typography)`
  margin: 0;
`;

storiesOf('Atoms', module).add('Panel', () =>
  [{}, { basic: true }, { noPadding: true }, { isPlaceholder: true }].map(
    (props, index) => (
      <Panel key={index} {...props}>
        <TypographyWithoutMargin>
          {faker.lorem.paragraphs()}
        </TypographyWithoutMargin>
      </Panel>
    ),
  ),
);
