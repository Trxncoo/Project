import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  content = input<string>('');
  color = input<string>('black');
  routerLink = input<string>('');

  linkClass = computed(() => `link ${this.color()}`);
}
