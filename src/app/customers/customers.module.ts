

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { SharedModule } from './../shared/shared.module';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [
    CustomersComponent, CustomersListComponent, FilterTextboxComponent //should declare all the components belongs to this module  here
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, CustomersRoutingModule
  ],

  exports:[CustomersComponent]
})
export class CustomersModule { }
