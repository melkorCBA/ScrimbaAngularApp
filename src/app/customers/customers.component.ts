import { Component, OnInit, Pipe } from '@angular/core';
import { ICustomer } from '../shared/interface';

import { DataService } from './../core/data.service';


 @Component({
     selector:'app-customers',
     templateUrl:'./customers.component.html'
 })

 export class CustomersComponent implements OnInit{
     title: String
     people:ICustomer[]
     

     constructor(private dataService:DataService){ //injected dataservice

     }

     ngOnInit(){
        this.title="Customers"
        this.dataService.getCustomers() //.subscribe is a call observable
            .subscribe((customers:ICustomer[])=> this.people=customers);
     }
 }

