import { padding } from 'polished';
import React, { ReactNode } from 'react';
import Panel from '../../atoms/Panel';
import Text from '../../atoms/Text';
import styled from '../../styled-components';
import { scale } from '../../Theme';

const ActionPanelBody = styled.div`
  ${padding(scale(1), scale(2))};
`;

const ActionPanelLink = styled(Text.withComponent('a'))`
  background: ${props => props.theme.actionPanelBackground};
  border-top: 0.0416em solid ${props => props.theme.actionPanelBorder};
  color: ${props => props.theme.link};
  display: block;
  font-size: ${scale(1)};
  font-weight: bold;
  padding: ${scale(1)};
  text-align: center;
  text-decoration: none;

  :hover {
    color: ${props => props.theme.linkHover};
  }
`;

export function ActionPanel({
  action,
  children,
  href,
}: {
  action: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <Panel noPadding={true}>
      <ActionPanelBody>{children}</ActionPanelBody>
      <footer>
        <ActionPanelLink href={href}>{action}</ActionPanelLink>
      </footer>
    </Panel>
  );
}

export default ActionPanel;
