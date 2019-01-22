import { storiesOf } from '@storybook/react';
import React from 'react';

import { ThemeToggle } from './ThemeToggle';

import styled from 'styled-components';

const FooterBox = styled.div`
  background: #163150;
  margin-top: 1em;
`;

storiesOf('Molecules', module).add('ThemeToggle', () =>
  [
    {
      handleChange: () => console.log('change detected'),
      checked: true,
    },
    {
      handleChange: () => console.log('change detected'),
      checked: false,
    },
  ].map((props, index) => (
    <FooterBox key={index}>
      <ThemeToggle {...props} />
    </FooterBox>
  )),
);
