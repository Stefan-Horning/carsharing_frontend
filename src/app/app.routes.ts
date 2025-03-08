import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
    {
        path: 'auth', component: AuthComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: '**', redirectTo: 'login' }
        ]
    },
    {
        path: 'login', redirectTo: 'auth/login'
    },
    {
        path: '', component: HomepageComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
