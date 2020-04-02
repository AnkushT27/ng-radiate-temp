import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'leads',
    loadChildren:'../leads/leads.module#LeadsModule'
  },
  {
    path:'projects',
    loadChildren:'../project/project.module#ProjectModule'
  },
  {
    path:'brokers',
    loadChildren:'../associate-broker/associate-broker.module#AssociateBrokerModule'
  },
  {
    path:'login',
    loadChildren:'../login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
