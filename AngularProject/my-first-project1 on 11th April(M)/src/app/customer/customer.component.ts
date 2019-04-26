import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import {SelectionModel,  DataSource} from '@angular/cdk/collections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    // customers : Customer[] ;
  
     //apiURL = "http://localhost:51866/api/products";
  constructor(private CustomerService : CustomerService,
 
    private router: Router   
 ) { 
    //  this.customers=[];
  }

  // datasource = Customers;'
  displayedColumns: string[] = ['CustomerId', 'Name', 'Email', 'Phone', 'Address','AlternateNumber','Actions'];
  // datasource = new MatTableDataSource<Customer>(Customers);
  datasource;
  selection = new SelectionModel<Customer>(true, []);
  //  @ViewChild(MatPaginator, {}) paginator : MatPaginator;
  //  @ViewChild(MatSort, {}) sort : MatSort;
   


  

  ngOnInit() {
   
     this.getCust();
    //  this.datasource.paginator = this.paginator;
    //  this.datasource.sort = this.sort;
  }
 
  
 
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  getCust(): void{
     this.CustomerService.getCustomers().subscribe(cust => this.datasource = cust);
  }
 

  deleteCustomer(id : number) : void {
    var result = window.confirm("Do you want to delete ? ");
    if(result){
   
      this.CustomerService.delCustomer(id).subscribe(x => console.log(x));
      window.alert("Delete it !!!!")
      location.reload();
    }
    else{
      return null;
    }
  }

   navi = '/update';
  Navigation(id : number):void{
       this.CustomerService.getCustomer(id).subscribe();
    this.router.navigate([`${this.navi}/${id}`]);
  }
}



