import { Component, DoCheck, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/app/shared/models';
import { CartService } from '../../shared/services';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, DoCheck {

  public cartItems: CartItem[];

  constructor(private cartService: CartService) { }

  ngDoCheck(): void {
    this.cartItems = this.getItems();
  }

  ngOnInit(): void {
    this.cartItems = this.getItems();
  }

  getItems(): CartItem[] {
    return this.cartService.getItems();
  }

  onAddItem(product: Product): void {
    this.cartService.addItem(product);
  }

  onRemoveItem(product: Product): void {
    this.cartService.removeItem(product);
  }

  getItemsCount(): number {
    return this.cartService.getItemsCount();
  }

  getItemsSum(): number {
    return this.cartService.getItemsSum();
  }

  triggerPipe(): void{
    // Empty method to trigger pipe
  }

}
