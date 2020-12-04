import { Injectable } from '@angular/core';
import { Order } from '../shared/models';
import { CartService } from '../shared/services';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  public getOrders(): Order[] {
    const itemsJson = localStorage.getItem('orderList');

    if (itemsJson == null){
      return [];
    }

    const result = JSON.parse(itemsJson);
    if (result == null){
      return [];
    }

    return result;
  }

  public getOrder(orderId: string): Order {
    const allOrders = this.getOrders();
    const existingOrder = allOrders.find(order => order.id === orderId);

    return existingOrder;
  }

  public addOrder(order: Order): void{
    const allOrders = this.getOrders();

    allOrders.push(order);

    localStorage.setItem('orderList', JSON.stringify(allOrders));
  }


  public getItemsCount(order: Order): number{
    return order.cartItems.map(cartItem => cartItem.quantity).reduce((a: number, b: number): number => {
      return a + b;
    }, 0);
  }

  public getItemsSum(order: Order): number {
    return order.cartItems.map(cartItem => cartItem.quantity * cartItem.price).reduce((a: number, b: number): number => {
      return a + b;
    });
  }
}
