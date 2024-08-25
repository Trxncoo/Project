import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  path = input<string>('');
  size = input<number>(0);
  variant = input<string>('');

  imageClass = computed(() => `image ${this.variant()}`);
}
