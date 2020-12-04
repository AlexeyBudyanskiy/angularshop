import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HiglightDirective } from './higlight.directive';
import { TestComponent } from './components/test/test.component';
import { OrderByPipe } from './pipes';
import { NotFoundComponent, NavbarComponent, ForbiddenComponent } from './components';


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
