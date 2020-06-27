import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project/project.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignBrokersComponent } from './assign-brokers/assign-brokers.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    DataTablesModule,
    NgxPaginationModule
  ],
  declarations: [ProjectComponent, AddProjectComponent, AssignBrokersComponent],
})
export class ProjectModule { }
