import React, { Children, ReactNode } from 'react';
import Panel from '../../atoms/Panel';
import Text from '../../atoms/Text';
import styled from '../../styled-components';

const Item = styled(Text)`
  list-style-position: inside;
`;

export interface ListProps {
  basic?: boolean;
  children: ReactNode;
  ordered?: boolean;
}

export const List = ({ basic, children, ordered }: ListProps) => {
  let container;
  if (basic) {
    container = undefined;
  } else if (ordered) {
    container = 'ol';
  } else {
    container = 'ul';
  }

  return (
    <Panel as={container} role="list">
      {Children.map(children, child => (
        <Item as={basic ? 'div' : 'li'} role="listitem">
          {child}
        </Item>
      ))}
    </Panel>
  );
};

export default List;
