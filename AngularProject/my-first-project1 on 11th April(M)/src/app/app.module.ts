import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { InMemoryDataService }  from './In-Memory-Data-Services';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatTableModule,MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSortModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderInformationComponent } from './order-information/order-information.component';



const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatSelectModule,
  MatTabsModule
];



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    LoginComponent,
    RegisterComponent,
    ItemComponent,
    AddItemComponent,
    UpdateItemComponent,
    AddOrderComponent,
    HomepageComponent,
    OrderInformationComponent
  ],
  imports: [
    NgbModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
     [...modules],
     HttpModule
    
  ],
  exports : [...modules] ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
   
  
})
export class AppModule { }
