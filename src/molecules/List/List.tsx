import { directionalProperty, padding } from 'polished';
import React, { Children, ReactNode } from 'react';

import { Panel } from 'src/atoms';
import styled from 'src/styled-components';
import { scale } from 'src/Theme';
import { ExtractProps } from 'src/types';
import Typography from 'src/Typography';

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

const DefinitionEntry = styled.dl`
  display: flex;
  align-items: center;
  margin-bottom: 1.4375em;
`;

const DefinitionLabel = styled(Typography)`
  flex: 1 0;
  margin: 0;
  color: ${props => props.theme.cardText};
  letter-spacing: 0.106875em;
  text-transform: uppercase;
  font-weight: bold;
`;

DefinitionLabel.defaultProps = {
  as: 'dt',
};

const DefinitionValue = styled(Typography)`
  flex: 1 0;
  margin: 0;
`;

DefinitionValue.defaultProps = {
  as: 'dd',
};

interface Description {
  term: string;
  definition: string | ReactNode;
}

export const List = ({
  basic,
  children,
  descriptionData,
  group,
  inline,
  ordered,
  ...rest
}: {
  basic?: boolean;
  children: ReactNode;
  descriptionData?: Description[];
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
      {descriptionData
        ? descriptionData.map((item: Description) => (
            <DefinitionEntry key={item.term}>
              <DefinitionLabel>{item.term}</DefinitionLabel>
              <DefinitionValue>{item.definition}</DefinitionValue>
            </DefinitionEntry>
          ))
        : Children.map(children, child => (
            <Item as={basic || group ? 'div' : 'li'} role="listitem">
              {child}
            </Item>
          ))}
    </Panel>
  );
};

export default List;
