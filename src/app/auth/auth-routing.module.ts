import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const AuthRoutes: Routes = [
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
}, {
    path: '',
    children: [{
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }, {
      path: 'forgot-password',
      component: ForgotPasswordComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
