import { storiesOf } from '@storybook/react';
import React from 'react';

import styled from '_styled-components';
import { scale } from 'Theme';
import Icon, { icons } from './Icon';

const Container = styled.div`
  background: #027796;
`;

const PaddedIcon = styled(Icon)`
  padding: ${scale(1)};
`;

storiesOf('Atoms', module).add('Icon', () => (
  <Container>
    {Object.keys(icons).map(icon => (
      <PaddedIcon key={icon} icon={icon as keyof typeof icons} />
    ))}
  </Container>
));
