import type { FunctionComponent } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import type { IconType } from '../atoms';
import { Body, Button, Flex, Icon } from '../atoms';

export interface DonateButtonProps {
  icon: IconType;
  address: string;

  onCopy(): void;
}

export const DonateButton: FunctionComponent<DonateButtonProps> = ({
  icon,
  address,
  onCopy,
  children
}) => (
  <CopyToClipboard text={address} onCopy={onCopy}>
    <Button
      backgroundColor="footer.donate"
      variant="donation"
      width="auto"
      mt={{ _: '15px', lg: '0' }}
      mr={{ _: '0', lg: '15px' }}>
      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Icon type={icon} height="15px" mr="10px" verticalAlign="middle" />
        <Body color="text.footer" fontSize="14px">
          {children}
        </Body>
      </Flex>
    </Button>
  </CopyToClipboard>
);
