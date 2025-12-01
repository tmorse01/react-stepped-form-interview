import { FormData } from '../types';

interface PersonalInfoProps {
  data: FormData;
  errors: Record<string, string>;
  onChange: (data: Partial<FormData>) => void;
}

export function PersonalInfo({ data, errors, onChange }: PersonalInfoProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement form fields</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Add input fields for name and email</li>
          <li>Handle onChange events to update parent state</li>
          <li>Display error messages below fields</li>
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
      </div>
    </div>
  );
}
