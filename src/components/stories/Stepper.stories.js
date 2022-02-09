import React from "react";
import styled from "styled-components";

import Stepper from "../Stepper";
import { useStepper, StepperProvider } from "../Stepper/context";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Stepper",
  component: Stepper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const StepBody = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 20px;
  cursor: pointer;
  outline: none;
  background: #fff;
  border: 1px solid #000;
  padding: 6px 12px;
`;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ExampleStepper = () => {
  const { incrementCurrentStep, decrementCurrentStep, setStepCompleted } =
    useStepper();
  return (
    <Stepper>
      <Stepper.Steps>
        <Stepper.Step id="first" name="Business Info">
          <StepBody>
            <p>This is step 1</p>
            <div>
              <Button onClick={incrementCurrentStep}>Next step</Button>
              <Button onClick={() => setStepCompleted("first")}>
                Complete Step
              </Button>
            </div>
          </StepBody>
        </Stepper.Step>
        <Stepper.Step id="second" name="Branding">
          <StepBody>
            <p>this is step 2</p>
            <div>
              <Button onClick={decrementCurrentStep}>Previous step</Button>
              <Button onClick={incrementCurrentStep}>Next step</Button>
              <Button onClick={() => setStepCompleted("second")}>
                Complete Step
              </Button>
            </div>
          </StepBody>
        </Stepper.Step>
        <Stepper.Step id="third" name="Goal">
          <StepBody>
            <p>this is step 3</p>
            <div>
              <Button onClick={decrementCurrentStep}>Previous step</Button>
              <Button onClick={incrementCurrentStep}>Next step</Button>
              <Button onClick={() => setStepCompleted("third")}>
                Complete Step
              </Button>
            </div>
          </StepBody>
        </Stepper.Step>
        <Stepper.Step id="forth" name="Preview">
          <StepBody>
            <p>this is step 4</p>
            <div>
              <Button onClick={decrementCurrentStep}>Previous step</Button>
              <Button onClick={incrementCurrentStep}>Next step</Button>
              <Button onClick={() => setStepCompleted("forth")}>Submit</Button>
            </div>
          </StepBody>
        </Stepper.Step>
      </Stepper.Steps>
    </Stepper>
  );
};

export const Primary = () => (
  <StepperProvider>
    <ExampleStepper />
  </StepperProvider>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
