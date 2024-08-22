import { Component, computed } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  logoClass = computed(() => `logo`);
}
