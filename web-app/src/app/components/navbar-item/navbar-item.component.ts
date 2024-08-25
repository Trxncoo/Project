import { Component, computed, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { TextComponent } from '../text/text.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [IconComponent, TextComponent, RouterLink],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
  label = input<string>('');
  icon = input<string>('');
  link = input<string>('');

  navbarItemClass = computed(() => `navbar-item`);
}
