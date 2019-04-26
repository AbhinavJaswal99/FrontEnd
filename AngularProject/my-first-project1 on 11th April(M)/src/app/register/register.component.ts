import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Register } from '../RegisterModel';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
   register : Register = new Register();

  constructor(
    private loacation : Location,
    private customerService : CustomerService
  ) { }

  ngOnInit() {
  
  }

  NavToLogin() : void{
    this.loacation.back();
  }

  RegisterModel() : void{
    this.customerService.registerCustomer(this.register).subscribe();
    window.alert("Registration Done !!!");
  }

}
