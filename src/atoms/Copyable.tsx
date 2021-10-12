import type { FunctionComponent } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Flex, Icon } from '.';

interface CopyableProps {
  text: string;
}

export const Copyable: FunctionComponent<CopyableProps> = ({ text, children }) => {
  return (
    <CopyToClipboard text={text}>
      <Flex sx={{ cursor: 'pointer' }}>
        {children}
        <Icon type="copy" ml="1" />
      </Flex>
    </CopyToClipboard>
  );
};
