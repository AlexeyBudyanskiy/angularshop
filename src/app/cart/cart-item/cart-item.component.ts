import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: CartItem;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  removeFromCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void{
    this.addToCart.emit(this.cartItem.product);
  }

  onRemoveFromCart(): void{
    this.removeFromCart.emit(this.cartItem.product);
  }

}
