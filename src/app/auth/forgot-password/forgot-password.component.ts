import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../header/header.component';
import { AuthSwitchComponent } from '../auth-switch/auth-switch.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  imports: [CommonModule, FormInputComponent,ButtonComponent,HeaderComponent,AuthSwitchComponent]
})
export class ForgotPasswordComponent {

}
