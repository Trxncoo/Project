import { Component, computed, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IFormField } from '../../services/form/interfaces/form-field.interface';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-form-element',
  standalone: true,
  imports: [ReactiveFormsModule, TextComponent],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.scss',
})
export class FormElementComponent {
  formField = input<IFormField>();

  formElementClass = computed(() => `form-element`);
}
