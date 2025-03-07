import { CommonModule } from '@angular/common';
import { Component,Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-switch',
  templateUrl: './auth-switch.component.html',
  styleUrl: './auth-switch.component.scss',
  imports: [RouterLink,CommonModule]
})
export class AuthSwitchComponent {
  @Input() isLogin: boolean = true;
  @Input() forgot: boolean = false;
}
