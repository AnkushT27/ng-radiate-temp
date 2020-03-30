import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalModule } from 'ngx-bootstrap'
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
