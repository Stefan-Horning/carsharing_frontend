import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  imports: [],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() type: string = 'text'; // Standardwert: Textfeld
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() icon: string = ''; // Icon-Pfad
  @Input() label: string = '';
}
