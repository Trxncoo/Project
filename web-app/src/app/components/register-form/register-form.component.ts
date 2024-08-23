import { Component, computed, inject } from '@angular/core';
import { FormService } from '../../services/form/form.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormElementComponent } from '../form-element/form-element.component';
import { LinkComponent } from '../link/link.component';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';
import { StringInputComponent } from '../string-input/string-input.component';
import { IRegisterForm } from './interfaces/register-form.interface';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormElementComponent,
    LinkComponent,
    ButtonComponent,
    TextComponent,
    StringInputComponent,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  private readonly formService = inject(FormService);
  private readonly notificationService = inject(NotificationService);

  registerFormClass = computed(() => `register-form`);

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirmation: new FormControl('', [Validators.required]),
  });

  usernameFormField = this.formService.getField(this.registerForm, 'username', { required: 'Username is required' });
  emailFormField = this.formService.getField(this.registerForm, 'email', {
    required: 'Email is required',
    email: 'This is not a valid email',
  });
  passwordFormField = this.formService.getField(this.registerForm, 'password', {
    required: 'Password is required',
    minlength: 'Password must have atleast 8 characters',
  });
  passwordConfirmationFormField = this.formService.getField(this.registerForm, 'passwordConfirmation', {
    required: 'Password confirmation is required',
  });

  onSubmit() {
    this.formService.handleSubmit(
      this.registerForm,
      (value) => {
        const form = value as IRegisterForm;

        if (form.password !== form.passwordConfirmation) {
          this.notificationService.push("Passwords don't match", 'green');
        }
      },
      () => {
        console.log('Error');
      }
    );
  }
}
