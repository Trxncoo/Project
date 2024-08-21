import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  name = input<string>('');
  color = input<string>('black');

  iconClass = computed(() => `icon material-symbols-outlined ${this.color()}`);
}
