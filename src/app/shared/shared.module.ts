import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiglightDirective } from './higlight.directive';
import { TestComponent } from './components/test/test.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HiglightDirective, TestComponent, OrderByPipe],
  imports: [
    CommonModule
  ],
  providers: [    ],
  exports: [HiglightDirective, OrderByPipe]
})
export class SharedModule { }
