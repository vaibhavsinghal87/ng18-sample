import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule { }
