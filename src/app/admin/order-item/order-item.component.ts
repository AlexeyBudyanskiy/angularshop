import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/orders/order.service';
import { Order } from 'src/app/shared/models';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Input()
  order: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  getOrderSum(): number{
    return this.orderService.getItemsSum(this.order);
  }

  getOrderQuantity(): number{
    return this.orderService.getItemsCount(this.order);
  }

}
