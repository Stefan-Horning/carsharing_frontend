import { Component } from '@angular/core';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderComponent } from '../header/header.component';
import { AuthSwitchComponent } from '../auth-switch/auth-switch.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, FormInputComponent,ButtonComponent,HeaderComponent,AuthSwitchComponent,RouterLink]
})
export class LoginComponent {

}
