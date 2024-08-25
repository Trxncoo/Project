import { Component, computed, inject } from '@angular/core';
import { StringInputComponent } from '../string-input/string-input.component';
import { FormElementComponent } from '../form-element/form-element.component';
import { LinkComponent } from '../link/link.component';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';
import { FormService } from '../../services/form/form.service';
import { NotificationService } from '../../services/notification/notification.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForgotPasswordForm } from './interfaces/forgot-password-form.interface';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    StringInputComponent,
    FormElementComponent,
    LinkComponent,
    ButtonComponent,
    TextComponent,
  ],
  templateUrl: './forgot-password-form.component.html',
  styleUrl: './forgot-password-form.component.scss',
})
export class ForgotPasswordFormComponent {
  private readonly formService = inject(FormService);
  private readonly notificationService = inject(NotificationService);

  forgotPasswordFormClass = computed(() => `forgot-password-form`);

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  emailFormField = this.formService.getField(this.forgotPasswordForm, 'email', {
    required: 'Email is required',
  });

  onSubmit() {
    this.formService.handleSubmit(
      this.forgotPasswordForm,
      (value) => {
        const form = value as IForgotPasswordForm;
        console.log(form);
      },
      () => {
        console.log('Error');
      }
    );
  }
}
