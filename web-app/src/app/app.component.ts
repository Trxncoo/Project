import { Component } from '@angular/core';
import { TextComponent } from './components/text/text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
