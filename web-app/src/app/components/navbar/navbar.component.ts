import { Component, computed } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TextComponent } from '../text/text.component';
import { IconComponent } from '../icon/icon.component';
import { ImageComponent } from '../image/image.component';
import { NavbarItemComponent } from '../navbar-item/navbar-item.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, TextComponent, IconComponent, ImageComponent, NavbarItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navbarClass = computed(() => `navbar`);
}
