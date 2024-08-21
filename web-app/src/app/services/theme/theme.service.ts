import { Injectable, signal } from '@angular/core';
import { Theme } from './types/theme.type';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly theme = signal<Theme>('light');

  getTheme() {
    return this.theme();
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}
