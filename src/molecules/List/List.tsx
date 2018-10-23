import React, { Children, ReactNode } from 'react';
import Panel from '../../atoms/Panel';
import Text from '../../atoms/Text';
import styled from '../../styled-components';

const OrderedList = Panel.withComponent('ol');
const UnorderedList = Panel.withComponent('ul');

const BasicItem = Text.withComponent('div');
const ListItem = styled(Text.withComponent('li'))`
  list-style-position: inside;
`;

export const List = ({
  basic,
  children,
  ordered,
}: {
  basic?: boolean;
  children: ReactNode;
  ordered?: boolean;
}) => {
  let Container;
  if (basic) {
    Container = Panel;
  } else if (ordered) {
    Container = OrderedList;
  } else {
    Container = UnorderedList;
  }

  const Item = basic ? BasicItem : ListItem;

  return (
    <Container role="list">
      {Children.map(children, child => (
        <Item role="listitem">{child}</Item>
      ))}
    </Container>
  );
};

export default List;
