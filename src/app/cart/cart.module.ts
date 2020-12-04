import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartListComponent, CartItemComponent } from './';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CartListComponent,
    CartItemComponent
  ]
})
export class CartModule { }
