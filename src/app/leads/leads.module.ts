import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads/leads.component';
import { ModalModule } from '../../../node_modules/ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [LeadsComponent]
})
export class LeadsModule { }
