import React from 'react';
import styled from 'src/styled-components';

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StepperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12;
  height: 12;
  margin-right: 8;
  background: #007a99;
  border-radius: 50%;
`;

export const Step = styled.div`
  width: 8;
  height: 8;
  margin-right: 8;
  background: #007a99;
  border-radius: 50%;
`;

export const ActiveStep = styled.div`
  width: 6;
  height: 6;
  background: white;
  border-radius: 50%;
`;

interface Props {
  current: number;
  total: number;
}

export default function Stepper({ current, total }: Props) {
  const currentOffset = current;

  return (
    <StepperContainer>
      {Array.from(
        { length: total },
        (_, index) =>
          index === currentOffset ? (
            <StepperStyled key={index}>
              <ActiveStep />
            </StepperStyled>
          ) : (
            <Step key={index} />
          ),
      )}
    </StepperContainer>
  );
}
