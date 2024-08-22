import { Component, computed } from '@angular/core';
import { TextComponent } from '../../components/text/text.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { ImageComponent } from '../../components/image/image.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [TextComponent, LoginFormComponent, ImageComponent, LogoComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginPageClass = computed(() => `login-page`);
}
