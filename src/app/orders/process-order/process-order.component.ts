import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid, Order } from 'src/app/shared/models';
import { CartService } from 'src/app/shared/services';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  public order: Order;
  public orderSum: number;
  public itemsQuantity: number;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router) {
      this.order = {
        id: Guid.newGuid(),
        address: '',
        date: new Date(),
        customerName: '',
        cartItems: this.cartService.getItems()
      };
     }

  ngOnInit(): void {
    this.orderSum = this.cartService.getItemsSum();
    this.itemsQuantity = this.cartService.getItemsCount();
  }

  onCompleteOrder(): void{
    if (!this.order.customerName){
      alert(`Invalid customer name`);
      return;
    }

    if (!this.order.address){
      alert(`Invalid address`);
      return;
    }

    if (this.order.cartItems.length < 1){
      alert(`No product items.`);
      return;
    }

    this.order.date = new Date();
    this.orderService.addOrder(this.order);
    alert(`Oder completed for ${this.order.customerName}`);
    this.cartService.removeAllItems();
    this.router.navigate(['/products']);
  }

}
