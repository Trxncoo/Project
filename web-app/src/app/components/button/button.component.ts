import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  color = input<string>('black');
  disabled = input<boolean>(false);

  buttonClass = computed(() => `button ${this.color()}`);
}
