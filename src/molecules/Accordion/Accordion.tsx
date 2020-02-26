import { transitions } from 'polished';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import styled from 'styled-components';

import { Heading, Icon } from '../../atoms';
import { transitionDuration } from '../../Theme';

const StyledAccordion = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

interface StyledAccordionItemProps {
  extended: boolean;
}

const StyledAccordionItem = styled.li<StyledAccordionItemProps>`
  display: block;
  padding: 1.65em 3.375em;
  background: ${({ extended }) => (extended ? '#fafcfc' : 'none')};
  border-bottom: 1px solid ${({ theme }) => theme.actionPanelBorder};
  ${transitions(['background'], transitionDuration)};

  :first-of-type {
    border-top: 1px solid ${({ theme }) => theme.actionPanelBorder};
  }
`;

const AccordionItemHeading = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;

  ${Heading} {
    margin: 0;
  }
`;

const AccordionItemIcon = styled(Icon)`
  padding-left: 1em;

  svg {
    width: 1.6875em;
    height: 1.6875em;
  }
`;

const StyledAccordionItemContent = styled.div<StyledAccordionItemProps>`
  padding: 0 5px;
  height: ${({ extended }) => (extended ? '100%' : '0')};
  overflow: hidden;
`;

interface AccordionItemProps {
  title: string;
  component: ReactNode;
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  title,
  component,
}) => {
  const [extended, setExtended] = useState<boolean>(false);

  const handleClick = () => {
    setExtended(value => !value);
  };

  return (
    <StyledAccordionItem extended={extended}>
      <AccordionItemHeading onClick={handleClick}>
        <Heading as="h3">{title}</Heading>
        <AccordionItemIcon icon={extended ? 'minus' : 'plus'} />
      </AccordionItemHeading>
      <StyledAccordionItemContent extended={extended}>
        {component}
      </StyledAccordionItemContent>
    </StyledAccordionItem>
  );
};

interface Props {
  items: AccordionItemProps[];
}

const Accordion: FunctionComponent<Props> = ({ items }) => (
  <StyledAccordion>
    {items.map((item, index) => (
      <AccordionItem
        key={`accordion-item-${index}`}
        title={item.title}
        component={item.component}
      />
    ))}
  </StyledAccordion>
);

export default Accordion;
