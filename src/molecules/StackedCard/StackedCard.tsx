import React, { ReactNode } from 'react';

import styled from 'src/styled-components';
import { scale } from 'src/Theme';
import Typography from 'src/Typography';

type StackedCardEntry = string | ReactNode;

interface StackedCardData {
  heading: ReactNode;
  entries: StackedCardEntry[][];
  icons?: ReactNode[];
}

type Props = StackedCardData;

const StackedCardContainer = styled.section`
  padding: 0.9375em;
  border-bottom: 0.0625em solid #dde3ee;
`;

const StackedCardHead = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const StackedCardHeading = styled(Typography)`
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: bold;
  line-height: 1.31;
  font-size: ${scale(1)};
`;

const StackedCardIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StackedCardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5625em;
`;

const StackedCardEntry = styled.dl`
  display: flex;
  align-items: center;
  margin-bottom: 1.4375em;
`;

const StackedCardLabel = styled(Typography)`
  flex: 1 0;
  margin: 0;
  color: ${props => props.theme.cardText};
  letter-spacing: 0.106875em;
  text-transform: uppercase;
  font-weight: bold;
`;

StackedCardLabel.defaultProps = {
  as: 'dt',
};

const StackedCardValue = styled(Typography)`
  flex: 1 0;
  margin: 0;
`;

StackedCardLabel.defaultProps = {
  as: 'dd',
};

export const StackedCard = ({ heading, icons, entries, ...rest }: Props) => {
  return (
    <StackedCardContainer {...rest}>
      <StackedCardHead>
        <StackedCardHeading>{heading}</StackedCardHeading>
        <StackedCardIcons>{icons}</StackedCardIcons>
      </StackedCardHead>
      <StackedCardBody>
        {entries.map(([label, value], index) => (
          <StackedCardEntry key={index}>
            <StackedCardLabel>{label}</StackedCardLabel>
            <StackedCardValue>{value}</StackedCardValue>
          </StackedCardEntry>
        ))}
      </StackedCardBody>
    </StackedCardContainer>
  );
};

export default StackedCard;
