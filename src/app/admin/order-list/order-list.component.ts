import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/orders/order.service';
import { Order } from 'src/app/shared/models';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
