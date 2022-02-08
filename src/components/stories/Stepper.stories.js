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
const Wrapper = () => {
  const { incrementCurrentStep, decrementCurrentStep } = useStepper();
  return (
    <Stepper>
      <Stepper.Steps>
        <Stepper.Step id="first" name="Step 1">
          <StepBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div>
              <Button onClick={incrementCurrentStep}>Next step</Button>
            </div>
          </StepBody>
        </Stepper.Step>
        <Stepper.Step id="second" name="Step 2">
          <StepBody>
            <p>
              Ad alias debitis dolore, doloribus ducimus, eaque illum ipsum
              laboriosam libero magnam.
            </p>
            <div>
              <Button onClick={decrementCurrentStep}>Previous step</Button>
              <Button onClick={incrementCurrentStep}>Next step</Button>
            </div>{" "}
          </StepBody>
        </Stepper.Step>
        <Stepper.Step id="third" name="Step 3">
          <StepBody>
            <p>
              Molestiae nihil nulla odio repellendus rerum similique suscipit
              unde veniam!
            </p>
            <div>
              <Button onClick={decrementCurrentStep}>Previous step</Button>
              <Button onClick={incrementCurrentStep}>Next step</Button>
            </div>{" "}
          </StepBody>
        </Stepper.Step>
        <Stepper.Step id="forth" name="Step 4">
          <StepBody>
            <p>
              Accusamus alias asperiores beatae dolores et expedita molestias
              nihil tempora?
            </p>
            <div>
              <Button onClick={decrementCurrentStep}>Previous step</Button>
              <Button onClick={incrementCurrentStep}>Next step</Button>
            </div>{" "}
          </StepBody>
        </Stepper.Step>
      </Stepper.Steps>
    </Stepper>
  );
};

export const Primary = () => (
  <StepperProvider>
    <Wrapper />
  </StepperProvider>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
