import { Orderdb } from './Orderdb';
import { Item } from './Item';
import { Customer } from './Customer';

export class OrderItem{
    Id : number;
    OrderId : number;
    ItemId : number;
    ItemQuantity : number;
    ItemPrice : number;
    ItemTotal : number;
    
    // item : Item[];
    // orderdb : Orderdb[]
}