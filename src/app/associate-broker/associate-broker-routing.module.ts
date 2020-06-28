import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateBrokerComponent } from './associate-broker/associate-broker.component'

const routes: Routes = [
  {
    path:'',
    component:AssociateBrokerComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateBrokerRoutingModule { }
