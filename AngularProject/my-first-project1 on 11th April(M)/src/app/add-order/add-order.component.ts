import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { Customer } from '../Customer';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { by } from 'protractor';
import { Item } from '../Item';
import { ItemServicesService } from '../item-services.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import {formatDate } from '@angular/common';
import { Orderdb } from '../Orderdb';
import { OrderItem } from '../OrderItem';

import { OrderdbservicesService } from '../orderdbservices.service';



@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent  implements OnInit  {

  item : Item = new Item();
  
  closeResult: string;
  public customers : Customer[];
 
 
  public selectedOrderItem : OrderItem[] = [];

   public selectedItem : OrderItem[] = [];
 
  // selectedItem : Item[] = [];
  selectedRowIndex: number = -1;
 
   selectedDataSource;
   totalQuantity : number = 0;
   totalPrice : number = 0;
   cust : Customer;
  //  orderitem : OrderItem; 
   dataSource;
  // SelectedOrderItem : OrderItem[] = [];
   totalIndividPrice : number = 0;
   runningValue : number = 0;
  orderitem : OrderItem = new OrderItem();
  selectedCustomerValue: number;
   orderdb : Orderdb = new Orderdb();
   ChangeValueInDropDown;
   
  constructor(private customerService : CustomerService,
    private modalService: NgbModal,
    private itemService : ItemServicesService,
    private route :ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef,
    // private orderitemservice : OrderItemServiceService
    private orderdbservice : OrderdbservicesService

    ) { }

  ngOnInit() {
    this.getCustName();
   
    // this.selectedDataSource = new MatTableDataSource(this.selectedItem);
    this.selectedDataSource = new MatTableDataSource(this.selectedOrderItem);
  }

  // myControl = new FormControl();
   

  
  
 

   
  OrderItemDisplayedColumns : string[] = ["Id","ItemId","ItemQuantity","ItemPrice","ItemTotal"];

  ItemDisplayedColumns : string[] = ['Id','ItemName', 'ItemQuantity','ItemPrice','ItemDescription'];

 
  today = new Date();


  AddOrders() : void{
    this.Assign();
    this.orderdbservice.ServiceSaveOrderdb(this.orderdb).subscribe(x => console.log(x));
    // this.orderdbService.ServiceSaveOrderdb(this.orderdb).subscribe(x => console.log(x));
    window.alert("Well done !!!");
  }



  Assign(){
    this.orderdb.TotalQuantity = this.totalQuantity;
    this.orderdb.OrderDate = this.today;
     this.orderdb.TotalPrice = this.totalPrice;
     this.orderdb.CustomerId = this.selectedCustomerValue;
     this.orderdb.Orderitems = this.selectedOrderItem;
  
  }

   





  getItems(): void{
     this.itemService.ServiceItems().subscribe(x => this.dataSource = x);
  }

  getCustName(): void{
     this.customerService.getCustomers().subscribe(x => this.customers = x);
  }

  open(content) : void{
    this.getItems();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }

  private getDismissReason(reason : any) : string{
    if(reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    } else if(reason === ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    }else{
      return `with : ${reason}`;
    }


  }

highlight(item:Item, id : number){
  this.selectedRowIndex = item.Id;
  let orderitem:OrderItem= new OrderItem();
  orderitem.Id=0;
  orderitem.ItemId=item.Id;
  orderitem.ItemPrice = item.ItemPrice;
  orderitem.ItemQuantity = item.ItemQuantity;

   orderitem.ItemTotal = orderitem.ItemPrice * orderitem.ItemQuantity;
  
  
  this.selectedOrderItem.push(orderitem);
 // this.selectedItem.push(item);

  this.selectedDataSource._updateChangeSubscription();
}


CountPrice(){
  for(let item of this.selectedOrderItem){
  this.totalQuantity +=  item.ItemQuantity;
  this.totalPrice += item.ItemPrice * item.ItemQuantity;
  }
}

}
