import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import {AddProjectComponent} from './add-project/add-project.component'
const routes: Routes = [
  {
    path:'',
    component:ProjectComponent
  },
  {
    path:'editproject/:id',
    component:AddProjectComponent
  },
  {
    path:'addproject',
    component:AddProjectComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
