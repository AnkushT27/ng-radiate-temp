import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule
  ],
  declarations: [ForgetPasswordComponent]
})
export class ForgetPasswordModule { }
