import { Component } from '@angular/core';
import { StringInputComponent } from './components/string-input/string-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { TextComponent } from './components/text/text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StringInputComponent, ButtonComponent, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
