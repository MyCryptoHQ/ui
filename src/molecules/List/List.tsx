import { directionalProperty, padding } from 'polished';
import React, { Children, ReactNode } from 'react';
import Panel from '../../atoms/Panel';
import Text from '../../atoms/Text';
import styled from '../../styled-components';
import { scale } from '../../Theme';

const GroupItem = styled(Text)`
  ${props =>
    directionalProperty(
      'border',
      `0.0625em solid ${props.theme.actionPanelBorder}`,
      null,
    )};
  ${padding(scale(0), scale(2))};

  :first-child {
    border-top: none;
  }

  :last-child {
    border-bottom: none;
  }
`;

const ListItem = styled(Text)`
  list-style-position: inside;
`;

export const List = ({
  basic,
  children,
  group,
  ordered,
}: {
  basic?: boolean;
  children: ReactNode;
  group?: boolean;
  ordered?: boolean;
}) => {
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
    <Panel as={container} noPadding={group} role="list">
      {Children.map(children, child => (
        <Item as={basic || group ? 'div' : 'li'} role="listitem">
          {child}
        </Item>
      ))}
    </Panel>
  );
};

export default List;
