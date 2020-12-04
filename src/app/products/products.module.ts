import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent, ProductComponent, ProductDetailComponent} from './';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
