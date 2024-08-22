import { effect, Injectable, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { IFormField } from './interfaces/form-field.interface';
import { FormFieldInvalid } from './types/form-field-invalid.type';
import { FormFieldErrorMessage } from './types/form-field-error-message.type';
import { FormOnSubmitCallback } from './types/form-on-submit-callback.type';
import { FormOnErrorCallback } from './types/form-on-error-callback.type';
import { FormMessages } from './types/form-messages.type';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  getField(group: FormGroup, fieldName: string, messages: FormMessages): IFormField {
    const invalid$ = this.getFieldInvalid(group, fieldName);
    const errorMessage$ = this.getFieldErrorMessage(group, fieldName, messages);

    return {
      invalid: invalid$,
      errorMessage: errorMessage$,
    };
  }

  getFieldInvalid(group: FormGroup, fieldName: string): FormFieldInvalid {
    const control = group.get(fieldName);
    const invalidSignal = signal(control?.invalid && (control?.dirty || control?.touched));

    effect(() => {
      control?.valueChanges.subscribe(() => {
        invalidSignal.set(control?.invalid && (control?.dirty || control?.touched));
      });
    });

    return invalidSignal;
  }

  getFieldErrorMessage(group: FormGroup, fieldName: string, messages: FormMessages): FormFieldErrorMessage {
    const control = group.get(fieldName);
    const errorMessageSignal = signal('');

    if (!control) return errorMessageSignal;

    effect(() => {
      const computeErrorMessage = () => {
        if (control.errors && (control.dirty || control.touched)) {
          const firstKey = Object.keys(control.errors)[0];
          return messages[firstKey] || 'Invalid field';
        } else {
          return '';
        }
      };

      control.valueChanges.subscribe(() => {
        errorMessageSignal.set(computeErrorMessage());
      });

      control.statusChanges.subscribe(() => {
        errorMessageSignal.set(computeErrorMessage());
      });
    });

    return errorMessageSignal;
  }

  validateAllFormFields(group: FormGroup): void {
    Object.keys(group.controls).forEach((field) => {
      const control = group.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
        control?.markAsDirty({ onlySelf: true });
      }
    });
  }

  handleSubmit(group: FormGroup, onSubmitCallback: FormOnSubmitCallback, onErrorCallback?: FormOnErrorCallback): void {
    if (group.valid) {
      onSubmitCallback(group.value);
    } else {
      this.validateAllFormFields(group);
      if (onErrorCallback) {
        onErrorCallback();
      }
    }
  }
}
