import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getItems(): CartItem[]  {
    const itemsJson = localStorage.getItem('cartList');

    if (itemsJson == null){
      return [];
    }

    var result = JSON.parse(itemsJson);
    if (result == null){
      return [];
    }

    return result;
  }

  public addItem(product: Product): void {
    const cartItemsInCart = this.getItems();
    let existingCartItem = cartItemsInCart.find(cartItem => cartItem.product.id === product.id);

    if (existingCartItem === null || existingCartItem === undefined){
      existingCartItem = {
        product,
        quantity: 1
      };
      cartItemsInCart.push(existingCartItem);
    }
    else{
      this.increaseQuantity(existingCartItem);
    }

    localStorage.setItem('cartList', JSON.stringify(cartItemsInCart));
  }

  public removeItem(product: Product): void {
    const cartItemsInCart = this.getItems();
    const existingCartItem = cartItemsInCart.find(cartItem => cartItem.product.id === product.id);
    if (existingCartItem.quantity > 1){
      this.decreaseQuantity(existingCartItem);
    }
    else{
      this.removeCartItem(cartItemsInCart, existingCartItem);
    }

    localStorage.setItem('cartList', JSON.stringify(cartItemsInCart));
  }

  public removeAllItems(): void{
    localStorage.setItem('cartList', null);
  }

  public getItemsCount(): number{
    return this.getItems().map(cartItem => cartItem.quantity).reduce((a: number, b: number): number => {
      return a + b;
    }, 0);
  }

  public getItemsSum(): number {
    return this.getItems().map(cartItem => cartItem.quantity * cartItem.product.price).reduce((a: number, b: number): number => {
      return a + b;
    });
  }

  public isEmpty(){
    return this.getItems.length === 0;
  }

  private removeCartItem(cartItemsInCart: CartItem[], existingCartItem: CartItem): void {
    const index = cartItemsInCart.indexOf(existingCartItem);

    if (index > -1) {
      cartItemsInCart.splice(index, 1);
    }
  }

  private increaseQuantity(cartItem: CartItem): void{
    cartItem.quantity += 1;
  }

  private decreaseQuantity(cartItem: CartItem): void{
    cartItem.quantity -= 1;
  }


}
