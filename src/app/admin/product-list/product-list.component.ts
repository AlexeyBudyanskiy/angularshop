import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { cwd } from 'process';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/products/product.service';
import { Product } from 'src/app/shared/models';
import { CartService } from 'src/app/shared/services';

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
  public products: Observable<Product[]>;

  ngAfterViewInit(): void {
    this.applicationTitle.nativeElement.innerText = 'Products page';
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addItem(product);
  }

  onDeleteProduct(product: Product): void {
    this.products = this.productService.deleteProduct(product);
  }
}
