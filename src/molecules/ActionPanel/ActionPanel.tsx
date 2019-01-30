import { padding } from 'polished';
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { StyledComponentClass } from 'styled-components';

import { Panel } from 'src/atoms';
import styled from 'src/styled-components';
import Theme, { scale } from 'src/Theme';
import { ExtractProps } from 'src/types';
import Typography from 'src/Typography';

const ActionPanelBody = styled.div`
  ${padding(scale(1), scale(2))};
`;

const ActionPanelFooter = styled(Typography)`
  background: ${props => props.theme.actionPanelBackground};
  border-top: 0.0416em solid ${props => props.theme.actionPanelBorder};
  display: block;
  padding: ${scale(1)};
  text-decoration: none;
` as StyledComponentClass<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Theme
>;

ActionPanelFooter.defaultProps = { as: 'footer' };

export function ActionPanel({
  action,
  children,
  noPadding,
  ...rest
}: {
  action: ReactNode;
  children: ReactNode;
  noPadding?: boolean;
} & ExtractProps<typeof Panel>) {
  return (
    <Panel noPadding={true} {...rest}>
      {noPadding ? children : <ActionPanelBody>{children}</ActionPanelBody>}
      <ActionPanelFooter>{action}</ActionPanelFooter>
    </Panel>
  );
}

export default ActionPanel;
