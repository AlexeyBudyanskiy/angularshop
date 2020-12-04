import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from '../app/cart/cart-list/cart-list.component';
import { TestComponent, NotFoundComponent, ForbiddenComponent } from './shared/components';
import { ProcessOrderComponent } from './orders/process-order/process-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'cart', component: CartListComponent },
  { path: 'order', component: ProcessOrderComponent },
  { path: 'test', component: TestComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
