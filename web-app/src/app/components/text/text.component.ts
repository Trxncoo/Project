import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  content = input<string>('');
  color = input<string>('black');

  textClass = computed(() => `text ${this.color()}`);
}
