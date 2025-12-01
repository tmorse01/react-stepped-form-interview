import { FormData, ValidationErrors } from "../types";

interface AddressProps {
  data: FormData;
  errors: ValidationErrors;
  onChange: (data: Partial<FormData>) => void;
}

export function Address({
  data: _data,
  errors: _errors,
  onChange: _onChange,
}: AddressProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Address Information</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement form fields</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Add input fields for street, city, state, and zip code</li>
          <li>Handle onChange events to update parent state</li>
          <li>Display error messages below fields</li>
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Street Address *
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="123 Main St"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="San Francisco"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State *
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="CA"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Zip Code *
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="94105"
        />
      </div>
    </div>
  );
}
