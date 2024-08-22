import { Component, computed, input } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  content = input<string>('');
  color = input<string>('black');
  variant = input<string>('');

  textClass = computed(() => `text ${this.color()} ${this.variant()}`);
}
