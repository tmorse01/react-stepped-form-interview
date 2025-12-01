import { useState } from 'react';
import { FormData, StepId, ValidationErrors } from '../types';

export function useSteppedForm() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<ValidationErrors>({});

  // TODO: Implement form data updates
  const updateFormData = (stepData: Partial<FormData>) => {
    // Hint: Merge stepData with existing formData
    console.log('TODO: Update form data', stepData);
  };

  // TODO: Implement validation logic for each step
  const validateStep = (step: StepId): boolean => {
    // Hint: Check required fields, formats, etc.
    // Return true if valid, false if invalid
    // Update errors state with validation messages
    console.log('TODO: Validate step', step);
    return true; // Placeholder - always returns true
  };

  // TODO: Implement step navigation with validation
  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
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
    // TODO: Add validation logic - should we allow jumping to any step?
    setCurrentStep(step);
  };

  // TODO: Implement form submission
  const submitForm = () => {
    console.log('TODO: Submit form', formData);
    // Hint: Validate all steps, then handle submission
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
