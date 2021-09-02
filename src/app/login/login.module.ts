import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserForgetPasswordComponent } from './user-forget-password/user-forget-password.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
    UserForgetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
