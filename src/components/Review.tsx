import { FormData } from '../types';

interface ReviewProps {
  data: FormData;
  onEdit: (step: 1 | 2 | 3) => void;
}

export function Review({ data, onEdit }: ReviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>

      <div className="text-gray-600 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <p className="font-semibold">TODO: Implement review display</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Display name and email from form data</li>
          <li>Add an Edit button to go back to step 1</li>
          <li>Show submitted data in a clear format</li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Your Information</h3>
          <button
            onClick={() => onEdit(1)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Edit
          </button>
        </div>
        <p className="text-gray-500 text-sm">Data will be displayed here</p>
      </div>
    </div>
  );
}
