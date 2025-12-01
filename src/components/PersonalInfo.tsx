import { FormData } from '../types';

interface PersonalInfoProps {
  data: FormData;
  errors: Record<string, string>;
  onChange: (data: Partial<FormData>) => void;
}

export function PersonalInfo({ data, errors, onChange }: PersonalInfoProps) {
  // TODO: Implement form fields for Personal Info step
  // Fields: firstName, lastName, email, phone
  // Add proper validation and error display

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement this step</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Add form fields: First Name, Last Name, Email, Phone</li>
          <li>Handle input changes and update parent state</li>
          <li>Display validation errors</li>
          <li>Ensure proper TypeScript typing</li>
        </ul>
      </div>

      {/* Example field structure - implement the rest */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name *
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your first name"
          // TODO: Add value, onChange, etc.
        />
        {/* TODO: Display error if exists */}
      </div>

      {/* TODO: Add remaining fields */}
    </div>
  );
}
