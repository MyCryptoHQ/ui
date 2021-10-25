import type { FunctionComponent } from 'react';
import { useState } from 'react';

import type { BoxProps } from '../atoms';
import { Box, Flex, Icon, SubHeading } from '../atoms';

export interface AccordionItemProps {
  title: string;
  open?: boolean;
}

export const AccordionItem: FunctionComponent<AccordionItemProps & BoxProps> = ({
  title,
  open = false,
  children,
  ...props
}) => {
  const [isOpen, setOpen] = useState(open);

  const handleToggle = () => setOpen((value) => !value);

  return (
    <Box
      as="li"
      px="54px"
      py="26px"
      backgroundColor={isOpen ? 'accordion.background' : 'white'}
      sx={{
        listStyleType: 'none',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'accordion.border'
      }}
      {...props}>
      <Flex
        justifyContent="space-between"
        onClick={handleToggle}
        sx={{
          cursor: 'pointer'
        }}>
        <SubHeading as="h3" fontSize="18px" lineHeight="25px" color="text.primary" pr="2">
          {title}
        </SubHeading>
        <Icon type={isOpen ? 'minus' : 'plus'} width="12px" flexShrink={0} />
      </Flex>
      {isOpen && <Box mt="2">{children}</Box>}
    </Box>
  );
};
