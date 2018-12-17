import { directionalProperty, padding } from 'polished';
import React, { Children, ReactNode } from 'react';

import styled from '_styled-components';
import { Panel } from 'atoms';
import { scale } from 'Theme';
import { ExtractProps } from 'types';
import Typography from 'Typography';

const GroupItem = styled(Typography)`
  ${props =>
    directionalProperty(
      'border',
      `0.0625em solid ${props.theme.actionPanelBorder}`,
      null,
    )};
  ${padding(scale(-1), scale(2))};

  :first-child {
    border-top: none;
  }

  :last-child {
    border-bottom: none;
  }
`;

const ListItem = styled(Typography)`
  list-style-position: inside;
`;

export const List = ({
  basic,
  children,
  group,
  inline,
  ordered,
  ...rest
}: {
  basic?: boolean;
  children: ReactNode;
  group?: boolean;
  inline?: boolean;
  ordered?: boolean;
} & ExtractProps<typeof Panel>) => {
  let container;
  if (basic || group) {
    container = undefined;
  } else if (ordered) {
    container = 'ol';
  } else {
    container = 'ul';
  }

  const Item = group ? GroupItem : ListItem;

  return (
    <Panel
      as={container}
      basic={inline}
      noPadding={group}
      role="list"
      {...rest}
    >
      {Children.map(children, child => (
        <Item as={basic || group ? 'div' : 'li'} role="listitem">
          {child}
        </Item>
      ))}
    </Panel>
  );
};

export default List;
