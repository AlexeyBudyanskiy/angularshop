import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CartService } from './shared/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: 'USD'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
