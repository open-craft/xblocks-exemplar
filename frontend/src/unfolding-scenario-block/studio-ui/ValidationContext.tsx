import { createContext, useContext } from 'react';
import type { FieldErrors } from './validation';

interface ValidationContextValue {
  /** Field path → message, from client validation and the server response. */
  errors: FieldErrors;
  /** Errors are only surfaced after a save attempt, matching the design. */
  showErrors: boolean;
}

const ValidationContext = createContext<ValidationContextValue>({
  errors: {},
  showErrors: false,
});

export const ValidationProvider = ValidationContext.Provider;

const NO_ERRORS: FieldErrors = {};

/** All messages, for lists rendered from a map (options, scenarios). */
export const useFieldErrors = (): FieldErrors => {
  const { errors, showErrors } = useContext(ValidationContext);
  return showErrors ? errors : NO_ERRORS;
};

/** Message for a field, or `undefined` while errors are not being shown. */
export const useFieldError = (path: string): string | undefined => {
  const { errors, showErrors } = useContext(ValidationContext);
  return showErrors ? errors[path] : undefined;
};
