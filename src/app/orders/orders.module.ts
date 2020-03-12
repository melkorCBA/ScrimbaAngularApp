import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'



import { SharedModule } from './../shared/shared.module';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    OrdersComponent //should declare all the components belongs to this module  here
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, OrdersRoutingModule
  ],

  exports:[OrdersComponent]
})
export class OrdersModule { }
