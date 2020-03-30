import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'leads',
    loadChildren:'../leads/leads.module#LeadsModule'
  },
  {
    path:'forget-password',
    loadChildren:'../forget-password/forget-password.module#ForgetPasswordModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
