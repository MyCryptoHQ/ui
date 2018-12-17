import { storiesOf } from '@storybook/react';
import React from 'react';

import { ActionPanel } from 'src/molecules';
import List from './List';

const children = ['Foo', 'Bar', 'Baz'];

storiesOf('Molecules', module).add('List', () => (
  <>
    {[{}, { basic: true }, { ordered: true }, { group: true }].map(
      (props, index) => (
        <List key={index} {...props}>
          {children}
        </List>
      ),
    )}

    <ActionPanel
      action="View Example"
      href="https://example.com/"
      noPadding={true}
    >
      <List group={true} inline={true}>
        {children}
      </List>
    </ActionPanel>
  </>
));
