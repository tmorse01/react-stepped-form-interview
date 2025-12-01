import { useSteppedForm } from './hooks/useSteppedForm';
import { StepIndicator } from './components/StepIndicator';
import { PersonalInfo } from './components/PersonalInfo';
import { Address } from './components/Address';
import { Preferences } from './components/Preferences';
import { Review } from './components/Review';

function App() {
  const {
    currentStep,
    formData,
    errors,
    updateFormData,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    submitForm,
  } = useSteppedForm();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            data={formData}
            errors={errors}
            onChange={updateFormData}
          />
        );
      case 2:
        return (
          <Address
            data={formData}
            errors={errors}
            onChange={updateFormData}
          />
        );
      case 3:
        return (
          <Preferences
            data={formData}
            errors={errors}
            onChange={updateFormData}
          />
        );
      case 4:
        return <Review data={formData} onEdit={goToStep} />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    submitForm();
    // TODO: Show success message, redirect, etc.
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Multi-Step Form
          </h1>
          <p className="text-gray-600">
            Complete all steps to submit your information
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <StepIndicator currentStep={currentStep} onStepClick={goToStep} />

          <div className="min-h-[400px]">{renderStep()}</div>

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={goToPreviousStep}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Back
            </button>

            {currentStep < 4 ? (
              <button
                onClick={goToNextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Step {currentStep} of 4</p>
        </div>
      </div>
    </div>
  );
}

export default App;
