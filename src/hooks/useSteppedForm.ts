import { useState } from "react";
import { FormData, StepId, ValidationErrors } from "../types";

export function useSteppedForm() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [formData, _setFormData] = useState<FormData>({});
  const [errors, _setErrors] = useState<ValidationErrors>({});

  const updateFormData = (stepData: Partial<FormData>) => {
    // TODO: Merge new data with existing form data
    console.log("TODO: Update form data", stepData);
  };

  const validateStep = (step: StepId): boolean => {
    // TODO: Validate step 1 (name and email)
    // Return true if valid, false if invalid
    // Update errors state if invalid
    console.log("TODO: Validate step", step);
    return true;
  };

  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep((currentStep + 1) as StepId);
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as StepId);
    }
  };

  const goToStep = (step: StepId) => {
    setCurrentStep(step);
  };

  const submitForm = () => {
    if (validateStep(3)) {
      console.log("Form submitted:", formData);
      // TODO: Handle successful submission (show success message, etc.)
    }
  };

  return {
    currentStep,
    formData,
    errors,
    updateFormData,
    validateStep,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    submitForm,
  };
}
