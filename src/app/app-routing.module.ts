import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/products/product-list/product-list.component';
import { CartListComponent } from '../app/cart/cart-list/cart-list.component';

const routes: Routes = [
  // может лучше редирект сделать, чтобы ны было что на два разных паса, один компонент
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
