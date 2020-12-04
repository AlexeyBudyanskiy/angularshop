import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { CartModule } from '../cart/cart.module';
import { ProductsModule } from '../products/products.module';

import { ProductListComponent, ProductFormComponent, OrderListComponent, OrderDetailsComponent, OrderItemComponent, AdminComponent } from './';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    OrderListComponent,
    OrderItemComponent,
    OrderDetailsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProductsModule,
    FormsModule,
    CartModule
  ]
})
export class AdminModule { }
