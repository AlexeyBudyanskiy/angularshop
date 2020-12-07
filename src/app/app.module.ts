import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './products/products-routing.module';
import { AdminModule } from './admin/admin.module';
import { httpInterceptorProviders } from './shared/interceptors';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CartModule,
    OrdersModule,
    ProductsModule,
    SharedModule,
    ProductRoutingModule,

    // Last for correct routing.
    AppRoutingModule,
  ],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
