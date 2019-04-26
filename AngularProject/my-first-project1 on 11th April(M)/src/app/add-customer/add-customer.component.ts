import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CustomerService } from '../customer.service';
import { Customer } from '../Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer : Customer = new Customer();
  
  constructor(
     private loacation : Location,
     private CustomerService : CustomerService,
     private router: Router
  ) { 
    
  }

  ngOnInit() {
    
  }
  saveCustomer() : void{
    this.CustomerService.saveCustomers(this.customer).subscribe(x => console.log(x));
    window.alert("Well Done !!!");
    this.router.navigate(['/customer']);
  }

  GoBack() : void{
    this.loacation.back();
  }

  // saveCustomer() : void{
  //   this.CustomerService.saveCustomers(this.customer);
  //   window.alert("Well Done!!!");
  // }
}
