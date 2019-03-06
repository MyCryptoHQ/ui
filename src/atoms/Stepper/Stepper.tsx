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
  background: ${props => props.theme.link};
  border-radius: 50%;
`;

export const Step = styled.div`
  width: 0.5em;
  height: 0.5em;
  margin-right: 0.5em;
  background: ${props => props.theme.link};
  border-radius: 50%;
`;

export const ActiveStep = styled.div`
  width: 0.375em;
  height: 0.375em;
  background: ${props => props.theme.background};
  border-radius: 50%;
`;

interface Props {
  current: number;
  total: number;
}

export enum TestIds {
  STEPPER_CONTAINER = 'stepper',
  ACTIVE_STEP_INDEX_PREFIX = 'active-step',
  STEPPER_STYLED_PREFIX = 'step',
}

export function Stepper({ current, total }: Props) {
  return (
    <StepperContainer data-testid={TestIds.STEPPER_CONTAINER}>
      {Array.from(
        { length: total },
        (_, index) =>
          index === current ? (
            <StepperStyled key={index}>
              <ActiveStep
                data-testid={`${TestIds.ACTIVE_STEP_INDEX_PREFIX}-${index}`}
              />
            </StepperStyled>
          ) : (
            <Step
              key={index}
              data-testid={`${TestIds.STEPPER_STYLED_PREFIX}-${index}`}
            />
          ),
      )}
    </StepperContainer>
  );
}

export default Stepper;
