import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule
  ],
  declarations: [LeadsComponent]
})
export class LeadsModule { }
