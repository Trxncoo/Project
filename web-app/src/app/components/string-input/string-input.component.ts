import { Component, computed, forwardRef, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { TranslocoPipe } from '@jsverse/transloco';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-string-input',
  standalone: true,
  imports: [IconComponent, TranslocoPipe],
  templateUrl: './string-input.component.html',
  styleUrl: './string-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StringInputComponent),
      multi: true,
    },
  ],
})
export class StringInputComponent implements ControlValueAccessor {
  placeholder = input<string>('');
  color = input<string>('black');
  variant = input<string>('');
  iconLeft = input<string>('');
  iconRight = input<string>('');

  value = '';
  isDisabled = false;
  onChange = (value: string) => {};
  onTouched = () => {};

  iconLeftClicked = output();
  iconRightClicked = output();

  stringInputClass = computed(
    () => `string-input ${this.color()} ${this.iconLeft() ? 'icon-left' : ''} ${this.iconRight() ? 'icon-right' : ''}`
  );

  onIconLeftClick() {
    this.iconLeftClicked.emit();
  }

  onIconRightClick() {
    this.iconRightClicked.emit();
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  handleBlur() {
    this.onTouched();
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: (value: string) => void) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }
}
