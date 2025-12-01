import { FormData } from '../types';

interface ReviewProps {
  data: FormData;
  onEdit: (step: 1 | 2 | 3) => void;
}

export function Review({ data, onEdit }: ReviewProps) {
  // TODO: Display all collected form data in a read-only format
  // Allow users to edit by navigating back to specific steps

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement this step</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Display all form data from previous steps</li>
          <li>Group data by step (Personal Info, Address, Preferences)</li>
          <li>Add "Edit" buttons to navigate back to each step</li>
          <li>Make the display clear and easy to review</li>
        </ul>
      </div>

      {/* Example structure */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <button
            onClick={() => onEdit(1)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Edit
          </button>
        </div>
        {/* TODO: Display personal info data */}
        <p className="text-gray-500 text-sm">Data will be displayed here</p>
      </div>

      {/* TODO: Add sections for Address and Preferences */}
    </div>
  );
}
