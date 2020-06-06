import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';
import { ModalModule } from '../../../node_modules/ngx-bootstrap';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list/project-list.component';
@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
    ModalModule.forRoot(),
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LeadsComponent, ProjectListComponent]
})
export class LeadsModule { }
