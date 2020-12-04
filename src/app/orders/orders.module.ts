import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../cart/cart.module';
import { ProcessOrderComponent } from './process-order/process-order.component';


@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    CartModule,
    FormsModule,
    RouterModule
  ],
  exports: [ProcessOrderComponent]
})
export class OrdersModule { }
