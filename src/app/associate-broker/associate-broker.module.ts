import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AssociateBrokerRoutingModule } from './associate-broker-routing.module';
import { AssociateBrokerComponent } from './associate-broker/associate-broker.component';
import { ModalModule } from '../../../node_modules/ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AssociateBrokerRoutingModule,
    DataTablesModule,
    ModalModule.forRoot()
  ],
  declarations: [AssociateBrokerComponent]
})
export class AssociateBrokerModule { }
