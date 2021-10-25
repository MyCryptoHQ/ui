import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import type { FlexProps, IconType } from '.';
import { Flex, Icon } from '.';

interface CopyableProps {
  text: string;
  icon?: IconType;
  fill?: string;
  width?: string;
}

export const Copyable: FunctionComponent<CopyableProps & FlexProps> = ({
  text,
  icon = 'copy',
  fill = '#b5bfc7',
  width = '12px',
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

  if (children) {
    return (
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <Flex sx={{ cursor: 'pointer' }} {...props}>
          {children}
          <Icon type={copied ? 'checkmark' : icon} fill={fill} width={width} ml="1" />
        </Flex>
      </CopyToClipboard>
    );
  }

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <Icon
        type={copied ? 'checkmark' : icon}
        fill={fill}
        width={width}
        sx={{ cursor: 'pointer' }}
      />
    </CopyToClipboard>
  );
};
