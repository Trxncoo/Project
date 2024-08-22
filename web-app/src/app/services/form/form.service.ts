import { Injectable } from '@angular/core';
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
    return {
      invalid$: this.getFieldInvalid(group, fieldName),
      errorMessage$: this.getFieldErrorMessage(group, fieldName, messages),
    };
  }

  getFieldInvalid(group: FormGroup, fieldName: string): FormFieldInvalid {
    return group.get(fieldName)!.valueChanges.pipe(
      startWith(group.get(fieldName)?.value),
      map(() => {
        const control = group.get(fieldName);
        return control?.invalid && (control.dirty || control.touched);
      })
    )!;
  }

  getFieldErrorMessage(group: FormGroup, fieldName: string, messages: FormMessages): FormFieldErrorMessage {
    const control = group.get(fieldName);

    if (!control) return new Observable<string>();

    return combineLatest([
      control.valueChanges.pipe(startWith(control.value)),
      control.statusChanges.pipe(startWith(control.status)),
    ]).pipe(
      map(() => {
        if (control.errors && (control.dirty || control.touched)) {
          const firstKey = Object.keys(control.errors)[0];
          return messages[firstKey] || 'Invalid field';
        } else {
          return '';
        }
      })
    );
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
