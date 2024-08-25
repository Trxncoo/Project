import { Component, computed } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { TextComponent } from '../../components/text/text.component';
import { ForgotPasswordFormComponent } from '../../components/forgot-password-form/forgot-password-form.component';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [LogoComponent, TextComponent, ForgotPasswordFormComponent],
  templateUrl: './forgot-password-page.component.html',
  styleUrl: './forgot-password-page.component.scss',
})
export class ForgotPasswordPageComponent {
  forgotPasswordPageClass = computed(() => `forgot-password-page`);
}
