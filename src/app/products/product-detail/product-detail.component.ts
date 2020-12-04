import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models';
import { CartService } from 'src/app/shared/services';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(id)
      .subscribe(retrievedProduct => this.product = retrievedProduct);
  }

  onAddToCart(): void{
    this.cartService.addItem(this.product);
  }

}
