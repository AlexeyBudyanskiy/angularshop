import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    id: null,
    name: '',
    description: '',
    category: null,
    imageUrl: '',
    isAvailable: false,
    price: 0,
    tags: [],
    updatedDate: null
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(id)
      .subscribe(retrievedProduct => {
        if (retrievedProduct) {
          this.product = retrievedProduct;
        }
      });
  }

  onSaveProduct(): void {
    const product = { ...this.product } as Product;

    const observer = {
      next: (savedUser: Product) => {
        this.router.navigate(['/admin/products']);
      },
      error: (err: any) => console.log(err)
    };

    if (product.id) {
      this.productService.updateProduct(product).subscribe(observer);
    } else {
      this.productService.createProduct(product).subscribe(observer);
    }
  }
}
