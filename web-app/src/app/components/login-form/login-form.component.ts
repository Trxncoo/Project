import { Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form/form.service';
import { StringInputComponent } from '../string-input/string-input.component';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';
import { LinkComponent } from '../link/link.component';
import { FormElementComponent } from '../form-element/form-element.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    StringInputComponent,
    ButtonComponent,
    TextComponent,
    LinkComponent,
    FormElementComponent,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  private readonly formService = inject(FormService);

  loginFormClass = computed(() => `login-form`);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  emailFormField = this.formService.getField(this.loginForm, 'email', { required: 'Email is required' });
  passwordFormField = this.formService.getField(this.loginForm, 'password', { required: 'Password is required' });

  onSubmit() {
    this.formService.handleSubmit(
      this.loginForm,
      (value) => {
        console.log(value);
      },
      () => {
        console.log('Error');
      }
    );
  }
}
