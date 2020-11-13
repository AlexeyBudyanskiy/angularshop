import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, DoCheck {

  public products: Product[];

  constructor(private cartService: CartService) { }

  ngDoCheck(): void {
    this.products = this.getItems();
  }

  ngOnInit(): void {
    this.products = this.getItems();
  }

  getItems(): Product[] {
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

}
