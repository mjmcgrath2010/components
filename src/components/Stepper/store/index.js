import {
  DECREMENT_CURRENT_STEP,
  GO_TO_STEP,
  INCREMENT_CURRENT_STEP,
  SET_STEPS,
  STEP_COMPLETED,
} from "./types";

export const defaultStepperState = {
  steps: [],
  currentStep: 0,
  stepsCompleted: [],
  stepMap: {},
};

export const reducer = (state = defaultStepperState, action) => {
  const { currentStep, steps, stepMap } = state;
  const { type, payload } = action;
  switch (type) {
    case SET_STEPS:
      const STEP_MAP = payload.steps.reduce(
        (acc, { id }, idx) => ({
          ...acc,
          [id]: idx,
        }),
        {}
      );

      return {
        ...state,
        steps: payload.steps,
        stepMap: STEP_MAP,
      };
    case INCREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep:
          currentStep < steps.length - 1 ? currentStep + 1 : currentStep,
      };
    case DECREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep: currentStep > 0 ? currentStep - 1 : currentStep,
      };

    case STEP_COMPLETED:
      return {
        ...state,
        currentStep:
          currentStep < steps.length - 1 ? currentStep + 1 : currentStep,
        stepsCompleted: [...state.stepsCompleted, payload.step],
      };
    case GO_TO_STEP:
      return {
        ...state,
        currentStep: stepMap[payload.id],
      };
    default:
      return state;
  }
};
