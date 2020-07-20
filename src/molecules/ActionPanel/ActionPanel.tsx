import { padding } from 'polished';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Panel } from '../../atoms';
import { PanelProps } from '../../atoms/Panel/Panel';
import styled from '../../styled-components';
import { scale } from '../../Theme';
import Typography from '../../Typography';

const ActionPanelBody = styled.div`
  ${padding(scale(1), scale(2))};
`;

const ActionPanelFooter = styled(Typography)`
  background: ${props => props.theme.actionPanelBackground};
  border-top: 0.0416em solid ${props => props.theme.actionPanelBorder};
  display: block;
  padding: ${scale(1)};
  text-decoration: none;
`;

ActionPanelFooter.defaultProps = { as: 'footer' };

interface ActionPanelProps extends PanelProps {
  action: string;
}

export function ActionPanel({
  action,
  children,
  noPadding,
  ...rest
}: ActionPanelProps &
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
  return (
    <Panel noPadding={true} {...rest}>
      {noPadding ? children : <ActionPanelBody>{children}</ActionPanelBody>}
      <ActionPanelFooter>{action}</ActionPanelFooter>
    </Panel>
  );
}

export default ActionPanel;
