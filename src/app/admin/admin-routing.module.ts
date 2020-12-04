import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, OrderListComponent, ProductFormComponent, OrderDetailsComponent } from './';
import { AuthGuard } from './../shared/guards';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'products', pathMatch: 'full' },
        { path: 'products', component: ProductListComponent },
        { path: 'orders', component: OrderListComponent },
        { path: 'orders/:id', component: OrderDetailsComponent },
        { path: 'products/add', component: ProductFormComponent },
        { path: 'products/edit/:id', component: ProductFormComponent },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
