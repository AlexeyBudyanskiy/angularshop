import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiglightDirective } from './higlight.directive';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [HiglightDirective, TestComponent],
  imports: [
    CommonModule
  ],
  providers: [    ],
  exports: [HiglightDirective]
})
export class SharedModule { }
