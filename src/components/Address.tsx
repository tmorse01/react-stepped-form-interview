import { FormData } from '../types';

interface AddressProps {
  data: FormData;
  errors: Record<string, string>;
  onChange: (data: Partial<FormData>) => void;
}

export function Address({ data, errors, onChange }: AddressProps) {
  // TODO: Implement form fields for Address step
  // Fields: street, city, state, zipCode

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Address Information</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement this step</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Add form fields: Street, City, State, Zip Code</li>
          <li>Handle input changes</li>
          <li>Validate zip code format (5 digits)</li>
          <li>Display validation errors</li>
        </ul>
      </div>

      {/* TODO: Implement form fields */}
    </div>
  );
}
