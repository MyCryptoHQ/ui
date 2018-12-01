import { padding } from 'polished';
import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react';
import { StyledComponentClass } from 'styled-components';

import { Panel } from 'src/atoms';
import styled from 'src/styled-components';
import Theme, { scale } from 'src/Theme';
import { ExtractProps, Omit } from 'src/types';
import Typography from 'src/Typography';

const ActionPanelBody = styled.div`
  ${padding(scale(1), scale(2))};
`;

const ActionPanelLink = styled(Typography)`
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
` as StyledComponentClass<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  Theme
>;

ActionPanelLink.defaultProps = { as: 'a' };

export function ActionPanel({
  action,
  children,
  href,
  noPadding,
  ...rest
}: {
  action: string;
  children: ReactNode;
  href: string;
  noPadding?: boolean;
} & Omit<ExtractProps<typeof Panel>, 'ref'>) {
  return (
    <Panel noPadding={true} {...rest}>
      {noPadding ? children : <ActionPanelBody>{children}</ActionPanelBody>}
      <footer>
        <ActionPanelLink href={href}>{action}</ActionPanelLink>
      </footer>
    </Panel>
  );
}

export default ActionPanel;
