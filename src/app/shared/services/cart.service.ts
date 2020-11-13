import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getItems(): CartItem[]  {
    let cartItemsInCart = JSON.parse(localStorage.getItem('cartList1'));

    if (cartItemsInCart == null){
      cartItemsInCart = [];
    }

    return cartItemsInCart;
  }

  addItem(product: Product): void {
    const cartItemsInCart = this.getItems();
    let existingCartItem = cartItemsInCart.find(cartItem => cartItem.product.id === product.id);

    if (existingCartItem === null){
      existingCartItem = {
        product,
        quantity: 1
      };
      cartItemsInCart.push(existingCartItem);
    }
    else{
      existingCartItem.quantity += 1;
    }

    localStorage.setItem('cartList1', JSON.stringify(cartItemsInCart));
  }

  removeItem(product: Product): void {
    const cartItemsInCart = this.getItems();
    const existingCartItem = cartItemsInCart.find(cartItem => cartItem.product.id === product.id);
    if (existingCartItem.quantity > 1){
      existingCartItem.quantity -= 1;
    }
    else{
      const index = cartItemsInCart.indexOf(existingCartItem);

      if (index > -1) {
        cartItemsInCart.splice(index, 1);
     }
    }

    localStorage.setItem('cartList1', JSON.stringify(cartItemsInCart));
  }

  getItemsCount(): number{
    return this.getItems().map(cartItem => cartItem.quantity).reduce((a: number, b: number): number => {
      return a + b;
    }, 0);
  }

  getItemsSum(): number {
    return this.getItems().map(cartItem => cartItem.quantity * cartItem.product.price).reduce((a: number, b: number): number => {
      return a + b;
    });
  }
}
