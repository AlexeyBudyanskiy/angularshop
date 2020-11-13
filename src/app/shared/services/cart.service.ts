import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../enums/category';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getItems(): Product[]  {
    let productsInCart = JSON.parse(localStorage.getItem('cartList'));

    if (productsInCart == null){
      productsInCart = [];
    }

    return productsInCart;
  }

  addItem(product: Product): void {
    const productsInCart = this.getItems();

    productsInCart.push(product);

    localStorage.setItem('cartList', JSON.stringify(productsInCart));
  }

  removeItem(product: Product): void {
    const productsInCart = this.getItems();
    const currentProduct = productsInCart.find(x => x.name === product.name);
    const index = productsInCart.indexOf(currentProduct);

    if (index > -1) {
      productsInCart.splice(index, 1);
   }

    localStorage.setItem('cartList', JSON.stringify(productsInCart));
  }

  getItemsCount(): number{
    return this.getItems().length;
  }

  getItemsSum(): number {
    return this.getItems().map(product => product.price).reduce((a: number, b: number): number => {
      return a + b;
    });
  }
}
