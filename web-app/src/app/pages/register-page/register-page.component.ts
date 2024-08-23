import { Component, computed } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { TextComponent } from '../../components/text/text.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [LogoComponent, TextComponent, RegisterFormComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  registerPageClass = computed(() => `register-page`);
}
