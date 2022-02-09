import React from "react";
import styled from "styled-components";
import { StepperStep, StepperSteps } from "./components/StepperSteps";
import {
  StyledStepperHeader,
  StyledStepperHeaderItem,
} from "./components/StepperHeader";
import { useStepper, StepperProvider } from "./context";

const Stepper = ({ children }) => {
  const { currentStep, goToStep, steps, checkStepCompleted } = useStepper();
  return (
    <StyledStepperContainer>
      <StyledStepperHeader>
        {steps.length
          ? steps.map((step, index) => (
              <StyledStepperHeaderItem
                key={step.id}
                className={
                  currentStep >= index || checkStepCompleted(step.id)
                    ? "completed"
                    : ""
                }
                onClick={() => goToStep(step.id)}
              >
                <div className="step-counter">
                  {(checkStepCompleted(step.id) && "Done") || index + 1}
                </div>
                <div className="step-name">{step.name}</div>
              </StyledStepperHeaderItem>
            ))
          : null}
      </StyledStepperHeader>
      <StyledStepperBody>{children}</StyledStepperBody>
    </StyledStepperContainer>
  );
};

Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;
Stepper.Container = StepperProvider;

const StyledStepperContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledStepperBody = styled.div`
  padding: 50px 16px;
`;

export default Stepper;
