import React, { useContext, useReducer, useCallback } from "react";
import { defaultStepperState, reducer } from "../store";
import {
  DECREMENT_CURRENT_STEP,
  GO_TO_STEP,
  INCREMENT_CURRENT_STEP,
  SET_STEPS,
  STEP_COMPLETED,
} from "../store/types";

export const StepperContext = React.createContext();

export const StepperProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStepperState);

  return (
    <StepperContext.Provider value={[state, dispatch]}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => {
  const [state, dispatch] = useContext(StepperContext);
  const { currentStep, steps, stepsCompleted } = state;

  if (!StepperContext) {
    throw new Error("useStepper should be used inside StepperProvider");
  }

  const incrementCurrentStep = useCallback(() => {
    dispatch({
      type: INCREMENT_CURRENT_STEP,
    });
  }, [dispatch]);

  const decrementCurrentStep = useCallback(() => {
    dispatch({
      type: DECREMENT_CURRENT_STEP,
    });
  }, [dispatch]);

  const setSteps = useCallback(
    (steps) => dispatch({ type: SET_STEPS, payload: { steps } }),
    [dispatch]
  );

  const setStepCompleted = useCallback(
    (step) => dispatch({ type: STEP_COMPLETED, payload: { step } }),
    [dispatch]
  );

  /**
   * Accepts a step ID, and renders that step to the view
   *
   * @param  {string|number} - ID of the current step, **note DO NOT USE STEP INDEX**
   * @return {void} - dispatchs an action to navigate to this step
   */

  const goToStep = useCallback(
    (id) => dispatch({ type: GO_TO_STEP, payload: { id } }),
    [dispatch]
  );

  const checkStepCompleted = (step) => stepsCompleted.includes(step);

  return {
    // Setters
    decrementCurrentStep,
    goToStep,
    incrementCurrentStep,
    setStepCompleted,
    setSteps,
    // Getters
    currentStep,
    steps,
    checkStepCompleted,
  };
};
