import { FormFieldErrorMessage } from '../types/form-field-error-message.type';
import { FormFieldInvalid } from '../types/form-field-invalid.type';

export interface IFormField {
  invalid: FormFieldInvalid;
  errorMessage: FormFieldErrorMessage;
}
