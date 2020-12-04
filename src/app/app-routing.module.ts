import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from '../app/cart/cart-list/cart-list.component';
import { TestComponent, NotFoundComponent, ForbiddenComponent } from './shared/components';
import { ProcessOrderComponent } from './orders/process-order/process-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
    data: { title: 'About' }
   },
  {
    path: 'cart',
    component: CartListComponent,
    data: { title: 'Cart' }
  },
  {
    path: 'order',
    component: ProcessOrderComponent,
    data: { title: 'Process order' }
  },
  {
    path: 'test',
    component: TestComponent,
    data: { title: 'Test' }
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
    data: { title: 'Forbidden' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Admin' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Not Found' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
