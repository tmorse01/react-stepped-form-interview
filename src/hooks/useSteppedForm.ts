import { useState } from 'react';
import { FormData, StepId, ValidationErrors } from '../types';

export function useSteppedForm() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<ValidationErrors>({});

  const updateFormData = (stepData: Partial<FormData>) => {
    // TODO: Merge new data with existing form data
    console.log('TODO: Update form data', stepData);
  };

  const validateStep = (step: StepId): boolean => {
    // TODO: Validate step 1 (name and email)
    // Return true if valid, false if invalid
    // Update errors state if invalid
    console.log('TODO: Validate step', step);
    return true;
  };

  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 2) {
        setCurrentStep(2);
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(1);
    }
  };

  const goToStep = (step: StepId) => {
    setCurrentStep(step);
  };

  const submitForm = () => {
    if (validateStep(2)) {
      console.log('Form submitted:', formData);
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
