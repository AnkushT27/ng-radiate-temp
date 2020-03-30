import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociateBrokerRoutingModule } from './associate-broker-routing.module';
import { AssociateBrokerComponent } from './associate-broker/associate-broker.component';

@NgModule({
  imports: [
    CommonModule,
    AssociateBrokerRoutingModule
  ],
  declarations: [AssociateBrokerComponent]
})
export class AssociateBrokerModule { }
