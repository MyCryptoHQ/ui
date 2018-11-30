import React, { Children, Component, ReactNode } from 'react';

import styled from '_styled-components';
import Typography from 'Typography';

interface Props {
  children: ReactNode;
}

export const TabsContainer = styled.ul`
  display: flex;
  text-align: center;
  margin: 0;
`;

export const Tab = styled.li`
  list-style: none;
  flex: 1;
  p {
    margin: 0;
  }
`;

export class Tabs extends Component<Props, {}> {
  public render() {
    const { children } = this.props;

    return (
      <TabsContainer>
        {Children.map(children, child => (
          <Tab>
            <Typography>{child}</Typography>
          </Tab>
        ))}
      </TabsContainer>
    );
  }
}

export default Tabs;
