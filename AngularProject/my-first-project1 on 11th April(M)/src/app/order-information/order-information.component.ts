import { Component, OnInit } from '@angular/core';
import { OrderdbservicesService } from '../orderdbservices.service';
import { __assign } from 'tslib';
import { OrderItem } from '../OrderItem';
import { DataSource } from '@angular/cdk/table';
import { Orderdb } from '../Orderdb';
import { Customer } from '../Customer';
import { Observable } from 'rxjs';
import { orderInformationclass } from '../orderInformation';

@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.css']
})
export class OrderInformationComponent implements OnInit {
  //  orderinformation : orderInformationclass[] = new orderInformationclass(); 
  // orderinformation : orderInformationclass[];
    //  orderinformation : [];
   //orderinformation = [];

  constructor(
    private Orderdbservices : OrderdbservicesService,
  ) {
   
   }
   
 
   orderdb : Orderdb[] ;
  // orderdb : Orderdb;
 
  
  datasource; 

  ngOnInit() {
     this.getOrderItemInf();
  }
  displayedColumns: string[] = ['OrderId', 'CustomerName', 'OrderDate', 'TotalQuantity' ,'TotalPrice','Actions'];

  getOrderItemInf() : void{
    this.Orderdbservices.ServiceGetOrderdb().subscribe((response) => {
      this.orderdb = response ;
      this.Assign();
    })
  }
  
  Assign() : void{
    this.datasource = this.orderdb.map(item => {
      return {
        orderId : item.Id,
        totalquantity : item.TotalQuantity,
        orderdate : item.OrderDate,
        totalPrice : item.TotalPrice,
        customername : item.tblCustomer.CustomerName
      }
    });
  }


 
}
