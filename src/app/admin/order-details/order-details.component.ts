import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/orders/order.service';
import { Order } from 'src/app/shared/models';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public order: Order;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.order = this.orderService.getOrder(id);
  }

  getOrderSum(): number{
    return this.orderService.getItemsSum(this.order);
  }

  getOrderQuantity(): number{
    return this.orderService.getItemsCount(this.order);
  }
}
