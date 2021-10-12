import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import type { FlexProps } from '.';
import { Flex, Icon } from '.';

interface CopyableProps {
  text: string;
}

export const Copyable: FunctionComponent<CopyableProps & FlexProps> = ({
  text,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Flex sx={{ cursor: 'pointer' }} {...props}>
        {children}
        <Icon type={copied ? 'checkmark' : 'copy'} fill="#B5BFC7" ml="1" />
      </Flex>
    </CopyToClipboard>
  );
};
