import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
   DataTablesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LeadsComponent]
})
export class LeadsModule { }
