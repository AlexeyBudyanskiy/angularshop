import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem, Product } from 'src/app/shared/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  displayButtons = true;
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
    this.addToCart.emit(this.cartItem);
  }

  onRemoveFromCart(): void{
    this.removeFromCart.emit(this.cartItem);
  }

}
