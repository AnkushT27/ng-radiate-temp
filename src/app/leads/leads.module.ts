import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
   DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [LeadsComponent]
})
export class LeadsModule { }
