import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import {AddProjectComponent} from './add-project/add-project.component'
import {AuthGuardService} from '../auth-guard/auth-guard'
const routes: Routes = [
  {
    path:'',
    component:ProjectComponent
  },
  {
    path:'editproject/:id',
    component:AddProjectComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'addproject',
    component:AddProjectComponent,
    canActivate:[AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
