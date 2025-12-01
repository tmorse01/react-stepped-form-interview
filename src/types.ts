// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FormData {
  // TODO: Define your form data structure
  // Examples:
  // name?: string;
  // email?: string;
}

export type StepId = 1 | 2 | 3;

export interface ValidationErrors {
  // TODO: Define validation errors for each field
  // Example: name?: string; email?: string;
  [key: string]: string | undefined;
}
