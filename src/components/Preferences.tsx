import { FormData } from '../types';

interface PreferencesProps {
  data: FormData;
  errors: Record<string, string>;
  onChange: (data: Partial<FormData>) => void;
}

export function Preferences({ data, errors, onChange }: PreferencesProps) {
  // TODO: Implement form fields for Preferences step
  // Fields: newsletter (checkbox), contactMethod (radio), promotions (checkbox)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Your Preferences</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement this step</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Add newsletter subscription checkbox</li>
          <li>Add contact method radio buttons (Email, Phone, SMS)</li>
          <li>Add promotional offers checkbox</li>
          <li>Handle checkbox and radio button changes</li>
        </ul>
      </div>

      {/* TODO: Implement form fields */}
    </div>
  );
}
