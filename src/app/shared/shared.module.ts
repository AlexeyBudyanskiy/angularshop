import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HiglightDirective } from './higlight.directive';
import { TestComponent } from './components/test/test.component';
import { OrderByPipe } from './pipes';
import { NotFoundComponent, NavbarComponent, ForbiddenComponent } from './components';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HiglightDirective,
    TestComponent,
    OrderByPipe,
    NotFoundComponent,
    NavbarComponent,
    ForbiddenComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [
    HiglightDirective,
    OrderByPipe,
    NotFoundComponent,
    NavbarComponent,
    ForbiddenComponent
  ]
})
export class SharedModule { }
