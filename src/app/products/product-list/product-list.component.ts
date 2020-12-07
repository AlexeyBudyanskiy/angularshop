import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../shared/models';
import { CartService } from '../../shared/services';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  @ViewChild('appTitle') applicationTitle: ElementRef<HTMLHeadingElement>;
  public products: Observable<Product[]>;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addItem(product);
  }
}

