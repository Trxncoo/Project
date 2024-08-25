import { Component, computed, input } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  size = input<number>(128);

  logoClass = computed(() => `logo`);
}
