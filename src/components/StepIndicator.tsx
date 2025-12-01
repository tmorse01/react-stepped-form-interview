import { StepId } from '../types';

interface StepIndicatorProps {
  currentStep: StepId;
  onStepClick?: (step: StepId) => void;
}

const steps = [
  { id: 1 as StepId, label: 'Personal Info' },
  { id: 2 as StepId, label: 'Review' },
];

export function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <button
                onClick={() => onStepClick?.(step.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  currentStep === step.id
                    ? 'bg-blue-600 text-white'
                    : currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                } ${onStepClick ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
              >
                {currentStep > step.id ? '✓' : step.id}
              </button>
              <span className="text-xs mt-2 text-gray-600 text-center">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 mb-6 transition-colors ${
                  currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
