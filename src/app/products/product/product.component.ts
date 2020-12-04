import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  isAdmin: boolean;

  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(event: Event): void {
    this.addToCart.emit(this.product);
    event.stopPropagation();
  }

  onDelete(event: Event): void {
    this.deleteProduct.emit(this.product);
    event.stopPropagation();
  }

}

