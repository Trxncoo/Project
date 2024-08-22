import { Component, computed, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form/form.service';
import { StringInputComponent } from '../string-input/string-input.component';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, StringInputComponent, ButtonComponent, TextComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  private readonly formService = inject(FormService);

  loginFormClass = computed(() => `login-form`);

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  emailFormField = this.formService.getField(this.loginForm, 'email', {});
  passwordFormField = this.formService.getField(this.loginForm, 'password', {});

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
