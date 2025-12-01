import { FormData, ValidationErrors } from "../types";

interface PersonalInfoProps {
  data: FormData;
  errors: ValidationErrors;
  onChange: (data: Partial<FormData>) => void;
}

export function PersonalInfo({
  data: _data,
  errors: _errors,
  onChange: _onChange,
}: PersonalInfoProps) {
  return (
    <div className="space-y-4">
      <h2 className="mb-6 text-2xl font-bold">Personal Information</h2>

      <div className="p-4 text-gray-600 border border-yellow-200 rounded bg-yellow-50">
        <p className="font-semibold">TODO: Implement form fields</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Add input fields for name and email</li>
          <li>Handle onChange events to update parent state</li>
          <li>Display error messages below fields</li>
        </ul>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Full name"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
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
