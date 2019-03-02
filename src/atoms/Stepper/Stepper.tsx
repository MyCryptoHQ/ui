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
  width: 0.75em;
  height: 0.75em;
  margin-right: 0.5em;
  background: #007a99;
  border-radius: 50%;
`;

export const Step = styled.div`
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.5em;
  background: #007a99;
  border-radius: 50%;
`;

export const ActiveStep = styled.div`
  width: 0.375em;
  height: 0.375em;
  background: white;
  border-radius: 50%;
`;

interface Props {
  current: number;
  total: number;
}

export function Stepper({ current, total }: Props) {
  return (
    <StepperContainer>
      {Array.from(
        { length: total },
        (_, index) =>
          index === current ? (
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

export default Stepper;
