import { storiesOf } from '@storybook/react';
import React from 'react';
import Panel from '.';
import styled from '../../styled-components';
import Text from '../Text';

const TextWithoutMargin = styled(Text)`
  margin: 0;
`;

storiesOf('Atoms', module).add('Panel', () => (
  <Panel>
    <TextWithoutMargin>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </TextWithoutMargin>
  </Panel>
));
