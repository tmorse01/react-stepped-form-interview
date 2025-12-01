import { FormData } from "../types";

interface ReviewProps {
  data: FormData;
  onEdit: (step: 1 | 2 | 3) => void;
}

export function Review({ data: _data, onEdit }: ReviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="mb-6 text-2xl font-bold">Review Your Information</h2>

      <div className="p-4 text-gray-600 border border-yellow-200 rounded bg-yellow-50">
        <p className="font-semibold">TODO: Implement review display</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Display name, email, and address from form data</li>
          <li>Add Edit buttons to go back to each step</li>
          <li>Show submitted data in a clear format</li>
        </ul>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold">Your Information</h3>
          <button
            onClick={() => onEdit(1)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Edit
          </button>
        </div>
        <p className="text-sm text-gray-500">Data will be displayed here</p>
      </div>
    </div>
  );
}
