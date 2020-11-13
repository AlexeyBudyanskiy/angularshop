import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(product): void {
    this.addToCart.emit(this.product);
  }

}

