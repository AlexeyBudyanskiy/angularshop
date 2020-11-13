import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../product.service';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {


  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  @ViewChild('appTitle') applicationTitle: ElementRef<HTMLHeadingElement>;
  public products: Product[];

  ngAfte;

  ngAfterViewInit(): void {
    this.applicationTitle.nativeElement.innerText = 'Products page';
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addItem(product);
  }

  getItemsCount(): number{
    return this.cartService.getItemsCount();
  }
}

